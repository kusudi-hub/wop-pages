"""Turn the live page (wop-live.html) into discover.js: the page builds itself inside an isolated
container on worldofpurpose.com, with no frame, and shows a saved copy of the numbers right away."""
import re, sys, json, os

SRC = sys.argv[1] if len(sys.argv) > 1 else "wop-live.html"
OUT = sys.argv[2] if len(sys.argv) > 2 else "dist"
os.makedirs(OUT, exist_ok=True)
s = open(SRC).read()

i = s.rfind("<script>")
app = s[i + len("<script>"):s.rfind("</script>")]
markup = s[:i]

fonts = re.search(r'<link rel="stylesheet" href="(https://fonts\.googleapis\.com/[^"]+)">', markup).group(1)
markup = re.sub(r"<title>.*?</title>\s*|<meta [^>]*>\s*|<link [^>]*>\s*", "", markup)

def css_fix(t):
    t = re.sub(r"(?<![\w.$-]):root(?=\{)", ":host", t)
    t = re.sub(r"(?<![\w.$-])html\{scroll-behavior:smooth\}", "", t)
    t = re.sub(r"(?<![\w.$-])body(?=\{|::before)", ".wop-body", t)
    return t

markup = css_fix(markup)
markup = '<div class="wop-body">' + markup + "</div>"
app = css_fix(app)

def rep(a, b, n=1):
    global app
    c = app.count(a)
    assert c == n, (a, c)
    app = app.replace(a, b)

rep('s.onerror = bad; document.head.appendChild(s);', 's.onerror = bad; document.head.appendChild(s);'.replace("document.head", "DOCHEAD"))
app = app.replace("document.querySelectorAll(", "ROOT.querySelectorAll(")
app = app.replace("document.querySelector(", "ROOT.querySelector(")
app = app.replace("document.head.appendChild(", "ROOT.appendChild(")
app = app.replace("DOCHEAD", "document.head")
app = app.replace("document.addEventListener(", "ROOT.addEventListener(")
rep('document.documentElement.style.setProperty("--fold"', 'HOST.style.setProperty("--fold"')

# start from the saved copy of the declarations so nothing waits on Google
rep("rows.forEach((r, i) => r.k = i);\n\nfunction ago",
    "rows.forEach((r, i) => r.k = i);\n"
    "if (SNAP && Array.isArray(SNAP.declarations)){ rows = SNAP.declarations; rows.forEach((r, i) => r.k = i); }\n\nfunction ago")
rep("async function loadLive(){", "async function loadLive(src){")
rep("if (sig === loadLive.sig) return; loadLive.sig = sig;",
    "if (sig === loadLive.sig) return; loadLive.sig = sig;\n    if (!src) try { localStorage.setItem(\"wopSnap\", JSON.stringify({declarations: j.declarations})); } catch(e){}")
rep('const j = await (await fetch(DATA_URL, {cache:"no-store"})).json();',
    'const j = src && src.declarations ? src : await (await fetch(DATA_URL, {cache:"no-store"})).json();')
rep("loadLive(); setInterval(loadLive, 30000);",
    "if (SNAP && Array.isArray(SNAP.declarations)){ const d = SNAP.declarations; loadLive.sig = d.length + \"|\" + d.map(r => r.at).sort().pop(); }\n"
    "if (SNAP) setTimeout(loadLive, 800); else loadLive(); setInterval(loadLive, 30000);\n"
    "// links inside the page, like See where, scroll to their section\n"
    "ROOT.addEventListener(\"click\", ev => {\n"
    "  const a = ev.target.closest('a[href^=\"#\"]'); if (!a || ev.defaultPrevented) return;\n"
    "  const id = a.getAttribute(\"href\").slice(1); const t = id && ROOT.getElementById(id); if (!t) return;\n"
    "  ev.preventDefault(); t.scrollIntoView({behavior: STILL ? \"auto\" : \"smooth\", block: \"start\"});\n"
    "});\n"
    "if (location.hash.length > 1){ const t = ROOT.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView({block: \"start\"}), 300); }")

assert "document.querySelector" not in app

ver = str(int(os.environ.get("WOP_VER", "1")))
wrapper = r"""/* World of Purpose · Discover My Purpose page. Built from the live page; it renders inside #wop-root. */
(function(){
  if (window.__wopMounted) return; window.__wopMounted = true;
  var me = document.currentScript, BASE = me && me.src ? me.src.replace(/[^\/]*$/, "") : "https://kusudi-hub.github.io/wop-pages/";
  var FONTS = __FONTS__;
  function addLink(rel, href, cross){ var l = document.createElement("link"); l.rel = rel; l.href = href; if (cross) l.crossOrigin = ""; document.head.appendChild(l); }
  if (!document.querySelector('link[href="' + FONTS + '"]')){ addLink("preconnect", "https://fonts.gstatic.com", true); addLink("stylesheet", FONTS); }
  var snap = fetch(BASE + "data.json", {cache: "no-cache"}).then(function(r){ return r.ok ? r.json() : null; }).catch(function(){ return null; });
  var wait = new Promise(function(r){ setTimeout(function(){ r(null); }, 2500); });
  var ready = new Promise(function(r){ if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", r); else r(); });
  function saved(){ try { return JSON.parse(localStorage.getItem("wopSnap")); } catch(e){ return null; } }
  function last(d){ return d && Array.isArray(d.declarations) && d.declarations.length ? d.declarations.map(function(r){ return r.at || ""; }).sort().pop() : ""; }
  Promise.all([Promise.race([snap, wait]), ready]).then(function(v){
    var a = v[0], b = saved(); v[0] = last(b) > last(a) ? b : (last(a) ? a : null);
    var HOST = document.getElementById("wop-root");
    if (!HOST){ HOST = document.createElement("div"); HOST.id = "wop-root"; (me && me.parentNode ? me.parentNode : document.body).appendChild(HOST); }
    var ROOT = HOST.attachShadow({mode: "open"});
    ROOT.innerHTML = __MARKUP__;
    // if the site builder redraws its section, put the page back where it belongs
    new MutationObserver(function(){ if (!HOST.isConnected){ var n = document.getElementById("wop-root"); if (n && n !== HOST) n.replaceWith(HOST); } }).observe(document.body, {childList: true, subtree: true});
    run(ROOT, HOST, v[0]);
  });
  function run(ROOT, HOST, SNAP){
__APP__
  }
})();
"""
js = wrapper.replace("__FONTS__", json.dumps(fonts)).replace("__MARKUP__", json.dumps(markup, ensure_ascii=False)).replace("__APP__", app)
open(os.path.join(OUT, "discover.js"), "w").write(js)
print("discover.js", len(js), "chars")

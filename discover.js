/* World of Purpose · Discover My Purpose page. Built from the live page; it renders inside #wop-root. */
(function(){
  if (window.__wopMounted) return; window.__wopMounted = true;
  try { document.documentElement.style.background = "#FFFFFF"; if (document.body) document.body.style.background = "#FFFFFF"; else document.addEventListener("DOMContentLoaded", function(){ document.body.style.background = "#FFFFFF"; }); } catch(e){}
  var me = document.currentScript, BASE = me && me.src ? me.src.replace(/[^\/]*$/, "") : "https://kusudi-hub.github.io/wop-pages/";
  var FONTS = "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Noto+Color+Emoji&display=swap";
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
    ROOT.innerHTML = "<div class=\"wop-body\"><style>\n/* Layout: a VSL first screen (the free training, centred), then the movement as proof: map, the purpose wall, the numbers, then the declaration. Forest carries the movement, beige and paper carry the reading. */\n:host{\n  --forest:#2E3F32; --pine:#1C2A20; --night:#16221A; --moss:#5C7160; --sage:#9DB39C;\n  --beige:#EEE3D7; --paper:#F7F5F1; --bg:#FFFFFF; --card:#F5F7F4; --stone:#D3CFC8;\n  --display:\"Alfa Slab One\",\"Rockwell\",\"Roboto Slab\",Georgia,serif;\n  --serif:\"Source Serif 4\",\"Source Serif Pro\",Georgia,\"Times New Roman\",serif;\n  --sans:\"DM Sans\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  --flag:\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Noto Color Emoji\",sans-serif;\n  --gutter-l:max(16px, env(safe-area-inset-left, 0px));\n  --gutter-r:max(16px, env(safe-area-inset-right, 0px));\n  --wrap:1160px;\n  color-scheme:light;\n}\n*{box-sizing:border-box}\n\n.wop-body{background:var(--forest);color:var(--beige);font-family:var(--serif);font-size:18px;line-height:1.6;margin:0;-webkit-font-smoothing:antialiased}\n.wop-body::before{content:\"\";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:10;background:var(--pine)}\na{color:inherit}\n.band{padding-left:var(--gutter-l);padding-right:var(--gutter-r)}\n.wrap{max-width:var(--wrap);margin:0 auto}\n.eyebrow{font-family:var(--sans);font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;margin:0}\nh1,h2,h3{font-family:var(--display);font-weight:400;line-height:1.04;margin:0;text-wrap:balance;letter-spacing:.005em}\np{margin:0}\n.num{font-variant-numeric:tabular-nums}\n.flag{font-family:var(--flag);font-style:normal;line-height:1}\nbutton,input,textarea{font:inherit}\n:focus-visible{outline:3px solid var(--sage);outline-offset:3px;border-radius:6px}\n.fx{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease;transition-delay:var(--d,0s)}\n.fx.in{opacity:1;transform:none}\nmain section[id],#video{scroll-margin-top:72px}\n@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto}*{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important}}\n\n/* Top bar with the small live counter */\n.topbar{position:sticky;top:env(safe-area-inset-top,0px);z-index:9;background:rgba(28,42,32,.97);border-bottom:1px solid rgba(157,179,156,.18)}\n.topbar .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:54px}\n.brand{display:flex;align-items:center;text-decoration:none}\n.brand svg{height:22px;width:auto;display:block}\n.brand .icon{display:none}\n.live{display:flex;align-items:center;gap:10px;font-family:var(--sans);font-size:14px;white-space:nowrap}\n.live b{font-family:var(--display);font-weight:400;font-size:19px;color:var(--paper)}\n.pulse{width:8px;height:8px;border-radius:50%;background:var(--sage);animation:pulse 2.4s infinite}\n@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(157,179,156,.6)}70%{box-shadow:0 0 0 10px rgba(157,179,156,0)}100%{box-shadow:0 0 0 0 rgba(157,179,156,0)}}\n@media (max-width:480px){.brand .full{display:none}.brand .icon{display:block}.brand .icon svg{height:30px}.live{gap:8px;font-size:13px}.live .lbl{display:none}}\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border:0;cursor:pointer;text-decoration:none;font-family:var(--sans);font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:14px;border-radius:999px;padding:17px 30px;transition:transform .15s ease, background .15s ease, box-shadow .15s ease}\n.btn:hover{transform:translateY(-1px)}\n.btn-light{background:var(--card);color:var(--pine)}\n.btn-light:hover{background:var(--bg);box-shadow:0 10px 30px rgba(0,0,0,.25)}\n.btn-forest{background:var(--forest);color:var(--paper)}\n.btn-forest:hover{background:var(--pine)}\n.btn-ghost{background:none;color:var(--paper);box-shadow:inset 0 0 0 2px rgba(247,245,241,.45)}\n.btn-ghost:hover{box-shadow:inset 0 0 0 2px var(--paper)}\n.btn-small{padding:10px 18px;font-size:12px}\n.btn svg{width:18px;height:18px}\n\n/* Hero: the training first */\n.hero{position:relative;overflow:hidden;padding-block:56px 64px;text-align:center}\ncanvas.pattern{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}\n.hero .wrap{position:relative;display:grid;justify-items:center;gap:20px}\n.hero .eyebrow{color:var(--sage)}\n.hero h1{font-size:clamp(40px,6.6vw,84px);color:var(--paper);max-width:14ch}\n.hero .lede{font-size:clamp(18px,2vw,22px);max-width:40ch;color:var(--beige)}\n.player{position:relative;width:min(960px,100%);aspect-ratio:16/9;max-width:100%;margin-top:14px;border-radius:20px;overflow:hidden;background:radial-gradient(130% 120% at 12% 95%, #4E6553 0%, var(--pine) 62%);box-shadow:0 30px 80px rgba(0,0,0,.35), 0 0 0 1px rgba(157,179,156,.22);cursor:pointer;display:grid;place-items:center}\n.player .poster{position:absolute;top:0;right:0;bottom:0;height:100%;width:56%;object-fit:cover;object-position:50% 12%;opacity:.9;filter:saturate(.85);mask-image:linear-gradient(90deg,transparent,#000 38%);-webkit-mask-image:linear-gradient(90deg,transparent,#000 38%)}\n.player::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(22,34,26,.85));z-index:0}\n.player .play{margin-right:34%}\n@media (max-width:640px){.player .play{margin-right:40%}}\n.player .play,.player .cap,.player .note{z-index:1}\n.player .play{position:relative;width:clamp(72px,9vw,104px);height:clamp(72px,9vw,104px);border-radius:50%;background:var(--card);color:var(--forest);display:grid;place-items:center;box-shadow:0 0 0 0 rgba(247,245,241,.5);animation:ring 2.6s infinite}\n@keyframes ring{0%{box-shadow:0 0 0 0 rgba(247,245,241,.45)}75%{box-shadow:0 0 0 26px rgba(247,245,241,0)}100%{box-shadow:0 0 0 0 rgba(247,245,241,0)}}\n.player .play svg{width:38%;height:38%;margin-left:6%}\n.player .cap{position:absolute;left:22px;right:22px;bottom:18px;display:flex;justify-content:space-between;gap:12px;font-family:var(--sans);font-size:14px;color:var(--beige);text-align:left;flex-wrap:wrap}\n.player .cap b{font-family:var(--display);font-weight:400;font-size:clamp(16px,2vw,22px);color:var(--paper)}\n.player .note{position:absolute;top:16px;left:50%;transform:translateX(-50%);background:var(--card);color:var(--pine);font-family:var(--sans);font-size:13px;padding:8px 14px;border-radius:999px;white-space:nowrap}\n.hero .actions{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:10px}\n.hero .proofline{margin-top:8px;font-family:var(--sans);font-size:15px;color:var(--sage)}\n.hero .proofline b{font-family:var(--display);font-weight:400;font-size:20px;color:var(--paper)}\n.hero .proofline a{color:var(--beige)}\n\n/* Feed */\n.feed{background:var(--pine);border-block:1px solid rgba(157,179,156,.18);overflow:hidden}\n.feed{mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}\n.feed .track{display:flex;gap:40px;padding-block:14px;width:max-content;animation:scroll 140s linear infinite;font-family:var(--sans);font-size:14px;color:var(--beige)}\n.feed:hover .track,.feed.paused .track{animation-play-state:paused}\n.feed .track,.row{will-change:transform}\n.feed .item{display:flex;gap:8px;align-items:center;white-space:nowrap}\n.feed .item b{color:var(--paper)}\n.feed .item em{font-style:italic;font-family:var(--serif);font-size:15px;color:var(--sage)}\n@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n\n/* Map */\n.mapband{background:var(--pine);padding-block:80px}\n.sechead{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:20px 40px;margin-bottom:32px}\n.sechead h2{font-size:clamp(34px,5vw,62px);color:var(--paper);margin-top:12px}\n.sechead p{max-width:44ch;font-size:17px}\n.mapgrid{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:20px;align-items:stretch}\n@media (max-width:960px){.mapgrid{grid-template-columns:1fr}}\n.mapbox{position:relative;border-radius:18px;background:var(--night);border:1px solid rgba(157,179,156,.16);overflow:hidden;min-height:240px}\n.mapbox canvas{display:block;width:100%;touch-action:pan-y;cursor:grab;-webkit-tap-highlight-color:transparent}\n.mapbox canvas.dragging{cursor:grabbing}\n.mapctl{position:absolute;top:12px;right:12px;display:flex;flex-direction:column;gap:6px;z-index:3}\n.mapctl button{min-width:40px;height:40px;border-radius:10px;border:1px solid rgba(157,179,156,.32);background:rgba(28,42,32,.94);color:var(--paper);font-family:var(--sans);font-size:20px;font-weight:700;line-height:1;cursor:pointer;padding:0 10px}\n.mapctl button.txt{font-size:11px;letter-spacing:.1em;text-transform:uppercase}\n.mapctl button:hover{background:var(--forest)}\n@media (max-width:600px){.mapctl{flex-direction:row;top:8px;right:8px;gap:4px}.mapctl button{min-width:32px;height:32px;font-size:17px;border-radius:8px;padding:0 8px}.mapctl button.txt{font-size:10px}}\n.maphint{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);background:rgba(22,34,26,.92);color:var(--paper);font-family:var(--sans);font-size:13px;padding:9px 16px;border-radius:999px;pointer-events:none;opacity:0;transition:opacity .3s;z-index:4;white-space:nowrap}\n.maphint.on{opacity:1}\n.maploading{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--sans);font-size:13px;color:var(--sage)}\n.mapbox.ready .maploading{display:none}\n.mapnote{margin-top:12px;font-family:var(--sans);font-size:13px;color:var(--sage)}\n.tip{position:absolute;pointer-events:none;background:var(--card);color:var(--pine);font-family:var(--sans);font-size:13px;padding:6px 10px;border-radius:8px;transform:translate(-50%,-135%);white-space:nowrap;box-shadow:0 6px 20px rgba(0,0,0,.25);z-index:3}\n.spot{position:absolute;z-index:2;width:250px;max-width:60%;background:rgba(247,245,241,.96);color:var(--pine);border-radius:12px;padding:10px 12px;font-family:var(--sans);font-size:12px;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:opacity .5s ease, transform .5s ease;cursor:pointer}\n.spot .more{font-family:var(--sans);font-size:11px;color:var(--moss);margin-top:4px;display:block}\n.spot b{font-size:13px}\n.spot p{font-family:var(--serif);font-style:italic;font-size:14px;line-height:1.35;margin-top:3px;color:var(--forest)}\n.spot.off{opacity:0;transform:translateY(6px);pointer-events:none}\n@media (max-width:640px){.spot{display:none}}\n.panel{background:var(--forest);border:1px solid rgba(157,179,156,.18);border-radius:18px;padding:22px;display:flex;flex-direction:column;gap:14px;min-width:0;max-height:640px}\n.panel .eyebrow{color:var(--sage)}\n.panel h3{font-size:28px;color:var(--paper)}\n.panel .sub{font-family:var(--sans);font-size:14px;color:var(--sage)}\n.panel .sub b{font-family:var(--display);font-weight:400;font-size:20px;color:var(--paper)}\n.panel .list{overflow:auto;display:grid;gap:10px;padding-right:4px;min-height:0;align-content:start}\n.decl{background:rgba(247,245,241,.06);border-radius:12px;padding:12px 14px}\n.decl .who{font-family:var(--sans);font-size:13px;font-weight:700;color:var(--paper);display:flex;justify-content:space-between;gap:8px}\n.decl .who span{font-weight:400;color:var(--sage)}\n.decl p{font-style:italic;color:var(--beige);font-size:16px;line-height:1.45;margin-top:4px}\n.decl.quiet{font-family:var(--sans);font-size:14px;color:var(--sage);background:none;padding:0}\n.place{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:9px 10px;border-radius:10px;cursor:pointer;background:none;border:0;color:var(--beige);text-align:left;font-family:var(--sans);font-size:15px;width:100%}\n.place:hover{background:rgba(247,245,241,.08)}\n.place span{display:flex;gap:10px;align-items:center;min-width:0}\n.place b{font-family:var(--display);font-weight:400;font-size:17px;color:var(--paper)}\n.back{align-self:flex-start;background:none;border:0;color:var(--sage);font-family:var(--sans);font-size:13px;cursor:pointer;padding:0;text-decoration:underline;text-underline-offset:3px}\n\n/* Purpose wall */\n.wall{background:var(--night);padding-block:84px 72px;overflow:hidden;position:relative}\n.wall .sechead p{color:var(--beige)}\n.wallbar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:26px}\n.wallbar input{flex:1 1 240px;min-width:0;background:rgba(247,245,241,.08);border:1px solid rgba(157,179,156,.28);color:var(--paper);border-radius:999px;padding:12px 18px;font-family:var(--sans);font-size:15px}\n.wallbar input::placeholder{color:var(--sage)}\n.chip{display:inline-flex;gap:8px;align-items:center;border:1px solid rgba(157,179,156,.3);background:none;color:var(--beige);border-radius:999px;padding:9px 14px;font-family:var(--sans);font-size:13px;cursor:pointer;white-space:nowrap}\n.chip[aria-pressed=\"true\"]{background:var(--card);color:var(--pine);border-color:var(--paper)}\n.chip small{opacity:.7}\n.rows{display:grid;gap:16px;padding-left:var(--gutter-l);mask-image:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent)}\n.row{display:flex;gap:16px;width:max-content;animation:wall var(--dur,120s) linear infinite}\n.row.rev{animation-direction:reverse}\n.rows:hover .row,.rows.paused .row{animation-play-state:paused}\n@keyframes wall{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n.card{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:14px;border-radius:6px;padding:18px 20px;min-height:168px;transition:transform .25s ease}\n.card:hover{transform:translateY(-4px) rotate(-.4deg)}\n.card .mpi{font-family:var(--sans);font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;opacity:.7}\n.card q{quotes:none;font-family:var(--serif);font-style:italic;line-height:1.35;display:block}\n.card .by{display:flex;align-items:center;gap:8px;font-family:var(--sans);font-size:13px}\n.card .by b{font-weight:700}\n.card .by .flag{font-size:18px}\n.card.s{width:250px}.card.s q{font-size:25px}\n.card.m{width:310px}.card.m q{font-size:19px}\n.card.l{width:380px}.card.l q{font-size:16.5px}\n.card.t1{background:var(--card);color:var(--pine)}\n.card.t1 .by{color:var(--moss)}\n.card.t2{background:#3F5644;color:var(--paper)}\n.card.t2 .by{color:var(--sage)}\n.card.t3{background:var(--bg);color:var(--forest)}\n.card.t3 .by{color:var(--moss)}\n.card.t4{background:var(--forest);color:var(--paper);box-shadow:inset 0 0 0 1px rgba(157,179,156,.35)}\n.card.t4 .by{color:var(--sage)}\n.card.me{box-shadow:0 0 0 4px var(--sage), 0 0 40px rgba(157,179,156,.6)}\n.grid-wall{columns:300px;column-gap:16px}\n.grid-wall .card{width:auto;break-inside:avoid;margin-bottom:16px;min-height:0}\n.wallcount{font-family:var(--sans);font-size:14px;color:var(--sage)}\n.wallcount b{color:var(--paper)}\n.wallnote{margin-top:24px;font-family:var(--sans);font-size:13px;color:var(--moss)}\n.wallmore{margin-top:22px;display:flex;justify-content:center}\n\n/* Stats above the map */\n.stats{display:grid;grid-template-columns:minmax(0,2.1fr) minmax(0,.72fr) minmax(0,.72fr) minmax(0,.72fr) minmax(0,1.35fr);gap:14px;margin-bottom:20px}\n@media (max-width:1000px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.stat.main{grid-column:1 / -1}}\n@media (max-width:520px){.stats{gap:10px}.stat.newest{grid-column:1 / -1}.stat{padding:18px}.stat .v{font-size:44px}}\n.stat{background:var(--forest);border:1px solid rgba(157,179,156,.18);border-radius:18px;padding:22px;display:grid;gap:6px;align-content:start;min-width:0}\n.stat .l{font-family:var(--sans);font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--sage)}\n.stat .v{font-family:var(--display);font-size:clamp(44px,5vw,64px);line-height:1;color:var(--paper)}\n.stat .d{font-family:var(--sans);font-size:14px;color:var(--beige)}\n.stat.main{background:linear-gradient(135deg,#3B5241,var(--forest));}\n.mainrow{display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap}\n.stat .v.big{font-size:clamp(72px,9vw,120px);line-height:.85}\n.mainrow .of{font-family:var(--sans);font-size:15px;color:var(--beige);line-height:1.35;padding-bottom:6px}\n.mainrow .of b{font-family:var(--display);font-weight:400;font-size:24px;color:var(--paper)}\n.meter{display:grid;gap:8px;margin-top:10px}\n.meter .bar{position:relative;height:12px;border-radius:999px;background:rgba(247,245,241,.12);overflow:hidden}\n.meter .bar span{position:absolute;inset:0 auto 0 0;width:var(--w,0%);background:linear-gradient(90deg,var(--sage),var(--paper));border-radius:999px;transition:width 2s cubic-bezier(.2,.8,.2,1)}\n.meter .bar span::after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);transform:translateX(-100%);animation:shine 3s 2s infinite}\n@keyframes shine{to{transform:translateX(100%)}}\n.meter .row2{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-family:var(--sans);font-size:13px;color:var(--sage)}\n.meter .row2 b{font-family:var(--display);font-weight:400;font-size:18px;color:var(--paper)}\n.stat.newest .v{font-size:clamp(24px,2.4vw,30px);line-height:1.1}\n.stat.newest q{quotes:none;font-style:italic;font-size:15px;line-height:1.4;color:var(--beige);display:block}\n\n/* Discoveries */\n.clips{background:var(--forest);padding-block:84px}\n.cliprow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}\n@media (max-width:900px){.cliprow{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (max-width:560px){.cliprow{grid-template-columns:1fr}}\n.clip{margin:0;background:var(--pine);border-radius:18px;overflow:hidden;border:1px solid rgba(157,179,156,.16);display:flex;flex-direction:column}\n.clip .frame{position:relative;aspect-ratio:16/10;background:radial-gradient(120% 120% at 20% 100%, #4E6553 0%, var(--pine) 70%);display:grid;place-items:center;cursor:pointer}\n.clip .frame .play{width:58px;height:58px;border-radius:50%;background:var(--card);color:var(--forest);display:grid;place-items:center;transition:transform .2s ease}\n.clip:hover .frame .play{transform:scale(1.08)}\n.clip .frame .play svg{width:40%;height:40%;margin-left:6%}\n.clip .frame .who{position:absolute;left:16px;bottom:12px;font-family:var(--display);font-size:20px;color:var(--paper)}\n.clip .frame .cposter{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.clip .frame::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(22,34,26,.78))}\n.clip .frame .play,.clip .frame .who{z-index:1}\n.clip figcaption{padding:16px 18px 20px;font-style:italic;font-size:17px;line-height:1.45;color:var(--beige)}\n.clip figcaption span{display:block;font-style:normal;font-family:var(--sans);font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--sage);margin-bottom:6px}\n\n.vnote{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--card);color:var(--pine);font-family:var(--sans);font-size:12px;padding:6px 12px;border-radius:999px;white-space:nowrap}\n\n/* Story */\n.story{position:relative;background:var(--pine);padding-block:96px;overflow:clip}\n.storyhead h2{font-size:clamp(36px,5.4vw,68px);color:var(--paper);margin-top:12px;max-width:16ch}\n.storygrid{position:relative;margin-top:48px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px;align-items:start}\n@media (max-width:900px){.storygrid{grid-template-columns:1fr;gap:40px}}\n.tell{display:grid;gap:18px;font-size:clamp(18px,1.9vw,21px);line-height:1.6;color:var(--beige)}\n.tell .say{color:var(--sage)}\n.tell .q,.tell .hit{font-family:var(--display);font-size:clamp(24px,2.8vw,32px);line-height:1.2;color:var(--paper)}\n.math{margin:0;background:rgba(247,245,241,.05);border:1px solid rgba(157,179,156,.22);border-radius:22px;padding:clamp(22px,3vw,34px);display:grid;gap:12px}\n.math .mhead{font-family:var(--sans);font-weight:700;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--sage)}\n.mrow{display:grid;gap:8px}\n.mrow .top{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-family:var(--sans);font-size:14px;color:var(--beige)}\n.mrow .top b{font-family:var(--display);font-weight:400;font-size:clamp(26px,3vw,36px);line-height:1;color:var(--paper);white-space:nowrap}\n.mrow .top b small{font-size:.5em;color:var(--sage);margin-left:4px}\n.mbar{height:16px;border-radius:999px;background:rgba(247,245,241,.08);overflow:hidden}\n.mbar i{display:block;height:100%;width:var(--w);border-radius:999px;background:var(--moss)}\n.mrow.mid .mbar i{background:var(--sage)}\n.mrow.last .mbar i{background:var(--card)}\n.mop{justify-self:start;font-family:var(--sans);font-size:13px;line-height:1.3;font-weight:700;color:var(--pine);background:var(--sage);border-radius:10px;padding:5px 12px}\n.mfinal{margin-top:10px;border-top:1px solid rgba(157,179,156,.25);padding-top:20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap}\n.mfinal .five{font-family:var(--display);font-size:clamp(64px,8vw,104px);line-height:.9;color:var(--paper)}\n.mfinal p{font-family:var(--sans);font-size:15px;line-height:1.45;color:var(--beige);max-width:26ch}\n.mfinal p b{display:block;font-family:var(--display);font-weight:400;font-size:24px;color:var(--paper);margin-bottom:2px}\n\n/* About */\n.about{background:var(--card);color:var(--pine);padding-block:96px}\n.aboutgrid{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:56px;align-items:center}\n@media (max-width:900px){.aboutgrid{grid-template-columns:1fr;gap:36px}}\n.photos{position:relative;padding-bottom:18%}\n.photos img{display:block;max-width:100%;border-radius:20px;object-fit:cover}\n.photos .portrait{width:78%;aspect-ratio:4/5;box-shadow:0 30px 60px rgba(28,42,32,.25)}\n.photos .wide{position:absolute;right:0;bottom:0;width:58%;aspect-ratio:3/2;border:6px solid var(--paper);box-shadow:0 20px 50px rgba(28,42,32,.25)}\n.aboutcopy{display:grid;gap:16px;max-width:52ch}\n.aboutcopy h2{font-size:clamp(32px,4.2vw,52px);color:var(--forest);margin-top:8px}\n.stagevid{position:relative;margin-top:10px;aspect-ratio:16/9;max-width:100%;border-radius:16px;background:radial-gradient(130% 120% at 15% 95%, #4E6553 0%, var(--pine) 65%);display:grid;place-items:center;cursor:pointer}\n.stagevid .play{width:64px;height:64px;border-radius:50%;background:var(--card);color:var(--forest);display:grid;place-items:center}\n.stagevid .play svg{width:40%;height:40%;margin-left:6%}\n.stagevid .svlabel{position:absolute;left:18px;bottom:14px;font-family:var(--sans);font-size:14px;color:var(--beige)}\n.stagevid .svlabel b{font-family:var(--display);font-weight:400;font-size:18px;color:var(--paper);margin-right:8px}\n\n/* Declaration card under the counter */\n.declcard{background:var(--card);color:var(--pine);border-radius:22px;padding:clamp(20px,3vw,32px);margin-bottom:20px;display:grid;gap:20px;scroll-margin-top:90px;box-shadow:0 20px 60px rgba(0,0,0,.25)}\n.declhead{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:10px 30px}\n.declhead h3{font-size:clamp(26px,3.2vw,38px);color:var(--forest);margin-top:6px}\n.declhead p{font-family:var(--sans);font-size:15px;color:var(--moss)}\n.declform{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;align-items:start}\n@media (max-width:860px){.declform{grid-template-columns:1fr}}\n.declform .mpi-in textarea{min-height:170px}\n.side2{display:grid;gap:16px}\n.declform .fields{grid-template-columns:repeat(2,minmax(0,1fr))}\n.declform .choices{grid-template-columns:repeat(2,minmax(0,1fr))}\n@media (max-width:560px){.declform .fields,.declform .choices{grid-template-columns:1fr}}\n.declform .choices legend{grid-column:1 / -1}\n.declform .choice{padding:12px;font-size:14px}\n.hint a{color:var(--forest)}\n.declcard .done{background:none;padding:0;grid-template-columns:minmax(0,320px) minmax(0,1fr);align-items:center;gap:28px}\n@media (max-width:700px){.declcard .done{grid-template-columns:1fr}}\n.declcard .done .sharecard{grid-column:1;grid-row:1 / span 6;width:100%}\n.declcard .done > :not(.sharecard){grid-column:2}\n@media (max-width:700px){.declcard .done .sharecard,.declcard .done > :not(.sharecard){grid-column:1;grid-row:auto}}\n.closing{position:relative;overflow:hidden;background:var(--forest);padding-block:96px;text-align:center}\n.closing .wrap{position:relative}\n.closing .wrap{display:grid;justify-items:center;gap:16px}\n.closing h2{font-size:clamp(40px,6vw,76px);color:var(--paper)}\n.closing p{font-size:20px;color:var(--beige)}\n.closing .actions{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:12px}\n\n/* Questions */\n.questions{background:var(--card);color:var(--pine);padding-block:84px}\n.questions .grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:56px;align-items:start}\n@media (max-width:860px){.questions .grid{grid-template-columns:1fr;gap:32px}}\n.questions .eyebrow{color:var(--moss)}\n.questions h2{font-size:clamp(34px,4.6vw,56px);color:var(--forest);margin-top:10px}\n.questions .intro{margin-top:18px;max-width:40ch}\n.questions .btn{margin-top:26px}\n.qlist{display:grid;gap:14px}\n.qcard{display:grid;grid-template-columns:auto minmax(0,1fr);gap:18px;align-items:start;background:var(--bg);border-radius:16px;padding:22px}\n.qcard .n{font-family:var(--display);font-size:40px;line-height:1;color:var(--forest);width:1.2em;text-align:center}\n.qcard p{font-size:19px;line-height:1.5}\n.qcard small{display:block;margin-top:6px;font-family:var(--sans);font-size:13px;color:var(--moss)}\n\nform.card2,.done{background:var(--card);border-radius:22px;padding:clamp(22px,4vw,40px);display:grid;gap:22px}\n.mpi-in{display:grid;gap:10px}\n.mpi-in label{font-family:var(--display);font-size:clamp(24px,3vw,32px);color:var(--forest);line-height:1}\n.mpi-box{border:1px solid var(--stone);border-radius:12px;background:#fff;padding:14px 18px 10px;display:grid;gap:2px}\n.mpi-box .mpi-start{font-family:var(--display);font-size:clamp(20px,2.4vw,26px);color:var(--forest);line-height:1.2}\n.mpi-in textarea{width:100%;min-height:120px;resize:vertical;border:0;background:none;color:var(--pine);font-family:var(--serif);font-size:21px;line-height:1.45;padding:4px 0 8px}\n.hint{font-family:var(--sans);font-size:13px;color:var(--moss)}\n.fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n@media (max-width:560px){.fields{grid-template-columns:1fr}}\n.field{display:grid;gap:6px;min-width:0}\n.field.full{grid-column:1 / -1}\n.field label,.choices legend{font-family:var(--sans);font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--forest)}\n.field label span{font-weight:400;letter-spacing:0;text-transform:none;color:var(--moss)}\n.field input{width:100%;border:1px solid var(--stone);border-radius:10px;background:#fff;color:var(--pine);padding:13px 14px;font-family:var(--sans);font-size:16px}\n.field input:focus{outline:none;border-color:var(--forest);box-shadow:0 0 0 3px rgba(157,179,156,.45)}\n.mpi-in textarea:focus{outline:none}\n.mpi-box:focus-within{border-color:var(--forest);box-shadow:0 0 0 3px rgba(157,179,156,.45)}\n.check{display:flex;gap:12px;align-items:flex-start;font-family:var(--sans);font-size:15px;cursor:pointer}\n.check input{width:20px;height:20px;margin-top:2px;accent-color:var(--forest);flex:none}\n.choices{display:grid;gap:10px;border:0;margin:0;padding:0}\n.choices legend{margin-bottom:10px;padding:0}\n.choice{display:flex;gap:12px;align-items:flex-start;border:1px solid var(--stone);border-radius:12px;padding:14px;cursor:pointer;font-family:var(--sans);font-size:15px;line-height:1.45;background:#fff}\n.choice:has(input:checked){border-color:var(--forest);box-shadow:inset 0 0 0 1px var(--forest)}\n.choice input{margin-top:3px;accent-color:var(--forest);flex:none}\n.choice b{display:block;color:var(--forest)}\n.formfoot{display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between}\n.formfoot small{font-family:var(--sans);font-size:13px;color:var(--moss);max-width:36ch}\n.err{font-family:var(--sans);font-size:14px;color:#8A2E1F}\n.feed .item[data-k]{cursor:pointer}\n.panel .decl[data-k]{cursor:pointer}\n.panel .decl[data-k]:hover{background:rgba(247,245,241,.12)}\n.card[data-k]{cursor:pointer}\n.stat.newest[data-k]{cursor:pointer}\n.pmodal{position:fixed;inset:0;z-index:70;display:grid;place-items:center;padding:20px}\n.pmodal[hidden]{display:none}\n.pmodal-back{position:absolute;inset:0;background:rgba(22,34,26,.74)}\n.pmodal-card{position:relative;background:var(--card);color:var(--pine);border-radius:18px;padding:clamp(24px,4vw,40px);max-width:640px;width:100%;max-height:82vh;overflow:auto;box-shadow:0 30px 80px rgba(0,0,0,.45);display:grid;gap:14px;align-content:start}\n.pmodal-card .pwho{display:flex;flex-wrap:wrap;gap:8px 10px;align-items:baseline;font-family:var(--sans);font-size:15px;color:var(--moss)}\n.pmodal-card .pwho b{color:var(--forest);font-size:18px}\n.pmodal-card .pmpi{font-family:var(--sans);font-weight:700;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--moss)}\n.pmodal-card q{quotes:none;font-family:var(--display);font-size:clamp(19px,2.4vw,26px);line-height:1.32;color:var(--forest)}\n.pmodal-card .pwhen{font-family:var(--sans);font-size:13px;color:var(--moss)}\n.pmodal-x{position:absolute;top:8px;right:10px;background:none;border:0;font-size:28px;color:var(--moss);cursor:pointer;line-height:1;padding:8px}\n.done{justify-items:start}\n.done .rank{font-family:var(--sans);font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:13px;color:var(--moss)}\n.done h3{font-size:clamp(30px,4vw,44px);color:var(--forest)}\n.sharecard{width:100%;max-width:520px;aspect-ratio:4/5;background:var(--forest);border-radius:18px;color:var(--paper);padding:9% 8%;display:grid;align-content:space-between}\n.sharecard .mpi-line{font-family:var(--sans);font-weight:700;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--sage)}\n.sharecard .box2{margin-top:5%;font-family:var(--display);font-size:clamp(24px,4vw,36px);line-height:1.15;color:var(--paper)}\n.sharecard .foot{display:flex;justify-content:space-between;align-items:end;gap:12px;font-family:var(--sans);font-size:13px;color:var(--sage)}\n.preview-note{font-family:var(--sans);font-size:13px;color:var(--moss);background:var(--bg);border-radius:10px;padding:10px 12px}\n\nfooter{background:var(--pine);padding-block:48px;color:var(--sage);font-family:var(--sans);font-size:14px}\nfooter .wrap{display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between;align-items:center}\nfooter svg{height:26px;width:auto}\n\n/* Inside the site frame the outer page scrolls, so viewport tricks are turned off */\nhtml.embedded .pmodal{position:absolute;place-items:start center}\nhtml.embedded .pmodal-card{max-height:560px;margin-top:var(--pm-top,120px)}\n</style>\n\n<header class=\"topbar band\">\n  <div class=\"wrap\">\n    <a class=\"brand\" href=\"#top\" aria-label=\"World of Purpose\"><span class=\"full\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-194.5 -272.3 9663.0 1322.6\" role=\"img\" aria-label=\"World of Purpose\">\n<path fill=\"#F7F5F1\" d=\"M875.0 0.0H1195.0V164.0H1155.0L1006.0 778.0H707.0L616.0 346.0H606.0L510.0 778.0H211.0L52.0 164.0H12.0V0.0H382.0V164.0H344.0L383.0 419.0H393.0L488.0 0.0H776.0L864.0 419.0H874.0L913.0 164.0H875.0Z M1151.0 500.0Q1151.0 357.0 1231.0 282.5Q1311.0 208.0 1453.0 208.0Q1597.0 208.0 1676.0 283.5Q1755.0 359.0 1755.0 500.0Q1755.0 643.0 1675.0 717.5Q1595.0 792.0 1453.0 792.0Q1311.0 792.0 1231.0 717.5Q1151.0 643.0 1151.0 500.0ZM1511.0 550.0V450.0Q1511.0 417.0 1496.5 401.5Q1482.0 386.0 1453.0 386.0Q1424.0 386.0 1409.5 401.5Q1395.0 417.0 1395.0 450.0V550.0Q1395.0 583.0 1409.5 598.5Q1424.0 614.0 1453.0 614.0Q1482.0 614.0 1496.5 598.5Q1511.0 583.0 1511.0 550.0Z M2282.0 222.0V413.0Q2241.0 396.0 2194.0 396.0Q2131.0 396.0 2097.0 429.0Q2063.0 462.0 2063.0 527.0V614.0H2153.0V778.0H1789.0V614.0H1833.0V386.0H1789.0V222.0H2063.0V295.0Q2091.0 253.0 2127.0 230.5Q2163.0 208.0 2214.0 208.0Q2234.0 208.0 2252.0 212.0Q2270.0 216.0 2282.0 222.0Z M2314.0 779.0V614.0H2358.0V164.0H2314.0V0.0H2588.0V614.0H2632.0V779.0Z M2656.0 500.0Q2656.0 360.0 2707.5 284.0Q2759.0 208.0 2861.0 208.0Q2912.0 208.0 2951.5 233.0Q2991.0 258.0 3016.0 290.0V164.0H2957.0V0.0H3246.0V614.0H3290.0V778.0H3016.0V710.0Q2991.0 742.0 2951.5 767.0Q2912.0 792.0 2861.0 792.0Q2759.0 792.0 2707.5 716.0Q2656.0 640.0 2656.0 500.0ZM3016.0 550.0V450.0Q3016.0 417.0 3001.5 401.5Q2987.0 386.0 2958.0 386.0Q2929.0 386.0 2914.5 401.5Q2900.0 417.0 2900.0 450.0V550.0Q2900.0 583.0 2914.5 598.5Q2929.0 614.0 2958.0 614.0Q2987.0 614.0 3001.5 598.5Q3016.0 583.0 3016.0 550.0Z M4940.0 614.0H4990.0V164.0H4940.0V0.0H5379.0Q5508.0 0.0 5576.0 55.5Q5644.0 111.0 5644.0 235.0Q5644.0 359.0 5576.0 414.5Q5508.0 470.0 5379.0 470.0H5270.0V614.0H5366.0V778.0H4940.0ZM5304.0 328.0Q5362.0 328.0 5362.0 264.0V228.0Q5362.0 195.0 5347.5 179.5Q5333.0 164.0 5304.0 164.0H5270.0V328.0Z M6334.0 614.0V778.0H6060.0V700.0Q5988.0 792.0 5880.0 792.0Q5797.0 792.0 5755.5 740.0Q5714.0 688.0 5714.0 597.0V386.0H5670.0V222.0H5944.0V550.0Q5944.0 583.0 5958.5 598.5Q5973.0 614.0 6002.0 614.0Q6031.0 614.0 6045.5 598.5Q6060.0 583.0 6060.0 550.0V386.0H6006.0V222.0H6290.0V614.0Z M6857.0 222.0V413.0Q6816.0 396.0 6769.0 396.0Q6706.0 396.0 6672.0 429.0Q6638.0 462.0 6638.0 527.0V614.0H6728.0V778.0H6364.0V614.0H6408.0V386.0H6364.0V222.0H6638.0V295.0Q6666.0 253.0 6702.0 230.5Q6738.0 208.0 6789.0 208.0Q6809.0 208.0 6827.0 212.0Q6845.0 216.0 6857.0 222.0Z M6885.0 836.0H6929.0V386.0H6885.0V222.0H7159.0V290.0Q7184.0 258.0 7223.5 233.0Q7263.0 208.0 7314.0 208.0Q7416.0 208.0 7467.5 284.0Q7519.0 360.0 7519.0 500.0Q7519.0 640.0 7467.5 716.0Q7416.0 792.0 7314.0 792.0Q7263.0 792.0 7223.5 767.0Q7184.0 742.0 7159.0 710.0V836.0H7228.0V1000.0H6885.0ZM7275.0 550.0V450.0Q7275.0 417.0 7260.5 401.5Q7246.0 386.0 7217.0 386.0Q7188.0 386.0 7173.5 401.5Q7159.0 417.0 7159.0 450.0V550.0Q7159.0 583.0 7173.5 598.5Q7188.0 614.0 7217.0 614.0Q7246.0 614.0 7260.5 598.5Q7275.0 583.0 7275.0 550.0Z M7543.0 500.0Q7543.0 357.0 7623.0 282.5Q7703.0 208.0 7845.0 208.0Q7989.0 208.0 8068.0 283.5Q8147.0 359.0 8147.0 500.0Q8147.0 643.0 8067.0 717.5Q7987.0 792.0 7845.0 792.0Q7703.0 792.0 7623.0 717.5Q7543.0 643.0 7543.0 500.0ZM7903.0 550.0V450.0Q7903.0 417.0 7888.5 401.5Q7874.0 386.0 7845.0 386.0Q7816.0 386.0 7801.5 401.5Q7787.0 417.0 7787.0 450.0V550.0Q7787.0 583.0 7801.5 598.5Q7816.0 614.0 7845.0 614.0Q7874.0 614.0 7888.5 598.5Q7903.0 583.0 7903.0 550.0Z M8179.0 752.0V604.0H8341.0V614.0Q8341.0 662.0 8402.0 662.0Q8456.0 662.0 8456.0 625.0Q8456.0 605.0 8440.5 595.0Q8425.0 585.0 8386.0 578.0L8336.0 569.0Q8179.0 541.0 8179.0 391.0Q8179.0 304.0 8245.0 256.0Q8311.0 208.0 8423.0 208.0Q8548.0 208.0 8634.0 250.0V389.0H8482.0V379.0Q8482.0 359.0 8468.5 348.5Q8455.0 338.0 8429.0 338.0Q8379.0 338.0 8379.0 370.0Q8379.0 387.0 8393.0 396.0Q8407.0 405.0 8444.0 413.0L8501.0 424.0Q8590.0 441.0 8628.0 487.0Q8666.0 533.0 8666.0 605.0Q8666.0 696.0 8602.5 744.0Q8539.0 792.0 8422.0 792.0Q8296.0 792.0 8179.0 752.0Z M8694.0 500.0Q8694.0 357.0 8774.0 282.5Q8854.0 208.0 8996.0 208.0Q9137.0 208.0 9199.5 281.5Q9262.0 355.0 9262.0 464.0V536.0H8938.0V542.0Q8938.0 579.0 8960.0 596.5Q8982.0 614.0 9033.0 614.0Q9094.0 614.0 9149.0 605.0Q9204.0 596.0 9245.0 582.0V742.0Q9210.0 761.0 9142.5 776.5Q9075.0 792.0 8996.0 792.0Q8854.0 792.0 8774.0 717.5Q8694.0 643.0 8694.0 500.0ZM9054.0 426.0V414.0Q9054.0 380.0 9039.5 365.0Q9025.0 350.0 8996.0 350.0Q8967.0 350.0 8952.5 365.5Q8938.0 381.0 8938.0 414.0V426.0Z\"/><path fill=\"#F7F5F1\" d=\"M4250.4 778.0V659.92H4286.4V335.92H4250.4V217.84000000000003H4680.96V404.32H4553.52V335.92H4488.0V455.44H4596.72V537.52H4488.0V659.92H4582.32V778.0Z\"/><g transform=\"translate(3920.00 497.92) scale(3.26247) translate(-100 -100)\"><defs><mask id=\"rcut2\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#000\" stroke-width=\"14\" stroke-linecap=\"round\"><path d=\"M41.03 102.00 A52 52 0 0 1 98.00 158.97\"/><path d=\"M52.53 64.96 A89 89 0 0 1 135.04 147.47\"/><path d=\"M102.64 41.06 A126 126 0 0 1 158.94 97.36\"/></g><circle cx=\"61.11\" cy=\"138.89\" r=\"11\" fill=\"#000\"/></mask></defs><circle cx=\"100\" cy=\"100\" r=\"91\" fill=\"#F7F5F1\" mask=\"url(#rcut2)\"/></g>\n</svg></span><span class=\"icon\"><svg role=\"img\" aria-label=\"World of Purpose\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"7 7 186 186\" width=\"186\" height=\"186\">\n<circle cx=\"100\" cy=\"100\" r=\"91\" fill=\"#F7F5F1\"/><g fill=\"none\" stroke=\"#1C2A20\" stroke-width=\"14\" stroke-linecap=\"round\"><path d=\"M41.03 102.00 A52 52 0 0 1 98.00 158.97\"/><path d=\"M52.53 64.96 A89 89 0 0 1 135.04 147.47\"/><path d=\"M102.64 41.06 A126 126 0 0 1 158.94 97.36\"/></g><circle cx=\"61.11\" cy=\"138.89\" r=\"11\" fill=\"#1C2A20\"/>\n</svg></span></a>\n    <div class=\"live\" aria-live=\"polite\"><span class=\"pulse\" aria-hidden=\"true\"></span><b class=\"num\" data-count>0</b><span class=\"lbl\">declared their purpose</span><a class=\"btn btn-light btn-small\" href=\"#video\">Discover yours</a></div>\n  </div>\n</header>\n\n<main id=\"top\">\n<style>/* Hero fits on the first screen: two line headline, two line intro, video sized by script */\n.hero{padding-block:24px 30px}\n.hero .wrap{gap:12px}\n.hero h1{max-width:none;font-size:min(68px, calc((100vw - 32px) / 12.6), calc(var(--fold, 900px) * .075));line-height:1.04}\n.hero .lede{max-width:none;font-size:max(14px, min(21px, calc((100vw - 32px) / 24.6)));line-height:1.45}\n.hero h1 .h1b{display:block;font-size:.46em;line-height:1.2;margin-top:.3em}\n.hero .lede{max-width:58ch}\n.btn:not(.btn-ghost):not(.btn-small){outline:2px solid var(--sage);outline-offset:4px}\n.btn:not(.btn-ghost):not(.btn-small):hover{outline-color:var(--forest);transform:translateY(-2px)}\n.closing .btn:not(.btn-ghost):hover,.declcard .btn:hover,.questions .btn:hover{outline-color:var(--beige)}\n@keyframes ctaGlow{0%{box-shadow:0 0 0 0 rgba(157,179,156,.8)}70%{box-shadow:0 0 0 16px rgba(157,179,156,0)}100%{box-shadow:0 0 0 0 rgba(157,179,156,0)}}\n@media (prefers-reduced-motion:no-preference){.hero .actions .btn,.declform .btn-forest,.closing .btn-light,.questions .btn{animation:ctaGlow 2.6s ease-out infinite}}\n.hero .player{margin-top:4px}\n.hero .actions{margin-top:2px}\n.hero .proofline{margin-top:0}\n@media (max-width:600px){.hero .actions .btn{font-size:12px;padding:14px 20px;letter-spacing:.04em}}\n</style>\n<section class=\"hero band\">\n  <canvas class=\"pattern\" data-pattern aria-hidden=\"true\"></canvas>\n  <div class=\"wrap\">\n    <p class=\"eyebrow\">Free training · 15 minutes · with Kusudi</p>\n    <h1>Discover your purpose<span class=\"h1b\">and join the World of Purpose movement</span></h1>\n    <p class=\"lede\">A free 15 minute video with three simple questions. If you feel a deeper purpose, a deeper calling, but you're not sure exactly what it is, this is for you. Press play and discover yours right now.</p>\n    <div class=\"player\" id=\"video\" role=\"button\" tabindex=\"0\" aria-label=\"Play the free training\">\n      <img class=\"poster\" src=\"https://assets.cdn.filesafe.space/MdZ50IhWXgrl5BTf4stH/media/6ad2c284fdbcf67570a956f4.jpg\" alt=\"\">\n      <span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span>\n      <div class=\"cap\"><b>Click play to discover your purpose now</b><span>with Kusudi · 15 min · free</span></div>\n      <span class=\"note\" data-video-note hidden>The training video plays here on the live page</span>\n    </div>\n    <div class=\"actions\">\n      <a class=\"btn btn-light\" href=\"#declare\">Declare my purpose and add it to the counter</a>\n    </div>\n    <p class=\"proofline\"><b class=\"num\" data-count>0</b> people in <b class=\"num\" data-countries>0</b> countries have already declared theirs. <a href=\"#map\">See where</a></p>\n  </div>\n</section>\n\n<div class=\"feed\" aria-label=\"Recent declarations\"><div class=\"track\" data-feed></div></div>\n\n<section class=\"mapband band\" id=\"map\">\n  <div class=\"wrap\">\n    <div class=\"sechead\">\n      <div><p class=\"eyebrow\" style=\"color:var(--sage)\">World of Purpose · Global mission</p><h2>Where purpose<br>is being declared</h2></div>\n      <p>Every light is a place where someone declared their purpose. Tap one to see who is there and what they said.</p>\n    </div>\n    <div class=\"stats\">\n      <div class=\"stat main\">\n        <span class=\"l\">Declared their purpose</span>\n        <div class=\"mainrow\"><span class=\"v big num\" data-count>0</span><span class=\"of\">of <b>1,000</b><br>by the end of 2026</span></div>\n        <div class=\"meter\"><div class=\"bar\" role=\"progressbar\" aria-valuemin=\"0\" data-meter-aria><span data-meter></span></div>\n        <div class=\"row2\"><span><b class=\"num\" data-left>0</b> to go this year</span><span>Then 10,000. Then 5·11 billion.</span></div></div>\n      </div>\n      <div class=\"stat\"><span class=\"l\">Countries</span><span class=\"v num\" data-countries>0</span><span class=\"d\" data-top-countries></span></div>\n      <div class=\"stat\"><span class=\"l\">US states</span><span class=\"v num\" data-states>0</span><span class=\"d\">of 50</span></div>\n      <div class=\"stat\"><span class=\"l\">Cities</span><span class=\"v num\" data-cities>0</span><span class=\"d\">and counting</span></div>\n      <div class=\"stat newest\"><span class=\"l\">Newest declaration</span><span class=\"v\" data-newest-name></span><q data-newest-text></q><span class=\"d\" data-newest-when></span></div>\n    </div>\n    <div class=\"declcard\" id=\"declare\" data-form-slot>\n      <div class=\"declhead\">\n        <div><p class=\"eyebrow\" style=\"color:var(--moss)\">Already know your purpose?</p><h3>Add yours and become <span class=\"num\" data-next>#452</span></h3></div>\n        <p>Your light goes on the map the moment you hit declare.</p>\n      </div>\n      <form class=\"declform\" id=\"declare-form\" novalidate>\n        <div class=\"mpi-in\">\n          <label for=\"f-purpose\">What’s your purpose?</label>\n          <div class=\"mpi-box\">\n            <span class=\"mpi-start\" aria-hidden=\"true\">My purpose is</span>\n            <textarea id=\"f-purpose\" name=\"purpose\" maxlength=\"400\" placeholder=\"to help people experience freedom by\" required></textarea>\n          </div>\n          <span class=\"hint\">One or two sentences, in your own words. Not sure yet? <a href=\"#video\">Watch the free training first.</a></span>\n        </div>\n        <div class=\"side2\">\n        <div class=\"fields\">\n          <div class=\"field\"><label for=\"f-name\">Full name</label><input id=\"f-name\" name=\"name\" autocomplete=\"name\" required></div>\n          <div class=\"field\"><label for=\"f-email\">Email</label><input id=\"f-email\" name=\"email\" type=\"email\" autocomplete=\"email\" required></div>\n          <div class=\"field full\"><label for=\"f-city\">Where are you? <span>(city and country)</span></label><input id=\"f-city\" name=\"city\" autocomplete=\"address-level2\" placeholder=\"Atlanta, Georgia, USA\"></div>\n        </div>\n        <fieldset class=\"choices\">\n          <legend>What next?</legend>\n          <label class=\"choice\"><input type=\"radio\" name=\"next\" id=\"f-join\" value=\"join\" checked><span><b>Keep me in the loop</b>Teachings, invitations and updates, including emails.</span></label>\n          <label class=\"choice\"><input type=\"radio\" name=\"next\" id=\"f-count\" value=\"count\"><span><b>Only count my purpose</b>No community and no emails.</span></label>\n        </fieldset>\n        <p class=\"err\" data-err hidden></p>\n        <div class=\"formfoot\">\n          <small>Only your first name, city and purpose show. Never your last name or email.</small>\n          <button class=\"btn btn-forest\" type=\"submit\">Declare my purpose</button>\n        </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"mapgrid\">\n      <div>\n      <div class=\"mapbox\">\n        <canvas id=\"map-canvas\" aria-label=\"World map of purpose declarations. Zoom in to see states and cities.\"></canvas>\n        <div class=\"maploading\">Loading the map</div>\n        <div class=\"mapctl\"><button type=\"button\" data-z=\"in\" aria-label=\"Zoom in\">+</button><button type=\"button\" data-z=\"out\" aria-label=\"Zoom out\">&minus;</button><button type=\"button\" class=\"txt\" data-z=\"usa\">USA</button><button type=\"button\" class=\"txt\" data-z=\"world\">World</button></div>\n        <div class=\"tip\" data-tip hidden></div>\n        <div class=\"spot off\" data-spot aria-hidden=\"true\"></div>\n        <div class=\"maphint\" data-maphint></div>\n      </div>\n      <p class=\"mapnote\" data-mapnote>Each number is how many people declared there. Tap a number to zoom in, or use + to see states and cities.</p>\n      </div>\n      <aside class=\"panel\" data-panel aria-live=\"polite\"></aside>\n    </div>\n  </div>\n</section>\n\n<section class=\"wall\" id=\"wall\">\n  <div class=\"band\"><div class=\"wrap\">\n    <div class=\"sechead\">\n      <div><p class=\"eyebrow\" style=\"color:var(--sage)\">The purpose wall</p><h2>Every line,<br>in their own words</h2></div>\n      <p>Written by the people who declared, in their own words. Hover to pause. Search for a name or a city.</p>\n    </div>\n    <div class=\"wallbar\">\n      <input type=\"search\" id=\"wall-search\" placeholder=\"Find a name or a city\" aria-label=\"Search the wall\">\n      <div style=\"display:flex;gap:8px;flex-wrap:wrap\" data-chips></div>\n    </div>\n  </div></div>\n  <div class=\"rows\" data-rows></div>\n  <div class=\"band\"><div class=\"wrap\" data-gridwrap hidden><p class=\"wallcount\" data-wallcount style=\"margin-bottom:16px\"></p><div class=\"grid-wall\" data-grid></div></div></div>\n  <div class=\"band\"><div class=\"wrap\"><div class=\"wallmore\"><button class=\"btn btn-ghost btn-small\" type=\"button\" data-wall-all></button></div><p class=\"wallnote\" data-wallnote></p></div></div>\n</section>\n\n\n<style>/* Live discoveries: crop each Zoom thumbnail to the guest's own camera */\n.clip .frame[data-vid]{aspect-ratio:16/9;overflow:hidden;background:var(--night)}\n.clip .frame .cposter{position:absolute;inset:auto;object-fit:fill;max-width:none;width:calc(100% / var(--cw));height:calc(100% / var(--cw));left:calc(-100% * var(--cx) / var(--cw));top:calc(-100% * var(--cy) / var(--cw));transition:transform .4s ease}\n.clip:hover .frame .cposter{transform:scale(1.03)}\n.clip .frame::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,transparent 58%,rgba(22,34,26,.8));pointer-events:none}\n.clip .frame[data-vid] .play{position:absolute;right:14px;bottom:12px;width:46px;height:46px}\n.clip .frame .play,.clip .frame .who{z-index:1}\n</style>\n<section class=\"clips band\" id=\"discoveries\">\n  <div class=\"wrap\">\n    <div class=\"sechead\">\n      <div><p class=\"eyebrow\" style=\"color:var(--sage)\">Live discoveries</p><h2>Watch someone<br>find it in minutes</h2></div>\n      <p>Real conversations. Kusudi asks the three questions, and you watch the moment it lands.</p>\n    </div>\n    <div class=\"cliprow\"><figure class=\"clip\"><div class=\"frame\" role=\"button\" tabindex=\"0\" data-vid=\"1131462102\" aria-label=\"Play the video of Kevin Martin\" style=\"--cx:0.5;--cy:0.25;--cw:0.5\"><img class=\"cposter\" src=\"https://i.vimeocdn.com/video/2075396872-e8f03953b7070429be02ade4760e640441ce17e77e5b03b61d2d1c4bf2fde3da-d_1280?region=us\" alt=\"Kevin Martin\" loading=\"lazy\"><span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span><span class=\"who\">Kevin</span></div><figcaption><span>Kevin Martin</span>My purpose is to help others experience infinite possibilities.</figcaption></figure><figure class=\"clip\"><div class=\"frame\" role=\"button\" tabindex=\"0\" data-vid=\"1131462252\" aria-label=\"Play the video of Aset Gadzjieva\" style=\"--cx:0.65;--cy:0.317;--cw:0.2\"><img class=\"cposter\" src=\"https://i.vimeocdn.com/video/2075397083-6a8e69b213a267018a38e47f4e5a801c0eae85d4570b203d09fef32ee6490705-d_1280?region=us\" alt=\"Aset Gadzjieva\" loading=\"lazy\"><span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span><span class=\"who\">Aset</span></div><figcaption><span>Aset Gadzjieva</span>My purpose is to help people experience freedom by creating a safe space for them to go to the healing process.</figcaption></figure><figure class=\"clip\"><div class=\"frame\" role=\"button\" tabindex=\"0\" data-vid=\"1131463688\" aria-label=\"Play the video of Jyot Juneja\" style=\"--cx:0.5;--cy:0.25;--cw:0.5\"><img class=\"cposter\" src=\"https://i.vimeocdn.com/video/2075399040-2ab177816b1c034fa14d1982694ef7f6cd508cc9d8da80ab597dee302f201b68-d_1280?region=us\" alt=\"Jyot Juneja\" loading=\"lazy\"><span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span><span class=\"who\">Jyot</span></div><figcaption><span>Jyot Juneja</span>My purpose is to help others create space to heal from within in order to live a more fulfilling life.</figcaption></figure><figure class=\"clip\"><div class=\"frame\" role=\"button\" tabindex=\"0\" data-vid=\"1131464506\" aria-label=\"Play the video of Lyric Sutton\" style=\"--cx:0.5;--cy:0.25;--cw:0.5\"><img class=\"cposter\" src=\"https://i.vimeocdn.com/video/2075400342-7aa1e89c69fcd2a73be0cce93e93878c20031dc4b57751f0d7b0a2013f365594-d_1280?region=us\" alt=\"Lyric Sutton\" loading=\"lazy\"><span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span><span class=\"who\">Lyric</span></div><figcaption><span>Lyric Sutton</span>My purpose is to create a safe space for others to understand their self in order to align their thoughts with their reality.</figcaption></figure><figure class=\"clip\"><div class=\"frame\" role=\"button\" tabindex=\"0\" data-vid=\"1131465279\" aria-label=\"Play the video of Krystal Glenn\" style=\"--cx:0.65;--cy:0.394;--cw:0.2\"><img class=\"cposter\" src=\"https://i.vimeocdn.com/video/2075401333-63961e5631f0cc1d728208be58dd40e7ce43551f800fa8b740031ebef8849ad2-d_1280?region=us\" alt=\"Krystal Glenn\" loading=\"lazy\"><span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span><span class=\"who\">Krystal</span></div><figcaption><span>Krystal Glenn</span>My purpose is to impart wisdom that empowers others in their ability to grow.</figcaption></figure><figure class=\"clip\"><div class=\"frame\" role=\"button\" tabindex=\"0\" data-vid=\"1131468306\" aria-label=\"Play the video of Jamal Stell\" style=\"--cx:0.5;--cy:0.25;--cw:0.5\"><img class=\"cposter\" src=\"https://i.vimeocdn.com/video/2075405608-69be21430e990abaffc24728564962cfacb12cbb599151f9a77888e57bd116e8-d_1280?region=us\" alt=\"Jamal Stell\" loading=\"lazy\"><span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span><span class=\"who\">Jamal</span></div><figcaption><span>Jamal Stell</span>My purpose is to uncover their Holistic life.</figcaption></figure></div>\n  </div>\n</section>\n\n<section class=\"questions band\" id=\"questions\">\n  <div class=\"wrap grid\">\n    <div>\n      <p class=\"eyebrow\">How it works</p>\n      <h2>Three questions.<br>One line.</h2>\n      <p class=\"intro\">This is the same conversation Kusudi has with people on stages, at retreats and on the street. The training walks you through each one. Answer honestly and your purpose starts to say itself.</p>\n      <a class=\"btn btn-forest\" href=\"#video\">Start the free training</a>\n    </div>\n    <div class=\"qlist\">\n      <div class=\"qcard\"><span class=\"n\">1</span><div><p>If every job in this world paid the exact same amount of money and you had to clock in and do something, what is it that you would do?</p><small>Starts with you</small></div></div>\n      <div class=\"qcard\"><span class=\"n\">2</span><div><p>What inspires you about this?</p><small>Moves toward others</small></div></div>\n      <div class=\"qcard\"><span class=\"n\">3</span><div><p>What is the difference you would want to make by doing this job?</p><small>Reaches the world</small></div></div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"story band\" id=\"story\">\n  <canvas class=\"pattern\" data-pattern aria-hidden=\"true\"></canvas>\n  <div class=\"wrap\">\n    <div class=\"storyhead\"><p class=\"eyebrow\" style=\"color:var(--sage)\">The mission</p><h2>Where 5.11 billion came from</h2></div>\n    <div class=\"storygrid\">\n      <div class=\"tell\">\n        <p class=\"say\">I was in meditation when Spirit spoke to me.</p>\n        <p class=\"q\">“Do you want to know how many people you're here to impact?”</p>\n        <p>I said yes.</p>\n        <p>It told me to pick up my phone and pull up Google. Search how many people are in this world.</p>\n        <p class=\"hit\">7.99 billion.</p>\n        <p>But I'm not here for everybody. To believe you have a purpose, you have to believe you were created for a reason. You have to believe in something greater than yourself. God, Allah, Buddha, Jesus, whatever that is for you.</p>\n        <p>So I searched how many people believe in a creator.</p>\n        <p class=\"hit\">80%. That's 6.39 billion.</p>\n        <p>Some of those people already know their purpose. So I searched how many people don't.</p>\n        <p class=\"hit\">80% again. 5.11 billion people.</p>\n        <p>Then it hit me.</p>\n        <p class=\"hit\">I was born on May 11th. Five eleven.</p>\n        <p>That's the number of people I'm here to reach. Everybody who believes they were made for something and doesn't know what yet.</p>\n      </div>\n      <figure class=\"math\" aria-label=\"7.99 billion people in the world. 80 percent believe in a creator, which is 6.39 billion. 80 percent of them don't know their purpose yet, which is 5.11 billion. Five eleven, May 11, the day Kusudi was born.\">\n        <p class=\"mhead\">The math</p>\n        <div class=\"mrow\"><div class=\"top\"><span>People in the world</span><b>7.99<small>billion</small></b></div><div class=\"mbar\"><i style=\"--w:100%\"></i></div></div>\n        <span class=\"mop\">× 80% believe in a creator</span>\n        <div class=\"mrow mid\"><div class=\"top\"><span>Believe they were created for a reason</span><b>6.39<small>billion</small></b></div><div class=\"mbar\"><i style=\"--w:80%\"></i></div></div>\n        <span class=\"mop\">× 80% don't know their purpose yet</span>\n        <div class=\"mrow last\"><div class=\"top\"><span>Made for something, still searching</span><b>5.11<small>billion</small></b></div><div class=\"mbar\"><i style=\"--w:64%\"></i></div></div>\n        <div class=\"mfinal\"><span class=\"five\">5·11</span><p><b>May 11</b>The day I was born, and the number of people I'm here to reach.</p></div>\n      </figure>\n    </div>\n  </div>\n</section>\n\n<section class=\"about band\" id=\"about\">\n  <div class=\"wrap\">\n    <div class=\"aboutgrid\">\n      <div class=\"photos\">\n        <img class=\"portrait\" src=\"https://assets.cdn.filesafe.space/MdZ50IhWXgrl5BTf4stH/media/6ad2c284fdbcf67570a956f4.jpg\" alt=\"Kusudi Muithi\">\n        <img class=\"wide\" src=\"https://assets.cdn.filesafe.space/MdZ50IhWXgrl5BTf4stH/media/6ad2c284f9a985d42cc719dc.jpg\" alt=\"Kusudi with a group of school children, all giving a thumbs up\">\n      </div>\n      <div class=\"aboutcopy\">\n        <p class=\"eyebrow\" style=\"color:var(--moss)\">About</p>\n        <h2>I'm Kusudi. I help people discover why they're here.</h2>\n        <p>I do it one conversation at a time. On stages, at retreats, on beaches and on the street. Three questions, and a person who walked in unsure walks out with one clear line about why they were created.</p>\n        <p>In 2019 I took 10 kids, then 50 more, to Tony Robbins' Unleash the Power Within, and Tony invited me to speak on his stage. I've spoken at Verizon's corporate office three times. Every room ends the same way. I ask, “What's your purpose?”</p>\n        <p>World of Purpose is how that one question reaches 5.11 billion people. Every declaration on this page is one of them.</p>\n        <div class=\"stagevid\" role=\"img\" aria-label=\"Kusudi on stage video\">\n          <span class=\"play\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg></span>\n          <span class=\"svlabel\"><b>On stage</b> “What's your purpose?”</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"closing band\">\n  <canvas class=\"pattern\" data-pattern aria-hidden=\"true\"></canvas>\n  <div class=\"wrap\">\n    <h2>Your line is waiting.</h2>\n    <p>Fifteen minutes from now you could know why you're here.</p>\n    <div class=\"actions\"><a class=\"btn btn-light\" href=\"#video\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 4.5v15l12.5-7.5z\" fill=\"currentColor\"/></svg> Discover my purpose for free</a><a class=\"btn btn-ghost\" href=\"#declare\">Add mine to the map</a></div>\n  </div>\n</section>\n</main>\n\n<div class=\"pmodal\" data-pmodal hidden>\n  <div class=\"pmodal-back\" data-pclose></div>\n  <div class=\"pmodal-card\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Full purpose\">\n    <button class=\"pmodal-x\" type=\"button\" data-pclose aria-label=\"Close\">×</button>\n    <div class=\"pwho\"><span class=\"flag\" data-pm-flag></span><b data-pm-name></b><span data-pm-place></span></div>\n    <div class=\"pmpi\">My purpose is</div>\n    <q data-pm-text></q>\n    <span class=\"pwhen\" data-pm-when></span>\n  </div>\n</div>\n\n<footer class=\"band\">\n  <div class=\"wrap\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-194.5 -272.3 9663.0 1322.6\" role=\"img\" aria-label=\"World of Purpose\">\n<path fill=\"#F7F5F1\" d=\"M875.0 0.0H1195.0V164.0H1155.0L1006.0 778.0H707.0L616.0 346.0H606.0L510.0 778.0H211.0L52.0 164.0H12.0V0.0H382.0V164.0H344.0L383.0 419.0H393.0L488.0 0.0H776.0L864.0 419.0H874.0L913.0 164.0H875.0Z M1151.0 500.0Q1151.0 357.0 1231.0 282.5Q1311.0 208.0 1453.0 208.0Q1597.0 208.0 1676.0 283.5Q1755.0 359.0 1755.0 500.0Q1755.0 643.0 1675.0 717.5Q1595.0 792.0 1453.0 792.0Q1311.0 792.0 1231.0 717.5Q1151.0 643.0 1151.0 500.0ZM1511.0 550.0V450.0Q1511.0 417.0 1496.5 401.5Q1482.0 386.0 1453.0 386.0Q1424.0 386.0 1409.5 401.5Q1395.0 417.0 1395.0 450.0V550.0Q1395.0 583.0 1409.5 598.5Q1424.0 614.0 1453.0 614.0Q1482.0 614.0 1496.5 598.5Q1511.0 583.0 1511.0 550.0Z M2282.0 222.0V413.0Q2241.0 396.0 2194.0 396.0Q2131.0 396.0 2097.0 429.0Q2063.0 462.0 2063.0 527.0V614.0H2153.0V778.0H1789.0V614.0H1833.0V386.0H1789.0V222.0H2063.0V295.0Q2091.0 253.0 2127.0 230.5Q2163.0 208.0 2214.0 208.0Q2234.0 208.0 2252.0 212.0Q2270.0 216.0 2282.0 222.0Z M2314.0 779.0V614.0H2358.0V164.0H2314.0V0.0H2588.0V614.0H2632.0V779.0Z M2656.0 500.0Q2656.0 360.0 2707.5 284.0Q2759.0 208.0 2861.0 208.0Q2912.0 208.0 2951.5 233.0Q2991.0 258.0 3016.0 290.0V164.0H2957.0V0.0H3246.0V614.0H3290.0V778.0H3016.0V710.0Q2991.0 742.0 2951.5 767.0Q2912.0 792.0 2861.0 792.0Q2759.0 792.0 2707.5 716.0Q2656.0 640.0 2656.0 500.0ZM3016.0 550.0V450.0Q3016.0 417.0 3001.5 401.5Q2987.0 386.0 2958.0 386.0Q2929.0 386.0 2914.5 401.5Q2900.0 417.0 2900.0 450.0V550.0Q2900.0 583.0 2914.5 598.5Q2929.0 614.0 2958.0 614.0Q2987.0 614.0 3001.5 598.5Q3016.0 583.0 3016.0 550.0Z M4940.0 614.0H4990.0V164.0H4940.0V0.0H5379.0Q5508.0 0.0 5576.0 55.5Q5644.0 111.0 5644.0 235.0Q5644.0 359.0 5576.0 414.5Q5508.0 470.0 5379.0 470.0H5270.0V614.0H5366.0V778.0H4940.0ZM5304.0 328.0Q5362.0 328.0 5362.0 264.0V228.0Q5362.0 195.0 5347.5 179.5Q5333.0 164.0 5304.0 164.0H5270.0V328.0Z M6334.0 614.0V778.0H6060.0V700.0Q5988.0 792.0 5880.0 792.0Q5797.0 792.0 5755.5 740.0Q5714.0 688.0 5714.0 597.0V386.0H5670.0V222.0H5944.0V550.0Q5944.0 583.0 5958.5 598.5Q5973.0 614.0 6002.0 614.0Q6031.0 614.0 6045.5 598.5Q6060.0 583.0 6060.0 550.0V386.0H6006.0V222.0H6290.0V614.0Z M6857.0 222.0V413.0Q6816.0 396.0 6769.0 396.0Q6706.0 396.0 6672.0 429.0Q6638.0 462.0 6638.0 527.0V614.0H6728.0V778.0H6364.0V614.0H6408.0V386.0H6364.0V222.0H6638.0V295.0Q6666.0 253.0 6702.0 230.5Q6738.0 208.0 6789.0 208.0Q6809.0 208.0 6827.0 212.0Q6845.0 216.0 6857.0 222.0Z M6885.0 836.0H6929.0V386.0H6885.0V222.0H7159.0V290.0Q7184.0 258.0 7223.5 233.0Q7263.0 208.0 7314.0 208.0Q7416.0 208.0 7467.5 284.0Q7519.0 360.0 7519.0 500.0Q7519.0 640.0 7467.5 716.0Q7416.0 792.0 7314.0 792.0Q7263.0 792.0 7223.5 767.0Q7184.0 742.0 7159.0 710.0V836.0H7228.0V1000.0H6885.0ZM7275.0 550.0V450.0Q7275.0 417.0 7260.5 401.5Q7246.0 386.0 7217.0 386.0Q7188.0 386.0 7173.5 401.5Q7159.0 417.0 7159.0 450.0V550.0Q7159.0 583.0 7173.5 598.5Q7188.0 614.0 7217.0 614.0Q7246.0 614.0 7260.5 598.5Q7275.0 583.0 7275.0 550.0Z M7543.0 500.0Q7543.0 357.0 7623.0 282.5Q7703.0 208.0 7845.0 208.0Q7989.0 208.0 8068.0 283.5Q8147.0 359.0 8147.0 500.0Q8147.0 643.0 8067.0 717.5Q7987.0 792.0 7845.0 792.0Q7703.0 792.0 7623.0 717.5Q7543.0 643.0 7543.0 500.0ZM7903.0 550.0V450.0Q7903.0 417.0 7888.5 401.5Q7874.0 386.0 7845.0 386.0Q7816.0 386.0 7801.5 401.5Q7787.0 417.0 7787.0 450.0V550.0Q7787.0 583.0 7801.5 598.5Q7816.0 614.0 7845.0 614.0Q7874.0 614.0 7888.5 598.5Q7903.0 583.0 7903.0 550.0Z M8179.0 752.0V604.0H8341.0V614.0Q8341.0 662.0 8402.0 662.0Q8456.0 662.0 8456.0 625.0Q8456.0 605.0 8440.5 595.0Q8425.0 585.0 8386.0 578.0L8336.0 569.0Q8179.0 541.0 8179.0 391.0Q8179.0 304.0 8245.0 256.0Q8311.0 208.0 8423.0 208.0Q8548.0 208.0 8634.0 250.0V389.0H8482.0V379.0Q8482.0 359.0 8468.5 348.5Q8455.0 338.0 8429.0 338.0Q8379.0 338.0 8379.0 370.0Q8379.0 387.0 8393.0 396.0Q8407.0 405.0 8444.0 413.0L8501.0 424.0Q8590.0 441.0 8628.0 487.0Q8666.0 533.0 8666.0 605.0Q8666.0 696.0 8602.5 744.0Q8539.0 792.0 8422.0 792.0Q8296.0 792.0 8179.0 752.0Z M8694.0 500.0Q8694.0 357.0 8774.0 282.5Q8854.0 208.0 8996.0 208.0Q9137.0 208.0 9199.5 281.5Q9262.0 355.0 9262.0 464.0V536.0H8938.0V542.0Q8938.0 579.0 8960.0 596.5Q8982.0 614.0 9033.0 614.0Q9094.0 614.0 9149.0 605.0Q9204.0 596.0 9245.0 582.0V742.0Q9210.0 761.0 9142.5 776.5Q9075.0 792.0 8996.0 792.0Q8854.0 792.0 8774.0 717.5Q8694.0 643.0 8694.0 500.0ZM9054.0 426.0V414.0Q9054.0 380.0 9039.5 365.0Q9025.0 350.0 8996.0 350.0Q8967.0 350.0 8952.5 365.5Q8938.0 381.0 8938.0 414.0V426.0Z\"/><path fill=\"#F7F5F1\" d=\"M4250.4 778.0V659.92H4286.4V335.92H4250.4V217.84000000000003H4680.96V404.32H4553.52V335.92H4488.0V455.44H4596.72V537.52H4488.0V659.92H4582.32V778.0Z\"/><g transform=\"translate(3920.00 497.92) scale(3.26247) translate(-100 -100)\"><defs><mask id=\"rcut3\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#000\" stroke-width=\"14\" stroke-linecap=\"round\"><path d=\"M41.03 102.00 A52 52 0 0 1 98.00 158.97\"/><path d=\"M52.53 64.96 A89 89 0 0 1 135.04 147.47\"/><path d=\"M102.64 41.06 A126 126 0 0 1 158.94 97.36\"/></g><circle cx=\"61.11\" cy=\"138.89\" r=\"11\" fill=\"#000\"/></mask></defs><circle cx=\"100\" cy=\"100\" r=\"91\" fill=\"#F7F5F1\" mask=\"url(#rcut3)\"/></g>\n</svg>\n    <span><b class=\"num\" data-count style=\"color:var(--paper)\">0</b> declared · World of Purpose</span>\n  </div>\n</footer>\n\n</div>";
    // if the site builder redraws its section, put the page back where it belongs
    new MutationObserver(function(){ if (!HOST.isConnected){ var n = document.getElementById("wop-root"); if (n && n !== HOST) n.replaceWith(HOST); } }).observe(document.body, {childList: true, subtree: true});
    run(ROOT, HOST, v[0]);
  });
  function run(ROOT, HOST, SNAP){

const SEED = {"p":[],"d":""};     // places + one entry per person
const PEOPLE = []; // [first name, purpose, count only] aligned with SEED.d, null = test entry
const DATA_URL = "https:\/\/script.google.com/macros/s/AKfycbzi98yaZhJXp2e9ynxOlj9KSGyVtNxiM-W_R50A6ko2cEglRBHm8h5pWBl5loCAzbjj0w/exec";
const HOOK_URL = "";   // Apps Script webhook (sheet + counter)
const GHL_HOOK = "https:\/\/services.leadconnectorhq.com/hooks/MdZ50IhWXgrl5BTf4stH/webhook-trigger/4d518717-4f7e-4de5-b986-48132da1a310";   // GHL inbound webhook workflow (contact + emails)
const JOIN_URL = "https://join.worldofpurpose.com/alignment";   // Alignment sales page, shown after someone declares
const GOAL = 1000;
const PREVIEW = "1" === "1" ? false : !/worldofpurpose\.com$/.test(location.hostname);
const ISO = {"United States":"US","United Kingdom":"GB","Canada":"CA","Nigeria":"NG","Mexico":"MX","South Africa":"ZA","Netherlands":"NL","Germany":"DE","Kenya":"KE","Trinidad and Tobago":"TT","Ghana":"GH","Australia":"AU","Barbados":"BB","Philippines":"PH","Jamaica":"JM","India":"IN","Serbia":"RS","Thailand":"TH","Austria":"AT","Spain":"ES","Tanzania":"TZ","Rwanda":"RW","Greece":"GR","New Zealand":"NZ","Martinique":"MQ","Aruba":"AW","United Arab Emirates":"AE","Indonesia":"ID","Costa Rica":"CR","Cape Verde":"CV","Ireland":"IE","Botswana":"BW","Ukraine":"UA","Denmark":"DK","Israel":"IL","Panama":"PA","Slovenia":"SI","Italy":"IT","South Korea":"KR","Finland":"FI","France":"FR","Brazil":"BR","Colombia":"CO","Japan":"JP","China":"CN","Egypt":"EG","Ethiopia":"ET","Uganda":"UG","Zimbabwe":"ZW","Haiti":"HT","Dominican Republic":"DO","Puerto Rico":"PR","Bahamas":"BS","Belgium":"BE","Sweden":"SE","Norway":"NO","Switzerland":"CH","Portugal":"PT","Poland":"PL","Morocco":"MA","Senegal":"SN","Singapore":"SG","Malaysia":"MY","Pakistan":"PK","Bangladesh":"BD","Vietnam":"VN","Argentina":"AR","Chile":"CL","Peru":"PE","Ecuador":"EC","Guatemala":"GT","Belize":"BZ","Bermuda":"BM","Cayman Islands":"KY","Saint Lucia":"LC","Grenada":"GD","Guyana":"GY","Saudi Arabia":"SA","Qatar":"QA","Turkey":"TR","Russia":"RU"};
const STILL = matchMedia("(prefers-reduced-motion: reduce)").matches;

const fmt = n => n.toLocaleString("en-US");
const $ = s => ROOT.querySelector(s), $$ = s => [...ROOT.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const flagOf = country => { const cc = ISO[country]; return cc ? String.fromCodePoint(...[...cc].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : "🌍"; };
const clean = s => String(s||"").trim().replace(/^my purpose( my purpose)? is\s*/i,"").replace(/^my purpose\s*/i,"").replace(/^[\s….]+/,"").replace(/^is\s+/i,"").replace(/^To\s/,"to ");
const cut = (s,n) => { s = clean(s); return s.length>n ? s.slice(0,n-1).replace(/\s+\S*$/,"")+"…" : s; };

/* ---------- rows ---------- */
const BASE = Date.UTC(2026,0,1);
let rows = [];
(SEED.d ? SEED.d.split(",") : []).forEach((t, k) => {
  const who = PEOPLE[k]; if (who === null) return;
  const [h, i] = t.split(":").map(Number); const at = new Date(BASE + h*36e5).toISOString();
  const r = {at, first: who ? who[0] : "", purpose: who ? who[1] : "", city:"", region:"", country:"", cc:"", lat:null, lon:null};
  if (i >= 0){ const [city, region, c, lat, lon] = SEED.p[i]; Object.assign(r, {city, region, country: c==="US" ? "United States" : c, cc: c==="US" ? "US" : "", lat, lon}); }
  rows.push(r);
});
rows.forEach((r, i) => r.k = i);
if (SNAP && Array.isArray(SNAP.declarations)){ rows = SNAP.declarations; rows.forEach((r, i) => r.k = i); }

function ago(iso){
  const d = (Date.now() - new Date(iso).getTime()) / 864e5;
  if (d < 1/24) return "just now"; if (d < 1) return Math.round(d*24) + "h ago"; if (d < 2) return "yesterday";
  if (d < 45) return Math.round(d) + " days ago";
  return new Date(iso).toLocaleDateString("en-US",{month:"short",year:"numeric"});
}
const firstName = n => { const w = (n||"").trim().split(/\s+/).filter(Boolean); let f = (w[0]||"").replace(/^./, c => c.toUpperCase()); if (w.length > 1){ const l = w[w.length-1].replace(/[^A-Za-zÀ-ÿ]/g,""); if (l) f += " " + l.charAt(0).toUpperCase() + "."; } return f; };
const placeName = r => {
  if (r.city) return r.city + ", " + (r.cc === "US" ? (r.region || "USA") : r.country);
  if (r.region) return r.region + (r.cc === "US" ? ", USA" : "");
  return r.country || "";
};
const shortPlace = r => r.city || r.region || r.country || "";

/* ---------- aggregates ---------- */
let AGG;
function aggregate(){
  const places = new Map();
  for (const r of rows){
    if (!r.country) continue;
    const k = [r.city, r.region, r.country, r.lat == null ? "x" : ""].join("|");
    if (!places.has(k)) places.set(k, {city:r.city, region:r.region, country:r.country, cc:r.cc, lat:r.lat, lon:r.lon, people:[], last:r.at});
    const p = places.get(k); p.people.push(r); if (r.at > p.last) p.last = r.at;
  }
  const countries = new Map();
  for (const p of places.values()){ const c = countries.get(p.country) || {country:p.country, n:0, places:[]}; c.n += p.people.length; c.places.push(p); countries.set(p.country, c); }
  const states = new Set(); for (const r of rows) if (r.cc === "US" && r.region) states.add(r.region);
  AGG = {states: states.size, places:[...places.values()], countries:[...countries.values()].sort((a,b)=>b.n-a.n || a.country.localeCompare(b.country))};
}
aggregate();

/* ---------- animated numbers ---------- */
function tween(el, to, from){
  el.dataset.v = to;
  if (STILL || from === to){ el.textContent = fmt(to); return; }
  const t0 = performance.now(), dur = 1800;
  const step = t => { const k = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-k,4); el.textContent = fmt(Math.round(from + (to-from)*e)); if (k<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; io.unobserve(e.target); const el = e.target;
  if (el.dataset.target) tween(el, +el.dataset.target, 0);
  if (el.classList.contains("armed")) requestAnimationFrame(() => el.classList.remove("armed"));
  if (el.hasAttribute("data-meter-wrap")) el.querySelector("[data-meter]").style.setProperty("--w", el.dataset.pct + "%");
}), {threshold:.35}) : null;
function belowFold(el){ return el.getBoundingClientRect().top > innerHeight; }
function setNum(sel, v, live){
  $$(sel).forEach(el => {
    const prev = +(el.dataset.v || 0);
    el.dataset.target = v;
    if (live) return tween(el, v, prev);
    el.textContent = fmt(v); el.dataset.v = v;
    if (io && !STILL){ io.observe(el); }   // count up from zero the first time it scrolls into view
  });
}
function renderNumbers(live){
  const total = rows.length;
  setNum("[data-count]", total, live);
  setNum("[data-countries]", AGG.countries.length, live);
  setNum("[data-cities]", AGG.places.filter(p => p.city).length, live);
  setNum("[data-states]", AGG.states, live);
  setNum("[data-left]", Math.max(0, GOAL - total), live);
  $$("[data-next]").forEach(el => el.textContent = "#" + fmt(total + 1));
  $$("[data-countries-b]").forEach(el => el.textContent = AGG.countries.length);
  $$("[data-top-countries]").forEach(el => el.textContent = AGG.countries.slice(0,3).map(c => flagOf(c.country)).join(" ") + "  and more every week");
  const pct = Math.min(100, total / GOAL * 100);
  $$("[data-meter-aria]").forEach(el => {
    el.setAttribute("aria-valuemax", GOAL); el.setAttribute("aria-valuenow", total);
    el.dataset.pct = pct; el.setAttribute("data-meter-wrap","");
    const bar = el.querySelector("[data-meter]");
    if (live || !io || STILL) bar.style.setProperty("--w", pct + "%");
    else { bar.style.setProperty("--w", belowFold(el) ? "0%" : pct + "%"); io.observe(el); }
  });
  const newest = rows.filter(r => r.first && r.purpose).sort((a,b)=>b.at.localeCompare(a.at))[0];
  if (newest){
    $("[data-newest-name]").innerHTML = `${esc(newest.first)} <span class="flag">${flagOf(newest.country)}</span>`;
    const nt = $(".stat.newest"); if (nt && newest.k != null) nt.dataset.k = newest.k;
    $("[data-newest-text]").textContent = newest.purpose ? "My purpose is " + cut(newest.purpose, 90) : "";
    $("[data-newest-when]").textContent = [shortPlace(newest), ago(newest.at)].filter(Boolean).join(" · ");
  }
}

/* ---------- feed ---------- */
function renderFeed(){
  const recent = rows.filter(r => r.first).sort((a,b)=> b.at.localeCompare(a.at)).slice(0,30);
  const item = r => `<span class="item"${r.purpose && r.k != null ? ` data-k="${r.k}"` : ""}><span class="flag">${flagOf(r.country)}</span><b>${esc(r.first)}</b>${r.country ? " in " + esc(shortPlace(r)) : ""}${r.purpose ? ` <em>My purpose is ${esc(cut(r.purpose,60))}</em>` : " declared their purpose"} · ${ago(r.at)}</span>`;
  const html = recent.map(item).join("");
  $("[data-feed]").innerHTML = html + html;
}

/* ---------- panel ---------- */
let selected = null, focusCountry = null;
function renderPanel(){
  const el = $("[data-panel]");
  if (selected){
    const p = selected, ppl = p.people.slice().sort((a,b)=>b.at.localeCompare(a.at)), g = !!p.group;
    const names = g ? [...new Set(p.places.slice().sort((a,b)=>b.people.length-a.people.length).map(q => q.city || q.region || q.country).filter(Boolean))] : [];
    const title = g ? names.slice(0, 2).join(", ") + (names.length > 2 ? ` and ${names.length - 2} more` : "") : (p.city || p.region || p.country);
    const eyebrow = g ? `${fmt(p.places.length)} places nearby` : `<span class="flag" style="font-size:15px;letter-spacing:0">${flagOf(p.country)}</span> ${esc(p.cc==="US" && p.city ? (p.region||"") + ", USA" : p.country)}`;
    el.innerHTML = `<button class="back" type="button" data-back>All countries</button>
      <div><p class="eyebrow">${eyebrow}</p><h3 style="margin-top:6px">${esc(title)}</h3></div>
      <p class="sub"><b class="num">${fmt(ppl.length)}</b> ${ppl.length===1?"person has":"people have"} declared their purpose here</p>
      ${g ? `<button class="btn btn-ghost btn-small" type="button" data-pzoom style="justify-self:start">Zoom in to see each city</button>` : ""}
      <div class="list">${ppl.map(r=>`<div class="decl"${r.purpose && r.k != null ? ` data-k="${r.k}"` : ""}><div class="who">${esc(r.first||"Someone")}<span>${g && shortPlace(r) ? esc(shortPlace(r)) + " \u00b7 " : ""}${ago(r.at)}</span></div>${r.purpose?`<p>My purpose is ${esc(cut(r.purpose,300))}</p>`:""}</div>`).join("")}</div>`;
    el.querySelector("[data-back]").onclick = () => { selected = null; focusCountry = null; renderPanel(); resetMap(); tip.hidden = true; };
    const z = el.querySelector("[data-pzoom]"); if (z) z.onclick = () => fitPlaces(p.places, Math.min(MAXK, Math.max(6, view.k * 5)));
  } else if (focusCountry){
    const c = AGG.countries.find(c => c.country === focusCountry), pl = c.places.slice().sort((a,b)=>{ const x = a.city || a.region || "", y = b.city || b.region || ""; return (!x) - (!y) || x.localeCompare(y, "en", {sensitivity:"base"}); });
    el.innerHTML = `<button class="back" type="button" data-back>All countries</button>
      <div><p class="eyebrow">Country</p><h3 style="margin-top:6px"><span class="flag">${flagOf(c.country)}</span> ${esc(c.country)}</h3></div>
      <p class="sub"><b class="num">${fmt(c.n)}</b> declarations in ${fmt(pl.length)} ${pl.length===1?"place":"places"}</p>
      <div class="list">${pl.map((p,i)=>`<button class="place" type="button" data-p="${i}"><span>${esc(p.city || p.region || (p.lat==null ? "Somewhere in " + p.country : p.country))}</span><b class="num">${fmt(p.people.length)}</b></button>`).join("")}</div>`;
    el.querySelector("[data-back]").onclick = () => { focusCountry = null; renderPanel(); resetMap(); };
    el.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { selected = pl[+b.dataset.p]; renderPanel(); mapTouched = true; spot.classList.add("off"); if (selected.lat != null && base){ const q = placeXY(selected); flyTo(10, q.x, q.y); } });
  } else {
    const clist = AGG.countries.slice().sort((a,b) => (b.country === "United States") - (a.country === "United States") || a.country.localeCompare(b.country, "en", {sensitivity:"base"}));
    el.innerHTML = `<div><p class="eyebrow">Around the world</p><h3 style="margin-top:6px">${fmt(AGG.countries.length)} countries</h3></div>
      <p class="sub">Tap a country, or a number on the map.</p>
      <div class="list">${clist.map((c,i)=>`<button class="place" type="button" data-c="${i}"><span><span class="flag">${flagOf(c.country)}</span>${esc(c.country)}</span><b class="num">${fmt(c.n)}</b></button>`).join("")}</div>`;
    el.querySelectorAll("[data-c]").forEach(b => b.onclick = () => { focusCountry = clist[+b.dataset.c].country; renderPanel(); mapTouched = true; spot.classList.add("off"); const c = AGG.countries.find(c => c.country === focusCountry); fitPlaces(c.places, 9); });
  }
}

/* ---------- map: real outlines, zoom and pinch, numbered clusters, drawn only when something changes ---------- */
const MAP_LIBS = ["https:\/\/cdn.jsdelivr.net/npm/d3-array@3.2.4/dist/d3-array.min.js", "https:\/\/cdn.jsdelivr.net/npm/d3-geo@3.1.1/dist/d3-geo.min.js", "https:\/\/cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js"];
const MAP_WORLD = "https:\/\/cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json", MAP_US = "https:\/\/cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json";
const cv = $("#map-canvas"), ctx = cv.getContext("2d"), mapbox = cv.closest(".mapbox");
const TOUCH = matchMedia("(hover: none)").matches;
const MAXK = 60;
let MW = 0, MH = 0, DPR = 1, view = {k:1, x:0, y:0}, base = null, MAPDATA = null, mapReady = false;
let landPath = null, borderPath = null, statePath = null;
let clusters = [], hover = null, newest = [], spotP = null, frameReq = 0, mapTouched = false, mapActive = false;

function loadScript(src){ return new Promise((ok, bad) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = bad; document.head.appendChild(s); }); }
async function initMap(){
  if (initMap.started) return; initMap.started = true;
  try{
    for (const u of MAP_LIBS) await loadScript(u);
    const [world, us] = await Promise.all([fetch(MAP_WORLD).then(r => r.json()), fetch(MAP_US).then(r => r.json()).catch(() => null)]);
    MAPDATA = {world, us}; mapReady = true; mapbox.classList.add("ready"); sizeMap();
  }catch(e){ const l = mapbox.querySelector(".maploading"); if (l) l.textContent = "The map could not load. Use the list to explore."; }
}
function sizeMap(){
  const w = mapbox.clientWidth; if (!w) return;
  const changed = w !== MW; MW = w; MH = Math.round(w * (w < 600 ? .8 : .56)); DPR = Math.min(2, devicePixelRatio || 1);
  cv.width = MW * DPR; cv.height = MH * DPR; cv.style.height = MH + "px";
  if (mapReady && (changed || !base)){ buildPaths(); view = {k:1, x:0, y:0}; }
  requestDraw();
}
function buildPaths(){
  const {world, us} = MAPDATA, proj = d3.geoNaturalEarth1();
  const countries = topojson.feature(world, world.objects.countries);
  countries.features = countries.features.filter(f => f.id !== "010");   // leave out Antarctica
  proj.fitExtent([[6, 6], [MW - 6, MH - 6]], countries);
  const mk = obj => { const p = new Path2D(); d3.geoPath(proj, p)(obj); return p; };
  landPath = mk(countries);
  borderPath = mk(topojson.mesh(world, world.objects.countries, (a, b) => a !== b));
  statePath = us ? mk(topojson.mesh(us, us.objects.states, (a, b) => a !== b)) : null;
  base = proj;
  for (const p of AGG.places) p.x = p.y = null;
}
function placeXY(p){ if (p.x == null){ const q = base([p.lon, p.lat]); p.x = q ? q[0] : -1e6; p.y = q ? q[1] : -1e6; } return p; }
const toScreen = (x, y) => [x * view.k + view.x, y * view.k + view.y];
function requestDraw(){ if (!frameReq) frameReq = requestAnimationFrame(() => { frameReq = 0; drawMap(); }); }

function drawMap(){
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, MW, MH);
  if (!mapReady || !base) return;
  // on a phone: at the world view one finger scrolls the page; once zoomed in, one finger moves the map
  const zoomed = view.k > 1.02;
  if (TOUCH && zoomed !== drawMap.zoomed){
    drawMap.zoomed = zoomed; cv.style.touchAction = zoomed ? "none" : "pan-y"; mapbox.classList.toggle("locked", zoomed); mapbox.style.boxShadow = zoomed ? "0 0 0 2px rgba(157,179,156,.55)" : "";
    if (zoomed && !drawMap.told){ drawMap.told = true; hint("Drag with one finger to move the map", 2800); }
  }
  const {k, x, y} = view;
  ctx.setTransform(DPR * k, 0, 0, DPR * k, DPR * x, DPR * y);
  ctx.fillStyle = "rgba(157,179,156,.17)"; ctx.fill(landPath);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgba(157,179,156,.42)"; ctx.lineWidth = .7 / k; ctx.stroke(borderPath);
  if (statePath && k > 1.7){ ctx.strokeStyle = `rgba(157,179,156,${Math.min(.34, (k - 1.7) * .25)})`; ctx.lineWidth = .6 / k; ctx.stroke(statePath); }
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

  // group nearby places into one numbered circle, measured on screen so it adapts to the zoom
  const cell = MW < 600 ? 34 : 40, raw = [];
  for (const p of AGG.places){
    if (p.lat == null) continue;
    placeXY(p); const [sx, sy] = toScreen(p.x, p.y);
    if (sx < -30 || sy < -30 || sx > MW + 30 || sy > MH + 30) continue;
    raw.push({places:[p], n:p.people.length, sx, sy});
  }
  raw.sort((a, b) => b.n - a.n);
  const RMAX = MW < 600 ? 21 : 26, R = c => c.n === 1 && c.places.length === 1 ? 5 : Math.min(RMAX, 10 + Math.sqrt(c.n) * 2.4);
  const absorb = (h, c) => { h.places.push(...c.places); h.sx = (h.sx * h.n + c.sx * c.n) / (h.n + c.n); h.sy = (h.sy * h.n + c.sy * c.n) / (h.n + c.n); h.n += c.n; };
  clusters = [];
  for (const c of raw){
    const host = clusters.find(h => Math.hypot(h.sx - c.sx, h.sy - c.sy) < Math.max(cell, R(h) + R(c) + 3));
    if (host) absorb(host, c); else clusters.push(c);
  }
  // a second pass catches circles that grew into each other while merging
  for (let i = 0; i < clusters.length; i++) for (let j = clusters.length - 1; j > i; j--){
    const a = clusters[i], b = clusters[j];
    if (Math.hypot(a.sx - b.sx, a.sy - b.sy) < R(a) + R(b) + 3){ absorb(a, b); clusters.splice(j, 1); }
  }
  const fresh = new Set(newest.map(r => r && r.k));
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const labels = [];
  for (const c of clusters){
    c.r = R(c);
    const dim = focusCountry && !c.places.some(p => p.country === focusCountry);
    const isNew = c.places.some(p => p.people.some(r => fresh.has(r.k)));
    const on = (selected && (selected.group ? selected.places.some(p => c.places.includes(p)) : c.places.includes(selected))) || (hover && c.places.includes(hover));
    if (isNew){ ctx.beginPath(); ctx.arc(c.sx, c.sy, c.r + 6, 0, 6.283); ctx.strokeStyle = "rgba(247,245,241,.55)"; ctx.lineWidth = 1.5; ctx.stroke(); }
    ctx.beginPath(); ctx.arc(c.sx, c.sy, c.r, 0, 6.283);
    ctx.fillStyle = dim ? "rgba(247,245,241,.28)" : "#F7F5F1"; ctx.fill();
    ctx.lineWidth = on ? 3 : 1.5; ctx.strokeStyle = on ? "#9DB39C" : "rgba(22,34,26,.6)"; ctx.stroke();
    if (c.r > 6){ ctx.fillStyle = "#1C2A20"; ctx.font = `700 ${c.n > 99 ? 11 : 12}px "DM Sans", system-ui, sans-serif`; ctx.fillText(fmt(c.n), c.sx, c.sy + .5); }
    if (k >= 3.5 && c.places.length === 1) labels.push(c);
  }
  // city names once you are zoomed in, skipping any that would overlap
  if (labels.length){
    ctx.textAlign = "left"; ctx.font = `600 12px "DM Sans", system-ui, sans-serif`;
    const taken = clusters.map(c => [c.sx - c.r, c.sy - c.r, c.sx + c.r, c.sy + c.r]);
    for (const c of labels.sort((a, b) => b.n - a.n)){
      const p = c.places[0], txt = p.city || p.region || p.country; if (!txt) continue;
      const w = ctx.measureText(txt).width, bx = c.sx + c.r + 5, box = [bx - 2, c.sy - 9, bx + w + 2, c.sy + 9];
      if (box[2] > MW || taken.some(t => box[0] < t[2] && box[2] > t[0] && box[1] < t[3] && box[3] > t[1])) continue;
      taken.push(box);
      ctx.lineWidth = 3; ctx.strokeStyle = "rgba(22,34,26,.85)"; ctx.strokeText(txt, bx, c.sy);
      ctx.fillStyle = "#EEE3D7"; ctx.fillText(txt, bx, c.sy);
    }
  }
  placeSpot();
}

function clampView(){ view.k = Math.max(1, Math.min(MAXK, view.k)); view.x = Math.min(0, Math.max(MW - MW * view.k, view.x)); view.y = Math.min(0, Math.max(MH - MH * view.k, view.y)); }
function zoomAt(f, px, py){ const k2 = Math.max(1, Math.min(MAXK, view.k * f)), s = k2 / view.k; view.x = px - (px - view.x) * s; view.y = py - (py - view.y) * s; view.k = k2; clampView(); requestDraw(); }
let flight = 0;
function flyTo(k, cx, cy){   // cx, cy in map units: the point that ends up in the middle
  const to = {k: Math.max(1, Math.min(MAXK, k))}; to.x = MW / 2 - cx * to.k; to.y = MH / 2 - cy * to.k;
  const save = view; view = {...to}; clampView(); const end = {...view}; view = save;
  cancelAnimationFrame(flight);
  if (STILL){ view = end; requestDraw(); return; }
  const from = {...view}, t0 = performance.now(), dur = 550;
  const step = t => { const u = Math.min(1, (t - t0) / dur), e = u < .5 ? 2*u*u : 1 - Math.pow(-2*u + 2, 2) / 2;
    const k = from.k * Math.pow(end.k / from.k, e), cxv = (MW/2 - from.x) / from.k + ((MW/2 - end.x) / end.k - (MW/2 - from.x) / from.k) * e, cyv = (MH/2 - from.y) / from.k + ((MH/2 - end.y) / end.k - (MH/2 - from.y) / from.k) * e;
    view = {k, x: MW/2 - cxv * k, y: MH/2 - cyv * k}; drawMap(); if (u < 1) flight = requestAnimationFrame(step); };
  flight = requestAnimationFrame(step);
}
function fitPlaces(places, maxK){
  if (!base) return;
  const pts = places.filter(p => p.lat != null).map(placeXY); if (!pts.length) return;
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y), x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const k = Math.min(maxK || 14, .7 * Math.min(MW / Math.max(x1 - x0, 1), MH / Math.max(y1 - y0, 1)));
  flyTo(k, (x0 + x1) / 2, (y0 + y1) / 2);
}
function fitLonLat(w, s, e, n){ if (!base) return; const a = base([w, n]), b = base([e, s]); flyTo(.92 * Math.min(MW / (b[0] - a[0]), MH / (b[1] - a[1])), (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
const resetMap = () => flyTo(1, MW / 2, MH / 2);

function hint(txt, ms){ const h = $("[data-maphint]"); h.textContent = txt; h.classList.add("on"); clearTimeout(hint.t); hint.t = setTimeout(() => h.classList.remove("on"), ms || 1600); }
function rel(e){ const b = cv.getBoundingClientRect(); return {x: e.clientX - b.left, y: e.clientY - b.top}; }
function hitCluster(m){ let best = null, bd = 1e9; for (const c of clusters){ const d = Math.hypot(c.sx - m.x, c.sy - m.y); if (d < c.r + 9 && d < bd){ bd = d; best = c; } } return best; }
const tip = $("[data-tip]"), spot = $("[data-spot]");
function showTip(c){
  if (!c){ tip.hidden = true; return; }
  const p = c.places[0];
  tip.textContent = c.places.length === 1 ? `${placeName(p)} · ${fmt(c.n)}` : `${fmt(c.places.length)} places · ${fmt(c.n)} people`;
  tip.style.left = c.sx + "px"; tip.style.top = (c.sy - c.r + 6) + "px"; tip.hidden = false;
}
function tapCluster(c){
  mapTouched = true; spot.classList.add("off"); tip.hidden = true;
  if (c.places.length === 1) selected = c.places[0];
  else {
    const byN = c.places.slice().sort((a, b) => b.people.length - a.people.length);
    selected = {group: true, places: c.places, people: c.places.flatMap(p => p.people), country: byN[0].country, cc: byN[0].cc, city: "", region: ""};
  }
  focusCountry = null; renderPanel(); requestDraw();
  if (innerWidth <= 960) setTimeout(() => scrollToEl($("[data-panel]")), 60);   // on phones the list sits under the map
}

/* stats row layout */
const gstyle = document.createElement("style");
gstyle.textContent = ".stat:not(.main):not(.newest) .v{font-size:clamp(36px,4vw,56px)}@media (min-width:1001px){.stats{grid-template-columns:minmax(0,1.5fr) repeat(3,minmax(0,1fr))}.stat.main{grid-row:1 / span 2;grid-column:1;align-content:center}.stat.newest{grid-column:2 / -1}}@media (max-width:1000px){.stats{grid-template-columns:repeat(3,minmax(0,1fr))}.stat.main,.stat.newest{grid-column:1 / -1}}@media (max-width:520px){.stat:not(.main):not(.newest){padding:14px}.stat:not(.main):not(.newest) .v{font-size:34px}.stat:not(.main):not(.newest) .d{font-size:12px}.stat:not(.main):not(.newest) .l{font-size:10px;letter-spacing:.1em}}";
ROOT.appendChild(gstyle);

// mouse: drag to move, wheel zooms once you have clicked into the map. touch: one finger scrolls the page, two fingers pinch
const pts = new Map(); let pinch = null, down = null, dragged = false;
cv.addEventListener("pointerdown", e => {
  pts.set(e.pointerId, rel(e)); mapActive = true;
  if (pts.size === 1){ down = {...rel(e), vx: view.x, vy: view.y}; dragged = false; if (e.pointerType === "mouse") cv.setPointerCapture(e.pointerId); }
  if (pts.size === 2){ const [a, b] = [...pts.values()]; pinch = {d: Math.hypot(a.x - b.x, a.y - b.y) || 1, m: {x:(a.x + b.x)/2, y:(a.y + b.y)/2}, v: {...view}}; dragged = true; cancelAnimationFrame(flight); }
});
cv.addEventListener("pointermove", e => {
  const m = rel(e);
  if (pts.has(e.pointerId)) pts.set(e.pointerId, m);
  if (pts.size === 2 && pinch){
    const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y), mid = {x:(a.x + b.x)/2, y:(a.y + b.y)/2};
    const k2 = Math.max(1, Math.min(MAXK, pinch.v.k * d / pinch.d)), bx = (pinch.m.x - pinch.v.x) / pinch.v.k, by = (pinch.m.y - pinch.v.y) / pinch.v.k;
    view = {k: k2, x: mid.x - bx * k2, y: mid.y - by * k2}; clampView(); mapTouched = true; requestDraw(); return;
  }
  if (down && (e.pointerType === "mouse" ? e.buttons : view.k > 1.02)){
    if (Math.hypot(m.x - down.x, m.y - down.y) > 4){ dragged = true; cv.classList.add("dragging"); }
    if (dragged){ view.x = down.vx + m.x - down.x; view.y = down.vy + m.y - down.y; clampView(); mapTouched = true; tip.hidden = true; requestDraw(); }
    return;
  }
  if (e.pointerType === "mouse"){ const c = hitCluster(m), hp = c ? c.places[0] : null; if (hp !== hover){ hover = hp; requestDraw(); } cv.style.cursor = c ? "pointer" : ""; showTip(c); }
});
function endPointer(e){
  const wasDown = down, m = rel(e);
  pts.delete(e.pointerId); if (pts.size < 2) pinch = null; cv.classList.remove("dragging");
  if (pts.size === 1){ const q = [...pts.values()][0]; down = {...q, vx: view.x, vy: view.y}; }   // lifting one finger after a pinch: keep moving with the other
  if (pts.size === 0){ down = null; if (wasDown && !dragged && e.type === "pointerup" && Math.hypot(m.x - wasDown.x, m.y - wasDown.y) < 8){ const c = hitCluster(m); if (c){ window.__lastY = e.pageY; tapCluster(c); } else tip.hidden = true; } }
}
cv.addEventListener("pointerup", endPointer); cv.addEventListener("pointercancel", endPointer);
cv.addEventListener("pointerleave", e => { if (e.pointerType === "mouse"){ hover = null; tip.hidden = true; mapActive = false; requestDraw(); } });
cv.addEventListener("wheel", e => {
  if (!mapActive && !e.ctrlKey){ hint("Click the map first, then scroll to zoom"); return; }
  e.preventDefault(); const m = rel(e); mapTouched = true; zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? .012 : .0022)), m.x, m.y);
}, {passive:false});
cv.addEventListener("dblclick", e => { const m = rel(e); zoomAt(2, m.x, m.y); });
const hintShown = {};
cv.addEventListener("touchstart", e => { if (e.touches.length === 1 && view.k === 1 && !hintShown.done){ hintShown.done = true; hint("Pinch with two fingers to zoom"); } }, {passive:true});
$$("[data-z]").forEach(b => b.addEventListener("click", () => {
  mapTouched = true; spot.classList.add("off"); const z = b.dataset.z;
  if (z === "in") flyTo(view.k * 2, (MW/2 - view.x) / view.k, (MH/2 - view.y) / view.k);
  if (z === "out") flyTo(view.k / 2, (MW/2 - view.x) / view.k, (MH/2 - view.y) / view.k);
  if (z === "usa") fitLonLat(-125, 24, -66, 50);
  if (z === "world"){ selected = null; focusCountry = null; renderPanel(); resetMap(); }
}));
$("[data-mapnote]").textContent = TOUCH ? "Tap any number to read the purposes declared there. Pinch to zoom in, then drag with one finger to move around. Tap World to zoom back out." : "Click any number to read the purposes declared there. Use + or scroll to zoom into states and cities.";

// Spotlight: shows the most recent declarations until someone starts exploring the map
const spotList = () => rows.filter(r => r.first && r.purpose && r.lat != null).sort((a, b) => b.at.localeCompare(a.at)).slice(0, 14);
let spotIdx = 0;
function placeSpot(){
  if (!spotP || !base || spot.classList.contains("off")) return;
  const q = base([spotP.lon, spotP.lat]); if (!q) return; const [x, y] = toScreen(q[0], q[1]);
  const w = spot.offsetWidth || 250, left = Math.min(Math.max(8, x - w/2), MW - w - 8), top = y > MH * .45 ? y - spot.offsetHeight - 22 : y + 22;
  spot.style.left = left + "px"; spot.style.top = Math.max(8, top) + "px";
}
function nextSpot(){
  if (mapTouched || !mapReady || mapbox.matches(":hover") || document.hidden) return;
  const list = spotList(); if (!list.length) return;
  const r = list[spotIdx++ % list.length];
  spot.classList.add("off");
  setTimeout(() => {
    if (mapTouched) return;
    spotP = r;
    spot.innerHTML = `<b>${esc(r.first)}</b> <span class="flag">${flagOf(r.country)}</span> ${esc(shortPlace(r))} · ${ago(r.at)}<p>My purpose is ${esc(cut(r.purpose,80))}</p>${r.purpose.length > 80 ? `<span class="more">Tap to read the whole thing</span>` : ""}`;
    spot.classList.remove("off"); placeSpot();
  }, 450);
}

/* ---------- purpose wall ---------- */
const TONES = ["t1","t2","t3","t4","t2","t1","t4","t3"];
function cardHTML(r, i){
  const full = clean(r.purpose), p = cut(full, 220), size = p.length < 46 ? "s" : p.length < 120 ? "m" : "l";
  return `<figure class="card ${size} ${TONES[i % TONES.length]}${r.mine?" me":""}"${r.k != null ? ` data-k="${r.k}"` : ""} style="margin:0"><div><div class="mpi">My purpose is</div><q>${esc(p)}</q></div><figcaption class="by"><span class="flag">${flagOf(r.country)}</span><span><b>${esc(r.first)}</b>${r.country ? " · " + esc(shortPlace(r)) : ""}</span></figcaption></figure>`;
}
function wallItems(){ return rows.filter(r => r.first && r.purpose).sort((a,b)=>b.at.localeCompare(a.at)); }
function renderWall(){
  const items = wallItems(), nRows = innerWidth < 640 ? 3 : 4, buckets = Array.from({length:nRows}, () => []);
  // only the newest lines scroll, which keeps phones smooth; the rest are one tap away
  items.slice(0, innerWidth < 640 ? 36 : 64).forEach((r,i) => buckets[i % nRows].push([r,i]));
  const box = $("[data-rows]");
  box.innerHTML = buckets.map((b,k) => { const html = b.map(([r,i]) => cardHTML(r,i)).join(""); return `<div class="row${k%2?" rev":""}">${html}${html}</div>`; }).join("");
  box.querySelectorAll(".row").forEach((row,k) => { const half = row.scrollWidth/2; row.style.setProperty("--dur", Math.round(half / (28 + k*6)) + "s"); });
  $("[data-wallnote]").textContent = `${fmt(items.length)} purposes on the wall. Names show as first names only, with the city each person gave.`;
  $("[data-wall-all]").textContent = wallFilter.all ? "Back to the moving wall" : `See all ${fmt(items.length)} purposes`;
  const byC = {}; items.forEach(r => { if (r.country) byC[r.country] = (byC[r.country] || 0) + 1; });
  const top = Object.keys(byC).sort((a,b) => byC[b] - byC[a] || a.localeCompare(b)).slice(0,7).map(country => ({country, n: byC[country]}));
  $("[data-chips]").innerHTML = `<button class="chip" type="button" data-chip="" aria-pressed="${!wallFilter.country}">Everyone</button>` + top.map(c => `<button class="chip" type="button" data-chip="${esc(c.country)}" aria-pressed="${c.country === wallFilter.country}"><span class="flag">${flagOf(c.country)}</span>${esc(c.country === "United States" ? "USA" : c.country === "United Kingdom" ? "UK" : c.country)} <small>${c.n}</small></button>`).join("");
  $$("[data-chip]").forEach(b => b.onclick = () => { $$("[data-chip]").forEach(x => x.setAttribute("aria-pressed", x===b)); wallFilter.country = b.dataset.chip; filterWall(); });
}
const wallFilter = {q:"", country:"", all:false};
$("[data-wall-all]").addEventListener("click", () => { wallFilter.all = !wallFilter.all; renderWall(); filterWall(); });
function filterWall(){
  const q = wallFilter.q.trim().toLowerCase(), c = wallFilter.country, gw = $("[data-gridwrap]"), rowsBox = $("[data-rows]");
  if (!q && !c && !wallFilter.all){ gw.hidden = true; rowsBox.hidden = false; return; }
  const hits = wallItems().filter(r => (!c || r.country === c) && (!q || (r.first + " " + placeName(r) + " " + r.country + " " + (r.country === "United States" ? "usa us america" : r.country === "United Kingdom" ? "uk england britain" : "") + " " + r.purpose).toLowerCase().includes(q)));
  rowsBox.hidden = true; gw.hidden = false;
  $("[data-wallcount]").innerHTML = hits.length ? `<b>${fmt(hits.length)}</b> ${hits.length===1?"purpose":"purposes"}${c ? " from " + esc(c) : ""}${q ? ` matching “${esc(wallFilter.q)}”` : ""}` : `No one here yet. <a href="#declare">Be the first</a>.`;
  $("[data-grid]").innerHTML = hits.map((r,i)=>cardHTML(r,i)).join("");
}
$("#wall-search").addEventListener("input", e => { wallFilter.q = e.target.value; filterWall(); });

/* ---------- patterns (brand water lines) ---------- */
function drawPatterns(){
  const paint = (c, alpha, ox, oy, gap) => {
    const w = c.clientWidth, h = c.clientHeight, d = Math.min(2, devicePixelRatio||1); if (!w || !h) return;
    c.width = w*d; c.height = h*d; const g = c.getContext("2d"); g.setTransform(d,0,0,d,0,0);
    g.strokeStyle = `rgba(157,179,156,${alpha})`; g.lineWidth = 1.4;
    for (let i=1;i<40;i++){ const R = i*gap; g.beginPath(); for (let a=-Math.PI/2; a<=0.02; a+=0.008){ const wob = Math.sin(a*14 + i*.7)*4, x = ox(w) + Math.cos(a)*(R+wob), y = oy(h) + Math.sin(a)*(R+wob); a===-Math.PI/2 ? g.moveTo(x,y) : g.lineTo(x,y); } g.stroke(); }
  };
  $$("[data-pattern]").forEach(c => paint(c, .13, w=>w*.04, h=>h*.98, 52));
  $$("[data-pattern-soft]").forEach(c => paint(c, .22, w=>w*.08, h=>h*.94, 34));
}

/* ---------- video (preview placeholder) ---------- */
const VIDEO_EMBED = "https:\/\/player.vimeo.com/video/1153261855?autoplay=1&title=0&byline=0&portrait=0";
function playVideo(){
  const p = $("#video"); if (!p || p.dataset.playing) return; p.dataset.playing = "1";
  p.innerHTML = `<iframe src="${VIDEO_EMBED}" style="position:absolute;inset:0;width:100%;height:100%;border:0;z-index:2" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Discover Your Purpose free training"></iframe>`;
}
$("#video").addEventListener("click", playVideo);
$$(".clip .frame:not([data-vid]), .stagevid").forEach(el => el.addEventListener("click", () => { if (!PREVIEW) return; let n = el.querySelector(".vnote"); if (!n){ n = document.createElement("span"); n.className = "vnote"; n.textContent = "Plays here on the live page"; el.appendChild(n); } n.hidden = false; setTimeout(()=> n.hidden = true, 2400); }));
$$(".clip .frame[data-vid]").forEach(el => {
  const go = () => { if (el.dataset.playing) return; el.dataset.playing = "1";
    el.innerHTML = `<iframe src="https:\/\/player.vimeo.com/video/${el.dataset.vid}?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;inset:0;width:100%;height:100%;border:0;z-index:2" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Live discovery video"></iframe>`; };
  el.addEventListener("click", go);
  el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); go(); } });
});
$("#video").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); playVideo(); } });
$$("[data-play]").forEach(a => a.addEventListener("click", () => setTimeout(playVideo, 400)));

/* ---------- full purpose modal ---------- */
const pmodal = $("[data-pmodal]");
function showPerson(r){
  if (!r || !r.purpose) return;
  $("[data-pm-flag]").textContent = r.country ? flagOf(r.country) : "";
  $("[data-pm-name]").textContent = r.first || "Someone";
  $("[data-pm-place]").textContent = r.country ? shortPlace(r) : "";
  $("[data-pm-text]").textContent = r.purpose;
  $("[data-pm-when]").textContent = ago(r.at);
  if (document.documentElement.classList.contains("embedded")) pmodal.style.setProperty("--pm-top", Math.max(20, (window.__lastY || 220) - 180) + "px");
  pmodal.hidden = false; document.body.style.overflow = "hidden";
}
ROOT.addEventListener("click", ev => { window.__lastY = ev.pageY; }, true);
function hidePerson(){ pmodal.hidden = true; document.body.style.overflow = ""; }
pmodal.addEventListener("click", ev => { if (ev.target.closest("[data-pclose]")) hidePerson(); });
addEventListener("keydown", ev => { if (ev.key === "Escape" && !pmodal.hidden) hidePerson(); });
spot.addEventListener("click", () => showPerson(spotP));
ROOT.addEventListener("click", ev => {
  const n = ev.target.closest(".item[data-k], .decl[data-k], .card[data-k], .stat.newest[data-k]");
  if (n && !ev.target.closest("a")) showPerson(rows[+n.dataset.k]);
});

/* ---------- phone layout polish ---------- */
const mCss = document.createElement("style"); mCss.textContent = "@media (max-width:560px){.mapband,.clips,.questions{padding-block:56px}.wall{padding-block:56px 48px}.story,.about,.closing{padding-block:64px}.sechead{gap:12px;margin-bottom:24px}.sechead p{font-size:16px}.sechead .eyebrow{font-size:11px;letter-spacing:.14em}.player .play{width:60px;height:60px;margin-right:46%;margin-bottom:30px}.player .cap{left:16px;right:16px;bottom:14px}.player .cap b{font-size:15px}[data-chips]{flex-wrap:nowrap!important;overflow-x:auto;scrollbar-width:none;margin-inline:calc(0px - var(--gutter-l)) calc(0px - var(--gutter-r));padding-inline:var(--gutter-l) var(--gutter-r)}[data-chips]::-webkit-scrollbar{display:none}.cliprow{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;margin-inline:calc(0px - var(--gutter-l)) calc(0px - var(--gutter-r));padding-inline:var(--gutter-l) var(--gutter-r);scroll-padding-inline:var(--gutter-l);scrollbar-width:none}.cliprow::-webkit-scrollbar{display:none}.cliprow > .clip{flex:0 0 84%;scroll-snap-align:start}.stat:not(.main):not(.newest) .l{font-size:11px;letter-spacing:.08em}}@media (max-width:600px){.mapctl button{min-width:38px;height:38px}.mapctl button.txt{font-size:11px}}"; ROOT.appendChild(mCss);
if (matchMedia("(max-width:560px)").matches){
  const cta = $(".hero .actions .btn"); if (cta && /counter/i.test(cta.textContent)) cta.textContent = "Add my purpose to the counter";
  const cb = $(".player .cap b"); if (cb) cb.textContent = "Tap to discover your purpose";
  const cp = $("#discoveries .sechead > p"); if (cp) cp.textContent += " Swipe to see more.";
}
if (TOUCH){ const wp = $(".wall .sechead > p"); if (wp) wp.textContent = wp.textContent.replace("Hover to pause.", "Tap any card to read it."); }

/* ---------- brand colors: beige leads with forest ---------- */
const fCss = document.createElement("style"); fCss.textContent = "[hidden]{display:none!important}.wop-body{background:var(--bg)}.wop-body::before{background:var(--bg)}.topbar{background:rgba(255,255,255,.96);border-bottom-color:rgba(46,63,50,.12)}.topbar svg [fill='#F7F5F1'],footer svg [fill='#F7F5F1']{fill:var(--forest)}.live{color:var(--forest)}.topbar .icon svg [stroke='#1C2A20']{stroke:var(--beige)}.topbar .icon svg [fill='#1C2A20']{fill:var(--beige)}.hero canvas.pattern{opacity:.55}.live b{color:var(--forest)}.topbar .btn-light{background:var(--forest);color:var(--paper)}.topbar .btn-light:hover{background:var(--pine)}.hero{background:var(--bg)}.hero .eyebrow{color:var(--moss)}.hero h1{color:var(--forest)}.hero .lede{color:#4A5A4D}.hero canvas.pattern,.closing canvas.pattern{filter:brightness(.4)}.closing canvas.pattern{filter:none}.player{box-shadow:0 30px 70px rgba(28,42,32,.28)}.player .play{background:var(--bg);color:var(--forest)}.hero .btn-light{background:var(--forest);color:var(--paper)}.hero .btn-light:hover{background:var(--pine)}.hero .proofline{color:var(--moss)}.hero .proofline b{color:var(--forest)}.hero .proofline a{color:var(--forest)}.feed{background:var(--forest)}.mapband{background:var(--card);color:var(--forest)}.mapband .sechead h2{color:var(--forest)}.mapband .sechead p{color:#4A5A4D}.mapband .sechead .eyebrow{color:var(--moss)!important}.stat,.stat.main{background:var(--bg);border-color:#DCE3DA}.stat .l{color:var(--moss)}.stat .v{color:var(--forest)}.stat .d,.mainrow .of,.stat.newest q{color:#4A5A4D}.mainrow .of b,.meter .row2 b{color:var(--forest)}.meter .bar{background:#DCE3DA}.meter .bar span{background:var(--forest)}.meter .row2{color:var(--moss)}.declcard{background:var(--forest);color:var(--paper);box-shadow:0 24px 60px rgba(28,42,32,.22)}.declhead h3,.declcard .mpi-in label{color:var(--paper)}.declcard .declhead .eyebrow{color:var(--sage)!important}.declhead p,.declcard .hint,.declcard .formfoot small,.declcard .field label span{color:var(--sage)}.declcard .hint a{color:var(--beige)}.declcard .field label,.declcard .choices legend{color:var(--beige)}.declcard .field input,.declcard .mpi-box,.declcard .choice{background:var(--card);border-color:transparent}.declcard .choice{color:var(--pine)}.declcard .field input:focus,.declcard .mpi-box:focus-within{border-color:var(--sage);box-shadow:0 0 0 3px rgba(157,179,156,.55)}.declcard .choice:has(input:checked){border-color:var(--sage);box-shadow:inset 0 0 0 2px var(--sage)}.declcard .btn-forest{background:var(--bg);color:var(--forest)}.declcard .btn-forest:hover{background:var(--card)}.declcard .err{color:#F4B9A9}.declcard .done .rank{color:var(--sage)}.declcard .done h3{color:var(--paper)}.declcard .sharecard{background:var(--pine)}.declcard .preview-note{background:rgba(247,245,241,.1);color:var(--beige)}.mapbox{background:var(--forest);border-color:var(--forest)}.mapctl button{background:rgba(46,63,50,.95);color:var(--beige);border-color:rgba(238,227,215,.35)}.mapctl button:hover{background:#3A4D3F}.mapnote{color:var(--moss)}.panel{background:var(--bg);border-color:#DCE3DA;color:var(--forest)}.panel .eyebrow,.panel .sub,.back,.decl.quiet{color:var(--moss)}.panel h3,.panel .sub b,.place b{color:var(--forest)}.place{color:var(--forest)}.place:hover{background:rgba(46,63,50,.07)}.decl{background:rgba(46,63,50,.06)}.panel .decl[data-k]:hover{background:rgba(46,63,50,.11)}.decl .who{color:var(--forest)}.decl .who span{color:var(--moss)}.decl p{color:#4A5A4D}.panel .btn-ghost{color:var(--forest);box-shadow:inset 0 0 0 2px rgba(46,63,50,.4)}.wall{background:var(--bg);color:var(--forest)}.wall .sechead h2{color:var(--forest)}.wall .sechead p{color:#4A5A4D}.wall .sechead .eyebrow{color:var(--moss)!important}.wallbar input{background:var(--card);border-color:rgba(46,63,50,.22);color:var(--pine)}.wallbar input::placeholder{color:var(--moss)}.wall .chip{color:var(--forest);border-color:rgba(46,63,50,.3)}.wall .chip[aria-pressed='true']{background:var(--forest);color:var(--paper);border-color:var(--forest)}.wallcount{color:var(--moss)}.wallcount b{color:var(--forest)}.wall .btn-ghost{color:var(--forest);box-shadow:inset 0 0 0 2px rgba(46,63,50,.4)}.wall .btn-ghost:hover{box-shadow:inset 0 0 0 2px var(--forest)}.card.t1{background:var(--card);color:var(--forest)}.card.t1 .by{color:var(--moss)}.card.t2{background:var(--forest);color:var(--paper)}.card.t2 .by{color:var(--sage)}.card.t3{background:var(--sage);color:var(--pine)}.card.t3 .by{color:#24332A}.card.t4{background:#E8EEE7;color:var(--forest);box-shadow:none}.card.t4 .by{color:var(--moss)}.card.me{box-shadow:0 0 0 4px var(--forest),0 0 30px rgba(46,63,50,.35)}.clips{background:var(--forest)}.clip{background:#3A4D3F;border-color:rgba(157,179,156,.22)}.clip .frame .play{background:var(--bg)}.story{background:var(--forest)}.about{background:var(--bg)}.photos .wide{border-color:var(--beige)}.stagevid .play{background:var(--bg)}.closing .btn-light{background:var(--bg);color:var(--forest)}.closing .btn-light:hover{background:var(--card)}footer{background:var(--bg);color:var(--forest);border-top:1px solid rgba(46,63,50,.12)}footer .num{color:var(--forest)!important}"; ROOT.appendChild(fCss);
{ const dh = $(".declhead > p"); if (dh) dh.textContent = "Every purpose is reviewed before it shows on the wall."; }
{ const ws = $("#wall-search"); if (ws) ws.placeholder = "Find a name, city, country or word"; }

/* ---------- place suggestions while typing the city ---------- */
const plCss = document.createElement("style"); plCss.textContent = ".placefield{position:relative}.placelist{position:absolute;left:0;right:0;top:100%;margin-top:6px;z-index:30;background:#fff;border:1px solid var(--stone);border-radius:12px;box-shadow:0 18px 40px rgba(28,42,32,.18);padding:6px;font-family:var(--sans)}.placelist ul{list-style:none;margin:0;padding:0;display:grid;gap:2px}.placelist li{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:8px;cursor:pointer;color:var(--pine);font-size:15px;line-height:1.3}.placelist li .flag{font-size:18px;line-height:1}.placelist li small{display:block;color:var(--moss);font-size:13px}.placelist li[aria-selected=\"true\"],.placelist li:hover{background:rgba(157,179,156,.24)}.placelist .plsrc{padding:6px 12px 2px;font-size:11px;color:var(--moss);opacity:.8}"; ROOT.appendChild(plCss);
const cityIn = $("#f-city");
cityIn.parentElement.classList.add("placefield");
cityIn.parentElement.querySelector("label span").textContent = "(type your city, then pick it)";
Object.entries({autocomplete:"off", autocapitalize:"words", spellcheck:"false", role:"combobox", "aria-autocomplete":"list", "aria-expanded":"false", "aria-controls":"f-city-list"}).forEach(([k, v]) => cityIn.setAttribute(k, v));
cityIn.insertAdjacentHTML("afterend", `<div class="placelist" id="f-city-list" hidden><ul role="listbox" aria-label="Matching places"></ul><div class="plsrc">Place names from OpenStreetMap</div></div>`);
const cityBox = $("#f-city-list"), cityUl = cityBox.querySelector("ul");
let picked = null, plItems = [], plIdx = -1, plT = 0, plSeq = 0, plAt = 0;
const ccFlag = cc => /^[A-Z]{2}$/.test(cc || "") ? String.fromCodePoint(...[...cc].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : "🌍";
function plLabel(o){ return [o.city, o.region, o.country === "United States" ? "USA" : o.country].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(", "); }
async function plSearch(q){
  const j = await (await fetch("https:\/\/photon.komoot.io/api/?limit=15&lang=en&q=" + encodeURIComponent(q))).json();
  const seen = {}, out = [];
  (j.features || []).forEach(f => {
    const p = f.properties || {}, t = p.type, v = p.osm_value || ""; let o = null;
    if (t === "country") o = {city:"", region:"", country:p.country || p.name, kind:0};
    else if (t === "state") o = {city:"", region:p.name, country:p.country, kind:1};
    else if (t === "city" || (t === "district" && /^(city|town|village|municipality)$/.test(v))) o = {city:p.name, region:p.state || "", country:p.country, kind: /^(village|hamlet)$/.test(v) ? 3 : 2};
    if (!o || !o.country || !f.geometry) return;
    o.cc = String(p.countrycode || "").toUpperCase();
    o.lon = Math.round(f.geometry.coordinates[0] * 100) / 100; o.lat = Math.round(f.geometry.coordinates[1] * 100) / 100;
    o.label = plLabel(o); if (seen[o.label]) return; seen[o.label] = 1; out.push(o);
  });
  // small villages go to the bottom, so the right city is easy to tap
  return out.map((o, i) => [o, i]).sort((a, b) => (a[0].kind === 3) - (b[0].kind === 3) || a[1] - b[1]).map(x => x[0]).slice(0, 6);
}
function plShow(on){ cityBox.hidden = !on; cityIn.setAttribute("aria-expanded", on ? "true" : "false"); if (!on) cityIn.removeAttribute("aria-activedescendant"); }
function plRender(){
  if (!plItems.length) return plShow(false);
  cityUl.innerHTML = plItems.map((o, i) => { const parts = o.label.split(", "); return `<li role="option" id="pl-${i}" data-i="${i}" aria-selected="${i === plIdx}"><span class="flag">${ccFlag(o.cc)}</span><span><b>${esc(parts[0])}</b><small>${parts.length > 1 ? esc(parts.slice(1).join(", ")) : "Country"}</small></span></li>`; }).join("");
  if (plIdx > -1) cityIn.setAttribute("aria-activedescendant", "pl-" + plIdx); else cityIn.removeAttribute("aria-activedescendant");
  plShow(true); plAt = Date.now();
}
function plPick(o){ picked = o; cityIn.value = o.label; plItems = []; plShow(false); }
cityIn.addEventListener("input", () => {
  picked = null; clearTimeout(plT);
  const q = cityIn.value.trim(), seq = ++plSeq;
  if (q.length < 2){ plItems = []; return plShow(false); }
  plT = setTimeout(async () => {
    try { const r = await plSearch(q); if (seq !== plSeq) return; plItems = r; plIdx = -1; plRender(); }
    catch(e){ plItems = []; plShow(false); }
  }, 220);
});
cityIn.addEventListener("keydown", e => {
  if (cityBox.hidden || !plItems.length) return;
  if (e.key === "ArrowDown" || e.key === "ArrowUp"){ e.preventDefault(); plIdx = (plIdx + (e.key === "ArrowDown" ? 1 : plItems.length - 1) + (plIdx < 0 && e.key === "ArrowUp" ? 1 : 0)) % plItems.length; plRender(); }
  else if (e.key === "Enter"){ e.preventDefault(); plPick(plItems[Math.max(0, plIdx)]); }
  else if (e.key === "Escape"){ plShow(false); }
});
cityUl.addEventListener("pointerdown", e => e.preventDefault());
cityUl.addEventListener("click", e => { const li = e.target.closest("li[data-i]"); if (li && Date.now() - plAt > 350) plPick(plItems[+li.dataset.i]); });
cityIn.addEventListener("blur", () => setTimeout(() => plShow(false), 120));
cityIn.addEventListener("focus", () => { if (plItems.length && !picked) plRender(); });

/* ---------- declaration (preview) ---------- */
$("#declare-form").addEventListener("submit", ev => {
  ev.preventDefault();
  const f = new FormData(ev.target), err = $("[data-err]");
  const purpose = clean(f.get("purpose")), name = (f.get("name")||"").trim(), email = (f.get("email")||"").trim();
  if (!purpose || !name || !/^\S+@\S+\.\S+$/.test(email)){ err.hidden = false; err.textContent = !purpose ? "Write your purpose in the first box. One sentence is enough." : !name ? "Add your name so we can count you." : "Add an email we can reach you at."; return; }
  err.hidden = true;
  const t = (f.get("city")||"").trim().toLowerCase();
  const near = t && AGG.places.find(p => p.city && p.lat != null && t.includes(p.city.toLowerCase()));
  const pk = picked && picked.label === (f.get("city")||"").trim() ? picked : null;
  const rec = pk ? {at:new Date().toISOString(), first:firstName(name), purpose, city:pk.city, region:pk.region, country:pk.country, cc:pk.cc, lat:pk.lat, lon:pk.lon, mine:true} : {at:new Date().toISOString(), first:firstName(name), purpose, city: near ? near.city : (f.get("city")||"").split(",")[0].trim(), region: near ? near.region : "", country: near ? near.country : "", cc: near ? near.cc : "", lat: near ? near.lat : null, lon: near ? near.lon : null, mine:true};
  if (!PREVIEW){
    const payload = JSON.stringify({ id: "page:" + email.toLowerCase(), full_name: name, email,
      purpose, location: (f.get("city")||"").trim(),
      show_on_map: "true", next: f.get("next") || "join", source: "page" });
    if (HOOK_URL && HOOK_URL.indexOf("http") === 0) fetch(HOOK_URL, {method:"POST", mode:"no-cors", headers:{"Content-Type":"text/plain"}, body: payload}).catch(()=>{});
    // GHL only accepts JSON or form data, so send it as form data (works from any page)
    if (GHL_HOOK && GHL_HOOK.indexOf("http") === 0) fetch(GHL_HOOK, {method:"POST", mode:"no-cors", keepalive:true, body: new URLSearchParams(JSON.parse(payload))}).catch(()=>{});
  }
  try { localStorage.setItem("wopDeclared", JSON.stringify({first: name.split(/\s+/)[0], purpose, at: rec.at})); } catch(e){}
  rec.k = rows.length; rows.push(rec); aggregate();
  if (rec.lat != null){ newest = [rec]; selected = AGG.places.find(p => p.people.includes(rec)); spotP = rec; }
  renderNumbers(true); renderFeed(); renderPanel(); renderWall(); requestDraw();
  scrollToEl(ROOT.querySelector(".stats"));
  const slot = $("[data-form-slot]");
  slot.innerHTML = `<div class="done">
    <span class="rank">You are #${fmt(rows.length)}</span>
    <h3>Welcome to the world of purpose, ${esc(rec.first)}.</h3>
    <div class="sharecard"><div><div class="mpi-line">My purpose is</div><div class="box2">${esc(cut(purpose,220))}</div></div>
    <div class="foot"><span>#${fmt(rows.length)} of ${fmt(GOAL)}${rec.city ? " · " + esc(rec.city) : ""}</span><svg style="height:18px;width:auto" xmlns="http:\/\/www.w3.org/2000/svg" viewBox="-194.5 -272.3 9663.0 1322.6" role="img" aria-label="World of Purpose">
<path fill="#9DB39C" d="M875.0 0.0H1195.0V164.0H1155.0L1006.0 778.0H707.0L616.0 346.0H606.0L510.0 778.0H211.0L52.0 164.0H12.0V0.0H382.0V164.0H344.0L383.0 419.0H393.0L488.0 0.0H776.0L864.0 419.0H874.0L913.0 164.0H875.0Z M1151.0 500.0Q1151.0 357.0 1231.0 282.5Q1311.0 208.0 1453.0 208.0Q1597.0 208.0 1676.0 283.5Q1755.0 359.0 1755.0 500.0Q1755.0 643.0 1675.0 717.5Q1595.0 792.0 1453.0 792.0Q1311.0 792.0 1231.0 717.5Q1151.0 643.0 1151.0 500.0ZM1511.0 550.0V450.0Q1511.0 417.0 1496.5 401.5Q1482.0 386.0 1453.0 386.0Q1424.0 386.0 1409.5 401.5Q1395.0 417.0 1395.0 450.0V550.0Q1395.0 583.0 1409.5 598.5Q1424.0 614.0 1453.0 614.0Q1482.0 614.0 1496.5 598.5Q1511.0 583.0 1511.0 550.0Z M2282.0 222.0V413.0Q2241.0 396.0 2194.0 396.0Q2131.0 396.0 2097.0 429.0Q2063.0 462.0 2063.0 527.0V614.0H2153.0V778.0H1789.0V614.0H1833.0V386.0H1789.0V222.0H2063.0V295.0Q2091.0 253.0 2127.0 230.5Q2163.0 208.0 2214.0 208.0Q2234.0 208.0 2252.0 212.0Q2270.0 216.0 2282.0 222.0Z M2314.0 779.0V614.0H2358.0V164.0H2314.0V0.0H2588.0V614.0H2632.0V779.0Z M2656.0 500.0Q2656.0 360.0 2707.5 284.0Q2759.0 208.0 2861.0 208.0Q2912.0 208.0 2951.5 233.0Q2991.0 258.0 3016.0 290.0V164.0H2957.0V0.0H3246.0V614.0H3290.0V778.0H3016.0V710.0Q2991.0 742.0 2951.5 767.0Q2912.0 792.0 2861.0 792.0Q2759.0 792.0 2707.5 716.0Q2656.0 640.0 2656.0 500.0ZM3016.0 550.0V450.0Q3016.0 417.0 3001.5 401.5Q2987.0 386.0 2958.0 386.0Q2929.0 386.0 2914.5 401.5Q2900.0 417.0 2900.0 450.0V550.0Q2900.0 583.0 2914.5 598.5Q2929.0 614.0 2958.0 614.0Q2987.0 614.0 3001.5 598.5Q3016.0 583.0 3016.0 550.0Z M4940.0 614.0H4990.0V164.0H4940.0V0.0H5379.0Q5508.0 0.0 5576.0 55.5Q5644.0 111.0 5644.0 235.0Q5644.0 359.0 5576.0 414.5Q5508.0 470.0 5379.0 470.0H5270.0V614.0H5366.0V778.0H4940.0ZM5304.0 328.0Q5362.0 328.0 5362.0 264.0V228.0Q5362.0 195.0 5347.5 179.5Q5333.0 164.0 5304.0 164.0H5270.0V328.0Z M6334.0 614.0V778.0H6060.0V700.0Q5988.0 792.0 5880.0 792.0Q5797.0 792.0 5755.5 740.0Q5714.0 688.0 5714.0 597.0V386.0H5670.0V222.0H5944.0V550.0Q5944.0 583.0 5958.5 598.5Q5973.0 614.0 6002.0 614.0Q6031.0 614.0 6045.5 598.5Q6060.0 583.0 6060.0 550.0V386.0H6006.0V222.0H6290.0V614.0Z M6857.0 222.0V413.0Q6816.0 396.0 6769.0 396.0Q6706.0 396.0 6672.0 429.0Q6638.0 462.0 6638.0 527.0V614.0H6728.0V778.0H6364.0V614.0H6408.0V386.0H6364.0V222.0H6638.0V295.0Q6666.0 253.0 6702.0 230.5Q6738.0 208.0 6789.0 208.0Q6809.0 208.0 6827.0 212.0Q6845.0 216.0 6857.0 222.0Z M6885.0 836.0H6929.0V386.0H6885.0V222.0H7159.0V290.0Q7184.0 258.0 7223.5 233.0Q7263.0 208.0 7314.0 208.0Q7416.0 208.0 7467.5 284.0Q7519.0 360.0 7519.0 500.0Q7519.0 640.0 7467.5 716.0Q7416.0 792.0 7314.0 792.0Q7263.0 792.0 7223.5 767.0Q7184.0 742.0 7159.0 710.0V836.0H7228.0V1000.0H6885.0ZM7275.0 550.0V450.0Q7275.0 417.0 7260.5 401.5Q7246.0 386.0 7217.0 386.0Q7188.0 386.0 7173.5 401.5Q7159.0 417.0 7159.0 450.0V550.0Q7159.0 583.0 7173.5 598.5Q7188.0 614.0 7217.0 614.0Q7246.0 614.0 7260.5 598.5Q7275.0 583.0 7275.0 550.0Z M7543.0 500.0Q7543.0 357.0 7623.0 282.5Q7703.0 208.0 7845.0 208.0Q7989.0 208.0 8068.0 283.5Q8147.0 359.0 8147.0 500.0Q8147.0 643.0 8067.0 717.5Q7987.0 792.0 7845.0 792.0Q7703.0 792.0 7623.0 717.5Q7543.0 643.0 7543.0 500.0ZM7903.0 550.0V450.0Q7903.0 417.0 7888.5 401.5Q7874.0 386.0 7845.0 386.0Q7816.0 386.0 7801.5 401.5Q7787.0 417.0 7787.0 450.0V550.0Q7787.0 583.0 7801.5 598.5Q7816.0 614.0 7845.0 614.0Q7874.0 614.0 7888.5 598.5Q7903.0 583.0 7903.0 550.0Z M8179.0 752.0V604.0H8341.0V614.0Q8341.0 662.0 8402.0 662.0Q8456.0 662.0 8456.0 625.0Q8456.0 605.0 8440.5 595.0Q8425.0 585.0 8386.0 578.0L8336.0 569.0Q8179.0 541.0 8179.0 391.0Q8179.0 304.0 8245.0 256.0Q8311.0 208.0 8423.0 208.0Q8548.0 208.0 8634.0 250.0V389.0H8482.0V379.0Q8482.0 359.0 8468.5 348.5Q8455.0 338.0 8429.0 338.0Q8379.0 338.0 8379.0 370.0Q8379.0 387.0 8393.0 396.0Q8407.0 405.0 8444.0 413.0L8501.0 424.0Q8590.0 441.0 8628.0 487.0Q8666.0 533.0 8666.0 605.0Q8666.0 696.0 8602.5 744.0Q8539.0 792.0 8422.0 792.0Q8296.0 792.0 8179.0 752.0Z M8694.0 500.0Q8694.0 357.0 8774.0 282.5Q8854.0 208.0 8996.0 208.0Q9137.0 208.0 9199.5 281.5Q9262.0 355.0 9262.0 464.0V536.0H8938.0V542.0Q8938.0 579.0 8960.0 596.5Q8982.0 614.0 9033.0 614.0Q9094.0 614.0 9149.0 605.0Q9204.0 596.0 9245.0 582.0V742.0Q9210.0 761.0 9142.5 776.5Q9075.0 792.0 8996.0 792.0Q8854.0 792.0 8774.0 717.5Q8694.0 643.0 8694.0 500.0ZM9054.0 426.0V414.0Q9054.0 380.0 9039.5 365.0Q9025.0 350.0 8996.0 350.0Q8967.0 350.0 8952.5 365.5Q8938.0 381.0 8938.0 414.0V426.0Z"/><path fill="#9DB39C" d="M4250.4 778.0V659.92H4286.4V335.92H4250.4V217.84000000000003H4680.96V404.32H4553.52V335.92H4488.0V455.44H4596.72V537.52H4488.0V659.92H4582.32V778.0Z"/><g transform="translate(3920.00 497.92) scale(3.26247) translate(-100 -100)"><defs><mask id="rcut1"><rect x="0" y="0" width="200" height="200" fill="#fff"/><g fill="none" stroke="#000" stroke-width="14" stroke-linecap="round"><path d="M41.03 102.00 A52 52 0 0 1 98.00 158.97"/><path d="M52.53 64.96 A89 89 0 0 1 135.04 147.47"/><path d="M102.64 41.06 A126 126 0 0 1 158.94 97.36"/></g><circle cx="61.11" cy="138.89" r="11" fill="#000"/></mask></defs><circle cx="100" cy="100" r="91" fill="#9DB39C" mask="url(#rcut1)"/></g>
</svg></div></div>
    <p style="max-width:44ch">Your light is on the map. Your line goes on the wall after a quick review. Welcome to the movement.</p>
    <p style="max-width:44ch"><b>You declared it. Now live it.</b> Alignment is the room where you live your purpose with Kusudi and people walking the same road. Pay what you can.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-forest" href="${JOIN_URL}?name=${encodeURIComponent(rec.first || "")}&declaration=${encodeURIComponent(rec.purpose || "")}">Join Alignment</a><a class="btn" style="background:none;color:var(--forest);box-shadow:inset 0 0 0 2px var(--forest)" href="#wall">Find yourself on the wall</a></div>
    ${PREVIEW ? `<p class="preview-note">Preview only. This test declaration stays in your browser and was not sent anywhere.</p>` : ""}
  </div>`;
});

/* ---------- live data ---------- */
async function loadLive(src){
  if (!DATA_URL || PREVIEW) return;
  try{
    const j = src && src.declarations ? src : await (await fetch(DATA_URL, {cache:"no-store"})).json();
    if (!Array.isArray(j.declarations)) return;
    const sig = j.declarations.length + "|" + j.declarations.map(r => r.at).sort().pop();
    if (sig === loadLive.sig) return; loadLive.sig = sig;
    if (!src) try { localStorage.setItem("wopSnap", JSON.stringify({declarations: j.declarations})); } catch(e){}
    const prev = rows.length; rows = j.declarations; rows.forEach((r, i) => r.k = i); aggregate();
    if (rows.length > prev) newest = rows.slice().sort((a,b)=>b.at.localeCompare(a.at)).slice(0,3).filter(r=>r.lat!=null);
    renderNumbers(true); renderFeed(); renderWall(); filterWall(); if (!selected && !focusCountry) renderPanel(); requestDraw();
  }catch(e){ /* keep the last numbers on screen */ }
}

/* ---------- scroll reveal ---------- */
if ("IntersectionObserver" in window && !STILL){
  const fio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); fio.unobserve(e.target); } }), {threshold:.15});
  const groups = [".sechead", ".stats .stat", ".declcard", ".qcard", ".clip", ".questions .grid > div", ".aboutgrid > *", ".closing .wrap > *"];
  groups.forEach(sel => $$(sel).forEach((el,i) => { el.classList.add("fx"); el.style.setProperty("--d", Math.min(i*0.08, .4) + "s"); fio.observe(el); }));
  setTimeout(() => $$(".fx:not(.in)").forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); }), 1200);
}

/* ---------- hero fits the first screen ---------- */
let parentVH = 0;
addEventListener("message", e => { const d = e.data || {}; if (d.wopVH){ parentVH = +d.wopVH; fitHero(); } });
function foldHeight(){
  if (window.top === window) return innerHeight;
  if (parentVH) return parentVH;
  return Math.max(480, (screen.availHeight || 800) - (TOUCH ? 190 : 200));
}
// inside the site frame: measure how much of the page is actually on screen at the top
if (window.top !== window && "IntersectionObserver" in window){
  const vo = new IntersectionObserver(es => es.forEach(e => {
    const r = e.intersectionRect;
    if (r.height > 200 && r.top <= e.boundingClientRect.top + 2 && Math.abs(Math.round(r.bottom) - parentVH) > 4){ parentVH = Math.round(r.bottom); fitHero(); }
  }), {threshold: Array.from({length: 41}, (_, i) => i / 40)});
  vo.observe(document.body); setTimeout(() => vo.disconnect(), 8000);
}
function fitHero(){
  const pl = $("#video"), proof = $(".hero .proofline"); if (!pl || !proof) return;
  const F = foldHeight(); HOST.style.setProperty("--fold", F + "px");
  pl.style.width = "";
  const full = Math.min(960, pl.parentElement.clientWidth), over = proof.getBoundingClientRect().bottom + scrollY + 14 - F;
  if (over <= 0) return;
  const minW = TOUCH ? full : Math.min(full, 440);
  pl.style.width = Math.round(Math.max(minW, (full * 9 / 16 - over) * 16 / 9)) + "px";
}

/* ---------- boot ---------- */
newest = rows.slice().sort((a,b)=>b.at.localeCompare(a.at)).filter(r=>r.lat!=null).slice(0,3);
renderNumbers(false); renderFeed(); renderPanel(); renderWall();
drawPatterns(); sizeMap(); fitHero();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHero);
// load the map only as it comes near the screen, and pause the scrolling strips when they are out of view
if ("IntersectionObserver" in window){
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting){ initMap(); o.disconnect(); } }), {rootMargin:"900px 0px"}).observe(mapbox);
  const po = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("paused", !e.isIntersecting)));
  [".feed", "[data-rows]"].forEach(s => { const el = $(s); if (el) po.observe(el); });
} else initMap();
setInterval(nextSpot, 4800); setTimeout(nextSpot, 1500);
let rT, lastW = innerWidth; addEventListener("resize", () => { if (innerWidth === lastW) return; lastW = innerWidth; clearTimeout(rT); rT = setTimeout(() => { sizeMap(); drawPatterns(); renderWall(); filterWall(); fitHero(); }, 200); });
if (SNAP && Array.isArray(SNAP.declarations)){ const d = SNAP.declarations; loadLive.sig = d.length + "|" + d.map(r => r.at).sort().pop(); }
if (SNAP) setTimeout(loadLive, 800); else loadLive(); setInterval(loadLive, 30000);
// links inside the page, like See where, scroll to their section
ROOT.addEventListener("click", ev => {
  const a = ev.target.closest('a[href^="#"]'); if (!a || ev.defaultPrevented) return;
  const id = a.getAttribute("href").slice(1); const t = id && ROOT.getElementById(id); if (!t) return;
  ev.preventDefault(); t.scrollIntoView({behavior: STILL ? "auto" : "smooth", block: "start"});
});
if (location.hash.length > 1){ const t = ROOT.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView({block: "start"}), 300); }

/* ---------- framed on worldofpurpose.com: report height so the whole page scrolls as one ---------- */
if (window.top !== window){
  document.documentElement.classList.add("embedded");
  const post = () => { try { window.top.postMessage({ wopH: document.documentElement.scrollHeight }, "*"); } catch(e){} };
  if ("ResizeObserver" in window) new ResizeObserver(post).observe(document.documentElement);
  setInterval(post, 2000); post();
  ROOT.addEventListener("click", ev => {
    const a = ev.target.closest('a[href^="#"]'); if (!a) return;
    const t = ROOT.querySelector(a.getAttribute("href")); if (!t) return;
    ev.preventDefault();
    try { window.top.postMessage({ wopScroll: t.getBoundingClientRect().top }, "*"); } catch(e){}
  });
}
function scrollToEl(el){
  if (!el) return;
  if (document.documentElement.classList.contains("embedded")){
    try { window.top.postMessage({ wopScroll: el.getBoundingClientRect().top }, "*"); } catch(e){}
  } else el.scrollIntoView({behavior: STILL ? "auto" : "smooth", block: "start"});
}

  }
})();

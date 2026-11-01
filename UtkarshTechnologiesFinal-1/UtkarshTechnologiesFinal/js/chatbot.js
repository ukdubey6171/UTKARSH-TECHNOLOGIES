(function(){
var L=function(t,u){return '<a href="'+u+'">'+t+'</a>'};
var KB=[
{k:[" hi "," hello "," hey "," namaste "," namaskar "],a:"Hello! I'm the Utkarsh Assistant. Ask me about our services, packages or how to contact us."},
{k:["service","kya karte","what do you do","offer","division","kaam"],a:"We work in Construction, IT Solutions, Publications, and Marketing & Advertisement.",l:[["Our services","index.html#services"]]},
{k:["construction","building","contract","government","tender","nirman"],a:"We have 18+ years of experience in construction and government contracts, handling all types of construction with attention to detail.",l:[["Construction","construction.html"]]},
{k:[" it "," website","app "," api","software"," ai ","developer","web "],a:"Our IT team builds websites, APIs, web and mobile apps, databases and AI solutions.",l:[["IT Solutions","it-solutions.html"],["Core team","core-team.html"]]},
{k:["book","publication","publish","author","story","script","after hours","novel"],a:"We write and publish stories, scripts and books. Our recent publication is After Hours: Nostalgia & Nirvana.",l:[["Publications","publications.html"],["The book","book.html"]]},
{k:["market","election","chunav","shop","opening","advertis","poster","reel","sms","whatsapp","promotion","campaign","pradhan"],a:"Our marketing covers election campaigns, shop openings, business advertisement and more: posters, reels, SMS, voice calls, WhatsApp, Meta, podcast, website and songs.",l:[["Marketing","marketing.html"],["Package selector","package-selector.html"]]},
{k:["price","package","cost","rate","daam","kitna","kimat","charges","budget","plan"],a:"Marketing packages start at ₹5,000 (Starter), ₹15,000 (Growth) and ₹25,000 (Complete), approximate and customised to your goal. Podcast and songs are quoted on demand. Call 05446357766 for exact pricing.",l:[["Package selector","package-selector.html"],["Packages","packages.html"]]},
{k:["contact","phone","call","number","address","location","where","kahan","sampark","office","reach"],a:"Call 05446357766. Head office: National Highway, Bina Project, Distt Sonbhadra, Uttar Pradesh.",l:[["Call now","tel:05446357766"],["Send enquiry","enquiry.html"]]},
{k:["aetherion","new project","upcoming","coming soon"],a:"Aetherion is our upcoming project from Utkarsh Technologies. It is coming soon!",l:[["Notify me","enquiry.html?dept=Other&service=General%20enquiry&msg=Please%20notify%20me%20about%20Aetherion"]]},
{k:["gst","gstin","tax"],a:"Our GSTIN is 09BHOPD3588E1Z2."},
{k:["founder","ceo","team","owner","vinod","leadership","management"],a:"Vinod Kumar Dubey is our Founder, with 18+ years of business experience. Utkarsh Kumar Dubey is CEO, Advisor & Head of Operations.",l:[["Leadership","index.html#people"]]},
{k:["profile","brochure","pdf","download"],a:"You can download our company profile as a PDF.",l:[["Download profile","Utkarsh-Technologies-Company-Profile.pdf"]]},
{k:["enquiry","inquiry","quote","interested","callback","call back","contact form"],a:"Share your details and our team will get back to you.",l:[["Send enquiry","enquiry.html"]]}
];
var st=document.createElement("style");
st.textContent="#ub{position:fixed;right:16px;bottom:76px;z-index:60;background:var(--pri,#FF3B47);color:#fff;border:0;border-radius:99px;padding:12px 18px;font:700 14px inherit;font-family:inherit;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,.45);animation:ubin .6s cubic-bezier(.22,.8,.2,1) 1.2s both}#up{position:fixed;right:16px;bottom:130px;z-index:61;width:340px;max-width:calc(100vw - 32px);height:440px;max-height:68vh;display:flex;flex-direction:column;opacity:0;visibility:hidden;transform:translateY(16px) scale(.96);transform-origin:bottom right;transition:opacity .25s,transform .3s cubic-bezier(.22,.8,.2,1),visibility 0s .3s;background:var(--card,#1C0A0E);border:1px solid var(--bd,#3A1A1F);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.6);overflow:hidden;color:var(--fg,#fff);font-size:14px;line-height:1.5}#up.o{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .3s cubic-bezier(.22,.8,.2,1),visibility 0s}#uh{padding:14px 16px;font-weight:700;background:var(--deep,#B3122A);display:flex;justify-content:space-between;align-items:center}#uh button{background:none;border:0;color:#fff;font-size:20px;cursor:pointer}#ubody{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:8px}.um{max-width:85%;padding:9px 12px;border-radius:14px;animation:ump .3s ease both}@keyframes ump{from{opacity:0;transform:translateY(8px)}}@keyframes ubin{from{opacity:0;transform:scale(.6)}}.um.bot{background:rgba(255,255,255,.08);align-self:flex-start}.um.me{background:var(--pri,#FF3B47);color:#fff;align-self:flex-end}.um a{color:var(--pri,#FF3B47);font-weight:500;text-decoration:underline}#uc{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px}#uc button{background:none;border:1px solid var(--bd,#3A1A1F);color:var(--fg,#fff);border-radius:99px;padding:6px 12px;font-size:12.5px;cursor:pointer;font-family:inherit}#uf{display:flex;gap:8px;padding:10px;border-top:1px solid var(--bd,#3A1A1F)}#uf input{flex:1;padding:10px 12px;font-size:14px;border-radius:99px}#uf button{background:var(--pri,#FF3B47);color:#fff;border:0;border-radius:99px;padding:0 16px;font-weight:700;cursor:pointer}@media(min-width:768px){#ub{bottom:20px}#up{bottom:74px}}";
document.head.appendChild(st);
var b=document.createElement("button");b.id="ub";b.setAttribute("aria-label","Chat with Utkarsh Assistant");b.textContent="Ask us";
var p=document.createElement("div");p.id="up";
p.innerHTML='<div id="uh"><span>Utkarsh Assistant</span><button aria-label="Close chat">&times;</button></div><div id="ubody"></div><div id="uc"></div><form id="uf"><input placeholder="Type your question" aria-label="Your question" autocomplete="off"><button>Send</button></form>';
document.body.append(b,p);
var body=p.querySelector("#ubody"),inp=p.querySelector("input"),started=0;
function add(t,me,html){var d=document.createElement("div");d.className="um "+(me?"me":"bot");if(html)d.innerHTML=t;else d.textContent=t;body.appendChild(d);body.scrollTop=body.scrollHeight}
function reply(q){var s=" "+q.toLowerCase()+" ",best=null,sc=0;
KB.forEach(function(e){var n=0;e.k.forEach(function(k){if(s.indexOf(k)>-1)n++});if(n>sc){sc=n;best=e}});
var h=best?best.a.replace(/&/g,"&amp;")+(best.l?"<br>"+best.l.map(function(x){return L(x[0],x[1])}).join(" · "):""):"I'm not sure about that yet. Please call 05446357766 or "+L("send an enquiry","enquiry.html")+" and our team will help.";
setTimeout(function(){add(h,0,1)},350)}
function ask(q){add(q,1);reply(q)}
var chips=["Services","Packages","Contact","Send enquiry"];
p.querySelector("#uc").innerHTML=chips.map(function(c){return '<button type="button">'+c+'</button>'}).join("");
p.querySelectorAll("#uc button").forEach(function(x){x.onclick=function(){ask(x.textContent)}});
function toggle(){p.classList.toggle("o");if(p.classList.contains("o")&&!started){started=1;add("Hello! I'm the Utkarsh Assistant. Ask me about our services, packages or how to contact us.")}}
b.onclick=toggle;p.querySelector("#uh button").onclick=toggle;
p.querySelector("#uf").onsubmit=function(e){e.preventDefault();var v=inp.value.trim();if(v){inp.value="";ask(v)}};
})();

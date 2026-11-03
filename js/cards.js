(function(){
var M={"b2b":["b2b","i"],"b2c":["b2c","i"],"b2g":["b2g","i"],"18yearsofexperience":["c-exp","i"],"alltypesofconstruction":["c-all","i"],"attentiontodetail":["c-detail","i"],"websitebuilder":["it-web","i"],"apidevelopment":["it-api","i"],"webmobileapps":["it-app","i"],"databasesolutions":["it-db","i"],"aiagenticsolutions":["it-ai","i"],"customsoftware":["it-sw","i"],"vinodkumardubey":["p-vinod","i"],"utkarshkumardubey":["p-utkarsh","i"],"pragyadubey":["p-pragya","i"],"prakashtripathi":["p-prakash","i"],"harshitashukla":["p-harshita","i"],"shreyanshsingh":["p-shreyansh","i"],"ananyasingh":["p-ananya","i"],"shauryapathak":["p-shaurya","i"],"muskandubey":["p-muskan","i"],"tavishisharma":["p-tavishi","i"],"ankitapandey":["p-ankita","i"],"shreysinghal":["p-shrey","i"],"lrnaina":["p-naina","i"],"buildastrongpublicimage":["m-image","m"],"connectwithyouraudience":["m-connect","m"],"communicateyourmessage":["m-message","m"],"electioncampaign":["m-election","m"],"shopopeningpromotion":["m-shop","m"],"businessadvertisement":["m-business","m"],"eventlaunchpromotion":["m-event","m"],"postersgraphics":["m-posters","m"],"ugcreelproduction":["m-reels","m"],"smsmarketing":["m-sms","m"],"integratedvoicecallmarketing":["m-voice","m"],"whatsappmarketing":["m-wa","m"],"metamarketingseo":["m-meta","m"],"podcast":["m-podcast","m"],"modernwebsite":["m-website","m"],"customisedsongs":["m-song","m"],"starter":["m-starter","m"],"growth":["m-growth","m"],"complete":["m-complete","m"],"modernandcreative":["m-creative","m"],"builtforlocalneeds":["m-local","m"],"integratedservices":["m-integrated","m"],"professionalbranding":["m-brand","m"]},ST={"₹5,000":"packages.html","4+":"marketing.html","9":"services.html"},X={"nineservicesonecampaign":"services.html","thepeoplebehindutkarsh":"team.html","letsplanyourcampaign":"contact.html","notsurewhichplanfits":"package-selector.html"};
function n(t){return t.toLowerCase().replace(/[^a-z0-9]/g,"")}
document.querySelectorAll(".card").forEach(function(c){
 if(c.tagName=="A"||c.dataset.href)return;
 var h=c.querySelector("h3"),s=c.querySelector(".stat"),h2=c.querySelector("h2"),href=null;
 if(s)href=ST[s.textContent.trim()];
 else if(h){var r=M[n(h.textContent)];if(r)href=(r[1]=="m"?"minfo.html":"info.html")+"?p="+r[0]}
 if(!href&&(h2||h))href=X[n((h2||h).textContent)];
 if(!href)return;
 c.dataset.href=href;c.classList.add("clk");c.setAttribute("role","link");c.tabIndex=0;
 var m=document.createElement("span");m.className="more";m.textContent="View details \u2192";c.appendChild(m)});
function go(u){var R=document.documentElement;R.classList.add("leaving");setTimeout(function(){location.href=u},230)}
document.addEventListener("click",function(e){var c=e.target.closest&&e.target.closest("[data-href]");
 if(!c||e.target.closest("a,button,summary,input,select,textarea,label"))return;
 if(window.getSelection&&String(getSelection()))return;go(c.dataset.href)});
document.addEventListener("keydown",function(e){if(e.key=="Enter"&&e.target.dataset&&e.target.dataset.href)go(e.target.dataset.href)});
})();

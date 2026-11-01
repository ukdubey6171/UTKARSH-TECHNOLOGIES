(function(){
var P=[["marketing.html","Home"],["about.html","About"],["services.html","Services"],["packages.html","Packages"],["team.html","Team"],["contact.html","Contact"]];
var cur=location.pathname.split("/").pop()||"marketing.html";
var moon='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A8 8 0 0 1 12 2z"/></svg>';
window.__m=function(i){i.outerHTML=moon};
var lg='<img src="images/logo.png" alt="Utkarsh Technologies" onerror="__m(this)">';
var L=P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==cur?' class="on"':'')+'>'+p[1]+'</a>'}).join("");
var n=document.createElement("nav");
n.innerHTML='<div class="wrap"><a class="logo" href="index.html">'+lg+'UTKARSH TECHNOLOGIES</a><div class="links">'+L+'</div><a class="pill" href="contact.html">Get a plan</a><button class="burger" aria-label="Menu"><span></span><span></span><span></span></button></div><div class="drawer">'+L+'</div>';
document.body.prepend(n);
n.querySelector(".burger").onclick=function(){n.classList.toggle("open")};
var t=document.createElement("div");t.className="tabs";t.innerHTML=L;document.body.append(t);
var f=document.createElement("footer");
f.innerHTML='<div class="wrap"><div><a class="logo" href="index.html">'+lg+'UTKARSH TECHNOLOGIES LIMITED</a><p style="margin-top:10px">Head Office: National Highway, Bina Project,<br>Distt Sonbhadra, Uttar Pradesh<br><a href="tel:05446357766">Call 05446357766</a><br><a href="https://utkarshtech.online">utkarshtech.online</a><br>GSTIN: 09BHOPD3588E1Z2</p></div><div>'+L+'</div><div><a href="package-selector.html">Package selector</a><a href="enquiry.html">Send an enquiry</a><a href="Utkarsh-Technologies-Company-Profile.pdf" download>Download Company Profile</a><a href="index.html">&larr; Main website</a></div></div><div class="wrap"><p class="note">All campaign services are subject to applicable election laws, advertising policies, privacy requirements, telecom regulations, and platform rules.<br>&copy; 2026 Utkarsh Technologies Limited</p></div>';
document.body.append(f);
var tk=0,pp=document.querySelector(".phone,.book3d");
function upd(){tk=0;n.classList.toggle("s",scrollY>20);if(pp&&innerWidth>=768){var k=Math.min(scrollY/500,1),a=pp.classList.contains("book3d")?-24:-14;pp.style.transform="rotateY("+(a-a*k)+"deg) rotateZ("+(3-3*k)+"deg)"}}
addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(upd)}},{passive:true});upd();
document.querySelectorAll(".stars").forEach(function(s){for(var i=0;i<40;i++){var d=document.createElement("i");d.className="star";var z=1+Math.round(Math.random());d.style.cssText="left:"+Math.random()*100+"%;top:"+Math.random()*100+"%;width:"+z+"px;height:"+z+"px;opacity:"+(.1+Math.random()*.2)+";animation-delay:"+(Math.random()*5)+"s;animation-duration:"+(3+Math.random()*2)+"s";if(i%3)d.style.animation="none";s.appendChild(d)}});
document.querySelectorAll(".card").forEach(function(c){var h=c.querySelector("h3");if(h&&/^(Gram Pradhan|Gram Panchayat Member|BDC Member|Zila Panchayat Member)$/.test(h.textContent.trim())){c.style.cursor="pointer";c.setAttribute("role","link");c.tabIndex=0;c.onclick=function(){location.href="packages.html"}}});
})();

(function(){
var P=[["marketing.html","Home"],["about.html","About"],["services.html","Services"],["packages.html","Packages"],["team.html","Team"],["contact.html","Contact"]];
var cur=location.pathname.split("/").pop()||"marketing.html";
var moon='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A8 8 0 0 1 12 2z"/></svg>';
window.__m=function(i){i.outerHTML=moon};
var lg='<img src="images/logo.png" alt="" onerror="__m(this)">';
var SOC="<div class=\"soc\"><a href=\"https://www.linkedin.com/company/utkarshtechnologies/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"LinkedIn\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><rect x=\"3\" y=\"9\" width=\"4\" height=\"12\"/><circle cx=\"5\" cy=\"5\" r=\"2.2\"/><path d=\"M10 9h4v1.8c.6-1.1 2-2.1 4-2.1 3.3 0 4 2.2 4 5V21h-4v-6c0-1.6-.3-2.8-2-2.8s-2 1.2-2 2.8v6h-4z\"/></svg></a><a href=\"https://www.instagram.com/utkarsh_technologies\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Instagram\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1\" fill=\"currentColor\"/></svg></a><a href=\"https://www.facebook.com/share/1FLvsPbTXF/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Facebook\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4 2-4 4v2H8v3.5h2V22h4V11.5h2.6L17 8z\"/></svg></a></div>";
var L=P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==cur?' class="on"':'')+'>'+p[1]+'</a>'}).join("");
var n=document.createElement("nav");
n.innerHTML='<div class="wrap"><a class="logo" href="index.html">'+lg+'UTKARSH TECHNOLOGIES</a><div class="links">'+L+'</div><a class="pill" href="contact.html">Get a plan</a><button class="burger" aria-label="Menu"><span></span><span></span><span></span></button></div><div class="drawer">'+L+'</div>';
document.body.prepend(n);
n.querySelector(".burger").onclick=function(){n.classList.toggle("open")};
var t=document.createElement("div");t.className="tabs";t.innerHTML=L;document.body.append(t);
var f=document.createElement("footer");
f.innerHTML='<div class="wrap"><div><a class="logo" href="index.html">'+lg+'UTKARSH TECHNOLOGIES LIMITED</a><p style="margin-top:10px">Head Office: National Highway, Bina Project,<br>Distt Sonbhadra, Uttar Pradesh<br><a href="tel:05446357766">Call 05446357766</a><br><a href="https://utkarshtech.online">utkarshtech.online</a><br>GSTIN: 09BHOPD3588E1Z2</p>'+SOC+'</div><div>'+L+'</div><div><a href="package-selector.html">Package selector</a><a href="enquiry.html">Send an enquiry</a><a href="Utkarsh-Technologies-Company-Profile.pdf" download>Download Company Profile</a><a href="index.html">&larr; Main website</a></div></div><div class="wrap"><p class="note">All campaign services are subject to applicable election laws, advertising policies, privacy requirements, telecom regulations, and platform rules.<br>&copy; 2026 Utkarsh Technologies Limited</p></div>';
document.body.append(f);
var tk=0,pp=document.querySelector(".phone,.book3d");
function upd(){tk=0;n.classList.toggle("s",scrollY>20);if(pp&&innerWidth>=768){var k=Math.min(scrollY/500,1),a=pp.classList.contains("book3d")?-24:-14;pp.style.transform="rotateY("+(a-a*k)+"deg) rotateZ("+(3-3*k)+"deg)"}}
addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(upd)}},{passive:true});upd();
document.querySelectorAll(".stars").forEach(function(s){for(var i=0;i<40;i++){var d=document.createElement("i");d.className="star";var z=1+Math.round(Math.random());d.style.cssText="left:"+Math.random()*100+"%;top:"+Math.random()*100+"%;width:"+z+"px;height:"+z+"px;opacity:"+(.1+Math.random()*.2)+";animation-delay:"+(Math.random()*5)+"s;animation-duration:"+(3+Math.random()*2)+"s";if(i%3)d.style.animation="none";s.appendChild(d)}});
document.querySelectorAll(".card").forEach(function(c){var h=c.querySelector("h3");if(h&&/^(Gram Pradhan|Gram Panchayat Member|BDC Member|Zila Panchayat Member)$/.test(h.textContent.trim())){c.style.cursor="pointer";c.setAttribute("role","link");c.tabIndex=0;c.onclick=function(){location.href="packages.html"}}});
})();

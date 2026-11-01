(function(){
var D=document,R=D.documentElement;
if(!R.classList.contains("mo"))return;
D.querySelectorAll(".rv").forEach(function(e){e.classList.remove("rv")});
var list=[];
function tag(sel,type,d){D.querySelectorAll(sel).forEach(function(el){
 if(el.hasAttribute("data-a")||(el.parentElement&&el.parentElement.closest("[data-a]"))||el.closest(".bookwrap,.phonewrap,.soonbox"))return;
 el.setAttribute("data-a",type);el.style.setProperty("--d",(d||0)+"s");list.push(el)})}
function stagger(sel){D.querySelectorAll(sel).forEach(function(p){var n=0;[].forEach.call(p.children,function(c){if(c.hasAttribute("data-a")){c.style.setProperty("--d",Math.min(n*.09,.45)+"s");n++}})})}
/* containers first, then their text, so children of animated cards are not animated twice */
tag("section .grid > *","card");tag("section .card","card");tag("details.fq","up");
tag(".strip .wrap > span","up");tag(".tl > div","left");tag("footer .wrap > div","up");
tag("section .label","left");tag("section h2","up",.08);tag("section .sub","up",.16);tag("section .row","up",.24);
tag("section .meta","up",.2);tag("section > .wrap > p > a.ghost","up",.2);
stagger("section .grid");stagger("#faq");stagger(".strip .wrap");stagger(".tl");stagger("footer .wrap");
var all=list.slice(),pend=[];
D.querySelectorAll(".soon,.tl").forEach(function(e){all.push(e)});
D.querySelectorAll(".stat,.strip b").forEach(function(e){var t=e.textContent.trim();if(/^₹?\d[\d,]*\+?$/.test(t)){e._c=t;all.push(e)}});
function count(el){var t=el._c,m=t.match(/^(₹?)(\d[\d,]*)(\+?)$/),end=parseInt(m[2].replace(/,/g,""),10),s=0,dur=1100;
 function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/dur,1),v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=m[1]+(m[2].indexOf(",")>-1?v.toLocaleString("en-IN"):v)+m[3];if(p<1)requestAnimationFrame(f)}
 requestAnimationFrame(f)}
function show(el){
 if(el._c){count(el);return}
 if(el.classList.contains("soon")||el.classList.contains("tl")){el.classList.add("in");return}
 el.classList.add("vis");var d=parseFloat(el.style.getPropertyValue("--d"))||0;
 setTimeout(function(){el.removeAttribute("data-a");el.classList.remove("vis");el.style.removeProperty("--d")},(d+.9)*1000)}
if(!("IntersectionObserver" in window)){all.forEach(show);}
else{
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);var i=pend.indexOf(e.target);if(i>-1)pend.splice(i,1);show(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.01});
 all.forEach(function(el){if(el._c)el.textContent=el._c.replace(/\d[\d,]*/,"0");pend.push(el);io.observe(el)});
 /* safety net: anything already on screen is always revealed (also near the bottom of the page) */
 var iv=setInterval(function(){pend.slice().forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight*.98&&r.bottom>0){io.unobserve(el);pend.splice(pend.indexOf(el),1);show(el)}});if(!pend.length)clearInterval(iv)},600);
}
/* ripple on click/tap */
D.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest(".pill,.ghost,.chipb,.opt,.phone a.chip,#ub");if(!t)return;
 var r=t.getBoundingClientRect(),s=D.createElement("span");s.className="rp";s.style.left=(e.clientX-r.left)+"px";s.style.top=(e.clientY-r.top)+"px";t.appendChild(s);setTimeout(function(){s.remove()},650)});
/* smooth page change */
D.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");
 if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||a.target||a.hasAttribute("download"))return;
 var u=a.getAttribute("href");if(!u||u.charAt(0)=="#"||/^(tel|mailto|sms|javascript):/i.test(u))return;
 var l;try{l=new URL(a.href)}catch(x){return}
 if(l.origin!==location.origin||(l.pathname===location.pathname&&l.hash))return;
 e.preventDefault();R.classList.add("leaving");setTimeout(function(){location.href=a.href},230)});
addEventListener("pageshow",function(){R.classList.remove("leaving")});
})();

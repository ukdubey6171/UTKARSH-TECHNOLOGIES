(function(){
var D=window.INFO||{},p=new URLSearchParams(location.search).get("p"),e=D[p];
function $(i){return document.getElementById(i)}
function esc(t){var d=document.createElement("div");d.textContent=t;return d.innerHTML}
if(!e)e={c:"Not found",t:"Page not found",sub:"This page does not exist.",p:[],l:[],b:[["Go to home","index.html"]],bk:null};
document.title=e.t+" | Utkarsh Technologies Limited";
var md=document.querySelector('meta[name=description]');if(md)md.content=e.sub;
$("ilabel").textContent=e.c;$("ititle").textContent=e.t;$("isub").textContent=e.sub;
var h="";
if(e.r){var w=e.t.split(" "),ini=(w[0][0]+w[w.length-1][0]).toUpperCase();
 h+='<div class="iph">'+ini+(e.ph?'<img src="images/'+e.ph+'" alt="'+esc(e.t)+'" onerror="this.remove()">':'')+'</div>'+e.r.map(function(r){return '<div class="irole">'+esc(r)+'</div>'}).join("")}
h+=e.p.map(function(t){return '<p class="sub" style="margin-top:14px;max-width:70ch">'+esc(t)+'</p>'}).join("");
if(e.l.length)h+='<ul class="ck" style="margin-top:22px">'+e.l.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul>';
h+='<div class="row" style="margin-top:26px">'+e.b.map(function(b,i){var x=/^https?:/.test(b[1]);return '<a class="'+(i?'ghost':'pill')+'" href="'+b[1]+'"'+(x?' target="_blank" rel="noopener"':'')+'>'+esc(b[0])+'</a>'}).join("")+'</div>';
if(e.bk)h+='<p style="margin-top:26px"><a class="ghost" href="'+e.bk[1]+'">&larr; '+esc(e.bk[0])+'</a></p>';
$("ibody").innerHTML=h;
})();

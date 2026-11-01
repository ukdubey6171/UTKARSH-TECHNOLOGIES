(function(){
var f=document.getElementById("enq");if(!f)return;
var C=window.UTK||{},E=f.elements,m=document.getElementById("emsg");
var S={"Construction":["New construction","Government contract work","Renovation / repair","Other construction work"],
"IT Solutions":["Website","API development","Web / mobile app","Database solution","AI / agentic solution","Custom software"],
"Publications":["Book publishing","Story / script writing","Author enquiry"],
"Marketing & Advertisement":["Election Campaign","Shop Opening Promotion","Business Advertisement","Event / Launch Promotion","Social Media / Meta Marketing","Other marketing"],
"Other":["General enquiry","Feedback"]};
var d=E.department,s=E.service;
Object.keys(S).forEach(function(k){d.add(new Option(k,k))});
function fill(){s.length=1;(S[d.value]||[]).forEach(function(x){s.add(new Option(x,x))})}
d.addEventListener("change",fill);
var q=new URLSearchParams(location.search);
if(q.get("dept")){for(var i=0;i<d.options.length;i++)if(d.options[i].value.indexOf(q.get("dept"))==0)d.selectedIndex=i;fill()}
if(q.get("service"))s.value=q.get("service");
if(q.get("plan"))for(var j=0;j<E.plan.options.length;j++)if(E.plan.options[j].value.indexOf(q.get("plan"))==0)E.plan.selectedIndex=j;
if(q.get("msg"))E.message.value=q.get("msg");
if(q.get("note"))E.message.value="Services needed: "+q.get("note");
f.addEventListener("submit",function(e){e.preventDefault();
if(E._gotcha.value)return;
if(!E.name.value.trim()||!/^[0-9+\-\s]{10,15}$/.test(E.phone.value.trim())||!d.value||!s.value){m.textContent="Please enter your name, a valid phone number, department and service.";return}
var o={};["name","phone","email","department","service","plan","location","message"].forEach(function(k){o[k]=E[k].value.trim()});
o._subject="New enquiry: "+o.department+" / "+o.service;
function ok(){f.reset();fill();m.textContent="Thank you! We have received your enquiry and will contact you soon."}
if(C.formEndpoint){m.textContent="Sending...";fetch(C.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)}).then(function(r){if(!r.ok)throw 0;ok()}).catch(function(){m.textContent="Could not send. Please call 05446357766."})}
else if(C.email){var b=Object.keys(o).filter(function(k){return k[0]!="_"}).map(function(k){return k+": "+o[k]}).join("\n");location.href="mailto:"+C.email+"?subject="+encodeURIComponent(o._subject)+"&body="+encodeURIComponent(b)}
else m.textContent="Online sending is not connected yet. Please call 05446357766."});
})();

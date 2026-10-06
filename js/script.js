// Kita Tolong Kita - site scripts
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$("#updated").textContent=new Date(document.lastModified).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
// Mobile menu
const bg=$(".burger");bg.onclick=()=>{const o=$("nav").classList.toggle("open");bg.setAttribute("aria-expanded",o)};
// Accessibility: text size + high contrast (remembered)
let fs=+localStorage.fs||100;const ap=()=>{document.documentElement.style.fontSize=fs+"%";localStorage.fs=fs};ap();
$$("[data-fs]").forEach(b=>b.onclick=()=>{fs=Math.min(150,Math.max(80,fs+10*b.dataset.fs));ap()});
if(localStorage.hc==="1")document.body.classList.add("hc");
$("#contrast").onclick=()=>{localStorage.hc=document.body.classList.toggle("hc")?"1":"0"};
// Tabs
$$(".tabs button").forEach(b=>b.onclick=()=>{$$(".tabs button").forEach(x=>x.setAttribute("aria-selected",x===b));$$(".panel").forEach(p=>p.hidden=p.id!==b.dataset.t)});
// Accordion
$$(".acc button").forEach(b=>b.onclick=()=>{const p=b.nextElementSibling,o=p.hidden;p.hidden=!o;b.setAttribute("aria-expanded",o)});
// Contact form + modal + guestbook
const cf=$("#cf");if(cf){const gb=$("#gb"),md=$("#md");
 const add=(n,m)=>{const li=document.createElement("li");li.textContent=n+": "+m;gb.prepend(li)};
 add("Aina","Great idea, I would use this every week!");
 cf.onsubmit=e=>{e.preventDefault();const n=$("#n").value.trim(),m=$("#m").value.trim(),em=$("#e").value.trim();
  if(!n||!m||!/^\S+@\S+\.\S+$/.test(em)){$("#er").textContent="Please fill in your name, a valid email, and a message.";return}
  $("#er").textContent="";add(n,m);$("#mt").textContent="Thanks, "+n+". We will reply to "+em+" soon.";md.hidden=false;cf.reset()};
 $("#mc").onclick=()=>md.hidden=true;md.onclick=e=>{if(e.target===md)md.hidden=true}}
// Site map search
const q=$("#q");if(q)q.oninput=()=>{const v=q.value.toLowerCase();let c=0;$$("#map li").forEach(li=>{const s=(li.textContent+" "+li.dataset.k).toLowerCase().includes(v);li.hidden=!s;c+=s});$("#nr").hidden=c>0};

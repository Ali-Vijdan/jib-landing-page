document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll(".tab-link"),e=document.querySelectorAll(".tab-content");t.forEach(a=>{a.addEventListener("click",function(a){a.preventDefault();let l=this.getAttribute("data-tab");t.forEach(t=>t.classList.remove("active-tab")),e.forEach(t=>{t.classList.remove("active"),t.style.display="none",setTimeout(()=>t.style.opacity="0",10)}),this.classList.add("active-tab");let s=document.getElementById(l);s.classList.add("active"),s.style.display="block",setTimeout(()=>s.style.opacity="1",10)})})});
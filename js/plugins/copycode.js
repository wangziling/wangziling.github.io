window.codeElements.forEach((t=>{const e=document.createElement("div");e.className="copy-btn",e.textContent=ctx.copycode.default_text,t.appendChild(e),e.addEventListener("click",(async()=>{const c=t.querySelector("code")?.textContent||"";if(navigator.clipboard)try{await navigator.clipboard.writeText(c),e.textContent=ctx.copycode.success_text,e.classList.add("success"),hud.toast(ctx.copycode.toast,2500)}catch(t){e.textContent="未获得用户许可",e.classList.add("warning")}else e.textContent="浏览器不支持/非HTTPS",e.classList.add("warning");setTimeout((()=>{e.textContent=ctx.copycode.default_text,e.classList.remove("success","warning")}),3e3)}))}));
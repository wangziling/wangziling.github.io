(()=>{const e="a.link-card[cardlink]",t={renderer:function(e,t){var n=[];const r=e.getAttribute("autofill");r&&(n=r.split(",")),t.title&&t.title.length>0&&n.includes("title")&&(e.querySelector(".title").innerHTML=t.title,e.title=t.title),t.icon&&t.icon.length>0&&n.includes("icon")&&(e.querySelector(".img").style='background-image: url("'+t.icon+'");',e.querySelector(".img").setAttribute("data-bg",t.icon));let i=e.querySelector(".desc");i&&t.desc&&t.desc.length>0&&n.includes("desc")&&(i.innerHTML=t.desc)},setCardLink:function(e){(e="forEach"in(e||{})?e:document.querySelectorAll("a[cardlink]")).forEach((e=>{if(1!==e.nodeType)return;e.removeAttribute("cardlink");const n=e.href;fetch("https://api.vlts.cc/site_info/v1?url="+n).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(n){t.renderer(e,n)})).catch((function(e){console.log(e)}))}))},init:function(){this.setCardLink(document.querySelectorAll(e))}};stellaris.registerThemePlugin(e,t)})();
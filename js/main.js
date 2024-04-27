console.log(`\n %c Hexo theme Stellaris %c ${stellar.github} %c \n \n`,"color: #eff4f9; background: #030307; padding: 5px; border-radius: 4px 0 0 4px;","background: #eff4f9; padding: 5px; border-radius: 0 4px 4px 0;",""),console.log("By Kirikaze Chiyuki");const util={diffDate:(e,t=!1)=>{const l=new Date,s=new Date(e),a=l.getTime()-s.getTime(),i=36e5,n=24*i;let r;if(t){const e=a/(30*n),t=a/n,l=a/i,s=a/6e4;r=e>12?null:e>=1?parseInt(e)+" "+stellar.config.date_suffix.month:t>=1?parseInt(t)+" "+stellar.config.date_suffix.day:l>=1?parseInt(l)+" "+stellar.config.date_suffix.hour:s>=1?parseInt(s)+" "+stellar.config.date_suffix.min:stellar.config.date_suffix.just}else r=parseInt(a/n);return r},copy:(e,t)=>{const l=document.getElementById(e);l&&(l.select(),document.execCommand("Copy"),t&&t.length>0&&hud.toast(t))},toggle:e=>{const t=document.getElementById(e);t&&t.classList.toggle("display")}},hud={toast:(e,t)=>{t=isNaN(t)?2e3:t;var l=document.createElement("div");l.classList.add("toast"),l.innerHTML=e,document.body.appendChild(l),setTimeout((function(){l.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",l.style.opacity="0",setTimeout((function(){document.body.removeChild(l)}),500)}),t)}},sidebar={toggle:()=>{const e=document.querySelector(".l_body");e&&(e.classList.add("mobile"),e.classList.toggle("sidebar"))}},stellaris={themePlugins:{},registerThemePlugin:function(e,t){this.themePlugins[e]=t,stellaris.jQuery((()=>$((()=>{t.init()}))))},pluginsConfig:{fancyBoxSelector:""},jQuery(e){const{status:t}=stellaris.jQueryState;void 0!==window.jQuery||"loaded"===t?e():"loading"===t?stellaris.jQueryState.promise.then(e):(stellaris.jQueryState.status="loading",stellaris.jQueryState.promise=stellar.loadScript(stellar.plugins.jQuery).then((()=>{stellaris.jQueryState.status="loaded"})).then(e))},jQueryState:{status:"none",promise:null},loadCSS:{fancyBox:()=>{stellar.plugins.fancybox&&stellar.loadCSS(stellar.plugins.fancybox.css)},swiper:()=>{stellar.plugins.swiper&&stellar.loadCSS(stellar.plugins.swiper.css)}},load:{swiper:()=>{if(stellar.plugins.swiper){null!=document.getElementById("swiper-api")&&(stellar.loadCSS(stellar.plugins.swiper.css),stellar.loadScript(stellar.plugins.swiper.js,{defer:!0}).then(stellaris.init.swiper))}},scrollReveal:()=>{stellar.plugins.scrollreveal&&stellar.loadScript(stellar.plugins.scrollreveal.js).then(stellaris.init.scrollReveal)},lazyLoad:()=>{stellar.plugins.lazyload&&(stellar.loadScript(stellar.plugins.lazyload.js,{defer:!0}),window.lazyLoadOptions={elements_selector:".lazy"},window.addEventListener("LazyLoad::Initialized",(e=>{window.lazyLoadInstance=e.detail.instance}),!1),stellaris.init.lazyLoad())},fancyBox:()=>{if(stellar.plugins.fancybox){let e="img[fancybox]:not(.error)";stellar.plugins.fancybox.selector&&(e+=`, ${stellar.plugins.fancybox.selector}`),stellaris.pluginsConfig.fancyBoxSelector=e,stellar.loadCSS(stellar.plugins.fancybox.css),stellar.loadScript(stellar.plugins.fancybox.js,{defer:!0}).then(stellaris.init.fancyBox)}},search:()=>{stellar.search.service&&"local_search"==stellar.search.service&&stellar.loadScript(stellar.search.js,{defer:!0}).then(stellaris.init.search)},copyCode:()=>{stellar.plugins.copycode&&stellar.loadScript(stellar.plugins.copycode.js,{defer:!0})},themePlugins:()=>{if(stellar.plugins.stellar)for(let e of Object.keys(stellar.plugins.stellar))stellar.loadScript(stellar.plugins.stellar[e],{defer:!0}),"timeline"==e&&stellar.loadScript(stellar.plugins.marked)}},loadNeededCSS:()=>{["fancyBox","swiper"].forEach((e=>{stellaris.loadCSS[e]()}))},loadAllPlugins:()=>{["scrollReveal","lazyLoad","fancyBox","swiper","search","copyCode","themePlugins"].forEach((e=>{stellaris.load[e]()}))},loadNeededPlugins:()=>{["lazyLoad","fancyBox","swiper"].forEach((e=>{stellaris.load[e]()}))},init:{toc:()=>{stellaris.jQuery((()=>{var e=[];$("article.md-text :header").each((function(t,l){e.push(l)})),$(document,window).scroll((function(t){var l=$(this).scrollTop(),s=null;for(var a in e){var i=$(e[a]);i.offset().top>l+32||(s?i.offset().top>=s.offset().top&&(s=i):s=i)}if(s){$(".toc#toc a.toc-link").removeClass("active");var n="#"+s.attr("id");if("#undefined"!=n){const e='.toc#toc a.toc-link[href="'+encodeURI(n)+'"]',t=$(e);if(t.length>0){t.addClass("active");const l=document.querySelector(".widgets"),s=document.querySelector(e),a=s.getBoundingClientRect().bottom-l.getBoundingClientRect().bottom+200,i=s.getBoundingClientRect().top-l.getBoundingClientRect().top-64;i<0?l.scrollBy(0,i):a>0&&l.scrollBy(0,a)}}else $(".toc#toc a.toc-link:first").addClass("active")}}))}))},sidebar:()=>{stellaris.jQuery((()=>{$(".toc#toc a.toc-link").click((function(e){document.querySelector(".l_body").classList.remove("sidebar")}))}))},clickEvents:()=>{stellaris.jQuery((()=>{const e=$(".on-click-event");e.each((t=>{const l=$(e[t]);l.attr("onclick",l.attr("data-on-click")),l.removeAttr("data-on-click")}))}))},relativeDate:()=>{document.querySelectorAll("#post-meta time").forEach((e=>{const t=e,l=t.getAttribute("datetime");let s=util.diffDate(l,!0);s&&(t.innerText=s)}))},registerTabsTag:function(){document.querySelectorAll(".tabs .nav-tabs .tab").forEach((e=>{e.addEventListener("click",(t=>{if(t.preventDefault(),e.classList.contains("active"))return;[...e.parentNode.children].forEach((t=>{t.classList.toggle("active",t===e)}));const l=document.getElementById(e.querySelector("a").getAttribute("href").replace("#",""));[...l.parentNode.children].forEach((e=>{e.classList.toggle("active",e===l)})),l.dispatchEvent(new Event("tabs:click",{bubbles:!0}))}))})),window.dispatchEvent(new Event("tabs:register"))},outdatedCheck:()=>{if(0==stellar.article.outdate_month)return;const e=document.getElementById("outdated");if(!e)return;const t=document.getElementById("post-meta").getElementsByTagName("time");var l,s;null!==e&&(l=new Date(t[t.length-1].dateTime),((s=new Date).getFullYear()-l.getFullYear()>0||s.getMonth()-l.getMonth()>stellar.article.outdate_month)&&(e.innerText="，文章内容可能已经过时"))},search:()=>{stellar.search.service&&"local_search"==stellar.search.service&&stellaris.jQuery((()=>{const e=$("input#search-input");0!=e.length&&(e.focus((function(){let t;t=stellar.search.service in stellar.search?stellar.search[stellar.search.service].path:"/search.json",t.startsWith("/")||(t="/"+t);const l=e.attr("data-filter")||"";searchFunc(t,l,"search-input","search-result")})),e.keydown((function(e){13==e.which&&e.preventDefault()})),new MutationObserver((function(e,t){1==e.length&&(e[0].addedNodes.length?$(".search-wrapper").removeClass("noresult"):e[0].removedNodes.length&&$(".search-wrapper").addClass("noresult"))})).observe(document.querySelector("div#search-result"),{childList:!0}))}))},swiper:()=>{if(stellar.plugins.swiper&&"Swiper"in window){const e=swiper_api.getAttribute("effect")||"";window.swiper=new Swiper(".swiper#swiper-api",{slidesPerView:"auto",spaceBetween:8,centeredSlides:!0,effect:e,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},scrollReveal:()=>{if(stellar.plugins.scrollreveal&&"ScrollReveal"in window){const e="body .reveal",t=window.ScrollReveal();t.destroy(),document.querySelectorAll(e).forEach((e=>{["opacity","transform"].forEach((t=>{e.style[t]=null}))}));const{distance:l,duration:s,interval:a,scale:i}=stellar.plugins.scrollreveal;setTimeout((()=>{t.reveal(e,{distance:l,duration:s,interval:a,scale:i,easing:"ease-out"})}),50)}},lazyLoad:()=>{stellar.plugins.lazyload&&"lazyLoadInstance"in window&&window.lazyLoadInstance.update()},fancyBox:()=>{if(stellar.plugins.fancybox&&"Fancybox"in window){const e=stellaris.pluginsConfig.fancyBoxSelector;0!==document.querySelectorAll(e).length&&Fancybox.bind(e,{groupAll:!0,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(e,t,l){return l.$trigger.alt||null}})}},themePlugins:()=>{stellar.plugins.stellar&&Object.keys(stellaris.themePlugins).forEach((e=>{const t=document.querySelectorAll(e);null!=t&&t.length>0&&stellaris.jQuery((()=>$((()=>{stellaris.themePlugins[e].init()}))))}))}},initPageComponents:()=>{["toc","sidebar","clickEvents","relativeDate","registerTabsTag","outdatedCheck"].forEach((e=>{stellaris.init[e]()}))},initPlugins:()=>{["scrollReveal","lazyLoad","fancyBox","swiper","search","themePlugins"].forEach((e=>{stellaris.init[e]()}))},initOnFirstLoad:()=>{console.log(`New page loaded: ${window.location.pathname}`),stellaris.loadNeededPlugins(),stellaris.initPageComponents()},initOnPageChange:()=>{console.log(`Page loaded: ${window.location.pathname}`),stellaris.loadNeededCSS(),stellaris.loadNeededPlugins(),stellaris.initPageComponents(),stellaris.initPlugins()}};window.addEventListener("load",stellaris.loadAllPlugins,!1),window.addEventListener("load",stellaris.initOnFirstLoad,!1),InstantClick.on("change",stellaris.initOnPageChange);
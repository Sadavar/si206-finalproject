(()=>{"use strict";class t{constructor(t){this.el=t,this.eleHeight=this.el.offsetHeight,this.stickyOffset=this.el.offsetTop-this.eleHeight,this.stickyClass="is-cover-sticky",this.toggleSticky=this.toggleSticky.bind(this),this.toggleSticky(),window.addEventListener("scroll",this.toggleSticky)}toggleSticky(){if(window.scrollY>=this.stickyOffset){let t=0;const e=".header .js-Header-contents .header-sticky";[document.querySelector(e),document.getElementById("wpadminbar")].forEach((e=>{e&&(t+=e.offsetHeight)})),document.body.style.paddingTop=this.eleHeight+"px",this.el.style.top=t+"px",document.body.classList.add(this.stickyClass)}else this.el.style.top="0px",document.body.classList.remove(this.stickyClass),document.body.style.paddingTop="0px"}}window.addEventListener("load",(()=>{!function(){const e=document.querySelectorAll(".single-pmc-hubs-pro .header-cover-sticky");if(e.length>0)new t(e[0])}()}))})();
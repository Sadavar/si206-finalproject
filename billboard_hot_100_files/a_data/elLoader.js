(()=>{"use strict";function e(e,n,t,i){return new(t||(t=Promise))((function(s,c){function r(e){try{l(i.next(e))}catch(e){c(e)}}function o(e){try{l(i.throw(e))}catch(e){c(e)}}function l(e){var n;e.done?s(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,o)}l((i=i.apply(e,n||[])).next())}))}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function n(e){return"string"==typeof e&&e.length>0}function t(e){return(t=e)&&t.stack&&t.message||t instanceof Error?e:n(e)?new Error(e):new Error(String(e));var t}function i(e,n){(function({requestUrl:e="",requestType:n="POST",contentType:t="",timeout:i=3e4}){const s=new XMLHttpRequest;return s.open(n,e,!0),t.length>0&&s.setRequestHeader("Content-Type",t),s.timeout=i,s})(e).send(n)}const s={"connatix.com":"cnx","elements.video":"cnxel","thecontentserver.com":"cnxel"};function c(e){const n=e;if(n.pageUrl=function(){let e;try{e=window.top.location.href}catch(n){e=window.location&&window.location.href}return e}(),void 0===n.callStack){const e=new Error(n.message);n.callStack=e.stack||""}n.callStack=n.callStack.substring(0,500);n.ddsource="browser",n.service="player",n.ua=navigator.userAgent,i({requestUrl:"https://pl.connatix.com",requestType:"POST"},JSON.stringify(n))}function r(e,n){const t=n?"cnxOvpElLoaded":"cnxElLoaded",i=n?"cnxOvpBundleLoaded":"cnxElBundleLoaded";return new Promise((s=>{window[t]?s():(window.addEventListener(i,(()=>{window[t]=!0,s()})),function(e,n,t){const i=window.document.createElement("script");i.src=function(e,n,t){const{domain:i,env:s,ver:c,params:r}=n;let o=`cds.${i}`;return s&&(o=`cds-${s}.stg.${i}`),`//${o}/p/${c}/${t?"player":`connatix.${e}`}.js${r}`}(e,n,t),i.setAttribute("async","1"),i.setAttribute("type","text/javascript"),window.document.body.appendChild(i)}("player",e,n))}))}function o(e,n,i){var s,r;const{publisherExclusionLevel:o,loadedTimestamp:l,cmpIds:a,clientAbSettings:d,isEu:u,isOmid:m,playerSettings:p,serverAbSettings:b,tier:v,bundleAbSettings:w}=n,f=(null===(r=null===(s=null==i?void 0:i.settings)||void 0===s?void 0:s._connatixInternals)||void 0===r?void 0:r.playerSettings)||p,g=function(e,n){const t=Object.assign({},e);return t.settings||(t.settings={}),t.settings._connatixInternals||(t.settings._connatixInternals={}),t.settings._connatixInternals=Object.assign(Object.assign({},t.settings._connatixInternals),n),t}(Object.assign({},i),{cmpIds:a,clientAbSettings:d,isEu:u,isOmid:m,playerSettings:f,serverAbSettings:b,tier:v,bundleAbSettings:w});return{render(n,i){try{e?window.cnxOvpBootstrapElementsPlayer(Object.assign(Object.assign({},g),{publisherExclusionLevel:o,loadedTimestamp:l}),n,i):window.cnxBootstrapElementsPlayer(Object.assign(Object.assign({},g),{publisherExclusionLevel:o,loadedTimestamp:l}),n,i)}catch(e){const{message:n,stack:i}=t(e);c({message:"Prerender_Elements_main_initPlayer",exception:n,callStack:i,level:"Info"})}}}}(function(){return e(this,void 0,void 0,(function*(){const e=window.cnx_data_elements||window.cnx_data,{publisherExclusionLevel:n,loadedTimestamp:i,cmpIds:l,domain:a,clientAbSettings:d,eu:u,omid:m,playerSettings:p,serverAbSettings:b,tier:v,bundleAbSettings:w}=e,f=a,g=["elements.video","thecontentserver.com"].includes(f),S=s[f],y=window.parent;let E=y[S],x=[];if(E&&E.cmd||(y[S]={},y[S].cmd=[],E=y[S]),E.cmd&&Array.isArray(E.cmd)){yield r(e,g),E.cmd.length&&(x=[...E.cmd]);const s={cmpIds:l,loadedTimestamp:i,publisherExclusionLevel:n,clientAbSettings:d,playerSettings:p,serverAbSettings:b,tier:v,bundleAbSettings:w,isEu:u,isOmid:m};y[S]=o.bind(null,g,s),y[S].debug=y.cnxResources.debug,y[S].configEnums=y.cnxResources.configEnums,y[S].configEvents=y.cnxResources.configEvents,y[S].cmd={push(e){try{e()}catch(e){const{message:n,stack:i}=t(e);c({message:"Prerender_Elements_main_push_callback",level:"Info",callStack:i,exception:n})}}},x.forEach((e=>{try{e()}catch(e){const{message:n,stack:i}=t(e);c({message:"Prerender_Elements_main_commands_callback",exception:n,callStack:i,level:"Info"})}}))}}))})().catch((e=>{const{message:n,stack:i}=t(e);c({message:"Prerender_Elements_main",exception:n,callStack:i,level:"Info"})}))})();
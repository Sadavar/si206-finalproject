(()=>{"use strict";var e={955:(e,o,n)=>{n.d(o,{Iu:()=>s,Kr:()=>t,TG:()=>r,kv:()=>i,qQ:()=>a});const t="PMC: Piano: ",i=()=>{var e,o;return null===(o=null===(e=window.location)||void 0===e?void 0:e.search)||void 0===o?void 0:o.includes("pianoDebug")},r=function(e){return o=this,n=arguments,i=function*(e,o=100){for(;!e();)yield new Promise((e=>setTimeout(e,o)))},new((t=void 0)||(t=Promise))((function(e,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(o){var n;o.done?e(o.value):(n=o.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}l((i=i.apply(o,n||[])).next())}));var o,n,t,i},a=e=>{let o=e.name.replace("bound","").trim();return o||(o="Anonymous"),o},s=(e={})=>{const o=null==e?void 0:e.user_access,n=null==e?void 0:e.term,t=null==n?void 0:n.resource;return(null==t?void 0:t.name)&&""!==t.name?(null==o?void 0:o.granted)&&(/registration/i.exec(null==n?void 0:n.name)||"registration"===(null==n?void 0:n.type))?"REGISTERED":(null==o?void 0:o.granted)?"SUBSCRIBER":void 0:"KNOWN"}},45:(e,o,n)=>{n.d(o,{A:()=>a});var t=n(955);e=n.hmd(e);var i=function(e,o,n,t){return new(n||(n=Promise))((function(i,r){function a(e){try{l(t.next(e))}catch(e){r(e)}}function s(e){try{l(t.throw(e))}catch(e){r(e)}}function l(e){var o;e.done?i(e.value):(o=e.value,o instanceof n?o:new n((function(e){e(o)}))).then(a,s)}l((t=t.apply(e,o||[])).next())}))};const r={callApi:(e,...o)=>i(void 0,[e,...o],void 0,(function*(e,o={}){return yield new Promise((n=>{window.tp.api.callApi(e,o,n)})).then((n=>((0,t.kv)()&&console.log(t.Kr,"pmcPianoApi.callApi",e,o,n),n))).catch((n=>{(0,t.kv)()&&console.error(t.Kr,"pmcPianoApi.callApi",e,o,n)}))})),callProtectedApi:function(e){return i(this,void 0,void 0,(function*(){var o;const n=`${null===(o=window.pmcPianoData)||void 0===o?void 0:o.wordPressRestApiUri}${e}`;return yield fetch(n,{credentials:"include"}).then((e=>e.headers.get("content-type").includes("application/json")?e.json():e.text())).then((e=>((0,t.kv)()&&console.log(t.Kr,"pmcPianoApi.callProtectedApi",n,e),e))).catch((e=>{(0,t.kv)()&&console.error(t.Kr,"pmcPianoApi.callProtectedApi",n,e)}))}))},getLicenseeData:e=>i(void 0,void 0,void 0,(function*(){return yield r.callProtectedApi(`/licensee/${e}`)})),getUserCustomFields:e=>i(void 0,void 0,void 0,(function*(){return yield r.callProtectedApi(`/user/custom-fields/${e}`)})),getAccessList:()=>i(void 0,void 0,void 0,(function*(){return yield r.callApi("/access/list").then((({data:e})=>e))})),getConversionList:()=>i(void 0,void 0,void 0,(function*(){return yield r.callApi("/conversion/list").then((({conversions:e})=>e))}))},a=r;"undefined"!=typeof exports&&(e.exports=r)},865:(e,o,n)=>{n.d(o,{A:()=>s});var t=n(955);let i;e=n.hmd(e);let r="";const a={initialized:!1,setDataForNewsletter:!1,targetElements:{paywall:".pmc-paywall",paywallFade:"a-article-nl-fade",overlay:"div[id=piano-paywall] .tp-container-inner"},signupURLs:{billboard:"https://cloud.email.billboard.com/api/",sourcingjournal:"https://cloud.email.sourcingjournal.com/api/",sportico:"https://cloud.email.sportico.com/api/",wwd:"https://cloud.email.wwd.com/api/",variety:"https://cloud.email.variety.com/api/",rollingstone:"https://cloud.email.rollingstone.com/signup-api/"},modal:!0,emailInputFocused:!1,prepareExactTargetFormData:e=>{const o=Object.assign({__contextName:"NewsletterFormPost",__executionContext:"Post"},e.data.formData),n=new FormData;for(let[e,t]of Object.entries(o))n.append(e,t);return n},sendSignupDataToExactTarget:e=>{const o=window.pmcPiano.newsletterForm,n=o.signupURLs[r];n||console.error(t.Kr,"Invaild brand for newsletter form submission",{brand:r,signupURLs:o.signupURLs}),fetch(n,{method:"POST",mode:"no-cors",body:e}).then((e=>{(0,t.kv)()&&console.log(t.Kr,"POST request to ExactTarget successful:",e)})).catch((e=>{console.error(t.Kr,"Error sending formData to ExtactTarget:",e)}))},calculateTopOffset:()=>{var e,o,n,t;const i=(null===(e=document.querySelector("header"))||void 0===e?void 0:e.offsetHeight)||0,r=(null===(o=document.querySelector(".js-Header-contents"))||void 0===o?void 0:o.offsetHeight)||0,a=Math.min(Math.max(i,r)+20,100),s=null===(n=document.querySelector(".pmc-paywall > .jw-state-playing"))||void 0===n?void 0:n.offsetHeight,l=null===(t=document.querySelector(".live-event-banner > .banner-regular"))||void 0===t?void 0:t.offsetHeight;if(window.innerWidth<768){if(s>0)return a+s;if(l>0)return a+l}return a},stickyDismissableRegwall:()=>{const e=window.pmcPiano.newsletterForm,o=document.querySelector(e.targetElements.paywall),n=document.querySelector(`${e.targetElements.overlay} iframe`);o&&n?(o.classList.add(e.targetElements.paywallFade),window.addEventListener("scroll",(()=>{const n=document.querySelector(e.targetElements.overlay),t=o.getBoundingClientRect().top+window.scrollY,i=e.calculateTopOffset();n.style.top="0",n.style.zIndex="2",n.style.transition="top 0.1s ease 0s";const r=(o.getBoundingClientRect().top<=i?Math.min(Math.max(0,window.scrollY+i-t),o.clientHeight-n.clientHeight):0)+(e.emailInputFocused?-150:0);n.style.position="absolute",n.style.top=`${r}px`}))):setTimeout(e.stickyDismissableRegwall)},registerPostMessageListener:()=>{const e=window.pmcPiano.newsletterForm;window.addEventListener("message",(o=>{var n,a;if(o.origin.includes("tinypass.com")&&"string"==typeof o.type)switch(o.data.type){case"piano_template_newsletter_close_button_clicked":null===(n=document.querySelector(e.targetElements.paywall))||void 0===n||n.classList.remove(e.targetElements.paywallFade),null===(a=document.querySelector(e.targetElements.overlay))||void 0===a||a.classList.add("lrv-a-hidden");break;case"piano_template_newsletter_email_input":e.emailInputFocused=o.data.focused,window.dispatchEvent(new Event("scroll",{bubbles:!0}));break;case"piano_template_newsletter_submit_button_clicked":r=o.data.brand,i=e.prepareExactTargetFormData(o),e.sendSignupDataToExactTarget(i);break;case"piano_regwall_register_button_clicked":r=o.data.brand,i=e.prepareExactTargetFormData(o),e.setDataForNewsletter=!0,(0,t.kv)()&&console.log(t.Kr,"Data Stored for Registration",i)}}))},registrationSuccess:function(e){const o=e.user.email;o&&this.setDataForNewsletter&&(this.setDataForNewsletter=!1,(0,t.kv)()&&console.log(t.Kr,"Registration success",e),i.set("EmailAddress",o),setTimeout(this.sendSignupDataToExactTarget(i),1e3))},initialize:()=>{const e=window.pmcPiano.newsletterForm;e.initialized?(0,t.kv)()&&console.log(t.Kr,"Newsletter Form is already initialized"):((0,t.kv)()&&console.log(t.Kr,"Initializing Newsletter Form"),e.modal&&e.stickyDismissableRegwall(),e.registerPostMessageListener(),window.pmcPiano.callbacks.onRegistration(e.registrationSuccess.bind(e)),e.initialized=!0)}},s=a;"undefined"!=typeof exports&&(e.exports=a)},16:(e,o,n)=>{n.d(o,{A:()=>r});var t=n(955);e=n.hmd(e);const i={loadSDK:function(){var e;if(!(null===(e=window.pmcPianoData)||void 0===e?void 0:e.sdkUri))return void console.error(t.Kr,"window.pmcPianoData.sdkUri not defined",window.pmcPianoData);const o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=window.pmcPianoData.sdkUri,document.head.appendChild(o)},prime:function(){var e,o,n,i,r,a,s,l,d;if(window.tp=window.tp||[],!(null===(e=window.pmcPianoData)||void 0===e?void 0:e.aid))return void console.error(t.Kr,"window.pmcPianoData.aid not defined",window.pmcPianoData);window.tp.push(["setAid",null===(o=window.pmcPianoData)||void 0===o?void 0:o.aid]),(null===(n=window.pmcPianoData)||void 0===n?void 0:n.cxSiteId)&&((0,t.kv)()&&console.log(t.Kr,"tp.push: [setCxenseSiteID="+window.pmcPianoData.cxSiteId+"]"),window.tp.push(["setCxenseSiteId",window.pmcPianoData.cxSiteId])),window.tp.push(["setSandbox",!!window.location.host.match(/test|pmcqa|go-vip|lndo.site/)]),window.tp.push(["setDebug",(0,t.kv)()]),window.tp.push(["setUsePianoIdUserProvider",!0]),Object.entries(null!==(r=null===(i=window.pmcPianoData)||void 0===i?void 0:i.customVariables)&&void 0!==r?r:{}).map((([e,o])=>{(0,t.kv)()&&console.log(t.Kr,"tp.push: [setCustomVariable, "+e+"="+o+"]"),window.tp.push(["setCustomVariable",e,o])}));const c=window.pmc.tracking.get_properties();if(window.tp.push(["setPageURL",window.location.href]),c.forEach((function(e){(0,t.kv)()&&console.log(t.Kr,"tp.push: [setCustomVariable, pmc-"+e.name+"="+e.value+"]"),window.tp.push(["setCustomVariable","pmc-"+e.name,e.value])})),null===(a=window.pmcPianoData)||void 0===a?void 0:a.author){const e=[].concat(window.pmcPianoData.author).join(",");(0,t.kv)()&&console.log(t.Kr,"tp.push: [setContentAuthor="+e+"]"),window.tp.push(["setContentAuthor",e])}(null===(s=window.pmcPianoData)||void 0===s?void 0:s.tags)&&0<(null===(l=window.pmcPianoData.tags)||void 0===l?void 0:l.length)&&((0,t.kv)()&&console.log(t.Kr,"tp.push: [setTags=]",window.pmcPianoData.tags),window.tp.push(["setTags",null!==(d=window.pmcPianoData.tags)&&void 0!==d?d:[]]))},setCallbacks:function(){var e,o;const n=()=>{window.pmcPiano.piano.setGA4Config(),window.tp.experience.execute()};null===(o=null===(e=window.pmcPiano)||void 0===e?void 0:e.callbacks)||void 0===o||o.onInit({knownUser:n,unknownUser:n}).onLogin((e=>{"PIANOID"===e.source&&!0!==e.registration&&window.pmcPiano.piano.reRenderExperiences()})).onLogout(this.reRenderExperiences.bind(this))},setGA4Config:function(){var e,o,n,i;const r=null===(e=window.tp.pianoId.getUser())||void 0===e?void 0:e.uid,a=null===(i=null===(n=null===(o=window.pmcPianoData)||void 0===o?void 0:o.trackingPixels)||void 0===n?void 0:n.ga)||void 0===i?void 0:i.measurement_id;if(!a)return void console.error(t.Kr,"GA4 measurement_id is undefined.",window.pmcPianoData);const s={send_page_view:!1,page_location:document.URL,page_title:document.title};r&&(s.user_id=r),window.tp.setGA4Config({measurementId:a,eventParameters:s}),(0,t.kv)()&&console.log(t.Kr,"tp.setGA4Config measurement id",window.tp.ga4Service.getMeasurementId())},reRenderExperiences:function(){(0,t.kv)()&&console.log(t.Kr,"Re-rendering Experiences"),window.tp.offer.close(),window.tp.offer.closeInline("#piano-paywall"),window.tp.offer.closeInline("#piano-right-rail"),window.tp.offer.closeInline("#piano-mid-river"),window.tp.offer.closeInline("#piano-sticky-footer"),window.tp.offer.closeInline("#piano-fly-out"),window.tp.offer.closeInline("#piano-module-header-link-vy"),window.tp.offer.closeInline("#piano-header-subscribe-button"),window.tp.offer.closeInline("#piano-header-sub-button");const e=document.querySelector(".pmc-paywall");e&&(e.classList.remove("a-article-cropped"),e.classList.remove("piano-truncate-content")),window.tp.experience.execute()}},r=i;"undefined"!=typeof exports&&(e.exports=i)},438:(e,o,n)=>{n.d(o,{A:()=>a});var t=n(955);e=n.hmd(e);var i=function(e,o,n,t){return new(n||(n=Promise))((function(i,r){function a(e){try{l(t.next(e))}catch(e){r(e)}}function s(e){try{l(t.throw(e))}catch(e){r(e)}}function l(e){var o;e.done?i(e.value):(o=e.value,o instanceof n?o:new n((function(e){e(o)}))).then(a,s)}l((t=t.apply(e,o||[])).next())}))};const r={cookieLabel:"pmc_piano_reporting",reporting:{entitlements:"",user_type:"ANONYMOUS",acct_id:null,acct_type:null,org_id:null,org_name:null,paywall_logged_in:!1},initialize:function(){var e;const o=this;(0,t.kv)()&&console.log(t.Kr,"Initializing Piano Reporting Cookie"),null===(e=window.pmcPiano)||void 0===e||e.callbacks.onInit({knownUser:()=>{o.setDataForAuthUser()},unknownUser:()=>i(this,void 0,void 0,(function*(){o.hasReportingCookie()||(yield o.set(JSON.stringify(o.reporting)))}))}).onKnownIP((function(){o.reporting.acct_type="ip",o.reporting.user_type="KNOWN",o.set(JSON.stringify(o.reporting))})).onLogin((()=>{o.setDataForAuthUser()})).onLogout(o.delete.bind(o))},set:function(e){return i(this,void 0,void 0,(function*(){(0,t.kv)()&&console.log(t.Kr,"Setting pmc_piano_reporting cookie",e),yield(0,t.TG)((()=>void 0!==window.OptanonActiveGroups)),window.pmc.cookie.set(this.cookieLabel,e,604800,"/","targeting",this.tld())}))},delete:function(){(0,t.kv)()&&console.log(t.Kr,"Deleting pmc_piano_reporting cookie"),window.pmc.cookie.expire(this.cookieLabel,"/",this.tld())},getDataForAuthUser:function(){return i(this,void 0,void 0,(function*(){var e,o,n,i,r;let a=null!==(e=yield window.pmcPiano.api.getConversionList())&&void 0!==e?e:[];const s=null!==(o=a.sort(((e,o)=>o.create_date-e.create_date))[0])&&void 0!==o?o:void 0;a=a.filter((e=>{var o;return null===(o=null==e?void 0:e.user_access)||void 0===o?void 0:o.granted})),a=0>=a.length?[s]:(e=>{let o=[];return 1>=e.length?e:(["( |^)corporate","( |^)education","( |^)partner","( |^)agent","( |^)billboard member","( |^)employee","( |^)comp","( |^)(limited|registration)"].forEach((n=>{var t,i,r;let a=0;for(;a<e.length;a++){const s=e[a];(null===(r=null===(i=null===(t=null==s?void 0:s.term)||void 0===t?void 0:t.resource)||void 0===i?void 0:i.name)||void 0===r?void 0:r.match(new RegExp(n,"i")))&&(o=[...o,s],e.splice(a,1),a--)}})),0<e.length&&(o=[...e,...o]),o)})([...a]);const l=((e,o)=>{var n,i;const r=e=>{var o,n;const t=null===(n=null===(o=null==e?void 0:e.term)||void 0===o?void 0:o.resource.name)||void 0===n?void 0:n.toLocaleLowerCase();return(null==t?void 0:t.match(/( |^)agent/))?"agent":(null==t?void 0:t.match(/( |^)(corporate|education|employee|partner)/))?"site_license":"individual"},a=r(e);if(1>=o.length)return a;const s=o.slice(1).map((e=>r(e))),l="individual"===a,d=s.includes("agent"),c=s.includes("site_license");return l&&d&&c?"individual|site_license|agent":l&&c&&!d?"individual|site_license":l&&d&&!c?"individual|agent":"site_license"===a&&d?"site_license|agent":((0,t.kv)()&&console.log(t.Kr,`User might have duplicate resources. userId: ${null===(i=null===(n=null==e?void 0:e.user_access)||void 0===n?void 0:n.user)||void 0===i?void 0:i.uid} accountType: ${a}`),a)})(a[0],a),d=Array.from(new Set(a.map((e=>{var o;return null===(o=null==e?void 0:e.term)||void 0===o?void 0:o.resource.name})))).join("|")||void 0,c=Array.from(new Set(a.map((e=>{var o;return null===(o=null==e?void 0:e.term)||void 0===o?void 0:o.name})))).join("|")||void 0,u=Array.from(new Set(a.map((e=>(null==e?void 0:e.user_access)||(null==e?void 0:e.term)?(0,t.Iu)(e):void 0)))).sort(((e,o)=>e.localeCompare(o))).join("|")||void 0,p=[];for(const e of a)(null===(n=null==e?void 0:e.term)||void 0===n?void 0:n.term_id)&&(w=null==e?void 0:e.term)&&("email_domain_contract"===(null==w?void 0:w.type)||"specific_email_addresses_contract"===(null==w?void 0:w.type))&&p.push(yield window.pmcPiano.api.getLicenseeData(e.term.term_id));var w;const v=Array.from(new Set(p.map((e=>null==e?void 0:e.id)))).join("|")||void 0,m=Array.from(new Set(p.map((e=>null==e?void 0:e.name)))).join("|")||void 0;return{accessGrantedStatus:null!==(r=null===(i=a[0])||void 0===i?void 0:i.user_access.granted)&&void 0!==r&&r,accountTermType:l,resourceName:d,termName:c,orgId:v,orgName:m,userType:u}}))},setDataForAuthUser:function(){return i(this,void 0,void 0,(function*(){const e=this,o=window.tp.pianoId.getUser();let n=e.hasReportingCookie();if((null==n?void 0:n.acct_id)===o.uid)return Promise.resolve();const t=yield this.getDataForAuthUser(),i={acct_id:o.uid,acct_type:t.accountTermType,entitlements:t.resourceName,paywall_logged_in:t.accessGrantedStatus,user_type:t.userType,org_id:t.orgId||null,org_name:t.orgName||null};return this.reporting=Object.assign(Object.assign({},e.reporting),i),yield e.set(JSON.stringify(this.reporting)),Promise.resolve()}))},hasReportingCookie:function(){try{return JSON.parse(window.pmc.cookie.get("pmc_piano_reporting")||null)}catch(e){return(0,t.kv)()&&console.log(t.Kr,"No reporting cookie",e.toString()),!1}},tld:function(){return new URL(window.location.href).hostname.split(/\./).slice(-2).join(".")}},a=r;"undefined"!=typeof exports&&(e.exports=r)},223:(e,o,n)=>{n.d(o,{A:()=>r});var t=n(955);e=n.hmd(e);const i={hookIntoPmcPiano:function(){var e,o,n,t;const i=this;null===(o=null===(e=window.pmcPiano)||void 0===e?void 0:e.callbacks)||void 0===o||o.onInit({knownUser:()=>{i.setAuthenticatedUserId(),i.maybeRenderMyAccountPage(),i.maybeRenderPasswordResetPage()},unknownUser:()=>{i.maybeRenderMyAccountPage(),i.maybeRenderPasswordResetPage()}}).onLogin((()=>{i.setAuthenticatedUserId(),i.maybeRenderMyAccountPage(),i.maybeRenderPasswordResetPage()})).onLogout(i.maybeRenderMyAccountPage.bind(i)).onRegistration(i.onRegistration.bind(i)),null===(n=window.tp)||void 0===n||n.push(["addHandler","checkoutComplete",function(){/reader_id=amp/gi.exec(window.location.search)&&window.close()}]),null===(t=window.tp)||void 0===t||t.push(["addHandler","externalCheckoutComplete",function(){location.reload()}]),window.addEventListener("message",i.reloadOfferModal.bind(i))},maybeRenderMyAccountPage:function(){const e=".js-subscription-my-account-component";document.querySelector(e)&&window.tp.myaccount.show({displayMode:"inline",containerSelector:e})},maybeRenderPasswordResetPage:function(){if(!document.querySelector(".js-subscription-password-reset-component"))return"password reset element missing";const e=window.location.search.match(/reset_token=([A-Za-z0-9]+)/);if(!e)return"invalid token";window.addEventListener("message",this.redirectHomeOnClosedMessage.bind(this)),window.tp.pianoId.show({resetPasswordToken:e[1],loggedIn:function(){window.location="/"}})},onRegistration:()=>{let e=!1;window.tp.push(["addHandler","checkoutClose",function(o){e||(e=!0,window.pmcPiano.piano.reRenderExperiences())}])},redirectHomeOnClosedMessage:function(e){if(!e.origin.endsWith("tinypass.com"))return!1;let o;try{o=JSON.parse(e.data)}catch(e){return!1}return!!(o.sender&&o.event&&o.sender.startsWith("piano-id")&&"closed"===o.event)&&(window.location="/",!0)},setAuthenticatedUserId:function(){const e=window.tp.pianoId.getUser(),o=window.blogherads||{};(0,t.kv)()&&console.log(t.Kr,"wordPressThemes.setAuthenticatedUserId",e.uid),o.adq=o.adq||[],o.adq.push((function(){try{o.setAuthenticatedUserId(e.uid,"piano")}catch(e){}}))},registerStickyFooter:e=>{var o,n;const t=window.pmcPiano.wordPressThemes;null===(n=null===(o=window.pmcPiano)||void 0===o?void 0:o.callbacks)||void 0===n||n.onInit({unknownUser:(()=>{const o=document.querySelector(e.className||".js-subscription-sticky-footer");if(!o)return;const n=document.getElementsByClassName(e.targetClassName||"footer"),i=()=>{const e=()=>{const e=window.scrollY,t=window.innerHeight,i=n[0].offsetTop;return e+t+("static"===o.style.position?o.clientHeight:0)>i};setTimeout(function(){this.stickyFooterPrevTime=this.stickyFooterPrevTime||Date.now(),this.stickyFooterPrevTime&&500>Date.now()-this.stickyFooterPrevTime||(this.stickyFooterPrevTime=Date.now(),e()||"fixed"===o.style.position?e()&&"static"!==o.style.position&&(o.style.position="static"):(o.style.position="fixed",o.style.bottom="0px"))}.bind(t),500)};i(),window.addEventListener("load",i),window.addEventListener("scroll",i),window.addEventListener("resize",i)}).bind(t)})},reloadOfferModal:function(e){var o,n,t,i,r;if(!e.origin.endsWith("tinypass.com")||!(null===(n=null===(o=window.location)||void 0===o?void 0:o.pathname)||void 0===n?void 0:n.match(/^\/subscribe/))||!(null===(i=null===(t=window.location)||void 0===t?void 0:t.search)||void 0===i?void 0:i.match(/contractId=/)))return!1;let a;try{a=JSON.parse(e.data)}catch(e){return!1}return!(!(null===(r=null==a?void 0:a.sender)||void 0===r?void 0:r.startsWith("piano-id"))||"closed"!==(null==a?void 0:a.event)||window.tp.pianoId.isUserValid()||(window.tp.offer.reloadAll(),0))}},r=i;"undefined"!=typeof exports&&(e.exports=i)}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={id:t,loaded:!1,exports:{}};return e[t](r,r.exports,n),r.loaded=!0,r.exports}n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};n.r(t),n.d(t,{pmcPiano:()=>g});var i=n(45),r=n(955);const a=(e={})=>{void 0!==e.knownUser&&window.tp.user.isUserValid()&&((0,r.kv)()&&console.log(r.Kr,"init","Firing known user callback",(0,r.qQ)(e.knownUser)),e.knownUser()),void 0===e.unknownUser||window.tp.user.isUserValid()||((0,r.kv)()&&console.log(r.Kr,"init","Firing unknown user callback",(0,r.qQ)(e.unknownUser)),e.unknownUser())},s=(e,o)=>{(0,r.kv)()&&console.log(r.Kr,"loginSuccess","Firing callback",(0,r.qQ)(e),o),e(o)},l=e=>{(0,r.kv)()&&console.log(r.Kr,"logout","Firing callback",(0,r.qQ)(e)),e()},d=(e,o)=>{(0,r.kv)()&&console.log(r.Kr,"registrationSuccess","Firing callback",(0,r.qQ)(e),o),e(o)},c={onInit:e=>(window.tp=window.tp||[],window.tp.push(["init",a.bind(void 0,e)]),window.pmcPiano.callbacks),onKnownIP:e=>{var o;return null===(o=window.pmcPiano.ipAuth)||void 0===o||o.onKnownIP(e),window.pmcPiano.callbacks},onLogin:e=>(window.tp=window.tp||[],window.tp.push(["addHandler","loginSuccess",s.bind(void 0,e)]),window.pmcPiano.callbacks),onLogout:e=>(window.tp=window.tp||[],window.tp.push(["addHandler","logout",l.bind(void 0,e)]),window.pmcPiano.callbacks),onRegistration:e=>(window.tp=window.tp||[],window.tp.push(["addHandler","registrationSuccess",d.bind(void 0,e)]),window.pmcPiano.callbacks)},u={callbacks:[],doCallbacks:function(){this.callbacks.forEach((e=>{(0,r.kv)()&&console.log(r.Kr,"Running known IP callback",(0,r.qQ)(e)),e()}))},hasKnownIP:!1,onKnownIP:function(e){this.hasKnownIP?e():this.callbacks.push(e)},setKnownIP:function(){(0,r.kv)()&&console.log(r.Kr,"User has a known IP Address"),this.hasKnownIP=!0,this.doCallbacks()}};var p=n(16),w=n(438),v=n(223),m=n(865);const g={api:i.A,callbacks:c,ipAuth:u,piano:p.A,reportingCookie:w.A,wordPressThemes:v.A,newsletterForm:m.A};window.tp=window.tp||[],g.piano.prime(),g.piano.loadSDK(),window.tp.push(["init",()=>{const e=window.pmcPiano;(0,r.kv)()&&console.log(r.Kr,"PMC: Piano: Initializing Piano"),e.piano.setCallbacks(),e.reportingCookie.initialize(),e.wordPressThemes.hookIntoPmcPiano()}]);var h=window;for(var f in t)h[f]=t[f];t.__esModule&&Object.defineProperty(h,"__esModule",{value:!0})})();
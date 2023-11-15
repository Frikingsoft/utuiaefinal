import{a3 as U,t as $,y as I,r as f,i as P,b as Y,K as E,a4 as C,B as G,R as J,o as K,q as X,n as W,a5 as Q,a6 as ee,a7 as te,j as re,w as j,c as T,k as R}from"./index-f209e740.js";import{V as ie}from"./VApp-da4c15df.js";import"./layout-42d4d558.js";(function(){try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".mapdiv[data-v-174b771e]{width:100%;height:100%}.info-window-wrapper[data-v-90174664]{display:none}.mapdiv .info-window-wrapper[data-v-90174664]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var oe=Object.defineProperty,ae=(r,e,t)=>e in r?oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,N=(r,e,t)=>(ae(r,typeof e!="symbol"?e+"":e,t),t);const D=Symbol("map"),V=Symbol("api"),ne=Symbol("marker"),se=Symbol("markerCluster"),L=Symbol("CustomMarker"),le=Symbol("mapTilesLoaded"),F=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ce(r,e,t,a){function i(o){return o instanceof t?o:new t(function(n){n(o)})}return new(t||(t=Promise))(function(o,n){function u(c){try{g(a.next(c))}catch(l){n(l)}}function m(c){try{g(a.throw(c))}catch(l){n(l)}}function g(c){c.done?o(c.value):i(c.value).then(u,m)}g((a=a.apply(r,e||[])).next())})}var ue=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var a,i,o;if(Array.isArray(e)){if(a=e.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),a=o.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=a;i--!==0;){var n=o[i];if(!r(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const B="__googleMapsScriptId";var S;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(S||(S={}));class k{constructor({apiKey:e,authReferrerPolicy:t,channel:a,client:i,id:o=B,language:n,libraries:u=[],mapIds:m,nonce:g,region:c,retries:l=3,url:d="https://maps.googleapis.com/maps/api/js",version:h}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=a,this.client=i,this.id=o||B,this.language=n,this.libraries=u,this.mapIds=m,this.nonce=g,this.region=c,this.retries=l,this.url=d,this.version=h,k.instance){if(!ue(this.options,k.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(k.instance.options)}`);return k.instance}k.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?S.FAILURE:this.done?S.SUCCESS:this.loading?S.LOADING:S.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(a=>{a?t(a.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const a={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(a).forEach(o=>!a[o]&&delete a[o]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(o=>{let n,u,m,g="The Google Maps JavaScript API",c="google",l="importLibrary",d="__ib__",h=document,s=window;s=s[c]||(s[c]={});const p=s.maps||(s.maps={}),v=new Set,y=new URLSearchParams,w=()=>n||(n=new Promise((b,O)=>ce(this,void 0,void 0,function*(){var _;yield u=h.createElement("script"),u.id=this.id,y.set("libraries",[...v]+"");for(m in o)y.set(m.replace(/[A-Z]/g,x=>"_"+x[0].toLowerCase()),o[m]);y.set("callback",c+".maps."+d),u.src=this.url+"?"+y,p[d]=b,u.onerror=()=>n=O(Error(g+" could not load.")),u.nonce=this.nonce||((_=h.querySelector("script[nonce]"))===null||_===void 0?void 0:_.nonce)||"",h.head.append(u)})));p[l]?console.warn(g+" only loads once. Ignoring:",o):p[l]=(b,...O)=>v.add(b)&&w().then(()=>p[l](b,...O))})(a);const i=this.libraries.map(o=>this.importLibrary(o));i.length||i.push(this.importLibrary("core")),Promise.all(i).then(()=>this.callback(),o=>{const n=new ErrorEvent("error",{error:o});this.loadErrorCallback(n)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function de(r){return class extends r.OverlayView{constructor(e){super(),N(this,"element"),N(this,"opts");const{element:t,...a}=e;this.element=t,this.opts=a,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof r.LatLng?this.opts.position:new r.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const a=this.element.offsetHeight,i=this.element.offsetWidth;let o,n;switch(this.opts.anchorPoint){case"TOP_CENTER":o=t.x-i/2,n=t.y;break;case"BOTTOM_CENTER":o=t.x-i/2,n=t.y-a;break;case"LEFT_CENTER":o=t.x,n=t.y-a/2;break;case"RIGHT_CENTER":o=t.x-i,n=t.y-a/2;break;case"TOP_LEFT":o=t.x,n=t.y;break;case"TOP_RIGHT":o=t.x-i,n=t.y;break;case"BOTTOM_LEFT":o=t.x,n=t.y-a;break;case"BOTTOM_RIGHT":o=t.x-i,n=t.y-a;break;default:o=t.x-i/2,n=t.y-a/2}this.element.style.left=o+"px",this.element.style.top=n+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...a}=e;this.element=t,this.opts=a,this.draw()}}}let M;const A=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","heading_changed","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed"],pe=U({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:A,setup(r,{emit:e}){const t=f(),a=f(!1),i=f(),o=f(),n=f(!1);I(D,i),I(V,o),I(le,n);const u=()=>{const l={...r};Object.keys(l).forEach(s=>{l[s]===void 0&&delete l[s]});const d=s=>{var p;return s?{position:(p=o.value)==null?void 0:p.ControlPosition[s]}:{}},h={scaleControlOptions:r.scaleControlStyle?{style:r.scaleControlStyle}:{},panControlOptions:d(r.panControlPosition),zoomControlOptions:d(r.zoomControlPosition),rotateControlOptions:d(r.rotateControlPosition),streetViewControlOptions:d(r.streetViewControlPosition),fullscreenControlOptions:d(r.fullscreenControlPosition),disableDefaultUI:r.disableDefaultUi};return{...l,...h}},m=E([o,i],([l,d])=>{const h=l,s=d;h&&s&&(h.event.addListenerOnce(s,"tilesloaded",()=>{n.value=!0}),setTimeout(m,0))},{immediate:!0}),g=()=>{try{const{apiKey:l,region:d,version:h,language:s,libraries:p}=r;M=new k({apiKey:l,region:d,version:h,language:s,libraries:p})}catch(l){console.error(l)}},c=l=>{o.value=C(l.maps),i.value=C(new l.maps.Map(t.value,u()));const d=de(o.value);o.value[L]=d,A.forEach(s=>{var p;(p=i.value)==null||p.addListener(s,v=>e(s,v))}),a.value=!0;const h=Object.keys(r).filter(s=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom"].includes(s)).map(s=>$(r,s));E([()=>r.center,()=>r.zoom,...h],([s,p],[v,y])=>{var w,b,O;const{center:_,zoom:x,...Z}=u();(w=i.value)==null||w.setOptions(Z),p!==void 0&&p!==y&&((b=i.value)==null||b.setZoom(p));const H=!v||s.lng!==v.lng||s.lat!==v.lat;s&&H&&((O=i.value)==null||O.panTo(s))})};return J(()=>{r.apiPromise&&r.apiPromise instanceof Promise?r.apiPromise.then(c):(g(),M.load().then(c))}),G(()=>{var l;n.value=!1,i.value&&((l=o.value)==null||l.event.clearInstanceListeners(i.value))}),{mapRef:t,ready:a,map:i,api:o,mapTilesLoaded:n}}}),he=(r,e)=>{const t=r.__vccOpts||r;for(const[a,i]of e)t[a]=i;return t},ge={ref:"mapRef",class:"mapdiv"};function me(r,e,t,a,i,o){return K(),X("div",null,[W("div",ge,null,512),Q(r.$slots,"default",ee(te({ready:r.ready,map:r.map,api:r.api,mapTilesLoaded:r.mapTilesLoaded})),void 0,!0)])}const ve=he(pe,[["render",me],["__scopeId","data-v-174b771e"]]);function ye(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fe=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var a,i,o;if(Array.isArray(e)){if(a=e.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),a=o.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=a;i--!==0;){var n=o[i];if(!r(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const be=ye(fe),ke=r=>r==="Marker",we=r=>r===L,Oe=(r,e,t,a)=>{const i=f(),o=P(D,f()),n=P(V,f()),u=P(se,f()),m=Y(()=>!!(u.value&&n.value&&(i.value instanceof n.value.Marker||i.value instanceof n.value[L])));return E([o,t],(g,[c,l])=>{var d,h,s;const p=!be(t.value,l)||o.value!==c;!o.value||!n.value||!p||(i.value?(i.value.setOptions(t.value),m.value&&((d=u.value)==null||d.removeMarker(i.value),(h=u.value)==null||h.addMarker(i.value))):(ke(r)?i.value=C(new n.value[r](t.value)):we(r)?i.value=C(new n.value[r](t.value)):i.value=C(new n.value[r]({...t.value,map:o.value})),m.value?(s=u.value)==null||s.addMarker(i.value):i.value.setMap(o.value),e.forEach(v=>{var y;(y=i.value)==null||y.addListener(v,w=>a(v,w))})))},{immediate:!0}),G(()=>{var g,c;i.value&&((g=n.value)==null||g.event.clearInstanceListeners(i.value),m.value?(c=u.value)==null||c.removeMarker(i.value):i.value.setMap(null))}),i},z=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],Se=U({name:"Marker",props:{options:{type:Object,required:!0}},emits:z,setup(r,{emit:e,expose:t,slots:a}){const i=$(r,"options"),o=Oe("Marker",z,i,e);return I(ne,o),t({marker:o}),()=>{var n;return(n=a.default)==null?void 0:n.call(a)}}});F.concat(["bounds_changed"]);F.concat(["center_changed","radius_changed"]);var q;(function(r){r.CLUSTERING_BEGIN="clusteringbegin",r.CLUSTERING_END="clusteringend",r.CLUSTER_CLICK="click"})(q||(q={}));Object.values(q);const Pe={__name:"Contacto",setup(r){const e={lat:-32.3705645,lng:-54.1635716};return(t,a)=>(K(),re(ie,null,{default:j(()=>[T(R(ve),{"api-key":"YOUR_GOOGLE_MAPS_API_KEY",style:{width:"100%",height:"500px"},center:e,zoom:15},{default:j(()=>[T(R(Se),{options:{position:e}},null,8,["options"])]),_:1})]),_:1}))}};export{Pe as default};

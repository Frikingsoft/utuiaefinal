import{m as P,u as I,a as J}from"./VRow-4bed106c.js";import{j as V,q as G,e as l,i as _,I as p,m as K,l as N,n as S,J as $,O as Q}from"./index-d1c422f8.js";import{j as A,k as D,s as k,g as C,m as U,b as X,G as Y,I as Z,J as ee,c as te,l as ae,n as ne,R as ie,d as se,p as re,q as le,e as de,H as ce,K as oe,M as ue,f as fe,o as ve,L as me,r as he}from"./VAvatar-7d52ba1f.js";import{m as ge,u as pe,V as be}from"./VImg-e96011ea.js";class b{constructor(s){let{x:a,y:t,width:i,height:n}=s;this.x=a,this.y=t,this.width=i,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function _e(e,s){return{x:{before:Math.max(0,s.left-e.left),after:Math.max(0,e.right-s.right)},y:{before:Math.max(0,s.top-e.top),after:Math.max(0,e.bottom-s.bottom)}}}function De(e){const s=e.getBoundingClientRect(),a=getComputedStyle(e),t=a.transform;if(t){let i,n,r,d,c;if(t.startsWith("matrix3d("))i=t.slice(9,-1).split(/, /),n=+i[0],r=+i[5],d=+i[12],c=+i[13];else if(t.startsWith("matrix("))i=t.slice(7,-1).split(/, /),n=+i[0],r=+i[3],d=+i[4],c=+i[5];else return new b(s);const o=a.transformOrigin,u=s.x-d-(1-n)*parseFloat(o),f=s.y-c-(1-r)*parseFloat(o.slice(o.indexOf(" ")+1)),v=n?s.width/n:e.offsetWidth+1,m=r?s.height/r:e.offsetHeight+1;return new b({x:u,y:f,width:v,height:m})}else return new b(s)}function Oe(e,s,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(s,a)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(i=>{t.onfinish=()=>{i(t)}})),t}const Be="cubic-bezier(0.4, 0, 0.2, 1)",Te="cubic-bezier(0.0, 0, 0.2, 1)",Le="cubic-bezier(0.4, 0, 1, 1)";const ye=V()({name:"VCardActions",props:P(),setup(e,s){let{slots:a}=s;return G({VBtn:{variant:"text"}}),I(()=>{var t;return l("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),xe=A("v-card-subtitle"),Ce=A("v-card-title"),Pe=_({appendAvatar:String,appendIcon:p,prependAvatar:String,prependIcon:p,subtitle:String,title:String,...P(),...D()},"VCardItem"),Ie=V()({name:"VCardItem",props:Pe(),setup(e,s){let{slots:a}=s;return I(()=>{var o;const t=!!(e.prependAvatar||e.prependIcon),i=!!(t||a.prepend),n=!!(e.appendAvatar||e.appendIcon),r=!!(n||a.append),d=!!(e.title||a.title),c=!!(e.subtitle||a.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[i&&l("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?l(C,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&l(k,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),l("div",{class:"v-card-item__content"},[d&&l(Ce,{key:"title"},{default:()=>{var u;return[((u=a.title)==null?void 0:u.call(a))??e.title]}}),c&&l(xe,{key:"subtitle"},{default:()=>{var u;return[((u=a.subtitle)==null?void 0:u.call(a))??e.subtitle]}}),(o=a.default)==null?void 0:o.call(a)]),r&&l("div",{key:"append",class:"v-card-item__append"},[a.append?l(C,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):n&&l(k,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=A("v-card-text"),Ae=_({appendAvatar:String,appendIcon:p,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...U(),...P(),...D(),...ge(),...X(),...Y(),...Z(),...ee(),...te(),...ae(),...J(),...K(),...ne({variant:"elevated"})},"VCard"),Me=V()({name:"VCard",directives:{Ripple:ie},props:Ae(),setup(e,s){let{attrs:a,slots:t}=s;const{themeClasses:i}=N(e),{borderClasses:n}=se(e),{colorClasses:r,colorStyles:d,variantClasses:c}=re(e),{densityClasses:o}=le(e),{dimensionStyles:u}=pe(e),{elevationClasses:f}=de(e),{loaderClasses:v}=ce(e),{locationStyles:m}=oe(e),{positionClasses:O}=ue(e),{roundedClasses:B}=fe(e),h=ve(e,a),T=S(()=>e.link!==!1&&h.isLink.value),g=S(()=>!e.disabled&&e.link!==!1&&(e.link||h.isClickable.value));return I(()=>{const L=T.value?"a":e.tag,M=!!(t.title||e.title),W=!!(t.subtitle||e.subtitle),j=M||W,E=!!(t.append||e.appendAvatar||e.appendIcon),F=!!(t.prepend||e.prependAvatar||e.prependIcon),q=!!(t.image||e.image),z=j||F||E,H=!!(t.text||e.text);return $(l(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},i.value,n.value,r.value,o.value,f.value,v.value,O.value,B.value,c.value,e.class],style:[d.value,u.value,m.value,e.style],href:h.href.value,onClick:g.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var R;return[q&&l("div",{key:"image",class:"v-card__image"},[t.image?l(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(be,{key:"image-img",cover:!0,src:e.image},null)]),l(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),z&&l(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),H&&l(Ve,{key:"text"},{default:()=>{var w;return[((w=t.text)==null?void 0:w.call(t))??e.text]}}),(R=t.default)==null?void 0:R.call(t),t.actions&&l(ye,null,{default:t.actions}),he(g.value,"v-card")]}}),[[Q("ripple"),g.value&&e.ripple]])}),{}}}),y=Symbol("Forwarded refs");function x(e,s){let a=e;for(;a;){const t=Reflect.getOwnPropertyDescriptor(a,s);if(t)return t;a=Object.getPrototypeOf(a)}}function We(e){for(var s=arguments.length,a=new Array(s>1?s-1:0),t=1;t<s;t++)a[t-1]=arguments[t];return e[y]=a,new Proxy(e,{get(i,n){if(Reflect.has(i,n))return Reflect.get(i,n);if(!(typeof n=="symbol"||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const d=Reflect.get(r.value,n);return typeof d=="function"?d.bind(r.value):d}}},has(i,n){if(Reflect.has(i,n))return!0;if(typeof n=="symbol"||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(i,n,r){if(Reflect.has(i,n))return Reflect.set(i,n,r);if(typeof n=="symbol"||n.startsWith("__"))return!1;for(const d of a)if(d.value&&Reflect.has(d.value,n))return Reflect.set(d.value,n,r);return!1},getOwnPropertyDescriptor(i,n){var d;const r=Reflect.getOwnPropertyDescriptor(i,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("__"))){for(const c of a){if(!c.value)continue;const o=x(c.value,n)??("_"in c.value?x((d=c.value._)==null?void 0:d.setupState,n):void 0);if(o)return o}for(const c of a){const o=c.value&&c.value[y];if(!o)continue;const u=o.slice();for(;u.length;){const f=u.shift(),v=x(f.value,n);if(v)return v;const m=f.value&&f.value[y];m&&u.push(...m)}}}}})}export{b as B,Me as V,Oe as a,Le as b,Ve as c,Te as d,ye as e,We as f,_e as g,De as n,Be as s};

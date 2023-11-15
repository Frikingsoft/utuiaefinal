import{m as y,u as f}from"./layout-42d4d558.js";import{g as b,d as z,c as n,p as h,I as u,m as G,a as H,b as I,G as N,M as $}from"./index-f209e740.js";import{c as p,V as A}from"./VAvatar-aa1072d3.js";import{j as P,V as g,m as J,a as K,C as Q,y as U,z as W,b as X,k as Y,l as Z,R as ee,c as ae,o as te,p as ne,d as de,D as ie,A as se,B as le,e as re,n as ce,L as ue,q as oe}from"./VBtn-77aa0a55.js";import{a as ve,m as me,u as ke}from"./index-365e995c.js";import{V as ge}from"./VImg-e035b7d5.js";const ye=b()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return z({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=p("v-card-subtitle"),be=p("v-card-title"),pe=h({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...P()},"VCardItem"),Ce=b()({name:"VCardItem",props:pe(),setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),v=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(A,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(A,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=p("v-card-text"),Ie=h({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...J(),...y(),...P(),...ve(),...K(),...Q(),...U(),...W(),...X(),...Y(),...me(),...G(),...Z({variant:"elevated"})},"VCard"),De=b()({name:"VCard",directives:{Ripple:ee},props:Ie(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=H(e),{borderClasses:s}=ae(e),{colorClasses:v,colorStyles:m,variantClasses:k}=te(e),{densityClasses:l}=ne(e),{dimensionStyles:d}=ke(e),{elevationClasses:S}=de(e),{loaderClasses:x}=ie(e),{locationStyles:B}=se(e),{positionClasses:D}=le(e),{roundedClasses:L}=re(e),r=ce(e,t),T=I(()=>e.link!==!1&&r.isLink.value),c=I(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return f(()=>{const _=T.value?"a":e.tag,R=!!(a.title||e.title),M=!!(a.subtitle||e.subtitle),j=R||M,E=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),O=!!(a.image||e.image),q=j||F||E,w=!!(a.text||e.text);return N(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":c.value},o.value,s.value,v.value,l.value,S.value,x.value,D.value,L.value,k.value,e.class],style:[m.value,d.value,B.value,e.style],href:r.href.value,onClick:c.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[O&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(ue,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(ye,null,{default:a.actions}),oe(c.value,"v-card")]}}),[[$("ripple"),c.value&&e.ripple]])}),{}}});export{De as V,ye as a};

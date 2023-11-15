import{$ as Ze,a0 as Qe,j as U,e as g,x as L,Y as _e,i as R,a1 as et,m as tt,l as nt,u as ot,a2 as at,r as A,n as x,s as Y,M as I,A as re,J as Oe,O as it,I as pt,C as Be,T as st,F as J,v as D,y as q,K as lt,W as Z,_ as Te,o as M,d as G,w as P,c as oe,b as be,a3 as X,a4 as pe,a5 as N,a6 as At,a7 as De,a8 as Ae,a9 as rt,aa as It,E as ct,ab as Lt,V as Dt,ac as ut,B as Ft,ad as Mt,k as Rt,ae as $t,af as Ht,f as we,t as xe,ag as Fe,h as de,ah as Wt,z as Nt,p as jt,g as Yt}from"./index-7775ae89.js";import{m as Ie,a as qt,u as Q,b as Ee,c as Se,V as Ce}from"./VRow-c34f38d3.js";import{j as Xt,w as zt,V as ie,g as ft,x as Gt,y as Ut,z as Kt,A as Me,B as ve,C as me,D as Re,E as $e,u as Jt,t as Zt,F as Qt}from"./VAvatar-21558de0.js";import{M as dt,a as en,V as ce,m as tn,b as nn,u as on}from"./VImg-7483b4ab.js";import{u as an,a as vt}from"./scopeId-9482540d.js";import{a as ae,d as sn,s as ke,b as ln,n as mt,B as ge,g as He,f as rn,V as gt,c as We,e as ht}from"./forwardRefs-5c796c28.js";import{V as cn}from"./VApp-8dd61fbc.js";const se=new WeakMap;function un(e,n){Object.keys(n).forEach(t=>{if(Ze(t)){const o=Qe(t),a=se.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,l]=i;s===o&&(e.removeEventListener(o,l),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),se.has(e)||se.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function fn(e,n){Object.keys(n).forEach(t=>{if(Ze(t)){const o=Qe(t),a=se.get(e);a==null||a.forEach(i=>{const[s,l]=i;s===o&&(e.removeEventListener(o,l),a.delete(i))})}else e.removeAttribute(t)})}function yt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function dn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?vn(e):Le(e))return e;e=e.parentElement}return document.scrollingElement}function ue(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Le(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Le(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function vn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function mn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const gn=R({target:Object},"v-dialog-transition"),hn=U()({name:"VDialogTransition",props:gn(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var v;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),a.style.visibility="";const{x:s,y:l,sx:r,sy:c,speed:u}=je(e.target,a),d=ae(a,[{transform:`translate(${s}px, ${l}px) scale(${r}, ${c})`,opacity:0},{}],{duration:225*u,easing:sn});(v=Ne(a))==null||v.forEach(h=>{ae(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:ke})}),d.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var v;await new Promise(h=>requestAnimationFrame(h));const{x:s,y:l,sx:r,sy:c,speed:u}=je(e.target,a);ae(a,[{},{transform:`translate(${s}px, ${l}px) scale(${r}, ${c})`,opacity:0}],{duration:125*u,easing:ln}).finished.then(()=>i()),(v=Ne(a))==null||v.forEach(h=>{ae(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:ke})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?g(_e,L({name:"dialog-transition"},o,{css:!1}),t):g(_e,{name:"dialog-transition"},t)}});function Ne(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function je(e,n){const t=e.getBoundingClientRect(),o=mt(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(k=>parseFloat(k)),[s,l]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=t.left+t.width/2;s==="left"||l==="left"?r-=t.width/2:(s==="right"||l==="right")&&(r+=t.width/2);let c=t.top+t.height/2;s==="top"||l==="top"?c-=t.height/2:(s==="bottom"||l==="bottom")&&(c+=t.height/2);const u=t.width/o.width,d=t.height/o.height,v=Math.max(1,u,d),h=u/v||0,m=d/v||0,y=o.width*o.height/(window.innerWidth*window.innerHeight),O=y>.12?Math.min(1.5,(y-.12)*10+1):1;return{x:r-(a+o.left),y:c-(i+o.top),sx:h,sy:m,speed:O}}const yn=Xt("v-spacer","div","VSpacer");const _n=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:a}=e,i=.5,s=16;e.offsetX=t-n,e.offsetY=a-o,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&a<o-s&&e.up(e),e.down&&a>o+s&&e.down(e))};function bn(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function wn(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),_n(n)}function xn(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function En(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>bn(t,n),touchend:t=>wn(t,n),touchmove:t=>xn(t,n)}}function Sn(e,n){var l;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},i=(l=n.instance)==null?void 0:l.$.uid;if(!o||!i)return;const s=En(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[i]=s,et(s).forEach(r=>{o.addEventListener(r,s[r],a)})}function Cn(e,n){var i,s;const t=(i=n.value)!=null&&i.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const a=t._touchHandlers[o];et(a).forEach(l=>{t.removeEventListener(l,a[l])}),delete t._touchHandlers[o]}const _t={mounted:Sn,unmounted:Cn},kn=_t,bt=Symbol.for("vuetify:v-window"),wt=Symbol.for("vuetify:v-window-group"),xt=R({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...Ie(),...qt(),...tt()},"VWindow"),Ye=U()({name:"VWindow",directives:{Touch:_t},props:xt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=nt(e),{isRtl:a}=ot(),{t:i}=at(),s=zt(e,wt),l=A(),r=x(()=>a.value?!e.reverse:e.reverse),c=Y(!1),u=x(()=>{const _=e.direction==="vertical"?"y":"x",B=(r.value?!c.value:c.value)?"-reverse":"";return`v-window-${_}${B}-transition`}),d=Y(0),v=A(void 0),h=x(()=>s.items.value.findIndex(_=>s.selected.value.includes(_.id)));I(h,(_,C)=>{const B=s.items.value.length,H=B-1;B<=2?c.value=_<C:_===H&&C===0?c.value=!0:_===0&&C===H?c.value=!1:c.value=_<C}),re(bt,{transition:u,isReversed:c,transitionCount:d,transitionHeight:v,rootRef:l});const m=x(()=>e.continuous||h.value!==0),y=x(()=>e.continuous||h.value!==s.items.value.length-1);function O(){m.value&&s.prev()}function k(){y.value&&s.next()}const E=x(()=>{const _=[],C={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,ariaLabel:i("$vuetify.carousel.prev")};_.push(m.value?t.prev?t.prev({props:C}):g(ie,C,null):g("div",null,null));const B={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,ariaLabel:i("$vuetify.carousel.next")};return _.push(y.value?t.next?t.next({props:B}):g(ie,B,null):g("div",null,null)),_}),f=x(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?O():k()},right:()=>{r.value?k():O()},start:C=>{let{originalEvent:B}=C;B.stopPropagation()}},...e.touch===!0?{}:e.touch});return Q(()=>Oe(g(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var _,C;return[g("div",{class:"v-window__container",style:{height:v.value}},[(_=t.default)==null?void 0:_.call(t,{group:s}),e.showArrows!==!1&&g("div",{class:"v-window__controls"},[E.value])]),(C=t.additional)==null?void 0:C.call(t,{group:s})]}}),[[it("touch"),f.value]])),{group:s}}}),Pn=R({color:String,cycle:Boolean,delimiterIcon:{type:pt,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...xt({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Vn=U()({name:"VCarousel",props:Pn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Be(e,"modelValue"),{t:a}=at(),i=A();let s=-1;I(o,r),I(()=>e.interval,r),I(()=>e.cycle,c=>{c?r():window.clearTimeout(s)}),st(l);function l(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(s),window.requestAnimationFrame(l)}return Q(()=>{const[c]=Ye.filterProps(e);return g(Ye,L({ref:i},c,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:D(e.height)},e.style]}),{default:t.default,additional:u=>{let{group:d}=u;return g(J,null,[!e.hideDelimiters&&g("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[d.items.value.length>0&&g(ft,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[d.items.value.map((v,h)=>{const m={id:`carousel-item-${v.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",h+1,d.items.value.length),class:[d.isSelected(v.id)&&"v-btn--active"],onClick:()=>d.select(v.id,!0)};return t.item?t.item({props:m,item:v}):g(ie,L(v,m),null)})]})]),e.progress&&g(Gt,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(d.getItemIndex(o.value)+1)/d.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Et=R({eager:Boolean},"lazy");function St(e,n){const t=Y(!1),o=x(()=>t.value||e.eager||n.value);I(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Ct=R({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Ie(),...Ut(),...Et()},"VWindowItem"),qe=U()({name:"VWindowItem",directives:{Touch:kn},props:Ct(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=q(bt),a=Kt(e,wt),{isBooted:i}=an();if(!o||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=Y(!1),l=x(()=>i.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){var m;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=D((m=o.rootRef.value)==null?void 0:m.clientHeight)),o.transitionCount.value+=1)}function u(){r()}function d(m){s.value&&Z(()=>{!l.value||!s.value||!o||(o.transitionHeight.value=D(m.clientHeight))})}const v=x(()=>{const m=o.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof m!="string"?o.transition.value:m,onBeforeEnter:c,onAfterEnter:r,onEnterCancelled:u,onBeforeLeave:c,onAfterLeave:r,onLeaveCancelled:u,onEnter:d}:!1}),{hasContent:h}=St(e,a.isSelected);return Q(()=>g(dt,{transition:v.value,disabled:!i.value},{default:()=>{var m;return[Oe(g("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[h.value&&((m=t.default)==null?void 0:m.call(t))]),[[lt,a.isSelected.value]])]}})),{groupItem:a}}}),On=R({...en(),...Ct()},"VCarouselItem"),Bn=U()({name:"VCarouselItem",inheritAttrs:!1,props:On(),setup(e,n){let{slots:t,attrs:o}=n;Q(()=>{const[a]=ce.filterProps(e),[i]=qe.filterProps(e);return g(qe,L({class:"v-carousel-item"},i),{default:()=>[g(ce,L(o,a),t)]})})}}),Tn={__name:"Carousel",setup(e){const n=A([{img:"/fondo1.jpg"},{img:"/fondo2.jpg"},{img:"/fondo3.jpg"}]);return(t,o)=>(M(),G(Ce,{class:"mt-md-5"},{default:P(()=>[g(Ee,{class:"fila"},{default:P(()=>[g(Se,{cols:"8"},{default:P(()=>[g(Vn,{"show-arrows":"hover",cycle:!0,interval:5e3,height:"45vh"},{default:P(()=>[(M(!0),oe(J,null,be(n.value,(a,i)=>(M(),G(Bn,{key:i},{default:P(()=>[g(ce,{src:a.img},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}},pn=Te(Tn,[["__scopeId","data-v-b9342410"]]);function he(e,n){return{x:e.x+n.x,y:e.y+n.y}}function An(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Xe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return he({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return he({x:a,y:i},n)}return he({x:n.width/2,y:n.height/2},n)}const kt={static:Dn,connected:Mn},In=R({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in kt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ln(e,n){const t=A({}),o=A();X&&(pe(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,l;I(()=>e.locationStrategy,i),N(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(l=kt[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation}),window.addEventListener("resize",a,{passive:!0}),N(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Dn(){}function Fn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=mt(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Mn(e,n,t){mn(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=At(()=>{const m=Me(n.location,e.isRtl.value),y=n.origin==="overlap"?m:n.origin==="auto"?ve(m):Me(n.origin,e.isRtl.value);return m.side===y.side&&m.align===me(y).align?{preferredAnchor:Re(m),preferredOrigin:Re(y)}:{preferredAnchor:m,preferredOrigin:y}}),[s,l,r,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>x(()=>{const y=parseFloat(n[m]);return isNaN(y)?1/0:y})),u=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let d=!1;const v=new ResizeObserver(()=>{d&&h()});I([e.activatorEl,e.contentEl],(m,y)=>{let[O,k]=m,[E,f]=y;E&&v.unobserve(E),O&&v.observe(O),f&&v.unobserve(f),k&&v.observe(k)},{immediate:!0}),N(()=>{v.disconnect()});function h(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const m=e.activatorEl.value.getBoundingClientRect(),y=Fn(e.contentEl.value,e.isRtl.value),O=ue(e.contentEl.value),k=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(y.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),y.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=O.reduce((T,V)=>{const b=V.getBoundingClientRect(),S=new ge({x:V===document.documentElement?0:b.x,y:V===document.documentElement?0:b.y,width:V.clientWidth,height:V.clientHeight});return T?new ge({x:Math.max(T.left,S.left),y:Math.max(T.top,S.top),width:Math.min(T.right,S.right)-Math.max(T.left,S.left),height:Math.min(T.bottom,S.bottom)-Math.max(T.top,S.top)}):S},void 0);E.x+=k,E.y+=k,E.width-=k*2,E.height-=k*2;let f={anchor:a.value,origin:i.value};function _(T){const V=new ge(y),b=Xe(T.anchor,m),S=Xe(T.origin,V);let{x:$,y:W}=An(b,S);switch(T.anchor.side){case"top":W-=u.value[0];break;case"bottom":W+=u.value[0];break;case"left":$-=u.value[0];break;case"right":$+=u.value[0];break}switch(T.anchor.align){case"top":W-=u.value[1];break;case"bottom":W+=u.value[1];break;case"left":$-=u.value[1];break;case"right":$+=u.value[1];break}return V.x+=$,V.y+=W,V.width=Math.min(V.width,r.value),V.height=Math.min(V.height,c.value),{overflows:He(V,E),x:$,y:W}}let C=0,B=0;const H={x:0,y:0},ee={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:T,y:V,overflows:b}=_(f);C+=T,B+=V,y.x+=T,y.y+=V;{const S=$e(f.anchor),$=b.x.before||b.x.after,W=b.y.before||b.y.after;let K=!1;if(["x","y"].forEach(p=>{if(p==="x"&&$&&!ee.x||p==="y"&&W&&!ee.y){const w={anchor:{...f.anchor},origin:{...f.origin}},F=p==="x"?S==="y"?me:ve:S==="y"?ve:me;w.anchor=F(w.anchor),w.origin=F(w.origin);const{overflows:z}=_(w);(z[p].before<=b[p].before&&z[p].after<=b[p].after||z[p].before+z[p].after<(b[p].before+b[p].after)/2)&&(f=w,K=ee[p]=!0)}}),K)continue}b.x.before&&(C+=b.x.before,y.x+=b.x.before),b.x.after&&(C-=b.x.after,y.x-=b.x.after),b.y.before&&(B+=b.y.before,y.y+=b.y.before),b.y.after&&(B-=b.y.after,y.y-=b.y.after);{const S=He(y,E);H.x=E.width-S.x.before-S.x.after,H.y=E.height-S.y.before-S.y.after,C+=S.x.before,y.x+=S.x.before,B+=S.y.before,y.y+=S.y.before}break}const j=$e(f.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${f.anchor.side} ${f.anchor.align}`,transformOrigin:`${f.origin.side} ${f.origin.align}`,top:D(ye(B)),left:e.isRtl.value?void 0:D(ye(C)),right:e.isRtl.value?D(ye(-C)):void 0,minWidth:D(j==="y"?Math.min(s.value,m.width):s.value),maxWidth:D(ze(De(H.x,s.value===1/0?0:s.value,r.value))),maxHeight:D(ze(De(H.y,l.value===1/0?0:l.value,c.value)))}),{available:H,contentBox:y}}return I(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),Z(()=>{const m=h();if(!m)return;const{available:y,contentBox:O}=m;O.height>y.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function ye(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ze(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Pe=!0;const fe=[];function Rn(e){!Pe||fe.length?(fe.push(e),Ve()):(Pe=!1,e(),Ve())}let Ge=-1;function Ve(){cancelAnimationFrame(Ge),Ge=requestAnimationFrame(()=>{const e=fe.shift();e&&e(),fe.length?Ve():Pe=!0})}const le={none:null,close:Wn,block:Nn,reposition:jn},$n=R({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in le}},"VOverlay-scroll-strategies");function Hn(e,n){if(!X)return;let t;Ae(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=rt(),await Z(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=le[e.scrollStrategy])==null||o.call(le,n,e,t)}))}),N(()=>{t==null||t.stop()})}function Wn(e){function n(t){e.isActive.value=!1}Pt(e.activatorEl.value??e.contentEl.value,n)}function Nn(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...ue(e.activatorEl.value,n.contained?t:void 0),...ue(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(l=>Le(l)&&l)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,r)=>{l.style.setProperty("--v-body-scroll-x",D(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",D(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",D(a)),l.classList.add("v-overlay-scroll-blocked")}),N(()=>{o.forEach((l,r)=>{const c=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-c,l.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function jn(e,n,t){let o=!1,a=-1,i=-1;function s(l){Rn(()=>{var u,d;const r=performance.now();(d=(u=e.updateLocation).value)==null||d.call(u,l),o=(performance.now()-r)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{Pt(e.activatorEl.value??e.contentEl.value,l=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(l)})})):s(l)})})}),N(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Pt(e,n){const t=[document,...ue(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),N(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Yn=Symbol.for("vuetify:v-menu"),qn=R({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Xn(e,n){const t={},o=a=>()=>{if(!X)return Promise.resolve(!0);const i=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(s=>{const l=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(i),s(i)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const zn=R({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...qn()},"VOverlay-activator");function Gn(e,n){let{isActive:t,isTop:o}=n;const a=A();let i=!1,s=!1,l=!0;const r=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),c=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:u,runCloseDelay:d}=Xn(e,f=>{f===(e.openOnHover&&i||r.value&&s)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==f&&(l=!0),t.value=f)}),v={onClick:f=>{f.stopPropagation(),a.value=f.currentTarget||f.target,t.value=!t.value},onMouseenter:f=>{var _;(_=f.sourceCapabilities)!=null&&_.firesTouchEvents||(i=!0,a.value=f.currentTarget||f.target,u())},onMouseleave:f=>{i=!1,d()},onFocus:f=>{Lt(f.target,":focus-visible")!==!1&&(s=!0,f.stopPropagation(),a.value=f.currentTarget||f.target,u())},onBlur:f=>{s=!1,f.stopPropagation(),d()}},h=x(()=>{const f={};return c.value&&(f.onClick=v.onClick),e.openOnHover&&(f.onMouseenter=v.onMouseenter,f.onMouseleave=v.onMouseleave),r.value&&(f.onFocus=v.onFocus,f.onBlur=v.onBlur),f}),m=x(()=>{const f={};if(e.openOnHover&&(f.onMouseenter=()=>{i=!0,u()},f.onMouseleave=()=>{i=!1,d()}),r.value&&(f.onFocusin=()=>{s=!0,u()},f.onFocusout=()=>{s=!1,d()}),e.closeOnContentClick){const _=q(Yn,null);f.onClick=()=>{t.value=!1,_==null||_.closeParents()}}return f}),y=x(()=>{const f={};return e.openOnHover&&(f.onMouseenter=()=>{l&&(i=!0,l=!1,u())},f.onMouseleave=()=>{i=!1,d()}),f});I(o,f=>{f&&(e.openOnHover&&!i&&(!r.value||!s)||r.value&&!s&&(!e.openOnHover||!i))&&(t.value=!1)});const O=A();Ae(()=>{O.value&&Z(()=>{a.value=It(O.value)})});const k=ct("useActivator");let E;return I(()=>!!e.activator,f=>{f&&X?(E=rt(),E.run(()=>{Un(e,k,{activatorEl:a,activatorEvents:h})})):E&&E.stop()},{flush:"post",immediate:!0}),N(()=>{E==null||E.stop()}),{activatorEl:a,activatorRef:O,activatorEvents:h,contentEvents:m,scrimEvents:y}}function Un(e,n,t){let{activatorEl:o,activatorEvents:a}=t;I(()=>e.activator,(r,c)=>{if(c&&r!==c){const u=l(c);u&&s(u)}r&&Z(()=>i())},{immediate:!0}),I(()=>e.activatorProps,()=>{i()}),N(()=>{s()});function i(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&un(r,L(a.value,c))}function s(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&fn(r,L(a.value,c))}function l(){var u,d;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,c;if(r)if(r==="parent"){let v=(d=(u=n==null?void 0:n.proxy)==null?void 0:u.$el)==null?void 0:d.parentNode;for(;v!=null&&v.hasAttribute("data-no-activator");)v=v.parentNode;c=v}else typeof r=="string"?c=document.querySelector(r):"$el"in r?c=r.$el:c=r;return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:null,o.value}}function Kn(){if(!X)return Y(!1);const{ssr:e}=Dt();if(e){const n=Y(!1);return st(()=>{n.value=!0}),n}else return Y(!0)}const Ue=Symbol.for("vuetify:stack"),ne=ut([]);function Jn(e,n,t){const o=ct("useStack"),a=!t,i=q(Ue,void 0),s=ut({activeChildren:new Set});re(Ue,s);const l=Y(+n.value);pe(e,()=>{var d;const u=(d=ne.at(-1))==null?void 0:d[1];l.value=u?u+10:+n.value,a&&ne.push([o.uid,l.value]),i==null||i.activeChildren.add(o.uid),N(()=>{if(a){const v=Ft(ne).findIndex(h=>h[0]===o.uid);ne.splice(v,1)}i==null||i.activeChildren.delete(o.uid)})});const r=Y(!0);a&&Ae(()=>{var d;const u=((d=ne.at(-1))==null?void 0:d[0])===o.uid;setTimeout(()=>r.value=u)});const c=x(()=>!s.activeChildren.size);return{globalTop:Mt(r),localTop:c,stackStyles:x(()=>({zIndex:l.value}))}}function Zn(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!X)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Qn(){return!0}function Vt(e,n,t){if(!e||Ot(e,t)===!1)return!1;const o=yt(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Ot(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Qn)(e)}function eo(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Vt(e,n,t)&&setTimeout(()=>{Ot(e,t)&&o&&o(e)},0)}function Ke(e,n){const t=yt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const to={mounted(e,n){const t=a=>eo(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Vt(a,e,n)};Ke(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Ke(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function no(e){const{modelValue:n,color:t,...o}=e;return g(_e,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&g("div",L({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Bt=R({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zn(),...Ie(),...tn(),...Et(),...In(),...$n(),...tt(),...nn()},"VOverlay"),Je=U()({name:"VOverlay",directives:{ClickOutside:to},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Bt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=Be(e,"modelValue"),s=x({get:()=>i.value,set:w=>{w&&e.disabled||(i.value=w)}}),{teleportTarget:l}=Zn(x(()=>e.attach||e.contained)),{themeClasses:r}=nt(e),{rtlClasses:c,isRtl:u}=ot(),{hasContent:d,onAfterLeave:v}=St(e,s),h=Jt(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:y,stackStyles:O}=Jn(s,Rt(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:E,activatorEvents:f,contentEvents:_,scrimEvents:C}=Gn(e,{isActive:s,isTop:y}),{dimensionStyles:B}=on(e),H=Kn(),{scopeId:ee}=vt();I(()=>e.disabled,w=>{w&&(s.value=!1)});const te=A(),j=A(),{contentStyles:T,updateLocation:V}=Ln(e,{isRtl:u,contentEl:j,activatorEl:k,isActive:s});Hn(e,{root:te,contentEl:j,activatorEl:k,isActive:s,updateLocation:V});function b(w){a("click:outside",w),e.persistent?p():s.value=!1}function S(){return s.value&&m.value}X&&I(s,w=>{w?window.addEventListener("keydown",$):window.removeEventListener("keydown",$)},{immediate:!0});function $(w){var F,z;w.key==="Escape"&&m.value&&(e.persistent?p():(s.value=!1,(F=j.value)!=null&&F.contains(document.activeElement)&&((z=k.value)==null||z.focus())))}const W=Zt();pe(()=>e.closeOnBack,()=>{Qt(W,w=>{m.value&&s.value?(w(!1),e.persistent?p():s.value=!1):w()})});const K=A();I(()=>s.value&&(e.absolute||e.contained)&&l.value==null,w=>{if(w){const F=dn(te.value);F&&F!==document.scrollingElement&&(K.value=F.scrollTop)}});function p(){e.noClickAnimation||j.value&&ae(j.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ke})}return Q(()=>{var w;return g(J,null,[(w=t.activator)==null?void 0:w.call(t,{isActive:s.value,props:L({ref:E},f.value,e.activatorProps)}),H.value&&d.value&&g($t,{disabled:!l.value,to:l.value},{default:()=>[g("div",L({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},r.value,c.value,e.class],style:[O.value,{top:D(K.value)},e.style],ref:te},ee,o),[g(no,L({color:h,modelValue:s.value&&!!e.scrim},C.value),null),g(dt,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:()=>{v(),a("afterLeave")}},{default:()=>{var F;return[Oe(g("div",L({ref:j,class:["v-overlay__content",e.contentClass],style:[B.value,T.value]},_.value,e.contentProps),[(F=t.default)==null?void 0:F.call(t,{isActive:s})]),[[lt,s.value],[it("click-outside"),{handler:b,closeConditional:S,include:()=>[k.value]}]])]}})])]})])}),{activatorEl:k,animateClick:p,contentEl:j,globalTop:m,localTop:y,updateLocation:V}}}),oo=R({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Bt({origin:"center center",scrollStrategy:"block",transition:{component:hn},zIndex:2400})},"VDialog"),ao=U()({name:"VDialog",props:oo(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Be(e,"modelValue"),{scopeId:a}=vt(),i=A();function s(r){var d,v;const c=r.relatedTarget,u=r.target;if(c!==u&&((d=i.value)!=null&&d.contentEl)&&((v=i.value)!=null&&v.globalTop)&&![document,i.value.contentEl].includes(u)&&!i.value.contentEl.contains(u)){const h=Ht(i.value.contentEl);if(!h.length)return;const m=h[0],y=h[h.length-1];c===m?y.focus():m.focus()}}X&&I(()=>o.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)},{immediate:!0}),I(o,async r=>{var c,u;await Z(),r?(c=i.value.contentEl)==null||c.focus({preventScroll:!0}):(u=i.value.activatorEl)==null||u.focus({preventScroll:!0})});const l=x(()=>L({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps));return Q(()=>{const[r]=Je.filterProps(e);return g(Je,L({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,"aria-modal":"true",activatorProps:l.value,role:"dialog"},a),{activator:t.activator,default:function(){for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];return g(ft,{root:"VDialog"},{default:()=>{var v;return[(v=t.default)==null?void 0:v.call(t,...u)]}})}})}),rn({},i)}}),io=["href"],so={__name:"Duracion",setup(e){const n=A(!1),t=q("los_cursos"),o=q("boton_elegido"),a=q("indice_boton"),i=A(!1),s=A(""),l=x(()=>{if(o.value==="duración")return i.value=!1,t.value[0][a.value].duracion;if(o.value==="materias")return i.value=!0,s.value=t.value[0][a.value].link_ingreso,s});return(r,c)=>(M(),G(ao,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u),activator:"parent",width:"auto",class:"tarjeta"},{default:P(()=>[g(gt,{class:"carta"},{default:P(()=>[i.value?Fe("",!0):(M(),G(We,{key:0},{default:P(()=>[we(" Tiene una duración de : "+xe(l.value),1)]),_:1})),i.value?(M(),G(We,{key:1},{default:P(()=>[de("a",{href:s.value},"Página oficial",8,io)]),_:1})):Fe("",!0),g(ht,null,{default:P(()=>[g(ie,{color:"primary",block:"",onClick:c[0]||(c[0]=u=>n.value=!1)},{default:P(()=>[we("Cerrar")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},lo=Te(so,[["__scopeId","data-v-67585f82"]]);const Tt=e=>(jt("data-v-78a796b1"),e=e(),Yt(),e),ro=Tt(()=>de("h1",{class:"titulo"},"Cursos",-1)),co=Tt(()=>de("div",{class:"tipo"},null,-1)),uo={class:"d-flex justify-center text-light-blue-darken-4 texto_curso"},fo={__name:"Cursos",setup(e){const n=Wt(),t=q("los_cursos"),o=q("curso_elegido"),a=A(""),i=A();re("indice_boton",i);const s=(r,c)=>{a.value=r,i.value=c};re("boton_elegido",a);const l=r=>{o.value={nombre:r.nombre,tipo:r.tipo,duracion:r.duracion,link_ingreso:r.link_ingreso,modalidad:r.modalidad,perfil:r.perfil,imagen:r.imagen},n.push(`/cursos/${r.ruta}`)};return(r,c)=>(M(),oe(J,null,[g(Ce,null,{default:P(()=>[g(Ee,{class:"justify-center"},{default:P(()=>[g(Se,{cols:"8"},{default:P(()=>[ro]),_:1})]),_:1})]),_:1}),g(Ce,{fluid:"",class:"tarjetas"},{default:P(()=>[g(Ee,{dense:""},{default:P(()=>[(M(!0),oe(J,null,be(Nt(t),(u,d)=>(M(),G(Se,{class:"tarjeta_cartas",key:d,xs:"12",sm:"6",md:"4",xl:"3"},{default:P(()=>[g(gt,{class:"tarjeta_sombra d-flex justify-center flex-wrap"},{default:P(()=>[co,de("h2",uo,xe(u.nombre),1),g(ce,{src:u.imagen,class:"align-end click_curso",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"25vh",cover:"",onClick:v=>l(u)},null,8,["src","onClick"]),g(ht,null,{default:P(()=>[g(yn),(M(!0),oe(J,null,be(u.botones,(v,h)=>(M(),oe("div",{icon:"",key:h},[g(ie,{color:"white",class:"bg-blue-darken-4 mr-md-4 botones",onClick:m=>s(v.nombre,d)},{default:P(()=>[we(xe(v.nombre)+" ",1),g(lo)]),_:2},1032,["onClick"])]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})],64))}},vo=Te(fo,[["__scopeId","data-v-78a796b1"]]);const xo={__name:"Home",setup(e){return(n,t)=>(M(),G(cn,{class:"inicio"},{default:P(()=>[g(pn),g(vo)]),_:1}))}};export{xo as default};

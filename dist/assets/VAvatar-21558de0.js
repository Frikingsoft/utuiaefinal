import{m as P,a as z,u as L,h as et}from"./VRow-c34f38d3.js";import{ar as X,j as E,as as tt,aq as nt,ap as at,i as b,aj as T,n as c,Z as M,a6 as Be,at as ye,au as st,e as v,F as lt,z as be,m as N,l as A,q as Ie,k as I,E as le,G as it,A as Ee,y as ot,D as ie,M as oe,ac as rt,C as Pe,T as ut,P as ct,ak as dt,av as vt,x as ft,aw as mt,v as w,I as Y,r as re,ax as gt,ay as ht,az as yt,s as bt,aA as Ct,a8 as pt,u as Le,Y as kt,aB as St,aC as Ce,a3 as _t,W as Te,a5 as wt,aD as xt,aE as pe,J as Vt,O as Bt}from"./index-7775ae89.js";import{m as It,u as Et,V as Pt}from"./VImg-7483b4ab.js";const $e=["top","bottom"],Lt=["start","end","left","right"];function Tt(e,t){let[a,n]=e.split(" ");return n||(n=X($e,a)?"start":X(Lt,a)?"top":"center"),{side:ke(a,t),align:ke(n,t)}}function ke(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function gn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function hn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function yn(e){return{side:e.align,align:e.side}}function bn(e){return X($e,e.side)?"y":"x"}function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return E()({name:a??tt(nt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...P()},setup(n,l){let{slots:s}=l;return()=>{var i;return at(n.tag,{class:[e,n.class],style:n.style},(i=s.default)==null?void 0:i.call(s))}}})}const Re=b({border:[Boolean,Number,String]},"border");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:c(()=>{const n=M(e)?e.value:e.border,l=[];if(n===!0||n==="")l.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))l.push(`border-${s}`);return l})}}const $t=[null,"default","comfortable","compact"],ue=b({density:{type:String,default:"default",validator:e=>$t.includes(e)}},"density");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Ne=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ae(e){return{elevationClasses:c(()=>{const a=M(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const W=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function J(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:c(()=>{const n=M(e)?e.value:e.rounded,l=[];if(n===!0||n==="")l.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))l.push(`rounded-${s}`);return l})}}function de(e){return Be(()=>{const t=[],a={};if(e.value.background)if(ye(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text){const n=st(a.backgroundColor);a.color=n,a.caretColor=n}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ye(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function q(e,t){const a=c(()=>({text:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:l}=de(a);return{textColorClasses:n,textColorStyles:l}}function Se(e,t){const a=c(()=>({background:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:l}=de(a);return{backgroundColorClasses:n,backgroundColorStyles:l}}const Rt=["elevated","flat","tonal","outlined","text","plain"];function Oe(e,t){return v(lt,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const ve=b({color:String,variant:{type:String,default:"elevated",validator:e=>Rt.includes(e)}},"variant");function De(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();const a=c(()=>{const{variant:s}=be(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:l}=de(c(()=>{const{variant:s,color:i}=be(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:l,variantClasses:a}}const Ge=b({divided:Boolean,...Re(),...P(),...ue(),...Ne(),...W(),...z(),...N(),...ve()},"VBtnGroup"),_e=E()({name:"VBtnGroup",props:Ge(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=A(e),{densityClasses:l}=ce(e),{borderClasses:s}=ze(e),{elevationClasses:i}=Ae(e),{roundedClasses:u}=J(e);Ie({VBtn:{height:"auto",color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),L(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,l.value,i.value,u.value,e.class],style:e.style},a))}}),zt=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Nt=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function At(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=le("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const l=it();Ee(Symbol.for(`${t.description}:id`),l);const s=ot(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=I(e,"value"),u=c(()=>!!(s.disabled.value||e.disabled));s.register({id:l,value:i,disabled:u},n),ie(()=>{s.unregister(l)});const o=c(()=>s.isSelected(l)),g=c(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return oe(o,h=>{n.emit("group:selected",{value:h})}),{id:l,isSelected:o,toggle:()=>s.select(l,!o.value),select:h=>s.select(l,h),selectedClass:g,value:i,disabled:u,group:s}}function Ot(e,t){let a=!1;const n=rt([]),l=Pe(e,"modelValue",[],r=>r==null?[]:Me(n,dt(r)),r=>{const d=Gt(n,r);return e.multiple?d:d[0]}),s=le("useGroup");function i(r,d){const C=r,m=Symbol.for(`${t.description}:id`),k=vt(m,s==null?void 0:s.vnode).indexOf(d);k>-1?n.splice(k,0,C):n.push(C)}function u(r){if(a)return;o();const d=n.findIndex(C=>C.id===r);n.splice(d,1)}function o(){const r=n.find(d=>!d.disabled);r&&e.mandatory==="force"&&!l.value.length&&(l.value=[r.id])}ut(()=>{o()}),ie(()=>{a=!0});function g(r,d){const C=n.find(m=>m.id===r);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const m=l.value.slice(),_=m.findIndex(f=>f===r),k=~_;if(d=d??!k,k&&e.mandatory&&m.length<=1||!k&&e.max!=null&&m.length+1>e.max)return;_<0&&d?m.push(r):_>=0&&!d&&m.splice(_,1),l.value=m}else{const m=l.value.includes(r);if(e.mandatory&&m)return;l.value=d??!m?[r]:[]}}function h(r){if(e.multiple,l.value.length){const d=l.value[0],C=n.findIndex(k=>k.id===d);let m=(C+r)%n.length,_=n[m];for(;_.disabled&&m!==C;)m=(m+r)%n.length,_=n[m];if(_.disabled)return;l.value=[n[m].id]}else{const d=n.find(C=>!C.disabled);d&&(l.value=[d.id])}}const y={register:i,unregister:u,selected:l,select:g,disabled:I(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:r=>l.value.includes(r),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:r=>Dt(n,r)};return Ee(t,y),y}function Dt(e,t){const a=Me(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Me(e,t){const a=[];return t.forEach(n=>{const l=e.find(i=>ct(n,i.value)),s=e[n];(l==null?void 0:l.value)!=null?a.push(l.id):s!=null&&a.push(s.id)}),a}function Gt(e,t){const a=[];return t.forEach(n=>{const l=e.findIndex(s=>s.id===n);if(~l){const s=e[l];a.push(s.value!=null?s.value:l)}}),a}const Fe=Symbol.for("vuetify:v-btn-toggle"),Mt=b({...Ge(),...zt()},"VBtnToggle");E()({name:"VBtnToggle",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:l,prev:s,select:i,selected:u}=Ot(e,Fe);return L(()=>{const[o]=_e.filterProps(e);return v(_e,ft({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:l,prev:s,select:i,selected:u})]}})}),{next:l,prev:s,select:i}}});const Ft=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),te=E(!1)({name:"VDefaultsProvider",props:Ft(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:l,reset:s,root:i,scoped:u}=mt(e);return Ie(n,{reset:s,root:i,scoped:u,disabled:l}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});const jt=["x-small","small","default","large","x-large"],K=b({size:{type:[String,Number],default:"default"}},"size");function Z(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return Be(()=>{let a,n;return X(jt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:w(e.size),height:w(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Ht=b({color:String,start:Boolean,end:Boolean,icon:Y,...P(),...K(),...z({tag:"i"}),...N()},"VIcon"),H=E()({name:"VIcon",props:Ht(),setup(e,t){let{attrs:a,slots:n}=t;const l=re(),{themeClasses:s}=A(e),{iconData:i}=gt(c(()=>l.value||e.icon)),{sizeClasses:u}=Z(e),{textColorClasses:o,textColorStyles:g}=q(I(e,"color"));return L(()=>{var y,r;const h=(y=n.default)==null?void 0:y.call(n);return h&&(l.value=(r=ht(h).filter(d=>d.type===yt&&d.children&&typeof d.children=="string")[0])==null?void 0:r.children),v(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,u.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:w(e.size),height:w(e.size),width:w(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[h]})}),{}}});function je(e,t){const a=re(),n=bt(!1);if(Ct){const l=new IntersectionObserver(s=>{e==null||e(s,l),n.value=!!s.find(i=>i.isIntersecting)},t);ie(()=>{l.disconnect()}),oe(a,(s,i)=>{i&&(l.unobserve(i),n.value=!1),s&&l.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Xt=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...P(),...K(),...z({tag:"div"}),...N()},"VProgressCircular"),Yt=E()({name:"VProgressCircular",props:Xt(),setup(e,t){let{slots:a}=t;const n=20,l=2*Math.PI*n,s=re(),{themeClasses:i}=A(e),{sizeClasses:u,sizeStyles:o}=Z(e),{textColorClasses:g,textColorStyles:h}=q(I(e,"color")),{textColorClasses:y,textColorStyles:r}=q(I(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=je(),{resizeRef:m,contentRect:_}=et(),k=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=c(()=>Number(e.width)),p=c(()=>o.value?Number(e.size):_.value?_.value.width:Math.max(f.value,32)),B=c(()=>n/(1-f.value/p.value)*2),V=c(()=>f.value/p.value*B.value),O=c(()=>w((100-k.value)/100*l));return pt(()=>{d.value=s.value,m.value=s.value}),L(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,u.value,g.value,e.class],style:[o.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[v("circle",{class:["v-progress-circular__underlay",y.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":l,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":l,"stroke-dashoffset":O.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:k.value})])]})),{}}});const we={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},He=b({location:String},"location");function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Le();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:i}=Tt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function u(g){return a?a(g):0}const o={};return s!=="center"&&(t?o[we[s]]=`calc(100% - ${u(s)}px)`:o[s]=0),i!=="center"?t?o[we[i]]=`calc(100% - ${u(i)}px)`:o[i]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const qt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...P(),...He({location:"top"}),...W(),...z(),...N()},"VProgressLinear"),Ut=E()({name:"VProgressLinear",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Pe(e,"modelValue"),{isRtl:l,rtlClasses:s}=Le(),{themeClasses:i}=A(e),{locationStyles:u}=Xe(e),{textColorClasses:o,textColorStyles:g}=q(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:y}=Se(c(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=Se(e,"color"),{roundedClasses:C}=J(e),{intersectionRef:m,isIntersecting:_}=je(),k=c(()=>parseInt(e.max,10)),f=c(()=>parseInt(e.height,10)),p=c(()=>parseFloat(e.bufferValue)/k.value*100),B=c(()=>parseFloat(n.value)/k.value*100),V=c(()=>l.value!==e.reverse),O=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function Q(S){if(!m.value)return;const{left:$,right:ee,width:R}=m.value.getBoundingClientRect(),j=V.value?R-S.clientX+(ee-R):S.clientX-$;n.value=Math.round(j/R*k.value)}return L(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&_.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?w(f.value):0,"--v-progress-linear-height":w(f.value),...u.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&Q},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...g.value,[V.value?"left":"right"]:w(-f.value),borderTop:`${w(f.value/2)} dotted`,opacity:F.value,top:`calc(50% - ${w(f.value/4)})`,width:w(100-p.value,"%"),"--v-progress-linear-stream-to":w(f.value*(V.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",h.value],style:[y.value,{opacity:F.value,width:w(e.stream?p.value:100,"%")}]},null),v(kt,{name:O.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(S=>v("div",{key:S,class:["v-progress-linear__indeterminate",S,r.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",r.value],style:[d.value,{width:w(B.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:p.value})])]})),{}}}),Wt=b({loading:[Boolean,String]},"loader");function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function pn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Ut,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Kt=["static","relative","fixed","absolute","sticky"],Zt=b({position:{type:String,validator:e=>Kt.includes(e)}},"position");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function kn(){var e,t;return(t=(e=le("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function en(e,t){const a=St("RouterLink"),n=c(()=>!!(e.href||e.to)),l=c(()=>(n==null?void 0:n.value)||Ce(t,"click")||Ce(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:l,href:I(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:l,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var i,u;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(u=s.isActive)==null?void 0:u.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const tn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ne=!1;function Sn(e,t){let a=!1,n,l;_t&&(Te(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((i,u,o)=>{ne?a?t(o):o():setTimeout(()=>a?t(o):o()),ne=!0}),l=e==null?void 0:e.afterEach(()=>{ne=!1})}),wt(()=>{window.removeEventListener("popstate",s),n==null||n(),l==null||l()}));function s(i){var u;(u=i.state)!=null&&u.replaced||(a=!0,setTimeout(()=>a=!1))}}function nn(e,t){oe(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Te(()=>{t(!0)})},{immediate:!0})}const ae=Symbol("rippleStop"),an=80;function xe(e,t){e.style.transform=t,e.style.webkitTransform=t}function se(e){return e.constructor.name==="TouchEvent"}function Ye(e){return e.constructor.name==="KeyboardEvent"}const sn=function(e,t){var y;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,l=0;if(!Ye(e)){const r=t.getBoundingClientRect(),d=se(e)?e.touches[e.touches.length-1]:e;n=d.clientX-r.left,l=d.clientY-r.top}let s=0,i=.3;(y=t._ripple)!=null&&y.circle?(i=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(l-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,g=a.center?u:`${n-s}px`,h=a.center?o:`${l-s}px`;return{radius:s,scale:i,x:g,y:h,centerX:u,centerY:o}},U={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),l=document.createElement("span");n.appendChild(l),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:i,x:u,y:o,centerX:g,centerY:h}=sn(e,t,a),y=`${s*2}px`;l.className="v-ripple__animation",l.style.width=y,l.style.height=y,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),xe(l,`translate(${u}, ${o}) scale3d(${i},${i},${i})`),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),xe(l,`translate(${g}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),l=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},l)}};function qe(e){return typeof e>"u"||!!e}function D(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ae])){if(e[ae]=!0,se(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Ye(e),a._ripple.class&&(t.class=a._ripple.class),se(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{U.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},an)}else U.show(e,a,t)}}function Ve(e){e[ae]=!0}function x(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function Ue(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let G=!1;function We(e){!G&&(e.keyCode===pe.enter||e.keyCode===pe.space)&&(G=!0,D(e))}function Je(e){G=!1,x(e)}function Ke(e){G&&(G=!1,x(e))}function Ze(e,t,a){const{value:n,modifiers:l}=t,s=qe(n);if(s||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=l.center,e._ripple.circle=l.circle,xt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(l.stop){e.addEventListener("touchstart",Ve,{passive:!0}),e.addEventListener("mousedown",Ve);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",Ue,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",D),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",We),e.addEventListener("keyup",Je),e.addEventListener("blur",Ke),e.addEventListener("dragstart",x,{passive:!0})}else!s&&a&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",Ue),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",We),e.removeEventListener("keyup",Je),e.removeEventListener("dragstart",x),e.removeEventListener("blur",Ke)}function ln(e,t){Ze(e,t,!1)}function on(e){delete e._ripple,Qe(e)}function rn(e,t){if(t.value===t.oldValue)return;const a=qe(t.oldValue);Ze(e,t,a)}const un={mounted:ln,unmounted:on,updated:rn},cn=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:Fe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Y,appendIcon:Y,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Re(),...P(),...ue(),...It(),...Ne(),...Nt(),...Wt(),...He(),...Zt(),...W(),...tn(),...K(),...z({tag:"button"}),...N(),...ve({variant:"elevated"})},"VBtn"),_n=E()({name:"VBtn",directives:{Ripple:un},props:cn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:l}=A(e),{borderClasses:s}=ze(e),{colorClasses:i,colorStyles:u,variantClasses:o}=De(e),{densityClasses:g}=ce(e),{dimensionStyles:h}=Et(e),{elevationClasses:y}=Ae(e),{loaderClasses:r}=Jt(e),{locationStyles:d}=Xe(e),{positionClasses:C}=Qt(e),{roundedClasses:m}=J(e),{sizeClasses:_,sizeStyles:k}=Z(e),f=At(e,e.symbol,!1),p=en(e,a),B=c(()=>{var S;return e.active!==void 0?e.active:p.isLink.value?(S=p.isActive)==null?void 0:S.value:f==null?void 0:f.isSelected.value}),V=c(()=>(f==null?void 0:f.disabled.value)||e.disabled),O=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=c(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function Q(S){var $;V.value||p.isLink.value&&(S.metaKey||S.ctrlKey||S.shiftKey||S.button!==0||a.target==="_blank")||(($=p.navigate)==null||$.call(p,S),f==null||f.toggle())}return nn(p,f==null?void 0:f.select),L(()=>{var fe,me;const S=p.isLink.value?"a":e.tag,$=!!(e.prependIcon||n.prepend),ee=!!(e.appendIcon||n.append),R=!!(e.icon&&e.icon!==!0),j=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((fe=p.isActive)==null?void 0:fe.value))||!f||((me=p.isActive)==null?void 0:me.value);return Vt(v(S,{type:S==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":O.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},l.value,s.value,j?i.value:void 0,g.value,y.value,r.value,C.value,m.value,_.value,o.value,e.class],style:[j?u.value:void 0,h.value,d.value,k.value,e.style],disabled:V.value||void 0,href:p.href.value,onClick:Q,value:F.value},{default:()=>{var ge;return[Oe(!0,"v-btn"),!e.icon&&$&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(te,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(H,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&R?v(H,{key:"content-icon",icon:e.icon},null):v(te,{key:"content-defaults",disabled:!R,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var he;return[((he=n.default)==null?void 0:he.call(n))??e.text]}})]),!e.icon&&ee&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(te,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(H,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ge=n.loader)==null?void 0:ge.call(n))??v(Yt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Bt("ripple"),!V.value&&e.ripple,null]])}),{}}});const dn=b({start:Boolean,end:Boolean,icon:Y,image:String,...P(),...ue(),...W(),...K(),...z(),...N(),...ve({variant:"flat"})},"VAvatar"),wn=E()({name:"VAvatar",props:dn(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=A(e),{colorClasses:l,colorStyles:s,variantClasses:i}=De(e),{densityClasses:u}=ce(e),{roundedClasses:o}=J(e),{sizeClasses:g,sizeStyles:h}=Z(e);return L(()=>v(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,l.value,u.value,o.value,g.value,i.value,e.class],style:[s.value,h.value,e.style]},{default:()=>{var y;return[e.image?v(Pt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?v(H,{key:"icon",icon:e.icon},null):(y=a.default)==null?void 0:y.call(a),Oe(!1,"v-avatar")]}})),{}}});export{Tt as A,gn as B,hn as C,yn as D,bn as E,Sn as F,Wt as G,Jt as H,He as I,Zt as J,Xe as K,pn as L,Qt as M,un as R,_n as V,H as a,Ne as b,W as c,ze as d,Ae as e,J as f,te as g,cn as h,q as i,Cn as j,ue as k,tn as l,Re as m,ve as n,en as o,De as p,ce as q,Oe as r,wn as s,kn as t,Se as u,ke as v,Ot as w,Ut as x,Nt as y,At as z};

import{al as J,g as P,am as We,i as Se,d as C,ad as E,h as r,Z as O,an as xe,ao as fe,ap as Je,e as v,F as Ke,v as me,m as A,f as D,t as B,E as ee,G as Ze,A as we,l as Qe,D as te,M as ne,aq as et,C as Ve,T as tt,P as nt,af as at,ar as st,k as lt,j as x,I as K,r as ae,as as it,at as ot,au as rt,s as ut,av as ct,aw as dt,u as Ie,Y as vt,ax as ft,ay as ge,W as mt,az as gt,aA as he,J as ht,O as yt}from"./index-ee158cf4.js";import{m as G,u as $,e as bt}from"./layout-d35d45aa.js";import{m as M,a as Ct,u as pt}from"./index-65a99d14.js";const kt=["top","bottom"],_t=["start","end","left","right"];function St(e,t){let[a,n]=e.split(" ");return n||(n=J(kt,a)?"start":J(_t,a)?"top":"center"),{side:ye(a,t),align:ye(n,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const xt=C({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),q=P(!1)({name:"VDefaultsProvider",props:xt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:l,reset:s,root:i,scoped:d}=We(e);return Se(n,{reset:s,root:i,scoped:d,disabled:l}),()=>{var c;return(c=a.default)==null?void 0:c.call(a)}}}),Be=C({border:[Boolean,Number,String]},"border");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:r(()=>{const n=O(e)?e.value:e.border,l=[];if(n===!0||n==="")l.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))l.push(`border-${s}`);return l})}}function se(e){return xe(()=>{const t=[],a={};if(e.value.background)if(fe(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text){const n=Je(a.backgroundColor);a.color=n,a.caretColor=n}}else t.push(`bg-${e.value.background}`);return e.value.text&&(fe(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function Y(e,t){const a=r(()=>({text:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:l}=se(a);return{textColorClasses:n,textColorStyles:l}}function be(e,t){const a=r(()=>({background:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:l}=se(a);return{backgroundColorClasses:n,backgroundColorStyles:l}}const Ee=C({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Le(e){return{elevationClasses:r(()=>{const a=O(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const le=C({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:r(()=>{const n=O(e)?e.value:e.rounded,l=[];if(n===!0||n==="")l.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))l.push(`rounded-${s}`);return l})}}const wt=[null,"default","comfortable","compact"],Te=C({density:{type:String,default:"default",validator:e=>wt.includes(e)}},"density");function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:r(()=>`${t}--density-${e.density}`)}}const Vt=["elevated","flat","tonal","outlined","text","plain"];function It(e,t){return v(Ke,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Re=C({color:String,variant:{type:String,default:"elevated",validator:e=>Vt.includes(e)}},"variant");function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const a=r(()=>{const{variant:s}=me(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:l}=se(r(()=>{const{variant:s,color:i}=me(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:l,variantClasses:a}}const Ne=C({divided:Boolean,...Be(),...G(),...Te(),...Ee(),...le(),...M(),...A(),...Re()},"VBtnGroup"),Ce=P()({name:"VBtnGroup",props:Ne(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=D(e),{densityClasses:l}=$e(e),{borderClasses:s}=Pe(e),{elevationClasses:i}=Le(e),{roundedClasses:d}=ie(e);Se({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),$(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,l.value,i.value,d.value,e.class],style:e.style},a))}}),Pt=C({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Et=C({value:null,disabled:Boolean,selectedClass:String},"group-item");function Lt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=ee("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const l=Ze();we(Symbol.for(`${t.description}:id`),l);const s=Qe(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=B(e,"value"),d=r(()=>!!(s.disabled.value||e.disabled));s.register({id:l,value:i,disabled:d},n),te(()=>{s.unregister(l)});const c=r(()=>s.isSelected(l)),g=r(()=>c.value&&[s.selectedClass.value,e.selectedClass]);return ne(c,h=>{n.emit("group:selected",{value:h})}),{id:l,isSelected:c,toggle:()=>s.select(l,!c.value),select:h=>s.select(l,h),selectedClass:g,value:i,disabled:d,group:s}}function Tt(e,t){let a=!1;const n=et([]),l=Ve(e,"modelValue",[],o=>o==null?[]:ze(n,at(o)),o=>{const u=Rt(n,o);return e.multiple?u:u[0]}),s=ee("useGroup");function i(o,u){const y=o,m=Symbol.for(`${t.description}:id`),p=st(m,s==null?void 0:s.vnode).indexOf(u);p>-1?n.splice(p,0,y):n.push(y)}function d(o){if(a)return;c();const u=n.findIndex(y=>y.id===o);n.splice(u,1)}function c(){const o=n.find(u=>!u.disabled);o&&e.mandatory==="force"&&!l.value.length&&(l.value=[o.id])}tt(()=>{c()}),te(()=>{a=!0});function g(o,u){const y=n.find(m=>m.id===o);if(!(u&&(y!=null&&y.disabled)))if(e.multiple){const m=l.value.slice(),S=m.findIndex(f=>f===o),p=~S;if(u=u??!p,p&&e.mandatory&&m.length<=1||!p&&e.max!=null&&m.length+1>e.max)return;S<0&&u?m.push(o):S>=0&&!u&&m.splice(S,1),l.value=m}else{const m=l.value.includes(o);if(e.mandatory&&m)return;l.value=u??!m?[o]:[]}}function h(o){if(e.multiple,l.value.length){const u=l.value[0],y=n.findIndex(p=>p.id===u);let m=(y+o)%n.length,S=n[m];for(;S.disabled&&m!==y;)m=(m+o)%n.length,S=n[m];if(S.disabled)return;l.value=[n[m].id]}else{const u=n.find(y=>!y.disabled);u&&(l.value=[u.id])}}const k={register:i,unregister:d,selected:l,select:g,disabled:B(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:o=>l.value.includes(o),selectedClass:r(()=>e.selectedClass),items:r(()=>n),getItemIndex:o=>$t(n,o)};return we(t,k),k}function $t(e,t){const a=ze(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function ze(e,t){const a=[];return t.forEach(n=>{const l=e.find(i=>nt(n,i.value)),s=e[n];(l==null?void 0:l.value)!=null?a.push(l.id):s!=null&&a.push(s.id)}),a}function Rt(e,t){const a=[];return t.forEach(n=>{const l=e.findIndex(s=>s.id===n);if(~l){const s=e[l];a.push(s.value!=null?s.value:l)}}),a}const Oe=Symbol.for("vuetify:v-btn-toggle"),Nt=C({...Ne(),...Pt()},"VBtnToggle");P()({name:"VBtnToggle",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:l,prev:s,select:i,selected:d}=Tt(e,Oe);return $(()=>{const[c]=Ce.filterProps(e);return v(Ce,lt({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:l,prev:s,select:i,selected:d})]}})}),{next:l,prev:s,select:i}}});const zt=["x-small","small","default","large","x-large"],oe=C({size:{type:[String,Number],default:"default"}},"size");function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return xe(()=>{let a,n;return J(zt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:x(e.size),height:x(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Ot=C({color:String,start:Boolean,end:Boolean,icon:K,...G(),...oe(),...M({tag:"i"}),...A()},"VIcon"),W=P()({name:"VIcon",props:Ot(),setup(e,t){let{attrs:a,slots:n}=t;const l=ae(),{themeClasses:s}=D(e),{iconData:i}=it(r(()=>l.value||e.icon)),{sizeClasses:d}=re(e),{textColorClasses:c,textColorStyles:g}=Y(B(e,"color"));return $(()=>{var k,o;const h=(k=n.default)==null?void 0:k.call(n);return h&&(l.value=(o=ot(h).filter(u=>u.type===rt&&u.children&&typeof u.children=="string")[0])==null?void 0:o.children),v(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,d.value,c.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[h]})}),{}}});function Ae(e,t){const a=ae(),n=ut(!1);if(ct){const l=new IntersectionObserver(s=>{e==null||e(s,l),n.value=!!s.find(i=>i.isIntersecting)},t);te(()=>{l.disconnect()}),ne(a,(s,i)=>{i&&(l.unobserve(i),n.value=!1),s&&l.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const At=C({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...G(),...oe(),...M({tag:"div"}),...A()},"VProgressCircular"),Dt=P()({name:"VProgressCircular",props:At(),setup(e,t){let{slots:a}=t;const n=20,l=2*Math.PI*n,s=ae(),{themeClasses:i}=D(e),{sizeClasses:d,sizeStyles:c}=re(e),{textColorClasses:g,textColorStyles:h}=Y(B(e,"color")),{textColorClasses:k,textColorStyles:o}=Y(B(e,"bgColor")),{intersectionRef:u,isIntersecting:y}=Ae(),{resizeRef:m,contentRect:S}=bt(),p=r(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=r(()=>Number(e.width)),b=r(()=>c.value?Number(e.size):S.value?S.value.width:Math.max(f.value,32)),I=r(()=>n/(1-f.value/b.value)*2),V=r(()=>f.value/b.value*I.value),R=r(()=>x((100-p.value)/100*l));return dt(()=>{u.value=s.value,m.value=s.value}),$(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,d.value,g.value,e.class],style:[c.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:p.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[v("circle",{class:["v-progress-circular__underlay",k.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":l,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":l,"stroke-dashoffset":R.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:p.value})])]})),{}}});const pe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},De=C({location:String},"location");function Ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ie();return{locationStyles:r(()=>{if(!e.location)return{};const{side:s,align:i}=St(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(g){return a?a(g):0}const c={};return s!=="center"&&(t?c[pe[s]]=`calc(100% - ${d(s)}px)`:c[s]=0),i!=="center"?t?c[pe[i]]=`calc(100% - ${d(i)}px)`:c[i]=0:(s==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),c})}}const Gt=C({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...G(),...De({location:"top"}),...le(),...M(),...A()},"VProgressLinear"),Mt=P()({name:"VProgressLinear",props:Gt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ve(e,"modelValue"),{isRtl:l,rtlClasses:s}=Ie(),{themeClasses:i}=D(e),{locationStyles:d}=Ge(e),{textColorClasses:c,textColorStyles:g}=Y(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:k}=be(r(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:u}=be(e,"color"),{roundedClasses:y}=ie(e),{intersectionRef:m,isIntersecting:S}=Ae(),p=r(()=>parseInt(e.max,10)),f=r(()=>parseInt(e.height,10)),b=r(()=>parseFloat(e.bufferValue)/p.value*100),I=r(()=>parseFloat(n.value)/p.value*100),V=r(()=>l.value!==e.reverse),R=r(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=r(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function H(_){if(!m.value)return;const{left:L,right:U,width:T}=m.value.getBoundingClientRect(),X=V.value?T-_.clientX+(U-T):_.clientX-L;n.value=Math.round(X/T*p.value)}return $(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&S.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},y.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?x(f.value):0,"--v-progress-linear-height":x(f.value),...d.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&H},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...g.value,[V.value?"left":"right"]:x(-f.value),borderTop:`${x(f.value/2)} dotted`,opacity:F.value,top:`calc(50% - ${x(f.value/4)})`,width:x(100-b.value,"%"),"--v-progress-linear-stream-to":x(f.value*(V.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",h.value],style:[k.value,{opacity:F.value,width:x(e.stream?b.value:100,"%")}]},null),v(vt,{name:R.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>v("div",{key:_,class:["v-progress-linear__indeterminate",_,o.value],style:u.value},null))]):v("div",{class:["v-progress-linear__determinate",o.value],style:[u.value,{width:x(I.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:I.value,buffer:b.value})])]})),{}}}),Ft=C({loading:[Boolean,String]},"loader");function Xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:r(()=>({[`${t}--loading`]:e.loading}))}}function on(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Mt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Yt=["static","relative","fixed","absolute","sticky"],jt=C({position:{type:String,validator:e=>Yt.includes(e)}},"position");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:r(()=>e.position?`${t}--${e.position}`:void 0)}}function rn(){var e,t;return(t=(e=ee("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Ut(e,t){const a=ft("RouterLink"),n=r(()=>!!(e.href||e.to)),l=r(()=>(n==null?void 0:n.value)||ge(t,"click")||ge(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:l,href:B(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:l,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&r(()=>{var i,d;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(d=s.isActive)==null?void 0:d.value}),href:r(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const qt=C({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Wt(e,t){ne(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&mt(()=>{t(!0)})},{immediate:!0})}const Z=Symbol("rippleStop"),Jt=80;function ke(e,t){e.style.transform=t,e.style.webkitTransform=t}function Q(e){return e.constructor.name==="TouchEvent"}function Me(e){return e.constructor.name==="KeyboardEvent"}const Kt=function(e,t){var k;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,l=0;if(!Me(e)){const o=t.getBoundingClientRect(),u=Q(e)?e.touches[e.touches.length-1]:e;n=u.clientX-o.left,l=u.clientY-o.top}let s=0,i=.3;(k=t._ripple)!=null&&k.circle?(i=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(l-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-s*2)/2}px`,c=`${(t.clientHeight-s*2)/2}px`,g=a.center?d:`${n-s}px`,h=a.center?c:`${l-s}px`;return{radius:s,scale:i,x:g,y:h,centerX:d,centerY:c}},j={show(e,t){var u;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const n=document.createElement("span"),l=document.createElement("span");n.appendChild(l),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:i,x:d,y:c,centerX:g,centerY:h}=Kt(e,t,a),k=`${s*2}px`;l.className="v-ripple__animation",l.style.width=k,l.style.height=k,t.appendChild(n);const o=window.getComputedStyle(t);o&&o.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),ke(l,`translate(${d}, ${c}) scale3d(${i},${i},${i})`),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),ke(l,`translate(${g}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),l=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=a.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(a.parentNode)},300)},l)}};function Fe(e){return typeof e>"u"||!!e}function N(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[Z])){if(e[Z]=!0,Q(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Me(e),a._ripple.class&&(t.class=a._ripple.class),Q(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{j.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Jt)}else j.show(e,a,t)}}function _e(e){e[Z]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),j.hide(t)}}function Xe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let z=!1;function Ye(e){!z&&(e.keyCode===he.enter||e.keyCode===he.space)&&(z=!0,N(e))}function je(e){z=!1,w(e)}function He(e){z&&(z=!1,w(e))}function Ue(e,t,a){const{value:n,modifiers:l}=t,s=Fe(n);if(s||j.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=l.center,e._ripple.circle=l.circle,gt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(l.stop){e.addEventListener("touchstart",_e,{passive:!0}),e.addEventListener("mousedown",_e);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Xe,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",N),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Ye),e.addEventListener("keyup",je),e.addEventListener("blur",He),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&qe(e)}function qe(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Ye),e.removeEventListener("keyup",je),e.removeEventListener("dragstart",w),e.removeEventListener("blur",He)}function Zt(e,t){Ue(e,t,!1)}function Qt(e){delete e._ripple,qe(e)}function en(e,t){if(t.value===t.oldValue)return;const a=Fe(t.oldValue);Ue(e,t,a)}const tn={mounted:Zt,unmounted:Qt,updated:en},nn=C({active:{type:Boolean,default:void 0},symbol:{type:null,default:Oe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:K,appendIcon:K,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Be(),...G(),...Te(),...Ct(),...Ee(),...Et(),...Ft(),...De(),...jt(),...le(),...qt(),...oe(),...M({tag:"button"}),...A(),...Re({variant:"elevated"})},"VBtn"),un=P()({name:"VBtn",directives:{Ripple:tn},props:nn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:l}=D(e),{borderClasses:s}=Pe(e),{colorClasses:i,colorStyles:d,variantClasses:c}=Bt(e),{densityClasses:g}=$e(e),{dimensionStyles:h}=pt(e),{elevationClasses:k}=Le(e),{loaderClasses:o}=Xt(e),{locationStyles:u}=Ge(e),{positionClasses:y}=Ht(e),{roundedClasses:m}=ie(e),{sizeClasses:S,sizeStyles:p}=re(e),f=Lt(e,e.symbol,!1),b=Ut(e,a),I=r(()=>{var _;return e.active!==void 0?e.active:b.isLink.value?(_=b.isActive)==null?void 0:_.value:f==null?void 0:f.isSelected.value}),V=r(()=>(f==null?void 0:f.disabled.value)||e.disabled),R=r(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=r(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function H(_){var L;V.value||b.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||a.target==="_blank")||((L=b.navigate)==null||L.call(b,_),f==null||f.toggle())}return Wt(b,f==null?void 0:f.select),$(()=>{var ue,ce;const _=b.isLink.value?"a":e.tag,L=!!(e.prependIcon||n.prepend),U=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),X=(f==null?void 0:f.isSelected.value)&&(!b.isLink.value||((ue=b.isActive)==null?void 0:ue.value))||!f||((ce=b.isActive)==null?void 0:ce.value);return ht(v(_,{type:_==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},l.value,s.value,X?i.value:void 0,g.value,k.value,o.value,y.value,m.value,S.value,c.value,e.class],style:[X?d.value:void 0,h.value,u.value,p.value,e.style],disabled:V.value||void 0,href:b.href.value,onClick:H,value:F.value},{default:()=>{var de;return[It(!0,"v-btn"),!e.icon&&L&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(q,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(W,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(W,{key:"content-icon",icon:e.icon},null):v(q,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var ve;return[((ve=n.default)==null?void 0:ve.call(n))??e.text]}})]),!e.icon&&U&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(q,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(W,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((de=n.loader)==null?void 0:de.call(n))??v(Dt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[yt("ripple"),!V.value&&e.ripple,null]])}),{}}});export{Ge as A,Ht as B,Ft as C,Xt as D,oe as E,re as F,on as L,tn as R,q as V,Ee as a,le as b,Pe as c,Le as d,ie as e,nn as f,un as g,W as h,Y as i,Te as j,qt as k,Re as l,Be as m,Ut as n,Bt as o,$e as p,It as q,rn as r,Tt as s,ye as t,be as u,Mt as v,Et as w,Lt as x,De as y,jt as z};

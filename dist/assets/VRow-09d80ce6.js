import{i as h,E as z,r as O,a3 as we,D as Q,M as $e,aa as X,ad as Le,y as ee,n as c,ac as x,s as te,T as Re,A as ne,av as xe,v as V,G as Ve,aG as Ne,aH as je,j as M,u as Pe,e as Ae,aI as N,as as B,ap as oe}from"./index-c107fcdc.js";const T=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Ee(e){const o=z("useRender");o.render=e}function Oe(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=O(),a=O();if(we){const t=new ResizeObserver(s=>{e==null||e(s,t),s.length&&(o==="content"?a.value=s[0].contentRect:a.value=s[0].target.getBoundingClientRect())});Q(()=>{t.disconnect()}),$e(n,(s,i)=>{i&&(t.unobserve(X(i)),a.value=void 0),s&&t.observe(X(s))},{flush:"post"})}return{resizeRef:n,contentRect:Le(a)}}const k=Symbol.for("vuetify:layout"),ae=Symbol.for("vuetify:layout-item"),Y=1e3,Ze=h({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Xe=h({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ye(e){const o=ee(k);if(!o)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${Ve()}`,a=z("useLayoutItem");ne(ae,{id:n});const t=te(!1);Ne(()=>t.value=!0),je(()=>t.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:i}=o.register(a,{...e,active:c(()=>t.value?!1:e.active.value),id:n});return Q(()=>o.unregister(n)),{layoutItemStyles:s,layoutRect:o.layoutRect,layoutItemScrimStyles:i}}const ke=(e,o,n,a)=>{let t={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...t}}];for(const i of e){const f=o.get(i),y=n.get(i),p=a.get(i);if(!f||!y||!p)continue;const S={...t,[f.value]:parseInt(t[f.value],10)+(p.value?parseInt(y.value,10):0)};s.push({id:i,layer:S}),t=S}return s};function qe(e){const o=ee(k,null),n=c(()=>o?o.rootZIndex.value-100:Y),a=O([]),t=x(new Map),s=x(new Map),i=x(new Map),f=x(new Map),y=x(new Map),{resizeRef:p,contentRect:S}=Oe(),ge=c(()=>{const u=new Map,v=e.overlaps??[];for(const l of v.filter(d=>d.includes(":"))){const[d,r]=l.split(":");if(!a.value.includes(d)||!a.value.includes(r))continue;const m=t.get(d),b=t.get(r),$=s.get(d),L=s.get(r);!m||!b||!$||!L||(u.set(r,{position:m.value,amount:parseInt($.value,10)}),u.set(d,{position:b.value,amount:-parseInt(L.value,10)}))}return u}),C=c(()=>{const u=[...new Set([...i.values()].map(l=>l.value))].sort((l,d)=>l-d),v=[];for(const l of u){const d=a.value.filter(r=>{var m;return((m=i.get(r))==null?void 0:m.value)===l});v.push(...d)}return ke(v,t,s,f)}),K=c(()=>!Array.from(y.values()).some(u=>u.value)),I=c(()=>C.value[C.value.length-1].layer),me=c(()=>({"--v-layout-left":V(I.value.left),"--v-layout-right":V(I.value.right),"--v-layout-top":V(I.value.top),"--v-layout-bottom":V(I.value.bottom),...K.value?void 0:{transition:"none"}})),w=c(()=>C.value.slice(1).map((u,v)=>{let{id:l}=u;const{layer:d}=C.value[v],r=s.get(l),m=t.get(l);return{id:l,...d,size:Number(r.value),position:m.value}})),H=u=>w.value.find(v=>v.id===u),j=z("createLayout"),D=te(!1);Re(()=>{D.value=!0}),ne(k,{register:(u,v)=>{let{id:l,order:d,position:r,layoutSize:m,elementSize:b,active:$,disableTransitions:L,absolute:he}=v;i.set(l,d),t.set(l,r),s.set(l,m),f.set(l,$),L&&y.set(l,L);const F=xe(ae,j==null?void 0:j.vnode).indexOf(u);F>-1?a.value.splice(F,0,l):a.value.push(l);const W=c(()=>w.value.findIndex(R=>R.id===l)),P=c(()=>n.value+C.value.length*2-W.value*2),Se=c(()=>{const R=r.value==="left"||r.value==="right",A=r.value==="right",Ie=r.value==="bottom",Z={[r.value]:0,zIndex:P.value,transform:`translate${R?"X":"Y"}(${($.value?0:-110)*(A||Ie?-1:1)}%)`,position:he.value||n.value!==Y?"absolute":"fixed",...K.value?void 0:{transition:"none"}};if(!D.value)return Z;const g=w.value[W.value];if(!g)throw new Error(`[Vuetify] Could not find layout item "${l}"`);const E=ge.value.get(l);return E&&(g[E.position]+=E.amount),{...Z,height:R?`calc(100% - ${g.top}px - ${g.bottom}px)`:b.value?`${b.value}px`:void 0,left:A?void 0:`${g.left}px`,right:A?`${g.right}px`:void 0,top:r.value!=="bottom"?`${g.top}px`:void 0,bottom:r.value!=="top"?`${g.bottom}px`:void 0,width:R?b.value?`${b.value}px`:void 0:`calc(100% - ${g.left}px - ${g.right}px)`}}),Ce=c(()=>({zIndex:P.value-1}));return{layoutItemStyles:Se,layoutItemScrimStyles:Ce,zIndex:P}},unregister:u=>{i.delete(u),t.delete(u),s.delete(u),f.delete(u),y.delete(u),a.value=a.value.filter(v=>v!==u)},mainRect:I,mainStyles:me,getLayoutItem:H,items:w,layoutRect:S,rootZIndex:n});const pe=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),be=c(()=>({zIndex:n.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:pe,layoutStyles:be,getLayoutItem:H,items:w,layoutRect:S,layoutRef:p}}const G=h({tag:{type:String,default:"div"}},"tag");const ze=h({fluid:{type:Boolean,default:!1},...T(),...G()},"VContainer"),Je=M()({name:"VContainer",props:ze(),setup(e,o){let{slots:n}=o;const{rtlClasses:a}=Pe();return Ee(()=>Ae(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},n)),{}}}),se=(()=>N.reduce((e,o)=>(e[o]={type:[Boolean,String,Number],default:!1},e),{}))(),le=(()=>N.reduce((e,o)=>{const n="offset"+B(o);return e[n]={type:[String,Number],default:null},e},{}))(),ue=(()=>N.reduce((e,o)=>{const n="order"+B(o);return e[n]={type:[String,Number],default:null},e},{}))(),q={col:Object.keys(se),offset:Object.keys(le),order:Object.keys(ue)};function Me(e,o,n){let a=e;if(!(n==null||n===!1)){if(o){const t=o.replace(e,"");a+=`-${t}`}return e==="col"&&(a="v-"+a),e==="col"&&(n===""||n===!0)||(a+=`-${n}`),a.toLowerCase()}}const Be=["auto","start","end","center","baseline","stretch"],Te=h({cols:{type:[Boolean,String,Number],default:!1},...se,offset:{type:[String,Number],default:null},...le,order:{type:[String,Number],default:null},...ue,alignSelf:{type:String,default:null,validator:e=>Be.includes(e)},...T(),...G()},"VCol"),Qe=M()({name:"VCol",props:Te(),setup(e,o){let{slots:n}=o;const a=c(()=>{const t=[];let s;for(s in q)q[s].forEach(f=>{const y=e[f],p=Me(s,f,y);p&&t.push(p)});const i=t.some(f=>f.startsWith("v-col-"));return t.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t});return()=>{var t;return oe(e.tag,{class:[a.value,e.class],style:e.style},(t=n.default)==null?void 0:t.call(n))}}}),U=["start","end","center"],ie=["space-between","space-around","space-evenly"];function _(e,o){return N.reduce((n,a)=>{const t=e+B(a);return n[t]=o(),n},{})}const Ge=[...U,"baseline","stretch"],re=e=>Ge.includes(e),ce=_("align",()=>({type:String,default:null,validator:re})),Ue=[...U,...ie],fe=e=>Ue.includes(e),de=_("justify",()=>({type:String,default:null,validator:fe})),_e=[...U,...ie,"stretch"],ve=e=>_e.includes(e),ye=_("alignContent",()=>({type:String,default:null,validator:ve})),J={align:Object.keys(ce),justify:Object.keys(de),alignContent:Object.keys(ye)},Ke={align:"align",justify:"justify",alignContent:"align-content"};function He(e,o,n){let a=Ke[e];if(n!=null){if(o){const t=o.replace(e,"");a+=`-${t}`}return a+=`-${n}`,a.toLowerCase()}}const De=h({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:re},...ce,justify:{type:String,default:null,validator:fe},...de,alignContent:{type:String,default:null,validator:ve},...ye,...T(),...G()},"VRow"),et=M()({name:"VRow",props:De(),setup(e,o){let{slots:n}=o;const a=c(()=>{const t=[];let s;for(s in J)J[s].forEach(i=>{const f=e[i],y=He(s,i,f);y&&t.push(y)});return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t});return()=>{var t;return oe(e.tag,{class:["v-row",a.value,e.class],style:e.style},(t=n.default)==null?void 0:t.call(n))}}});export{Je as V,G as a,et as b,Qe as c,Ze as d,qe as e,Xe as f,Ye as g,Oe as h,T as m,Ee as u};

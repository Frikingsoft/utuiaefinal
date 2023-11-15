import{_ as Ae,o as H,c as pe,p as Ye,a as Ge,b as W,d as A,g as D,e as s,m as J,t as I,f as Q,u as ze,s as N,h as m,i as Me,j as F,k as ie,l as ee,r as B,n as je,q as se,w as P,v as Ue,x as Te,F as Z,y as Xe,z as Ke,A as G,B as te,C as Le,D as we,E as qe,G as St,H as pt,I as U,J as Ze,K as wt,L as Re,M as X,N as kt,O as Vt,P as Ct,Q as xt,R as oe,S as It,T as Je,U as Tt,V as Lt,W as Pt,X as Bt,Y as At,Z as Mt}from"./index-ee158cf4.js";import{V as Et,a as Nt,b as Ie}from"./VRow-71fa5553.js";import{m as ce,a as de,b as ve,u as ue,c as fe,d as me,e as ge,V as q,f as Dt,g as Ee,h as Pe,i as Qe,j as et,k as Rt,l as tt,R as $t,n as Ot,o as Ht,p as at,q as Ft,r as Wt,t as Yt}from"./VBtn-fa0d49dc.js";import{m as O,u as $,a as Gt,c as zt,b as nt,d as lt,e as jt}from"./layout-d35d45aa.js";import{m as Y,M as Ut,a as ot,u as it}from"./index-65a99d14.js";import{V as st}from"./index-0467a7ff.js";import{V as Xt}from"./VImg-d8cb82cd.js";import{u as ut}from"./ssrBoot-30480d6b.js";import{c as rt,V as $e}from"./VAvatar-d47b3887.js";const Kt="/utu.png";const qt={},Zt=e=>(Ye("data-v-6e0b635a"),e=e(),Ge(),e),Jt={class:"logo"},Qt=Zt(()=>W("img",{src:Kt},null,-1)),ea=[Qt];function ta(e,o){return H(),pe("div",Jt,ea)}const aa=Ae(qt,[["render",ta],["__scopeId","data-v-6e0b635a"]]);const na=A({text:String,...O(),...Y()},"VToolbarTitle"),ct=D()({name:"VToolbarTitle",props:na(),setup(e,o){let{slots:t}=o;return $(()=>{const n=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),la=[null,"prominent","default","comfortable","compact"],oa=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>la.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ce(),...O(),...de(),...ve(),...Y({tag:"header"}),...J()},"VToolbar"),ia=D()({name:"VToolbar",props:oa(),setup(e,o){var d;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=ue(I(e,"color")),{borderClasses:a}=fe(e),{elevationClasses:i}=me(e),{roundedClasses:r}=ge(e),{themeClasses:y}=Q(e),{rtlClasses:g}=ze(),f=N(!!(e.extended||(d=t.extension)!=null&&d.call(t))),u=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=m(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Me({VBtn:{variant:"text"}}),$(()=>{var C;const v=!!(e.title||t.title),S=!!(t.image||e.image),b=(C=t.extension)==null?void 0:C.call(t);return f.value=!!(e.extended||b),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,i.value,r.value,y.value,g.value,e.class],style:[l.value,e.style]},{default:()=>[S&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Xt,{key:"image-img",cover:!0,src:e.image},null)]),s(q,{defaults:{VTabs:{height:F(u.value)}}},{default:()=>{var x,T,M;return[s("div",{class:"v-toolbar__content",style:{height:F(u.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),v&&s(ct,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(M=t.append)==null?void 0:M.call(t)])])]}}),s(q,{defaults:{VTabs:{height:F(c.value)}}},{default:()=>[s(st,null,{default:()=>[f.value&&s("div",{class:"v-toolbar__extension",style:{height:F(c.value)}},[b])]})]})]})}),{contentHeight:u,extensionHeight:c}}}),sa=A({...Dt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ua=D()({name:"VAppBarNavIcon",props:sa(),setup(e,o){let{slots:t}=o;return $(()=>s(Ee,ie(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),ra={class:"menu"},ca={__name:"Toolbar",setup(e){const o=ee("abrir_menu"),t=B([{nombre:"inicio",ruta:"/",icono:"fas fa-home"},{nombre:"login",ruta:"/login",icono:"fa-solid fa-user-plus"},{nombre:"registro",ruta:"/registro",icono:"fa-solid fa-address-card"},{nombre:"contactos",ruta:"/contacto",icono:"fa-solid fa-school"},{nombre:"colaboradores",ruta:"/colaboradores",icono:"fa-solid fa-users-gear"}]);return(n,l)=>{const a=je("Router-link");return H(),se(ia,{dark:"",prominent:"",class:"bg-light-blue-darken-4 toolbar"},{default:P(()=>[s(Et,null,{default:P(()=>[s(Nt,null,{default:P(()=>[s(Ie,{cols:"3"},{default:P(()=>[s(ua,{onClick:l[0]||(l[0]=i=>o.value=!Ue(o)),class:"boton"})]),_:1}),s(Ie,{cols:"6",class:"titulo"},{default:P(()=>[s(ct,{class:"titulo2"},{default:P(()=>[Te("Instituto de Alta Especialización -- Melo")]),_:1})]),_:1}),s(Ie,{cols:"3"},{default:P(()=>[W("nav",ra,[(H(!0),pe(Z,null,Xe(t.value,(i,r)=>(H(),se(a,{key:r,to:i.ruta},{default:P(()=>[s(Ee,{icon:""},{default:P(()=>[s(Pe,null,{default:P(()=>[Te(Ke(i.icono),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})}}},da=Ae(ca,[["__scopeId","data-v-d9dc4644"]]),va="/login.png";const fa=A({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...O(),...J()},"VDivider"),Se=D()({name:"VDivider",props:fa(),setup(e,o){let{attrs:t}=o;const{themeClasses:n}=Q(e),{textColorClasses:l,textColorStyles:a}=Qe(I(e,"color")),i=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=F(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=F(e.thickness)),r});return $(()=>s("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const ma=A({...O(),...Gt()},"VLayout"),dt=D()({name:"VLayout",props:ma(),setup(e,o){let{slots:t}=o;const{layoutClasses:n,layoutStyles:l,getLayoutItem:a,items:i,layoutRef:r}=zt(e);return $(()=>{var y;return s("div",{ref:r,class:[n.value,e.class],style:[l.value,e.style]},[(y=t.default)==null?void 0:y.call(t)])}),{getLayoutItem:a,items:i}}});const Be=Symbol.for("vuetify:list");function vt(){const e=ee(Be,{hasPrepend:N(!1),updateHasPrepend:()=>null}),o={hasPrepend:N(!1),updateHasPrepend:t=>{t&&(o.hasPrepend.value=t)}};return G(Be,o),e}function ft(){return ee(Be,null)}const ga={open:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(o);let i=l.get(o);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(o),n},select:()=>null},mt={open:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(t){let a=l.get(o);for(n.add(o);a!=null&&a!==o;)n.add(a),a=l.get(a);return n}else n.delete(o);return n},select:()=>null},ha={open:mt.open,select:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(o);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},Ne=e=>{const o={select:t=>{let{id:n,value:l,selected:a}=t;if(n=te(n),e&&!l){const i=Array.from(a.entries()).reduce((r,y)=>{let[g,f]=y;return f==="on"?[...r,g]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return o},gt=e=>{const o=Ne(e);return{select:n=>{let{selected:l,id:a,...i}=n;a=te(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return o.select({...i,id:a,selected:r})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=o.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>o.out(n,l,a)}},ya=e=>{const o=Ne(e);return{select:n=>{let{id:l,selected:a,children:i,...r}=n;return l=te(l),i.has(l)?a:o.select({id:l,selected:a,children:i,...r})},in:o.in,out:o.out}},ba=e=>{const o=gt(e);return{select:n=>{let{id:l,selected:a,children:i,...r}=n;return l=te(l),i.has(l)?a:o.select({id:l,selected:a,children:i,...r})},in:o.in,out:o.out}},_a=e=>{const o={select:t=>{let{id:n,value:l,selected:a,children:i,parents:r}=t;n=te(n);const y=new Map(a),g=[n];for(;g.length;){const u=g.shift();a.set(u,l?"on":"off"),i.has(u)&&g.push(...i.get(u))}let f=r.get(n);for(;f;){const u=i.get(f),c=u.every(v=>a.get(v)==="on"),d=u.every(v=>!a.has(v)||a.get(v)==="off");a.set(f,c?"on":d?"off":"indeterminate"),f=r.get(f)}return e&&!l&&Array.from(a.entries()).reduce((c,d)=>{let[v,S]=d;return S==="on"?[...c,v]:c},[]).length===0?y:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return o},re=Symbol.for("vuetify:nested"),ht={id:N(),root:{register:()=>null,unregister:()=>null,parents:B(new Map),children:B(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:B(new Set),selected:B(new Map),selectedValues:B([])}},Sa=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),pa=e=>{let o=!1;const t=B(new Map),n=B(new Map),l=Le(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ba(e.mandatory);case"leaf":return ya(e.mandatory);case"independent":return Ne(e.mandatory);case"single-independent":return gt(e.mandatory);case"classic":default:return _a(e.mandatory)}}),i=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ha;case"single":return ga;case"multiple":default:return mt}}),r=Le(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));we(()=>{o=!0});function y(u){const c=[];let d=u;for(;d!=null;)c.unshift(d),d=n.value.get(d);return c}const g=qe("nested"),f={id:N(),root:{opened:l,selected:r,selectedValues:m(()=>{const u=[];for(const[c,d]of r.value.entries())d==="on"&&u.push(c);return u}),register:(u,c,d)=>{c&&u!==c&&n.value.set(u,c),d&&t.value.set(u,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],u])},unregister:u=>{if(o)return;t.value.delete(u);const c=n.value.get(u);if(c){const d=t.value.get(c)??[];t.value.set(c,d.filter(v=>v!==u))}n.value.delete(u),l.value.delete(u)},open:(u,c,d)=>{g.emit("click:open",{id:u,value:c,path:y(u),event:d});const v=i.value.open({id:u,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:d});v&&(l.value=v)},openOnSelect:(u,c,d)=>{const v=i.value.select({id:u,value:c,selected:new Map(r.value),opened:new Set(l.value),children:t.value,parents:n.value,event:d});v&&(l.value=v)},select:(u,c,d)=>{g.emit("click:select",{id:u,value:c,path:y(u),event:d});const v=a.value.select({id:u,value:c,selected:new Map(r.value),children:t.value,parents:n.value,event:d});v&&(r.value=v),f.root.openOnSelect(u,c,d)},children:t,parents:n}};return G(re,f),f.root},yt=(e,o)=>{const t=ee(re,ht),n=Symbol(St()),l=m(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(i,r)=>t.root.open(l.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(l.value,i,r),isOpen:m(()=>t.root.opened.value.has(l.value)),parent:m(()=>t.root.parents.value.get(l.value)),select:(i,r)=>t.root.select(l.value,i,r),isSelected:m(()=>t.root.selected.value.get(te(l.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,o),we(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),o&&G(re,a),a},wa=()=>{const e=ee(re,ht);G(re,{...e,isGroupActivator:!0})},ka=pt({name:"VListGroupActivator",setup(e,o){let{slots:t}=o;return wa(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Va=A({activeColor:String,baseColor:String,color:String,collapseIcon:{type:U,default:"$collapse"},expandIcon:{type:U,default:"$expand"},prependIcon:U,appendIcon:U,fluid:Boolean,subgroup:Boolean,title:String,value:null,...O(),...Y()},"VListGroup"),Oe=D()({name:"VListGroup",props:Va(),setup(e,o){let{slots:t}=o;const{isOpen:n,open:l,id:a}=yt(I(e,"value"),!0),i=m(()=>`v-list-group--id-${String(a.value)}`),r=ft(),{isBooted:y}=ut();function g(d){l(!n.value,d)}const f=m(()=>({onClick:g,class:"v-list-group__header",id:i.value})),u=m(()=>n.value?e.collapseIcon:e.expandIcon),c=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return $(()=>s(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&s(q,{defaults:c.value},{default:()=>[s(ka,null,{default:()=>[t.activator({props:f.value,isOpen:n.value})]})]}),s(Ut,{transition:{component:st},disabled:!y.value},{default:()=>{var d;return[Ze(s("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[wt,n.value]])]}})]})),{}}});const Ca=rt("v-list-item-subtitle"),xa=rt("v-list-item-title"),Ia=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:U,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Re(),onClickOnce:Re(),...ce(),...O(),...et(),...ot(),...de(),...ve(),...Rt(),...Y(),...J(),...tt({variant:"text"})},"VListItem"),K=D()({name:"VListItem",directives:{Ripple:$t},props:Ia(),emits:{click:e=>!0},setup(e,o){let{attrs:t,slots:n,emit:l}=o;const a=Ot(e,t),i=m(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:y,isIndeterminate:g,isGroupActivator:f,root:u,parent:c,openOnSelect:d}=yt(i,!1),v=ft(),S=m(()=>{var V;return e.active!==!1&&(e.active||((V=a.isActive)==null?void 0:V.value)||y.value)}),b=m(()=>e.link!==!1&&a.isLink.value),C=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!v)),x=m(()=>e.rounded||e.nav),T=m(()=>e.color??e.activeColor),M=m(()=>({color:S.value?T.value??e.baseColor:e.baseColor,variant:e.variant}));X(()=>{var V;return(V=a.isActive)==null?void 0:V.value},V=>{V&&c.value!=null&&u.open(c.value,!0),V&&d(V)},{immediate:!0});const{themeClasses:h}=Q(e),{borderClasses:p}=fe(e),{colorClasses:_,colorStyles:w,variantClasses:k}=Ht(M),{densityClasses:E}=at(e),{dimensionStyles:ae}=it(e),{elevationClasses:ke}=me(e),{roundedClasses:he}=ge(x),Ve=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),z=m(()=>({isActive:S.value,select:r,isSelected:y.value,isIndeterminate:g.value}));function ye(V){var L;l("click",V),!(f||!C.value)&&((L=a.navigate)==null||L.call(a,V),e.value!=null&&r(!y.value,V))}function Ce(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),ye(V))}return $(()=>{const V=b.value?"a":e.tag,L=n.title||e.title,be=n.subtitle||e.subtitle,ne=!!(e.appendAvatar||e.appendIcon),_e=!!(ne||n.append),le=!!(e.prependAvatar||e.prependIcon),xe=!!(le||n.prepend);return v==null||v.updateHasPrepend(xe),e.activeColor&&kt("active-color",["color","base-color"]),Ze(s(V,{class:["v-list-item",{"v-list-item--active":S.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!xe&&(v==null?void 0:v.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&S.value},h.value,p.value,_.value,E.value,ke.value,Ve.value,he.value,k.value,e.class],style:[w.value,ae.value,e.style],href:a.href.value,tabindex:C.value?v?-2:0:void 0,onClick:ye,onKeydown:C.value&&!b.value&&Ce},{default:()=>{var De;return[Ft(C.value||S.value,"v-list-item"),xe&&s("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?s(q,{key:"prepend-defaults",disabled:!le,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var R;return[(R=n.prepend)==null?void 0:R.call(n,z.value)]}}):s(Z,null,[e.prependAvatar&&s($e,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(Pe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),s("div",{class:"v-list-item__spacer"},null)]),s("div",{class:"v-list-item__content","data-no-activator":""},[L&&s(xa,{key:"title"},{default:()=>{var R;return[((R=n.title)==null?void 0:R.call(n,{title:e.title}))??e.title]}}),be&&s(Ca,{key:"subtitle"},{default:()=>{var R;return[((R=n.subtitle)==null?void 0:R.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(De=n.default)==null?void 0:De.call(n,z.value)]),_e&&s("div",{key:"append",class:"v-list-item__append"},[n.append?s(q,{key:"append-defaults",disabled:!ne,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var R;return[(R=n.append)==null?void 0:R.call(n,z.value)]}}):s(Z,null,[e.appendIcon&&s(Pe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s($e,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),s("div",{class:"v-list-item__spacer"},null)])]}}),[[Vt("ripple"),C.value&&e.ripple]])}),{}}}),Ta=A({color:String,inset:Boolean,sticky:Boolean,title:String,...O(),...Y()},"VListSubheader"),La=D()({name:"VListSubheader",props:Ta(),setup(e,o){let{slots:t}=o;const{textColorClasses:n,textColorStyles:l}=Qe(I(e,"color"));return $(()=>{const a=!!(t.default||e.title);return s(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[a&&s("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Pa=A({items:Array},"VListChildren"),bt=D()({name:"VListChildren",props:Pa(),setup(e,o){let{slots:t}=o;return vt(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var d,v;let{children:i,props:r,type:y,raw:g}=a;if(y==="divider")return((d=t.divider)==null?void 0:d.call(t,{props:r}))??s(Se,r,null);if(y==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??s(La,r,null);const f={subtitle:t.subtitle?S=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{...S,item:g})}:void 0,prepend:t.prepend?S=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{...S,item:g})}:void 0,append:t.append?S=>{var b;return(b=t.append)==null?void 0:b.call(t,{...S,item:g})}:void 0,title:t.title?S=>{var b;return(b=t.title)==null?void 0:b.call(t,{...S,item:g})}:void 0},[u,c]=Oe.filterProps(r);return i?s(Oe,ie({value:r==null?void 0:r.value},u),{activator:S=>{let{props:b}=S;return t.header?t.header({props:{...r,...b}}):s(K,ie(r,b),f)},default:()=>s(bt,{items:i},t)}):t.item?t.item({props:r}):s(K,r,f)}))}}}),Ba=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Ct}},"list-items");function Aa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ma(e,o){const t=oe(o,e.itemType,"item"),n=Aa(o)?o:oe(o,e.itemTitle),l=oe(o,e.itemValue,void 0),a=oe(o,e.itemChildren),i=e.itemProps===!0?It(o,["children"])[1]:oe(o,e.itemProps),r={title:n,value:l,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?_t(e,a):void 0,raw:o}}function _t(e,o){const t=[];for(const n of o)t.push(Ma(e,n));return t}function Ea(e){return{items:m(()=>_t(e,e.items))}}const Na=A({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Sa({selectStrategy:"single-leaf",openStrategy:"list"}),...ce(),...O(),...et(),...ot(),...de(),itemType:{type:String,default:"type"},...Ba(),...ve(),...Y(),...J(),...tt({variant:"text"})},"VList"),He=D()({name:"VList",props:Na(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,o){let{slots:t}=o;const{items:n}=Ea(e),{themeClasses:l}=Q(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ue(I(e,"bgColor")),{borderClasses:r}=fe(e),{densityClasses:y}=at(e),{dimensionStyles:g}=it(e),{elevationClasses:f}=me(e),{roundedClasses:u}=ge(e),{open:c,select:d}=pa(e),v=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),S=I(e,"activeColor"),b=I(e,"baseColor"),C=I(e,"color");vt(),Me({VListGroup:{activeColor:S,baseColor:b,color:C},VListItem:{activeClass:I(e,"activeClass"),activeColor:S,baseColor:b,color:C,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}});const x=N(!1),T=B();function M(k){x.value=!0}function h(k){x.value=!1}function p(k){var E;!x.value&&!(k.relatedTarget&&((E=T.value)!=null&&E.contains(k.relatedTarget)))&&w()}function _(k){if(T.value){if(k.key==="ArrowDown")w("next");else if(k.key==="ArrowUp")w("prev");else if(k.key==="Home")w("first");else if(k.key==="End")w("last");else return;k.preventDefault()}}function w(k){if(T.value)return xt(T.value,k)}return $(()=>s(e.tag,{ref:T,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,r.value,y.value,f.value,v.value,u.value,e.class],style:[i.value,g.value,e.style],tabindex:e.disabled||x.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:M,onFocusout:h,onFocus:p,onKeydown:_},{default:()=>[s(bt,{items:n.value},t)]})),{open:c,select:d,focus:w}}});function Da(e){let{rootEl:o,isSticky:t,layoutItemStyles:n}=e;const l=N(!1),a=N(0),i=m(()=>{const g=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[g]:F(a.value)}:{top:n.value.top}]});Je(()=>{X(t,g=>{g?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),we(()=>{window.removeEventListener("scroll",y)});let r=0;function y(){const g=r>window.scrollY?"up":"down",f=o.value.getBoundingClientRect(),u=parseFloat(n.value.top??0),c=window.scrollY-Math.max(0,a.value-u),d=f.height+Math.max(a.value,u)-window.scrollY-window.innerHeight,v=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;f.height<window.innerHeight-u?(l.value="top",a.value=u):g==="up"&&l.value==="bottom"||g==="down"&&l.value==="top"?(a.value=window.scrollY+f.top-v,l.value=!0):g==="down"&&d<=0?(a.value=0,l.value="bottom"):g==="up"&&c<=0&&(v?l.value!=="top"&&(a.value=-c+v+u,l.value="top"):(a.value=f.top+c,l.value="top")),r=window.scrollY}return{isStuck:l,stickyStyles:i}}const Ra=100,$a=20;function Fe(e){const o=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*o}function We(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=Fe(o),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(l-n)*Math.abs(l),t===e.length-1&&(o*=.5)}return Fe(o)*1e3}function Oa(){const e={};function o(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Tt($a))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(l){var g;const a=(g=e[l])==null?void 0:g.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const i=a[0],r=[],y=[];for(const f of a){if(i[0]-f[0]>Ra)break;r.push({t:f[0],d:f[1].clientX}),y.push({t:f[0],d:f[1].clientY})}return{x:We(r),y:We(y),get direction(){const{x:f,y:u}=this,[c,d]=[Math.abs(f),Math.abs(u)];return c>d&&f>=0?"right":c>d&&f<=0?"left":d>c&&u>=0?"down":d>c&&u<=0?"up":Ha()}}}return{addMovement:o,endTouch:t,getVelocity:n}}function Ha(){throw new Error}function Fa(e){let{isActive:o,isTemporary:t,width:n,touchless:l,position:a}=e;Je(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",T,{passive:!0})}),we(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",T)});const i=m(()=>["left","right"].includes(a.value)),{addMovement:r,endTouch:y,getVelocity:g}=Oa();let f=!1;const u=N(!1),c=N(0),d=N(0);let v;function S(h,p){return(a.value==="left"?h:a.value==="right"?document.documentElement.clientWidth-h:a.value==="top"?h:a.value==="bottom"?document.documentElement.clientHeight-h:j())-(p?n.value:0)}function b(h){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const _=a.value==="left"?(h-d.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-h-d.value)/n.value:a.value==="top"?(h-d.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-h-d.value)/n.value:j();return p?Math.max(0,Math.min(1,_)):_}function C(h){if(l.value)return;const p=h.changedTouches[0].clientX,_=h.changedTouches[0].clientY,w=25,k=a.value==="left"?p<w:a.value==="right"?p>document.documentElement.clientWidth-w:a.value==="top"?_<w:a.value==="bottom"?_>document.documentElement.clientHeight-w:j(),E=o.value&&(a.value==="left"?p<n.value:a.value==="right"?p>document.documentElement.clientWidth-n.value:a.value==="top"?_<n.value:a.value==="bottom"?_>document.documentElement.clientHeight-n.value:j());(k||E||o.value&&t.value)&&(f=!0,v=[p,_],d.value=S(i.value?p:_,o.value),c.value=b(i.value?p:_),y(h),r(h))}function x(h){const p=h.changedTouches[0].clientX,_=h.changedTouches[0].clientY;if(f){if(!h.cancelable){f=!1;return}const k=Math.abs(p-v[0]),E=Math.abs(_-v[1]);(i.value?k>E&&k>3:E>k&&E>3)?(u.value=!0,f=!1):(i.value?E:k)>3&&(f=!1)}if(!u.value)return;h.preventDefault(),r(h);const w=b(i.value?p:_,!1);c.value=Math.max(0,Math.min(1,w)),w>1?d.value=S(i.value?p:_,!0):w<0&&(d.value=S(i.value?p:_,!1))}function T(h){if(f=!1,!u.value)return;r(h),u.value=!1;const p=g(h.changedTouches[0].identifier),_=Math.abs(p.x),w=Math.abs(p.y);(i.value?_>w&&_>400:w>_&&w>3)?o.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||j()):o.value=c.value>.5}const M=m(()=>u.value?{transform:a.value==="left"?`translateX(calc(-100% + ${c.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${c.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${c.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${c.value*n.value}px))`:j(),transition:"none"}:void 0);return{isDragging:u,dragProgress:c,dragStyles:M}}function j(){throw new Error}function Wa(){const o=qe("useScopeId").vnode.scopeId;return{scopeId:o?{[o]:""}:void 0}}const Ya=["start","end","left","right","top","bottom"],Ga=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ya.includes(e)},sticky:Boolean,...ce(),...O(),...de(),...nt(),...ve(),...Y({tag:"nav"}),...J()},"VNavigationDrawer"),za=D()({name:"VNavigationDrawer",props:Ga(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:n,slots:l}=o;const{isRtl:a}=ze(),{themeClasses:i}=Q(e),{borderClasses:r}=fe(e),{backgroundColorClasses:y,backgroundColorStyles:g}=ue(I(e,"color")),{elevationClasses:f}=me(e),{mobile:u}=Lt(),{roundedClasses:c}=ge(e),d=Wt(),v=Le(e,"modelValue",null,L=>!!L),{ssrBootStyles:S}=ut(),{scopeId:b}=Wa(),C=B(),x=N(!1),T=m(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=m(()=>Yt(e.location,a.value)),h=m(()=>!e.permanent&&(u.value||e.temporary)),p=m(()=>e.sticky&&!h.value&&M.value!=="bottom");e.expandOnHover&&e.rail!=null&&X(x,L=>n("update:rail",!L)),e.disableResizeWatcher||X(h,L=>!e.permanent&&Pt(()=>v.value=!L)),!e.disableRouteWatcher&&d&&X(d.currentRoute,()=>h.value&&(v.value=!1)),X(()=>e.permanent,L=>{L&&(v.value=!0)}),Bt(()=>{e.modelValue!=null||h.value||(v.value=e.permanent||!u.value)});const{isDragging:_,dragProgress:w,dragStyles:k}=Fa({isActive:v,isTemporary:h,width:T,touchless:I(e,"touchless"),position:M}),E=m(()=>{const L=h.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):T.value;return _.value?L*w.value:L}),{layoutItemStyles:ae,layoutItemScrimStyles:ke}=lt({id:e.name,order:m(()=>parseInt(e.order,10)),position:M,layoutSize:E,elementSize:T,active:m(()=>v.value||_.value),disableTransitions:m(()=>_.value),absolute:m(()=>e.absolute||p.value&&typeof he.value!="string")}),{isStuck:he,stickyStyles:Ve}=Da({rootEl:C,isSticky:p,layoutItemStyles:ae}),z=ue(m(()=>typeof e.scrim=="string"?e.scrim:null)),ye=m(()=>({..._.value?{opacity:w.value*.2,transition:"none"}:void 0,...ke.value}));Me({VList:{bgColor:"transparent"}});function Ce(){x.value=!0}function V(){x.value=!1}return $(()=>{const L=l.image||e.image;return s(Z,null,[s(e.tag,ie({ref:C,onMouseenter:Ce,onMouseleave:V,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":h.value,"v-navigation-drawer--active":v.value,"v-navigation-drawer--sticky":p.value},i.value,y.value,r.value,f.value,c.value,e.class],style:[g.value,ae.value,k.value,S.value,Ve.value,e.style]},b,t),{default:()=>{var be,ne,_e,le;return[L&&s("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(be=l.image)==null?void 0:be.call(l,{image:e.image}):s("img",{src:e.image,alt:""},null)]),l.prepend&&s("div",{class:"v-navigation-drawer__prepend"},[(ne=l.prepend)==null?void 0:ne.call(l)]),s("div",{class:"v-navigation-drawer__content"},[(_e=l.default)==null?void 0:_e.call(l)]),l.append&&s("div",{class:"v-navigation-drawer__append"},[(le=l.append)==null?void 0:le.call(l)])]}}),s(At,{name:"fade-transition"},{default:()=>[h.value&&(_.value||v.value)&&!!e.scrim&&s("div",ie({class:["v-navigation-drawer__scrim",z.backgroundColorClasses.value],style:[ye.value,z.backgroundColorStyles.value],onClick:()=>v.value=!1},b),null)]})])}),{isStuck:he}}}),ja=e=>(Ye("data-v-cf1287ec"),e=e(),Ge(),e),Ua=ja(()=>W("div",{class:"foto"},[W("img",{src:va})],-1)),Xa={__name:"Drawer",setup(e){const o=ee("abrir_menu");return(t,n)=>(H(),se(dt,null,{default:P(()=>[s(za,{modelValue:Ue(o),"onUpdate:modelValue":n[0]||(n[0]=l=>Mt(o)?o.value=l:null),temporary:""},{default:P(()=>[s(K,{"prepend-avatar":"",title:"Usuario",class:"usuario bg-light-blue-darken-4 d-flex justify-center align-center"}),Ua,s(Se),s(He,{density:"compact",nav:""},{default:P(()=>[s(K,{"prepend-icon":"mdi-view-dashboard",title:"Inicio",value:"home"}),s(K,{"prepend-icon":"mdi-forum",title:"Registro",value:"registro"})]),_:1}),s(Se),s(He,{density:"compact",nav:"",class:"d-flex justify-center"},{default:P(()=>[s(K,{title:"Usuario No Registrado",value:"home"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},Ka=Ae(Xa,[["__scopeId","data-v-cf1287ec"]]);const qa=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ce(),...O(),...de(),...nt(),...ve(),...Y({tag:"footer"}),...J()},"VFooter"),Za=D()({name:"VFooter",props:qa(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=Q(e),{backgroundColorClasses:l,backgroundColorStyles:a}=ue(I(e,"color")),{borderClasses:i}=fe(e),{elevationClasses:r}=me(e),{roundedClasses:y}=ge(e),g=N(32),{resizeRef:f}=jt(d=>{d.length&&(g.value=d[0].target.clientHeight)}),u=m(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:c}=lt({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:u,elementSize:m(()=>e.height==="auto"?void 0:u.value),active:m(()=>e.app),absolute:I(e,"absolute")});return $(()=>s(e.tag,{ref:f,class:["v-footer",n.value,l.value,i.value,r.value,y.value,e.class],style:[a.value,e.app?c.value:{height:F(e.height)},e.style]},t)),{}}}),Ja=W("div",{class:"pt-0"}," Todos los derechos reservados UTU - Instituto de Alta Especialización ",-1),Qa=W("strong",null," Cerro Largo",-1),en={__name:"Footer",setup(e){const o=B(["mdi:mdi-facebook","mdi:mdi-twitter","mdi:mdi-linkedin","mdi:mdi-instagram"]);return(t,n)=>(H(),se(dt,null,{default:P(()=>[s(Za,{class:"bg-light-blue-darken-4 text-center d-flex flex-column"},{default:P(()=>[W("div",null,[(H(!0),pe(Z,null,Xe(o.value,l=>(H(),se(Ee,{key:l,class:"mx-4",icon:l,variant:"text"},null,8,["icon"]))),128))]),Ja,s(Se),W("div",null,[Te(Ke(new Date().getFullYear())+" — ",1),Qa])]),_:1})]),_:1}))}};const dn={__name:"Default",setup(e){const o=B({});G("curso_elegido",o);const t=B([]);G("los_cursos",t),(async()=>{await fetch("http://localhost").then(a=>a.json()).then(a=>t.value.push(a))})();const l=B(!1);return G("abrir_menu",l),(a,i)=>{const r=je("Router-view");return H(),pe(Z,null,[s(da),s(aa),s(Ka),s(r),s(en)],64)}}};export{dn as default};
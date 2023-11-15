import{m as W,_ as Fe,M as yt,a as We,u as Ge}from"./index-365e995c.js";import{p as B,g as D,c as s,m as K,t as I,a as q,u as Ye,s as E,b as m,d as Pe,e as $,f as le,i as Z,r as N,h as ze,o as F,j as oe,w as P,k as Ue,l as xe,n as ie,q as Be,F as j,v as Xe,x as je,y as re,z as J,A as Ie,B as we,C as Ke,D as bt,E as St,I as z,G as qe,H as wt,J as De,K as U,L as _t,M as kt,N as pt,O as Vt,P as ae,Q as Ct,R as Ze,S as xt,T as It,U as Tt,V as Lt,W as Pt,X as Bt}from"./index-f209e740.js";import{V as At,a as Mt,b as Ce}from"./VRow-72e22968.js";import{m as ce,a as de,b as ve,u as se,c as fe,d as me,e as ge,V as X,f as Et,g as Ae,h as Te,i as Je,j as Qe,k as Nt,l as et,R as Dt,n as Rt,o as Ot,p as tt,q as Ht,r as $t,t as Ft}from"./VBtn-77aa0a55.js";import{m as H,u as O,a as Wt,c as Gt,b as at,d as nt,e as Yt}from"./layout-42d4d558.js";import{V as lt}from"./index-82b22d0b.js";import{V as zt}from"./VImg-e035b7d5.js";import{u as ot}from"./ssrBoot-834930eb.js";import{c as it,V as Re}from"./VAvatar-aa1072d3.js";const Ut=B({text:String,...H(),...W()},"VToolbarTitle"),st=D()({name:"VToolbarTitle",props:Ut(),setup(e,o){let{slots:t}=o;return O(()=>{const n=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),Xt=[null,"prominent","default","comfortable","compact"],jt=B({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ce(),...H(),...de(),...ve(),...W({tag:"header"}),...K()},"VToolbar"),Kt=D()({name:"VToolbar",props:jt(),setup(e,o){var d;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=se(I(e,"color")),{borderClasses:a}=fe(e),{elevationClasses:i}=me(e),{roundedClasses:r}=ge(e),{themeClasses:y}=q(e),{rtlClasses:g}=Ye(),f=E(!!(e.extended||(d=t.extension)!=null&&d.call(t))),u=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=m(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Pe({VBtn:{variant:"text"}}),O(()=>{var C;const v=!!(e.title||t.title),w=!!(t.image||e.image),b=(C=t.extension)==null?void 0:C.call(t);return f.value=!!(e.extended||b),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,i.value,r.value,y.value,g.value,e.class],style:[l.value,e.style]},{default:()=>[w&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(zt,{key:"image-img",cover:!0,src:e.image},null)]),s(X,{defaults:{VTabs:{height:$(u.value)}}},{default:()=>{var x,T,A;return[s("div",{class:"v-toolbar__content",style:{height:$(u.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),v&&s(st,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(A=t.append)==null?void 0:A.call(t)])])]}}),s(X,{defaults:{VTabs:{height:$(c.value)}}},{default:()=>[s(lt,null,{default:()=>[f.value&&s("div",{class:"v-toolbar__extension",style:{height:$(c.value)}},[b])]})]})]})}),{contentHeight:u,extensionHeight:c}}}),qt=B({...Et({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Zt=D()({name:"VAppBarNavIcon",props:qt(),setup(e,o){let{slots:t}=o;return O(()=>s(Ae,le(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Jt={class:"menu"},Qt={__name:"Toolbar",setup(e){const o=Z("abrir_menu"),t=N([{nombre:"inicio",ruta:"/",icono:"fas fa-home"},{nombre:"login",ruta:"/login",icono:"fa-solid fa-user-plus"},{nombre:"registro",ruta:"/registro",icono:"fa-solid fa-address-card"},{nombre:"contactos",ruta:"/contacto",icono:"fa-solid fa-school"},{nombre:"colaboradores",ruta:"/colaboradores",icono:"fa-solid fa-users-gear"}]);return(n,l)=>{const a=ze("Router-link");return F(),oe(Kt,{dark:"",prominent:"",class:"bg-light-blue-darken-4 toolbar"},{default:P(()=>[s(At,null,{default:P(()=>[s(Mt,null,{default:P(()=>[s(Ce,{cols:"3"},{default:P(()=>[s(Zt,{onClick:l[0]||(l[0]=i=>o.value=!Ue(o)),class:"boton"})]),_:1}),s(Ce,{cols:"6",class:"titulo"},{default:P(()=>[s(st,{class:"titulo2"},{default:P(()=>[xe("Instituto de Alta Especialización -- Melo")]),_:1})]),_:1}),s(Ce,{cols:"3"},{default:P(()=>[ie("nav",Jt,[(F(!0),Be(j,null,Xe(t.value,(i,r)=>(F(),oe(a,{key:r,to:i.ruta},{default:P(()=>[s(Ae,{icon:""},{default:P(()=>[s(Te,null,{default:P(()=>[xe(je(i.icono),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})}}},ea=Fe(Qt,[["__scopeId","data-v-8cb4fb8f"]]);const ta=B({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...H(),...K()},"VDivider"),Me=D()({name:"VDivider",props:ta(),setup(e,o){let{attrs:t}=o;const{themeClasses:n}=q(e),{textColorClasses:l,textColorStyles:a}=Je(I(e,"color")),i=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=$(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=$(e.thickness)),r});return O(()=>s("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const aa=B({...H(),...Wt()},"VLayout"),ut=D()({name:"VLayout",props:aa(),setup(e,o){let{slots:t}=o;const{layoutClasses:n,layoutStyles:l,getLayoutItem:a,items:i,layoutRef:r}=Gt(e);return O(()=>{var y;return s("div",{ref:r,class:[n.value,e.class],style:[l.value,e.style]},[(y=t.default)==null?void 0:y.call(t)])}),{getLayoutItem:a,items:i}}});const Le=Symbol.for("vuetify:list");function rt(){const e=Z(Le,{hasPrepend:E(!1),updateHasPrepend:()=>null}),o={hasPrepend:E(!1),updateHasPrepend:t=>{t&&(o.hasPrepend.value=t)}};return re(Le,o),e}function ct(){return Z(Le,null)}const na={open:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(o);let i=l.get(o);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(o),n},select:()=>null},dt={open:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(t){let a=l.get(o);for(n.add(o);a!=null&&a!==o;)n.add(a),a=l.get(a);return n}else n.delete(o);return n},select:()=>null},la={open:dt.open,select:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(o);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},Ee=e=>{const o={select:t=>{let{id:n,value:l,selected:a}=t;if(n=J(n),e&&!l){const i=Array.from(a.entries()).reduce((r,y)=>{let[g,f]=y;return f==="on"?[...r,g]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return o},vt=e=>{const o=Ee(e);return{select:n=>{let{selected:l,id:a,...i}=n;a=J(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return o.select({...i,id:a,selected:r})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=o.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>o.out(n,l,a)}},oa=e=>{const o=Ee(e);return{select:n=>{let{id:l,selected:a,children:i,...r}=n;return l=J(l),i.has(l)?a:o.select({id:l,selected:a,children:i,...r})},in:o.in,out:o.out}},ia=e=>{const o=vt(e);return{select:n=>{let{id:l,selected:a,children:i,...r}=n;return l=J(l),i.has(l)?a:o.select({id:l,selected:a,children:i,...r})},in:o.in,out:o.out}},sa=e=>{const o={select:t=>{let{id:n,value:l,selected:a,children:i,parents:r}=t;n=J(n);const y=new Map(a),g=[n];for(;g.length;){const u=g.shift();a.set(u,l?"on":"off"),i.has(u)&&g.push(...i.get(u))}let f=r.get(n);for(;f;){const u=i.get(f),c=u.every(v=>a.get(v)==="on"),d=u.every(v=>!a.has(v)||a.get(v)==="off");a.set(f,c?"on":d?"off":"indeterminate"),f=r.get(f)}return e&&!l&&Array.from(a.entries()).reduce((c,d)=>{let[v,w]=d;return w==="on"?[...c,v]:c},[]).length===0?y:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return o},ue=Symbol.for("vuetify:nested"),ft={id:E(),root:{register:()=>null,unregister:()=>null,parents:N(new Map),children:N(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:N(new Set),selected:N(new Map),selectedValues:N([])}},ua=B({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ra=e=>{let o=!1;const t=N(new Map),n=N(new Map),l=Ie(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ia(e.mandatory);case"leaf":return oa(e.mandatory);case"independent":return Ee(e.mandatory);case"single-independent":return vt(e.mandatory);case"classic":default:return sa(e.mandatory)}}),i=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return la;case"single":return na;case"multiple":default:return dt}}),r=Ie(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));we(()=>{o=!0});function y(u){const c=[];let d=u;for(;d!=null;)c.unshift(d),d=n.value.get(d);return c}const g=Ke("nested"),f={id:E(),root:{opened:l,selected:r,selectedValues:m(()=>{const u=[];for(const[c,d]of r.value.entries())d==="on"&&u.push(c);return u}),register:(u,c,d)=>{c&&u!==c&&n.value.set(u,c),d&&t.value.set(u,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],u])},unregister:u=>{if(o)return;t.value.delete(u);const c=n.value.get(u);if(c){const d=t.value.get(c)??[];t.value.set(c,d.filter(v=>v!==u))}n.value.delete(u),l.value.delete(u)},open:(u,c,d)=>{g.emit("click:open",{id:u,value:c,path:y(u),event:d});const v=i.value.open({id:u,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:d});v&&(l.value=v)},openOnSelect:(u,c,d)=>{const v=i.value.select({id:u,value:c,selected:new Map(r.value),opened:new Set(l.value),children:t.value,parents:n.value,event:d});v&&(l.value=v)},select:(u,c,d)=>{g.emit("click:select",{id:u,value:c,path:y(u),event:d});const v=a.value.select({id:u,value:c,selected:new Map(r.value),children:t.value,parents:n.value,event:d});v&&(r.value=v),f.root.openOnSelect(u,c,d)},children:t,parents:n}};return re(ue,f),f.root},mt=(e,o)=>{const t=Z(ue,ft),n=Symbol(bt()),l=m(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(i,r)=>t.root.open(l.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(l.value,i,r),isOpen:m(()=>t.root.opened.value.has(l.value)),parent:m(()=>t.root.parents.value.get(l.value)),select:(i,r)=>t.root.select(l.value,i,r),isSelected:m(()=>t.root.selected.value.get(J(l.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,o),we(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),o&&re(ue,a),a},ca=()=>{const e=Z(ue,ft);re(ue,{...e,isGroupActivator:!0})},da=St({name:"VListGroupActivator",setup(e,o){let{slots:t}=o;return ca(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),va=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:z,default:"$collapse"},expandIcon:{type:z,default:"$expand"},prependIcon:z,appendIcon:z,fluid:Boolean,subgroup:Boolean,title:String,value:null,...H(),...W()},"VListGroup"),Oe=D()({name:"VListGroup",props:va(),setup(e,o){let{slots:t}=o;const{isOpen:n,open:l,id:a}=mt(I(e,"value"),!0),i=m(()=>`v-list-group--id-${String(a.value)}`),r=ct(),{isBooted:y}=ot();function g(d){l(!n.value,d)}const f=m(()=>({onClick:g,class:"v-list-group__header",id:i.value})),u=m(()=>n.value?e.collapseIcon:e.expandIcon),c=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return O(()=>s(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&s(X,{defaults:c.value},{default:()=>[s(da,null,{default:()=>[t.activator({props:f.value,isOpen:n.value})]})]}),s(yt,{transition:{component:lt},disabled:!y.value},{default:()=>{var d;return[qe(s("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[wt,n.value]])]}})]})),{}}});const fa=it("v-list-item-subtitle"),ma=it("v-list-item-title"),ga=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:z,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:De(),onClickOnce:De(),...ce(),...H(),...Qe(),...We(),...de(),...ve(),...Nt(),...W(),...K(),...et({variant:"text"})},"VListItem"),ne=D()({name:"VListItem",directives:{Ripple:Dt},props:ga(),emits:{click:e=>!0},setup(e,o){let{attrs:t,slots:n,emit:l}=o;const a=Rt(e,t),i=m(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:y,isIndeterminate:g,isGroupActivator:f,root:u,parent:c,openOnSelect:d}=mt(i,!1),v=ct(),w=m(()=>{var V;return e.active!==!1&&(e.active||((V=a.isActive)==null?void 0:V.value)||y.value)}),b=m(()=>e.link!==!1&&a.isLink.value),C=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!v)),x=m(()=>e.rounded||e.nav),T=m(()=>e.color??e.activeColor),A=m(()=>({color:w.value?T.value??e.baseColor:e.baseColor,variant:e.variant}));U(()=>{var V;return(V=a.isActive)==null?void 0:V.value},V=>{V&&c.value!=null&&u.open(c.value,!0),V&&d(V)},{immediate:!0});const{themeClasses:h}=q(e),{borderClasses:_}=fe(e),{colorClasses:S,colorStyles:k,variantClasses:p}=Ot(A),{densityClasses:M}=tt(e),{dimensionStyles:Q}=Ge(e),{elevationClasses:_e}=me(e),{roundedClasses:he}=ge(x),ke=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),G=m(()=>({isActive:w.value,select:r,isSelected:y.value,isIndeterminate:g.value}));function ye(V){var L;l("click",V),!(f||!C.value)&&((L=a.navigate)==null||L.call(a,V),e.value!=null&&r(!y.value,V))}function pe(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),ye(V))}return O(()=>{const V=b.value?"a":e.tag,L=n.title||e.title,be=n.subtitle||e.subtitle,ee=!!(e.appendAvatar||e.appendIcon),Se=!!(ee||n.append),te=!!(e.prependAvatar||e.prependIcon),Ve=!!(te||n.prepend);return v==null||v.updateHasPrepend(Ve),e.activeColor&&_t("active-color",["color","base-color"]),qe(s(V,{class:["v-list-item",{"v-list-item--active":w.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Ve&&(v==null?void 0:v.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&w.value},h.value,_.value,S.value,M.value,_e.value,ke.value,he.value,p.value,e.class],style:[k.value,Q.value,e.style],href:a.href.value,tabindex:C.value?v?-2:0:void 0,onClick:ye,onKeydown:C.value&&!b.value&&pe},{default:()=>{var Ne;return[Ht(C.value||w.value,"v-list-item"),Ve&&s("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?s(X,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var R;return[(R=n.prepend)==null?void 0:R.call(n,G.value)]}}):s(j,null,[e.prependAvatar&&s(Re,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(Te,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),s("div",{class:"v-list-item__spacer"},null)]),s("div",{class:"v-list-item__content","data-no-activator":""},[L&&s(ma,{key:"title"},{default:()=>{var R;return[((R=n.title)==null?void 0:R.call(n,{title:e.title}))??e.title]}}),be&&s(fa,{key:"subtitle"},{default:()=>{var R;return[((R=n.subtitle)==null?void 0:R.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(Ne=n.default)==null?void 0:Ne.call(n,G.value)]),Se&&s("div",{key:"append",class:"v-list-item__append"},[n.append?s(X,{key:"append-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var R;return[(R=n.append)==null?void 0:R.call(n,G.value)]}}):s(j,null,[e.appendIcon&&s(Te,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(Re,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),s("div",{class:"v-list-item__spacer"},null)])]}}),[[kt("ripple"),C.value&&e.ripple]])}),{}}}),ha=B({color:String,inset:Boolean,sticky:Boolean,title:String,...H(),...W()},"VListSubheader"),ya=D()({name:"VListSubheader",props:ha(),setup(e,o){let{slots:t}=o;const{textColorClasses:n,textColorStyles:l}=Je(I(e,"color"));return O(()=>{const a=!!(t.default||e.title);return s(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[a&&s("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),ba=B({items:Array},"VListChildren"),gt=D()({name:"VListChildren",props:ba(),setup(e,o){let{slots:t}=o;return rt(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var d,v;let{children:i,props:r,type:y,raw:g}=a;if(y==="divider")return((d=t.divider)==null?void 0:d.call(t,{props:r}))??s(Me,r,null);if(y==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??s(ya,r,null);const f={subtitle:t.subtitle?w=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{...w,item:g})}:void 0,prepend:t.prepend?w=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{...w,item:g})}:void 0,append:t.append?w=>{var b;return(b=t.append)==null?void 0:b.call(t,{...w,item:g})}:void 0,title:t.title?w=>{var b;return(b=t.title)==null?void 0:b.call(t,{...w,item:g})}:void 0},[u,c]=Oe.filterProps(r);return i?s(Oe,le({value:r==null?void 0:r.value},u),{activator:w=>{let{props:b}=w;return t.header?t.header({props:{...r,...b}}):s(ne,le(r,b),f)},default:()=>s(gt,{items:i},t)}):t.item?t.item({props:r}):s(ne,r,f)}))}}}),Sa=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:pt}},"list-items");function wa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function _a(e,o){const t=ae(o,e.itemType,"item"),n=wa(o)?o:ae(o,e.itemTitle),l=ae(o,e.itemValue,void 0),a=ae(o,e.itemChildren),i=e.itemProps===!0?Ct(o,["children"])[1]:ae(o,e.itemProps),r={title:n,value:l,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?ht(e,a):void 0,raw:o}}function ht(e,o){const t=[];for(const n of o)t.push(_a(e,n));return t}function ka(e){return{items:m(()=>ht(e,e.items))}}const pa=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...ua({selectStrategy:"single-leaf",openStrategy:"list"}),...ce(),...H(),...Qe(),...We(),...de(),itemType:{type:String,default:"type"},...Sa(),...ve(),...W(),...K(),...et({variant:"text"})},"VList"),Va=D()({name:"VList",props:pa(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,o){let{slots:t}=o;const{items:n}=ka(e),{themeClasses:l}=q(e),{backgroundColorClasses:a,backgroundColorStyles:i}=se(I(e,"bgColor")),{borderClasses:r}=fe(e),{densityClasses:y}=tt(e),{dimensionStyles:g}=Ge(e),{elevationClasses:f}=me(e),{roundedClasses:u}=ge(e),{open:c,select:d}=ra(e),v=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=I(e,"activeColor"),b=I(e,"baseColor"),C=I(e,"color");rt(),Pe({VListGroup:{activeColor:w,baseColor:b,color:C},VListItem:{activeClass:I(e,"activeClass"),activeColor:w,baseColor:b,color:C,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}});const x=E(!1),T=N();function A(p){x.value=!0}function h(p){x.value=!1}function _(p){var M;!x.value&&!(p.relatedTarget&&((M=T.value)!=null&&M.contains(p.relatedTarget)))&&k()}function S(p){if(T.value){if(p.key==="ArrowDown")k("next");else if(p.key==="ArrowUp")k("prev");else if(p.key==="Home")k("first");else if(p.key==="End")k("last");else return;p.preventDefault()}}function k(p){if(T.value)return Vt(T.value,p)}return O(()=>s(e.tag,{ref:T,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,r.value,y.value,f.value,v.value,u.value,e.class],style:[i.value,g.value,e.style],tabindex:e.disabled||x.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:A,onFocusout:h,onFocus:_,onKeydown:S},{default:()=>[s(gt,{items:n.value},t)]})),{open:c,select:d,focus:k}}});function Ca(e){let{rootEl:o,isSticky:t,layoutItemStyles:n}=e;const l=E(!1),a=E(0),i=m(()=>{const g=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[g]:$(a.value)}:{top:n.value.top}]});Ze(()=>{U(t,g=>{g?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),we(()=>{window.removeEventListener("scroll",y)});let r=0;function y(){const g=r>window.scrollY?"up":"down",f=o.value.getBoundingClientRect(),u=parseFloat(n.value.top??0),c=window.scrollY-Math.max(0,a.value-u),d=f.height+Math.max(a.value,u)-window.scrollY-window.innerHeight,v=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;f.height<window.innerHeight-u?(l.value="top",a.value=u):g==="up"&&l.value==="bottom"||g==="down"&&l.value==="top"?(a.value=window.scrollY+f.top-v,l.value=!0):g==="down"&&d<=0?(a.value=0,l.value="bottom"):g==="up"&&c<=0&&(v?l.value!=="top"&&(a.value=-c+v+u,l.value="top"):(a.value=f.top+c,l.value="top")),r=window.scrollY}return{isStuck:l,stickyStyles:i}}const xa=100,Ia=20;function He(e){const o=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*o}function $e(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=He(o),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(l-n)*Math.abs(l),t===e.length-1&&(o*=.5)}return He(o)*1e3}function Ta(){const e={};function o(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new xt(Ia))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(l){var g;const a=(g=e[l])==null?void 0:g.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const i=a[0],r=[],y=[];for(const f of a){if(i[0]-f[0]>xa)break;r.push({t:f[0],d:f[1].clientX}),y.push({t:f[0],d:f[1].clientY})}return{x:$e(r),y:$e(y),get direction(){const{x:f,y:u}=this,[c,d]=[Math.abs(f),Math.abs(u)];return c>d&&f>=0?"right":c>d&&f<=0?"left":d>c&&u>=0?"down":d>c&&u<=0?"up":La()}}}return{addMovement:o,endTouch:t,getVelocity:n}}function La(){throw new Error}function Pa(e){let{isActive:o,isTemporary:t,width:n,touchless:l,position:a}=e;Ze(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",T,{passive:!0})}),we(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",T)});const i=m(()=>["left","right"].includes(a.value)),{addMovement:r,endTouch:y,getVelocity:g}=Ta();let f=!1;const u=E(!1),c=E(0),d=E(0);let v;function w(h,_){return(a.value==="left"?h:a.value==="right"?document.documentElement.clientWidth-h:a.value==="top"?h:a.value==="bottom"?document.documentElement.clientHeight-h:Y())-(_?n.value:0)}function b(h){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const S=a.value==="left"?(h-d.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-h-d.value)/n.value:a.value==="top"?(h-d.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-h-d.value)/n.value:Y();return _?Math.max(0,Math.min(1,S)):S}function C(h){if(l.value)return;const _=h.changedTouches[0].clientX,S=h.changedTouches[0].clientY,k=25,p=a.value==="left"?_<k:a.value==="right"?_>document.documentElement.clientWidth-k:a.value==="top"?S<k:a.value==="bottom"?S>document.documentElement.clientHeight-k:Y(),M=o.value&&(a.value==="left"?_<n.value:a.value==="right"?_>document.documentElement.clientWidth-n.value:a.value==="top"?S<n.value:a.value==="bottom"?S>document.documentElement.clientHeight-n.value:Y());(p||M||o.value&&t.value)&&(f=!0,v=[_,S],d.value=w(i.value?_:S,o.value),c.value=b(i.value?_:S),y(h),r(h))}function x(h){const _=h.changedTouches[0].clientX,S=h.changedTouches[0].clientY;if(f){if(!h.cancelable){f=!1;return}const p=Math.abs(_-v[0]),M=Math.abs(S-v[1]);(i.value?p>M&&p>3:M>p&&M>3)?(u.value=!0,f=!1):(i.value?M:p)>3&&(f=!1)}if(!u.value)return;h.preventDefault(),r(h);const k=b(i.value?_:S,!1);c.value=Math.max(0,Math.min(1,k)),k>1?d.value=w(i.value?_:S,!0):k<0&&(d.value=w(i.value?_:S,!1))}function T(h){if(f=!1,!u.value)return;r(h),u.value=!1;const _=g(h.changedTouches[0].identifier),S=Math.abs(_.x),k=Math.abs(_.y);(i.value?S>k&&S>400:k>S&&k>3)?o.value=_.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||Y()):o.value=c.value>.5}const A=m(()=>u.value?{transform:a.value==="left"?`translateX(calc(-100% + ${c.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${c.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${c.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${c.value*n.value}px))`:Y(),transition:"none"}:void 0);return{isDragging:u,dragProgress:c,dragStyles:A}}function Y(){throw new Error}function Ba(){const o=Ke("useScopeId").vnode.scopeId;return{scopeId:o?{[o]:""}:void 0}}const Aa=["start","end","left","right","top","bottom"],Ma=B({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Aa.includes(e)},sticky:Boolean,...ce(),...H(),...de(),...at(),...ve(),...W({tag:"nav"}),...K()},"VNavigationDrawer"),Ea=D()({name:"VNavigationDrawer",props:Ma(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:n,slots:l}=o;const{isRtl:a}=Ye(),{themeClasses:i}=q(e),{borderClasses:r}=fe(e),{backgroundColorClasses:y,backgroundColorStyles:g}=se(I(e,"color")),{elevationClasses:f}=me(e),{mobile:u}=It(),{roundedClasses:c}=ge(e),d=$t(),v=Ie(e,"modelValue",null,L=>!!L),{ssrBootStyles:w}=ot(),{scopeId:b}=Ba(),C=N(),x=E(!1),T=m(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),A=m(()=>Ft(e.location,a.value)),h=m(()=>!e.permanent&&(u.value||e.temporary)),_=m(()=>e.sticky&&!h.value&&A.value!=="bottom");e.expandOnHover&&e.rail!=null&&U(x,L=>n("update:rail",!L)),e.disableResizeWatcher||U(h,L=>!e.permanent&&Tt(()=>v.value=!L)),!e.disableRouteWatcher&&d&&U(d.currentRoute,()=>h.value&&(v.value=!1)),U(()=>e.permanent,L=>{L&&(v.value=!0)}),Lt(()=>{e.modelValue!=null||h.value||(v.value=e.permanent||!u.value)});const{isDragging:S,dragProgress:k,dragStyles:p}=Pa({isActive:v,isTemporary:h,width:T,touchless:I(e,"touchless"),position:A}),M=m(()=>{const L=h.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):T.value;return S.value?L*k.value:L}),{layoutItemStyles:Q,layoutItemScrimStyles:_e}=nt({id:e.name,order:m(()=>parseInt(e.order,10)),position:A,layoutSize:M,elementSize:T,active:m(()=>v.value||S.value),disableTransitions:m(()=>S.value),absolute:m(()=>e.absolute||_.value&&typeof he.value!="string")}),{isStuck:he,stickyStyles:ke}=Ca({rootEl:C,isSticky:_,layoutItemStyles:Q}),G=se(m(()=>typeof e.scrim=="string"?e.scrim:null)),ye=m(()=>({...S.value?{opacity:k.value*.2,transition:"none"}:void 0,..._e.value}));Pe({VList:{bgColor:"transparent"}});function pe(){x.value=!0}function V(){x.value=!1}return O(()=>{const L=l.image||e.image;return s(j,null,[s(e.tag,le({ref:C,onMouseenter:pe,onMouseleave:V,class:["v-navigation-drawer",`v-navigation-drawer--${A.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":h.value,"v-navigation-drawer--active":v.value,"v-navigation-drawer--sticky":_.value},i.value,y.value,r.value,f.value,c.value,e.class],style:[g.value,Q.value,p.value,w.value,ke.value,e.style]},b,t),{default:()=>{var be,ee,Se,te;return[L&&s("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(be=l.image)==null?void 0:be.call(l,{image:e.image}):s("img",{src:e.image,alt:""},null)]),l.prepend&&s("div",{class:"v-navigation-drawer__prepend"},[(ee=l.prepend)==null?void 0:ee.call(l)]),s("div",{class:"v-navigation-drawer__content"},[(Se=l.default)==null?void 0:Se.call(l)]),l.append&&s("div",{class:"v-navigation-drawer__append"},[(te=l.append)==null?void 0:te.call(l)])]}}),s(Pt,{name:"fade-transition"},{default:()=>[h.value&&(S.value||v.value)&&!!e.scrim&&s("div",le({class:["v-navigation-drawer__scrim",G.backgroundColorClasses.value],style:[ye.value,G.backgroundColorStyles.value],onClick:()=>v.value=!1},b),null)]})])}),{isStuck:he}}}),Na={__name:"Drawer",setup(e){const o=Z("abrir_menu");return(t,n)=>(F(),oe(ut,null,{default:P(()=>[s(Ea,{modelValue:Ue(o),"onUpdate:modelValue":n[0]||(n[0]=l=>Bt(o)?o.value=l:null),temporary:""},{default:P(()=>[s(ne,{"prepend-avatar":"",title:"John Leider",class:"usuario bg-light-blue-darken-4"}),s(Me),s(Va,{density:"compact",nav:""},{default:P(()=>[s(ne,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),s(ne,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},Da=Fe(Na,[["__scopeId","data-v-06089842"]]);const Ra=B({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ce(),...H(),...de(),...at(),...ve(),...W({tag:"footer"}),...K()},"VFooter"),Oa=D()({name:"VFooter",props:Ra(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=q(e),{backgroundColorClasses:l,backgroundColorStyles:a}=se(I(e,"color")),{borderClasses:i}=fe(e),{elevationClasses:r}=me(e),{roundedClasses:y}=ge(e),g=E(32),{resizeRef:f}=Yt(d=>{d.length&&(g.value=d[0].target.clientHeight)}),u=m(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:c}=nt({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:u,elementSize:m(()=>e.height==="auto"?void 0:u.value),active:m(()=>e.app),absolute:I(e,"absolute")});return O(()=>s(e.tag,{ref:f,class:["v-footer",n.value,l.value,i.value,r.value,y.value,e.class],style:[a.value,e.app?c.value:{height:$(e.height)},e.style]},t)),{}}}),Ha=ie("div",{class:"pt-0"}," Todos los derechos reservados UTU - Instituto de Alta Especialización ",-1),$a=ie("strong",null," Cerro Largo",-1),Fa={__name:"Footer",setup(e){const o=N(["mdi:mdi-facebook","mdi:mdi-twitter","mdi:mdi-linkedin","mdi:mdi-instagram"]);return(t,n)=>(F(),oe(ut,null,{default:P(()=>[s(Oa,{class:"bg-light-blue-darken-4 text-center d-flex flex-column"},{default:P(()=>[ie("div",null,[(F(!0),Be(j,null,Xe(o.value,l=>(F(),oe(Ae,{key:l,class:"mx-4",icon:l,variant:"text"},null,8,["icon"]))),128))]),Ha,s(Me),ie("div",null,[xe(je(new Date().getFullYear())+" — ",1),$a])]),_:1})]),_:1}))}},Za={__name:"Default",setup(e){const o=N(!1);return re("abrir_menu",o),(t,n)=>{const l=ze("Router-view");return F(),Be(j,null,[s(ea),s(Da),s(l),s(Fa)],64)}}};export{Za as default};
import{_ as de,r as B,a as Ee,o as D,c as J,F as z,b as Ne,d as Q,w as C,e as s,f as we,t as De,p as $e,g as Re,h as W,i as A,j as $,m as ee,k as T,l as te,u as Xe,s as N,n as m,q as Oe,v as H,x as ue,y as ae,z as Ke,A as G,B as ne,C as Ae,D as Ce,E as St,G as pt,H as wt,I as X,J as qe,K as kt,L as We,M as K,N as Vt,O as Ct,P as xt,Q as It,R as se,S as Tt,T as Ze,U as Lt,V as Pt,W as Bt,X as At,Y as Mt,Z as Et}from"./index-d1c422f8.js";import{V as xe,a as ke,m as ve,b as fe,c as me,u as re,d as ge,e as he,f as ye,g as Z,h as Nt,i as Je,j as Qe,k as et,l as Dt,n as tt,R as $t,o as Rt,p as Ot,q as at,r as Ft,s as Ye,t as Ht,v as Wt}from"./VAvatar-7d52ba1f.js";import{m as F,a as Y,u as O,V as Yt,b as Gt,c as Be,d as zt,e as jt,f as nt,g as lt,h as Ut}from"./VRow-4bed106c.js";import{V as ot}from"./index-da11ef34.js";import{V as Xt,M as Kt,m as it,u as st}from"./VImg-e96011ea.js";import{u as ut,a as qt}from"./scopeId-6d71511b.js";const Zt={class:"menu bg-light-blue-darken-4 toolbar"},Jt={__name:"Menu",setup(e){const o=B([{nombre:"inicio",ruta:"/",icono:"fas fa-home"},{nombre:"login",ruta:"/login",icono:"fa-solid fa-user-plus"},{nombre:"registro",ruta:"/registro",icono:"fa-solid fa-address-card"},{nombre:"contactos",ruta:"/contacto",icono:"fa-solid fa-school"}]);return(t,n)=>{const l=Ee("Router-link");return D(),J("nav",Zt,[(D(!0),J(z,null,Ne(o.value,(a,i)=>(D(),Q(l,{key:i,to:a.ruta},{default:C(()=>[s(xe,{icon:""},{default:C(()=>[s(ke,null,{default:C(()=>[we(De(a.icono),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))])}}},Qt=de(Jt,[["__scopeId","data-v-519b2fe6"]]),ea="/utu.png";const ta={},aa=e=>($e("data-v-8e5fad2e"),e=e(),Re(),e),na={class:"logo"},la=aa(()=>W("img",{src:ea},null,-1)),oa=[la];function ia(e,o){return D(),J("div",na,oa)}const sa=de(ta,[["render",ia],["__scopeId","data-v-8e5fad2e"]]);const ua=A({text:String,...F(),...Y()},"VToolbarTitle"),rt=$()({name:"VToolbarTitle",props:ua(),setup(e,o){let{slots:t}=o;return O(()=>{const n=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),ra=[null,"prominent","default","comfortable","compact"],ca=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ra.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...F(),...fe(),...me(),...Y({tag:"header"}),...ee()},"VToolbar"),da=$()({name:"VToolbar",props:ca(),setup(e,o){var d;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=re(T(e,"color")),{borderClasses:a}=ge(e),{elevationClasses:i}=he(e),{roundedClasses:r}=ye(e),{themeClasses:y}=te(e),{rtlClasses:g}=Xe(),f=N(!!(e.extended||(d=t.extension)!=null&&d.call(t))),u=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=m(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Oe({VBtn:{variant:"text"}}),O(()=>{var x;const v=!!(e.title||t.title),S=!!(t.image||e.image),b=(x=t.extension)==null?void 0:x.call(t);return f.value=!!(e.extended||b),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,i.value,r.value,y.value,g.value,e.class],style:[l.value,e.style]},{default:()=>[S&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Xt,{key:"image-img",cover:!0,src:e.image},null)]),s(Z,{defaults:{VTabs:{height:H(u.value)}}},{default:()=>{var I,L,M;return[s("div",{class:"v-toolbar__content",style:{height:H(u.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(I=t.prepend)==null?void 0:I.call(t)]),v&&s(rt,{key:"title",text:e.title},{text:t.title}),(L=t.default)==null?void 0:L.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(M=t.append)==null?void 0:M.call(t)])])]}}),s(Z,{defaults:{VTabs:{height:H(c.value)}}},{default:()=>[s(ot,null,{default:()=>[f.value&&s("div",{class:"v-toolbar__extension",style:{height:H(c.value)}},[b])]})]})]})}),{contentHeight:u,extensionHeight:c}}}),va=A({...Nt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),fa=$()({name:"VAppBarNavIcon",props:va(),setup(e,o){let{slots:t}=o;return O(()=>s(xe,ue(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),ma={class:"menu"},ga={__name:"Toolbar",setup(e){const o=ae("abrir_menu"),t=B([{nombre:"inicio",ruta:"/",icono:"fas fa-home"},{nombre:"login",ruta:"/login",icono:"fa-solid fa-user-plus"},{nombre:"registro",ruta:"/registro",icono:"fa-solid fa-address-card"},{nombre:"contactos",ruta:"/contacto",icono:"fa-solid fa-school"}]);return(n,l)=>{const a=Ee("Router-link");return D(),Q(da,{dark:"",prominent:"",class:"bg-light-blue-darken-4 toolbar"},{default:C(()=>[s(Yt,null,{default:C(()=>[s(Gt,{class:"justify-center"},{default:C(()=>[s(Be,{sm:"2",xl:"3"},{default:C(()=>[s(fa,{onClick:l[0]||(l[0]=i=>o.value=!Ke(o)),class:"boton"})]),_:1}),s(Be,{xs:"12",sm:"12",md:"8",xl:"6",class:"titulo"},{default:C(()=>[s(rt,{class:"titulo2"},{default:C(()=>[we("Instituto de Alta Especialización -- Melo")]),_:1})]),_:1}),s(Be,{sm:"2",xl:"3"},{default:C(()=>[W("nav",ma,[(D(!0),J(z,null,Ne(t.value,(i,r)=>(D(),Q(a,{key:r,to:i.ruta},{default:C(()=>[s(xe,{icon:""},{default:C(()=>[s(ke,null,{default:C(()=>[we(De(i.icono),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})}}},ha=de(ga,[["__scopeId","data-v-7277b7c9"]]),ya="/login.png";const ba=A({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...F(),...ee()},"VDivider"),Ve=$()({name:"VDivider",props:ba(),setup(e,o){let{attrs:t}=o;const{themeClasses:n}=te(e),{textColorClasses:l,textColorStyles:a}=Je(T(e,"color")),i=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=H(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=H(e.thickness)),r});return O(()=>s("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const _a=A({...F(),...zt()},"VLayout"),ct=$()({name:"VLayout",props:_a(),setup(e,o){let{slots:t}=o;const{layoutClasses:n,layoutStyles:l,getLayoutItem:a,items:i,layoutRef:r}=jt(e);return O(()=>{var y;return s("div",{ref:r,class:[n.value,e.class],style:[l.value,e.style]},[(y=t.default)==null?void 0:y.call(t)])}),{getLayoutItem:a,items:i}}});const Me=Symbol.for("vuetify:list");function dt(){const e=ae(Me,{hasPrepend:N(!1),updateHasPrepend:()=>null}),o={hasPrepend:N(!1),updateHasPrepend:t=>{t&&(o.hasPrepend.value=t)}};return G(Me,o),e}function vt(){return ae(Me,null)}const Sa={open:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(o);let i=l.get(o);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(o),n},select:()=>null},ft={open:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(t){let a=l.get(o);for(n.add(o);a!=null&&a!==o;)n.add(a),a=l.get(a);return n}else n.delete(o);return n},select:()=>null},pa={open:ft.open,select:e=>{let{id:o,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(o);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},Fe=e=>{const o={select:t=>{let{id:n,value:l,selected:a}=t;if(n=ne(n),e&&!l){const i=Array.from(a.entries()).reduce((r,y)=>{let[g,f]=y;return f==="on"?[...r,g]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return o},mt=e=>{const o=Fe(e);return{select:n=>{let{selected:l,id:a,...i}=n;a=ne(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return o.select({...i,id:a,selected:r})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=o.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>o.out(n,l,a)}},wa=e=>{const o=Fe(e);return{select:n=>{let{id:l,selected:a,children:i,...r}=n;return l=ne(l),i.has(l)?a:o.select({id:l,selected:a,children:i,...r})},in:o.in,out:o.out}},ka=e=>{const o=mt(e);return{select:n=>{let{id:l,selected:a,children:i,...r}=n;return l=ne(l),i.has(l)?a:o.select({id:l,selected:a,children:i,...r})},in:o.in,out:o.out}},Va=e=>{const o={select:t=>{let{id:n,value:l,selected:a,children:i,parents:r}=t;n=ne(n);const y=new Map(a),g=[n];for(;g.length;){const u=g.shift();a.set(u,l?"on":"off"),i.has(u)&&g.push(...i.get(u))}let f=r.get(n);for(;f;){const u=i.get(f),c=u.every(v=>a.get(v)==="on"),d=u.every(v=>!a.has(v)||a.get(v)==="off");a.set(f,c?"on":d?"off":"indeterminate"),f=r.get(f)}return e&&!l&&Array.from(a.entries()).reduce((c,d)=>{let[v,S]=d;return S==="on"?[...c,v]:c},[]).length===0?y:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return o},ce=Symbol.for("vuetify:nested"),gt={id:N(),root:{register:()=>null,unregister:()=>null,parents:B(new Map),children:B(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:B(new Set),selected:B(new Map),selectedValues:B([])}},Ca=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),xa=e=>{let o=!1;const t=B(new Map),n=B(new Map),l=Ae(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ka(e.mandatory);case"leaf":return wa(e.mandatory);case"independent":return Fe(e.mandatory);case"single-independent":return mt(e.mandatory);case"classic":default:return Va(e.mandatory)}}),i=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return pa;case"single":return Sa;case"multiple":default:return ft}}),r=Ae(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));Ce(()=>{o=!0});function y(u){const c=[];let d=u;for(;d!=null;)c.unshift(d),d=n.value.get(d);return c}const g=St("nested"),f={id:N(),root:{opened:l,selected:r,selectedValues:m(()=>{const u=[];for(const[c,d]of r.value.entries())d==="on"&&u.push(c);return u}),register:(u,c,d)=>{c&&u!==c&&n.value.set(u,c),d&&t.value.set(u,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],u])},unregister:u=>{if(o)return;t.value.delete(u);const c=n.value.get(u);if(c){const d=t.value.get(c)??[];t.value.set(c,d.filter(v=>v!==u))}n.value.delete(u),l.value.delete(u)},open:(u,c,d)=>{g.emit("click:open",{id:u,value:c,path:y(u),event:d});const v=i.value.open({id:u,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:d});v&&(l.value=v)},openOnSelect:(u,c,d)=>{const v=i.value.select({id:u,value:c,selected:new Map(r.value),opened:new Set(l.value),children:t.value,parents:n.value,event:d});v&&(l.value=v)},select:(u,c,d)=>{g.emit("click:select",{id:u,value:c,path:y(u),event:d});const v=a.value.select({id:u,value:c,selected:new Map(r.value),children:t.value,parents:n.value,event:d});v&&(r.value=v),f.root.openOnSelect(u,c,d)},children:t,parents:n}};return G(ce,f),f.root},ht=(e,o)=>{const t=ae(ce,gt),n=Symbol(pt()),l=m(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(i,r)=>t.root.open(l.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(l.value,i,r),isOpen:m(()=>t.root.opened.value.has(l.value)),parent:m(()=>t.root.parents.value.get(l.value)),select:(i,r)=>t.root.select(l.value,i,r),isSelected:m(()=>t.root.selected.value.get(ne(l.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,o),Ce(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),o&&G(ce,a),a},Ia=()=>{const e=ae(ce,gt);G(ce,{...e,isGroupActivator:!0})},Ta=wt({name:"VListGroupActivator",setup(e,o){let{slots:t}=o;return Ia(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),La=A({activeColor:String,baseColor:String,color:String,collapseIcon:{type:X,default:"$collapse"},expandIcon:{type:X,default:"$expand"},prependIcon:X,appendIcon:X,fluid:Boolean,subgroup:Boolean,title:String,value:null,...F(),...Y()},"VListGroup"),Ge=$()({name:"VListGroup",props:La(),setup(e,o){let{slots:t}=o;const{isOpen:n,open:l,id:a}=ht(T(e,"value"),!0),i=m(()=>`v-list-group--id-${String(a.value)}`),r=vt(),{isBooted:y}=ut();function g(d){l(!n.value,d)}const f=m(()=>({onClick:g,class:"v-list-group__header",id:i.value})),u=m(()=>n.value?e.collapseIcon:e.expandIcon),c=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return O(()=>s(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&s(Z,{defaults:c.value},{default:()=>[s(Ta,null,{default:()=>[t.activator({props:f.value,isOpen:n.value})]})]}),s(Kt,{transition:{component:ot},disabled:!y.value},{default:()=>{var d;return[qe(s("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[kt,n.value]])]}})]})),{}}});const Pa=Qe("v-list-item-subtitle"),Ba=Qe("v-list-item-title"),Aa=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:X,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:X,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:We(),onClickOnce:We(),...ve(),...F(),...et(),...it(),...fe(),...me(),...Dt(),...Y(),...ee(),...tt({variant:"text"})},"VListItem"),q=$()({name:"VListItem",directives:{Ripple:$t},props:Aa(),emits:{click:e=>!0},setup(e,o){let{attrs:t,slots:n,emit:l}=o;const a=Rt(e,t),i=m(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:y,isIndeterminate:g,isGroupActivator:f,root:u,parent:c,openOnSelect:d}=ht(i,!1),v=vt(),S=m(()=>{var V;return e.active!==!1&&(e.active||((V=a.isActive)==null?void 0:V.value)||y.value)}),b=m(()=>e.link!==!1&&a.isLink.value),x=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!v)),I=m(()=>e.rounded||e.nav),L=m(()=>e.color??e.activeColor),M=m(()=>({color:S.value?L.value??e.baseColor:e.baseColor,variant:e.variant}));K(()=>{var V;return(V=a.isActive)==null?void 0:V.value},V=>{V&&c.value!=null&&u.open(c.value,!0),V&&d(V)},{immediate:!0});const{themeClasses:h}=te(e),{borderClasses:p}=ge(e),{colorClasses:_,colorStyles:w,variantClasses:k}=Ot(M),{densityClasses:E}=at(e),{dimensionStyles:le}=st(e),{elevationClasses:Ie}=he(e),{roundedClasses:be}=ye(I),Te=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),j=m(()=>({isActive:S.value,select:r,isSelected:y.value,isIndeterminate:g.value}));function _e(V){var P;l("click",V),!(f||!x.value)&&((P=a.navigate)==null||P.call(a,V),e.value!=null&&r(!y.value,V))}function Le(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),_e(V))}return O(()=>{const V=b.value?"a":e.tag,P=n.title||e.title,Se=n.subtitle||e.subtitle,oe=!!(e.appendAvatar||e.appendIcon),pe=!!(oe||n.append),ie=!!(e.prependAvatar||e.prependIcon),Pe=!!(ie||n.prepend);return v==null||v.updateHasPrepend(Pe),e.activeColor&&Vt("active-color",["color","base-color"]),qe(s(V,{class:["v-list-item",{"v-list-item--active":S.value,"v-list-item--disabled":e.disabled,"v-list-item--link":x.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Pe&&(v==null?void 0:v.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&S.value},h.value,p.value,_.value,E.value,Ie.value,Te.value,be.value,k.value,e.class],style:[w.value,le.value,e.style],href:a.href.value,tabindex:x.value?v?-2:0:void 0,onClick:_e,onKeydown:x.value&&!b.value&&Le},{default:()=>{var He;return[Ft(x.value||S.value,"v-list-item"),Pe&&s("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?s(Z,{key:"prepend-defaults",disabled:!ie,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var R;return[(R=n.prepend)==null?void 0:R.call(n,j.value)]}}):s(z,null,[e.prependAvatar&&s(Ye,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(ke,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),s("div",{class:"v-list-item__spacer"},null)]),s("div",{class:"v-list-item__content","data-no-activator":""},[P&&s(Ba,{key:"title"},{default:()=>{var R;return[((R=n.title)==null?void 0:R.call(n,{title:e.title}))??e.title]}}),Se&&s(Pa,{key:"subtitle"},{default:()=>{var R;return[((R=n.subtitle)==null?void 0:R.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(He=n.default)==null?void 0:He.call(n,j.value)]),pe&&s("div",{key:"append",class:"v-list-item__append"},[n.append?s(Z,{key:"append-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var R;return[(R=n.append)==null?void 0:R.call(n,j.value)]}}):s(z,null,[e.appendIcon&&s(ke,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(Ye,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),s("div",{class:"v-list-item__spacer"},null)])]}}),[[Ct("ripple"),x.value&&e.ripple]])}),{}}}),Ma=A({color:String,inset:Boolean,sticky:Boolean,title:String,...F(),...Y()},"VListSubheader"),Ea=$()({name:"VListSubheader",props:Ma(),setup(e,o){let{slots:t}=o;const{textColorClasses:n,textColorStyles:l}=Je(T(e,"color"));return O(()=>{const a=!!(t.default||e.title);return s(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[a&&s("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Na=A({items:Array},"VListChildren"),yt=$()({name:"VListChildren",props:Na(),setup(e,o){let{slots:t}=o;return dt(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var d,v;let{children:i,props:r,type:y,raw:g}=a;if(y==="divider")return((d=t.divider)==null?void 0:d.call(t,{props:r}))??s(Ve,r,null);if(y==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??s(Ea,r,null);const f={subtitle:t.subtitle?S=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{...S,item:g})}:void 0,prepend:t.prepend?S=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{...S,item:g})}:void 0,append:t.append?S=>{var b;return(b=t.append)==null?void 0:b.call(t,{...S,item:g})}:void 0,title:t.title?S=>{var b;return(b=t.title)==null?void 0:b.call(t,{...S,item:g})}:void 0},[u,c]=Ge.filterProps(r);return i?s(Ge,ue({value:r==null?void 0:r.value},u),{activator:S=>{let{props:b}=S;return t.header?t.header({props:{...r,...b}}):s(q,ue(r,b),f)},default:()=>s(yt,{items:i},t)}):t.item?t.item({props:r}):s(q,r,f)}))}}}),Da=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:xt}},"list-items");function $a(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ra(e,o){const t=se(o,e.itemType,"item"),n=$a(o)?o:se(o,e.itemTitle),l=se(o,e.itemValue,void 0),a=se(o,e.itemChildren),i=e.itemProps===!0?Tt(o,["children"])[1]:se(o,e.itemProps),r={title:n,value:l,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?bt(e,a):void 0,raw:o}}function bt(e,o){const t=[];for(const n of o)t.push(Ra(e,n));return t}function Oa(e){return{items:m(()=>bt(e,e.items))}}const Fa=A({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Ca({selectStrategy:"single-leaf",openStrategy:"list"}),...ve(),...F(),...et(),...it(),...fe(),itemType:{type:String,default:"type"},...Da(),...me(),...Y(),...ee(),...tt({variant:"text"})},"VList"),ze=$()({name:"VList",props:Fa(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,o){let{slots:t}=o;const{items:n}=Oa(e),{themeClasses:l}=te(e),{backgroundColorClasses:a,backgroundColorStyles:i}=re(T(e,"bgColor")),{borderClasses:r}=ge(e),{densityClasses:y}=at(e),{dimensionStyles:g}=st(e),{elevationClasses:f}=he(e),{roundedClasses:u}=ye(e),{open:c,select:d}=xa(e),v=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),S=T(e,"activeColor"),b=T(e,"baseColor"),x=T(e,"color");dt(),Oe({VListGroup:{activeColor:S,baseColor:b,color:x},VListItem:{activeClass:T(e,"activeClass"),activeColor:S,baseColor:b,color:x,density:T(e,"density"),disabled:T(e,"disabled"),lines:T(e,"lines"),nav:T(e,"nav"),variant:T(e,"variant")}});const I=N(!1),L=B();function M(k){I.value=!0}function h(k){I.value=!1}function p(k){var E;!I.value&&!(k.relatedTarget&&((E=L.value)!=null&&E.contains(k.relatedTarget)))&&w()}function _(k){if(L.value){if(k.key==="ArrowDown")w("next");else if(k.key==="ArrowUp")w("prev");else if(k.key==="Home")w("first");else if(k.key==="End")w("last");else return;k.preventDefault()}}function w(k){if(L.value)return It(L.value,k)}return O(()=>s(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,r.value,y.value,f.value,v.value,u.value,e.class],style:[i.value,g.value,e.style],tabindex:e.disabled||I.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:M,onFocusout:h,onFocus:p,onKeydown:_},{default:()=>[s(yt,{items:n.value},t)]})),{open:c,select:d,focus:w}}});function Ha(e){let{rootEl:o,isSticky:t,layoutItemStyles:n}=e;const l=N(!1),a=N(0),i=m(()=>{const g=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[g]:H(a.value)}:{top:n.value.top}]});Ze(()=>{K(t,g=>{g?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),Ce(()=>{window.removeEventListener("scroll",y)});let r=0;function y(){const g=r>window.scrollY?"up":"down",f=o.value.getBoundingClientRect(),u=parseFloat(n.value.top??0),c=window.scrollY-Math.max(0,a.value-u),d=f.height+Math.max(a.value,u)-window.scrollY-window.innerHeight,v=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;f.height<window.innerHeight-u?(l.value="top",a.value=u):g==="up"&&l.value==="bottom"||g==="down"&&l.value==="top"?(a.value=window.scrollY+f.top-v,l.value=!0):g==="down"&&d<=0?(a.value=0,l.value="bottom"):g==="up"&&c<=0&&(v?l.value!=="top"&&(a.value=-c+v+u,l.value="top"):(a.value=f.top+c,l.value="top")),r=window.scrollY}return{isStuck:l,stickyStyles:i}}const Wa=100,Ya=20;function je(e){const o=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*o}function Ue(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=je(o),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(l-n)*Math.abs(l),t===e.length-1&&(o*=.5)}return je(o)*1e3}function Ga(){const e={};function o(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Lt(Ya))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(l){var g;const a=(g=e[l])==null?void 0:g.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const i=a[0],r=[],y=[];for(const f of a){if(i[0]-f[0]>Wa)break;r.push({t:f[0],d:f[1].clientX}),y.push({t:f[0],d:f[1].clientY})}return{x:Ue(r),y:Ue(y),get direction(){const{x:f,y:u}=this,[c,d]=[Math.abs(f),Math.abs(u)];return c>d&&f>=0?"right":c>d&&f<=0?"left":d>c&&u>=0?"down":d>c&&u<=0?"up":za()}}}return{addMovement:o,endTouch:t,getVelocity:n}}function za(){throw new Error}function ja(e){let{isActive:o,isTemporary:t,width:n,touchless:l,position:a}=e;Ze(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",L,{passive:!0})}),Ce(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",L)});const i=m(()=>["left","right"].includes(a.value)),{addMovement:r,endTouch:y,getVelocity:g}=Ga();let f=!1;const u=N(!1),c=N(0),d=N(0);let v;function S(h,p){return(a.value==="left"?h:a.value==="right"?document.documentElement.clientWidth-h:a.value==="top"?h:a.value==="bottom"?document.documentElement.clientHeight-h:U())-(p?n.value:0)}function b(h){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const _=a.value==="left"?(h-d.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-h-d.value)/n.value:a.value==="top"?(h-d.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-h-d.value)/n.value:U();return p?Math.max(0,Math.min(1,_)):_}function x(h){if(l.value)return;const p=h.changedTouches[0].clientX,_=h.changedTouches[0].clientY,w=25,k=a.value==="left"?p<w:a.value==="right"?p>document.documentElement.clientWidth-w:a.value==="top"?_<w:a.value==="bottom"?_>document.documentElement.clientHeight-w:U(),E=o.value&&(a.value==="left"?p<n.value:a.value==="right"?p>document.documentElement.clientWidth-n.value:a.value==="top"?_<n.value:a.value==="bottom"?_>document.documentElement.clientHeight-n.value:U());(k||E||o.value&&t.value)&&(f=!0,v=[p,_],d.value=S(i.value?p:_,o.value),c.value=b(i.value?p:_),y(h),r(h))}function I(h){const p=h.changedTouches[0].clientX,_=h.changedTouches[0].clientY;if(f){if(!h.cancelable){f=!1;return}const k=Math.abs(p-v[0]),E=Math.abs(_-v[1]);(i.value?k>E&&k>3:E>k&&E>3)?(u.value=!0,f=!1):(i.value?E:k)>3&&(f=!1)}if(!u.value)return;h.preventDefault(),r(h);const w=b(i.value?p:_,!1);c.value=Math.max(0,Math.min(1,w)),w>1?d.value=S(i.value?p:_,!0):w<0&&(d.value=S(i.value?p:_,!1))}function L(h){if(f=!1,!u.value)return;r(h),u.value=!1;const p=g(h.changedTouches[0].identifier),_=Math.abs(p.x),w=Math.abs(p.y);(i.value?_>w&&_>400:w>_&&w>3)?o.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||U()):o.value=c.value>.5}const M=m(()=>u.value?{transform:a.value==="left"?`translateX(calc(-100% + ${c.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${c.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${c.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${c.value*n.value}px))`:U(),transition:"none"}:void 0);return{isDragging:u,dragProgress:c,dragStyles:M}}function U(){throw new Error}const Ua=["start","end","left","right","top","bottom"],Xa=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ua.includes(e)},sticky:Boolean,...ve(),...F(),...fe(),...nt(),...me(),...Y({tag:"nav"}),...ee()},"VNavigationDrawer"),Ka=$()({name:"VNavigationDrawer",props:Xa(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:n,slots:l}=o;const{isRtl:a}=Xe(),{themeClasses:i}=te(e),{borderClasses:r}=ge(e),{backgroundColorClasses:y,backgroundColorStyles:g}=re(T(e,"color")),{elevationClasses:f}=he(e),{mobile:u}=Pt(),{roundedClasses:c}=ye(e),d=Ht(),v=Ae(e,"modelValue",null,P=>!!P),{ssrBootStyles:S}=ut(),{scopeId:b}=qt(),x=B(),I=N(!1),L=m(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=m(()=>Wt(e.location,a.value)),h=m(()=>!e.permanent&&(u.value||e.temporary)),p=m(()=>e.sticky&&!h.value&&M.value!=="bottom");e.expandOnHover&&e.rail!=null&&K(I,P=>n("update:rail",!P)),e.disableResizeWatcher||K(h,P=>!e.permanent&&Bt(()=>v.value=!P)),!e.disableRouteWatcher&&d&&K(d.currentRoute,()=>h.value&&(v.value=!1)),K(()=>e.permanent,P=>{P&&(v.value=!0)}),At(()=>{e.modelValue!=null||h.value||(v.value=e.permanent||!u.value)});const{isDragging:_,dragProgress:w,dragStyles:k}=ja({isActive:v,isTemporary:h,width:L,touchless:T(e,"touchless"),position:M}),E=m(()=>{const P=h.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):L.value;return _.value?P*w.value:P}),{layoutItemStyles:le,layoutItemScrimStyles:Ie}=lt({id:e.name,order:m(()=>parseInt(e.order,10)),position:M,layoutSize:E,elementSize:L,active:m(()=>v.value||_.value),disableTransitions:m(()=>_.value),absolute:m(()=>e.absolute||p.value&&typeof be.value!="string")}),{isStuck:be,stickyStyles:Te}=Ha({rootEl:x,isSticky:p,layoutItemStyles:le}),j=re(m(()=>typeof e.scrim=="string"?e.scrim:null)),_e=m(()=>({..._.value?{opacity:w.value*.2,transition:"none"}:void 0,...Ie.value}));Oe({VList:{bgColor:"transparent"}});function Le(){I.value=!0}function V(){I.value=!1}return O(()=>{const P=l.image||e.image;return s(z,null,[s(e.tag,ue({ref:x,onMouseenter:Le,onMouseleave:V,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":h.value,"v-navigation-drawer--active":v.value,"v-navigation-drawer--sticky":p.value},i.value,y.value,r.value,f.value,c.value,e.class],style:[g.value,le.value,k.value,S.value,Te.value,e.style]},b,t),{default:()=>{var Se,oe,pe,ie;return[P&&s("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(Se=l.image)==null?void 0:Se.call(l,{image:e.image}):s("img",{src:e.image,alt:""},null)]),l.prepend&&s("div",{class:"v-navigation-drawer__prepend"},[(oe=l.prepend)==null?void 0:oe.call(l)]),s("div",{class:"v-navigation-drawer__content"},[(pe=l.default)==null?void 0:pe.call(l)]),l.append&&s("div",{class:"v-navigation-drawer__append"},[(ie=l.append)==null?void 0:ie.call(l)])]}}),s(Mt,{name:"fade-transition"},{default:()=>[h.value&&(_.value||v.value)&&!!e.scrim&&s("div",ue({class:["v-navigation-drawer__scrim",j.backgroundColorClasses.value],style:[_e.value,j.backgroundColorStyles.value],onClick:()=>v.value=!1},b),null)]})])}),{isStuck:be}}}),qa=e=>($e("data-v-be5eb046"),e=e(),Re(),e),Za=qa(()=>W("div",{class:"foto"},[W("img",{src:ya})],-1)),Ja={__name:"Drawer",setup(e){const o=ae("abrir_menu");return(t,n)=>(D(),Q(ct,null,{default:C(()=>[s(Ka,{modelValue:Ke(o),"onUpdate:modelValue":n[0]||(n[0]=l=>Et(o)?o.value=l:null),temporary:""},{default:C(()=>[s(q,{"prepend-avatar":"",title:"Usuario",class:"usuario bg-light-blue-darken-4 d-flex justify-center align-center"}),Za,s(Ve),s(ze,{density:"compact",nav:""},{default:C(()=>[s(q,{"prepend-icon":"mdi-view-dashboard",title:"Inicio",value:"home"}),s(q,{"prepend-icon":"mdi-forum",title:"Registro",value:"registro"})]),_:1}),s(Ve),s(ze,{density:"compact",nav:"",class:"d-flex justify-center"},{default:C(()=>[s(q,{title:"Usuario No Registrado",value:"home"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},Qa=de(Ja,[["__scopeId","data-v-be5eb046"]]);const en=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...F(),...fe(),...nt(),...me(),...Y({tag:"footer"}),...ee()},"VFooter"),tn=$()({name:"VFooter",props:en(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=te(e),{backgroundColorClasses:l,backgroundColorStyles:a}=re(T(e,"color")),{borderClasses:i}=ge(e),{elevationClasses:r}=he(e),{roundedClasses:y}=ye(e),g=N(32),{resizeRef:f}=Ut(d=>{d.length&&(g.value=d[0].target.clientHeight)}),u=m(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:c}=lt({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:u,elementSize:m(()=>e.height==="auto"?void 0:u.value),active:m(()=>e.app),absolute:T(e,"absolute")});return O(()=>s(e.tag,{ref:f,class:["v-footer",n.value,l.value,i.value,r.value,y.value,e.class],style:[a.value,e.app?c.value:{height:H(e.height)},e.style]},t)),{}}}),_t=e=>($e("data-v-f87dd2d8"),e=e(),Re(),e),an=_t(()=>W("div",{class:"pt-0"}," Todos los derechos reservados UTU - Instituto de Alta Especialización ",-1)),nn=_t(()=>W("strong",null," Cerro Largo",-1)),ln={__name:"Footer",setup(e){const o=B(["mdi:mdi-facebook","mdi:mdi-twitter","mdi:mdi-linkedin","mdi:mdi-instagram"]);return(t,n)=>(D(),Q(ct,{class:"ocultar"},{default:C(()=>[s(tn,{class:"bg-light-blue-darken-4 text-center d-flex flex-column"},{default:C(()=>[W("div",null,[(D(!0),J(z,null,Ne(o.value,l=>(D(),Q(xe,{key:l,class:"mx-4",icon:l,variant:"text"},null,8,["icon"]))),128))]),an,s(Ve),W("div",null,[we(De(new Date().getFullYear())+" — ",1),nn])]),_:1})]),_:1}))}},on=de(ln,[["__scopeId","data-v-f87dd2d8"]]);const fn={__name:"Default",setup(e){const o=B({});G("curso_elegido",o);const t=B([]);G("los_cursos",t),(async()=>{await fetch("/").then(a=>a.json()).then(a=>t.value.push(a))})();const l=B(!1);return G("abrir_menu",l),(a,i)=>{const r=Ee("Router-view");return D(),J(z,null,[s(ha),s(sa),s(Qa),s(r),s(on),s(Qt)],64)}}};export{fn as default};
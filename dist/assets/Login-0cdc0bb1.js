import{p as V,m as g,g as v,a as b,t as k,c as s,o as S,j as h,w as t,a8 as y,l as C,$ as P,a0 as _,n as w}from"./index-f209e740.js";import{a as B,m as T,u as I,_ as q}from"./index-365e995c.js";import{V as E}from"./VApp-da4c15df.js";import{V as F}from"./VCard-263e619f.js";import{V as L,a as i}from"./VTextField-34870c35.js";import{m as R,a as N,y as U,z as $,b as j,u as z,c as A,d as D,A as M,B as x,e as G,g as H}from"./VBtn-77aa0a55.js";import{m as J,u as K}from"./layout-42d4d558.js";import"./VAvatar-aa1072d3.js";import"./VImg-e035b7d5.js";import"./index-82b22d0b.js";const O=V({color:String,...R(),...J(),...B(),...N(),...U(),...$(),...j(),...T(),...g()},"VSheet"),Q=v()({name:"VSheet",props:O(),setup(e,a){let{slots:r}=a;const{themeClasses:n}=b(e),{backgroundColorClasses:d,backgroundColorStyles:l}=z(k(e,"color")),{borderClasses:o}=A(e),{dimensionStyles:u}=I(e),{elevationClasses:m}=D(e),{locationStyles:c}=M(e),{positionClasses:p}=x(e),{roundedClasses:f}=G(e);return K(()=>s(e.tag,{class:["v-sheet",n.value,d.value,o.value,m.value,p.value,f.value,e.class],style:[l.value,u.value,c.value,e.style]},r)),{}}}),W={data:()=>({form:!1,email:null,password:null,loading:!1}),methods:{onSubmit(){this.form&&(this.loading=!0,setTimeout(()=>this.loading=!1,2e3))},required(e){return!!e||"Field is required"}}},X=e=>(P("data-v-fac0fa20"),e=e(),_(),e),Y=X(()=>w("br",null,null,-1));function Z(e,a,r,n,d,l){return S(),h(E,{class:"inicio"},{default:t(()=>[s(Q,{class:"pa-12",rounded:""},{default:t(()=>[s(F,{class:"mx-auto px-6 py-8 tarjeta","max-width":"344"},{default:t(()=>[s(L,{modelValue:e.form,"onUpdate:modelValue":a[2]||(a[2]=o=>e.form=o),onSubmit:y(l.onSubmit,["prevent"])},{default:t(()=>[s(i,{modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=o=>e.email=o),readonly:e.loading,rules:[l.required],class:"mb-2",clearable:"",label:"Email"},null,8,["modelValue","readonly","rules"]),s(i,{modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.password=o),readonly:e.loading,rules:[l.required],clearable:"",label:"Password",placeholder:"Enter your password"},null,8,["modelValue","readonly","rules"]),Y,s(H,{disabled:!e.form,loading:e.loading,block:"",color:"light-blue-darken-4",size:"large",type:"submit",variant:"elevated"},{default:t(()=>[C(" Sign In ")]),_:1},8,["disabled","loading"])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})}const ue=q(W,[["render",Z],["__scopeId","data-v-fac0fa20"]]);export{ue as default};
import{d as V,m as g,g as v,f as b,t as k,e as s,_ as S,o as h,q as y,w as t,a9 as C,x as P,p as _,a as w,b as B}from"./index-ee158cf4.js";import{V as T}from"./VApp-c827ee2f.js";import{V as q}from"./VCard-c80e4347.js";import{V as I,a as i}from"./VTextField-b62b852c.js";import{m as E,a as F,y as L,z as R,b as N,u as U,c as z,d as A,A as D,B as $,e as j,g as x}from"./VBtn-fa0d49dc.js";import{m as M,u as G}from"./layout-d35d45aa.js";import{a as H,m as J,u as K}from"./index-65a99d14.js";import"./VAvatar-d47b3887.js";import"./VImg-d8cb82cd.js";import"./index-0467a7ff.js";const O=V({color:String,...E(),...M(),...H(),...F(),...L(),...R(),...N(),...J(),...g()},"VSheet"),Q=v()({name:"VSheet",props:O(),setup(e,a){let{slots:r}=a;const{themeClasses:n}=b(e),{backgroundColorClasses:d,backgroundColorStyles:l}=U(k(e,"color")),{borderClasses:o}=z(e),{dimensionStyles:u}=K(e),{elevationClasses:m}=A(e),{locationStyles:c}=D(e),{positionClasses:p}=$(e),{roundedClasses:f}=j(e);return G(()=>s(e.tag,{class:["v-sheet",n.value,d.value,o.value,m.value,p.value,f.value,e.class],style:[l.value,u.value,c.value,e.style]},r)),{}}}),W={data:()=>({form:!1,email:null,password:null,loading:!1}),methods:{onSubmit(){this.form&&(this.loading=!0,setTimeout(()=>this.loading=!1,2e3))},required(e){return!!e||"Field is required"}}},X=e=>(_("data-v-fac0fa20"),e=e(),w(),e),Y=X(()=>B("br",null,null,-1));function Z(e,a,r,n,d,l){return h(),y(T,{class:"inicio"},{default:t(()=>[s(Q,{class:"pa-12",rounded:""},{default:t(()=>[s(q,{class:"mx-auto px-6 py-8 tarjeta","max-width":"344"},{default:t(()=>[s(I,{modelValue:e.form,"onUpdate:modelValue":a[2]||(a[2]=o=>e.form=o),onSubmit:C(l.onSubmit,["prevent"])},{default:t(()=>[s(i,{modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=o=>e.email=o),readonly:e.loading,rules:[l.required],class:"mb-2",clearable:"",label:"Email"},null,8,["modelValue","readonly","rules"]),s(i,{modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.password=o),readonly:e.loading,rules:[l.required],clearable:"",label:"Password",placeholder:"Enter your password"},null,8,["modelValue","readonly","rules"]),Y,s(x,{disabled:!e.form,loading:e.loading,block:"",color:"light-blue-darken-4",size:"large",type:"submit",variant:"elevated"},{default:t(()=>[P(" Sign In ")]),_:1},8,["disabled","loading"])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})}const ue=S(W,[["render",Z],["__scopeId","data-v-fac0fa20"]]);export{ue as default};
import{_ as i,o as u,d as m,w as o,e as a,ai as p,f,p as V,g as c,h as d}from"./index-9ffd155a.js";import{V as g}from"./VApp-fb84dbb8.js";import{b as _,c as b,V as h}from"./VRow-c81424cd.js";import{V as w}from"./forwardRefs-8072c725.js";import{V as y,a as t}from"./VTextField-c6288cb8.js";import{V as v}from"./VAvatar-dfc23a2a.js";import"./VImg-0ceb9947.js";import"./index-a1ab7cc3.js";const S="/login2.png";const C={data:()=>({form:!1,email:null,password:null,loading:!1}),methods:{onSubmit(){this.form&&(this.loading=!0,setTimeout(()=>this.loading=!1,2e3))},required(e){return!!e||"Este campo es requerido"}}},n=e=>(V("data-v-e3e23da0"),e=e(),c(),e),I=n(()=>d("div",{class:"login"},[d("img",{src:S})],-1)),k=n(()=>d("br",null,null,-1));function q(e,l,B,L,N,r){return u(),m(g,null,{default:o(()=>[a(h,null,{default:o(()=>[a(_,{class:"justify-center contenedor align-center"},{default:o(()=>[a(b,{class:"coso",xs:"12",md:"6",xl:"4"},{default:o(()=>[a(w,{class:"mx-auto px-6 py-8 tarjeta","max-width":"344"},{default:o(()=>[a(y,{modelValue:e.form,"onUpdate:modelValue":l[2]||(l[2]=s=>e.form=s),onSubmit:p(r.onSubmit,["prevent"])},{default:o(()=>[I,a(t,{modelValue:e.email,"onUpdate:modelValue":l[0]||(l[0]=s=>e.email=s),readonly:e.loading,rules:[r.required],class:"mb-2 entrada",clearable:"",label:"Correo"},null,8,["modelValue","readonly","rules"]),a(t,{modelValue:e.password,"onUpdate:modelValue":l[1]||(l[1]=s=>e.password=s),readonly:e.loading,rules:[r.required],clearable:"",label:"Contraseña",placeholder:"Ingrese la contraseña",class:"entrada"},null,8,["modelValue","readonly","rules"]),k,a(v,{disabled:!e.form,loading:e.loading,block:"",color:"light-blue-darken-4",size:"large",type:"submit",variant:"elevated",class:"boton_login"},{default:o(()=>[f(" Login ")]),_:1},8,["disabled","loading"])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const M=i(C,[["render",q],["__scopeId","data-v-e3e23da0"]]);export{M as default};

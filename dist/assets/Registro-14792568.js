import{_ as f,r as l,o as V,q as v,w as a,e as o,J as d,a3 as c,b as i,x,p as g,a as h}from"./index-ee158cf4.js";import{V as y}from"./VApp-c827ee2f.js";import{a as b,b as w,V as C}from"./VRow-71fa5553.js";import{g as N}from"./VBtn-fa0d49dc.js";import{V as R,a as S}from"./VTextField-b62b852c.js";import"./layout-d35d45aa.js";import"./index-65a99d14.js";import"./index-0467a7ff.js";const T=s=>(g("data-v-f236b106"),s=s(),h(),s),B=T(()=>i("h1",null,"registro",-1)),I={__name:"Registro",setup(s){const u=l(""),m=l([]),r=l(""),n=l(""),_=()=>{let p={usuario:r,contra:n};fetch("http://localhost/registro"),JSON.stringify(p)};return(p,e)=>(V(),v(y,{class:"inicio"},{default:a(()=>[B,o(C,null,{default:a(()=>[o(b,{class:"justify-center"},{default:a(()=>[o(w,{class:"form",cols:"6"},{default:a(()=>[d(i("input",{type:"text",placeholder:"usuario","onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,512),[[c,r.value]]),d(i("input",{type:"password",placeholder:"pasword","onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t)},null,512),[[c,n.value]]),o(N,{onClick:_},{default:a(()=>[x("enviar")]),_:1}),o(R,{ref:"form"},{default:a(()=>[o(S,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value=t),counter:10,rules:m.value,label:"Name",required:""},null,8,["modelValue","rules"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}))}},D=f(I,[["__scopeId","data-v-f236b106"]]);export{D as default};
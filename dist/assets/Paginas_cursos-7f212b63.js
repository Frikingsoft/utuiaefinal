import{_,y as u,aF as r,o as i,d,w as t,h as s,t as e,z as o,e as l,f as c}from"./index-7fc814ba.js";import{V as p}from"./VApp-1c2286f8.js";import{b as f,c as n,V as m}from"./VRow-bed4c61d.js";import{V as h}from"./VImg-94a9f28d.js";const v={class:"titulo"},g={class:"texto_curso"},x={class:"texto_curso"},V={class:"texto_curso"},C={class:"texto_curso"},b={class:"texto_curso"},k={class:"texto_curso"},y=["href"],P={__name:"Paginas_cursos",setup(w){const a=u("curso_elegido");return r(),(B,N)=>(i(),d(p,null,{default:t(()=>[s("h1",v,e(o(a).value[0]),1),l(m,null,{default:t(()=>[l(f,{justify:"center filas"},{default:t(()=>[l(n,{cols:"12",sm:"6",md:"4"},{default:t(()=>[l(h,{"aspect-ratio":"16/9",cover:"",src:o(a).value.imagen,class:"foto"},null,8,["src"])]),_:1}),l(n,{cols:"12",sm:"6",md:"4",class:"columnas"},{default:t(()=>[s("h2",null,[c(" Curso : "),s("span",g,e(o(a).value.nombre),1)]),s("h2",null,[c(" Curso : "),s("span",x,e(o(a).value.nombre),1)]),s("h2",null,[c(" Tipo de Curso: "),s("span",V,e(o(a).value.tipo),1)]),s("h2",null,[c(" Duración : "),s("span",C,e(o(a).value.duracion),1)]),s("h2",null,[c(" Modalidad : "),s("span",b,e(o(a).value.modalidad),1)]),s("h2",null,[c(" Link Oficial : "),s("span",k,[s("a",{href:o(a).value.link_ingreso,class:"link"}," Página Oficial ",8,y)])])]),_:1}),l(n,{cols:"12",md:"8",class:"columnas columnas2"},{default:t(()=>[s("h2",null,"Perfil de egreso: "+e(o(a).value.perfil),1)]),_:1})]),_:1})]),_:1})]),_:1}))}},R=_(P,[["__scopeId","data-v-a1038b5a"]]);export{R as default};
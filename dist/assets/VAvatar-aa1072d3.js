import{m as u,u as f}from"./layout-42d4d558.js";import{g as i,a9 as y,aa as V,ab as k,p as C,I as P,m as h,a as S,c as o}from"./index-f209e740.js";import{j as z,b as A,E as I,l as F,o as R,p as T,e as b,F as B,h as D,q as _}from"./VBtn-77aa0a55.js";import{m as j}from"./index-365e995c.js";import{V as p}from"./VImg-e035b7d5.js";function w(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return i()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...u()},setup(t,l){let{slots:s}=l;return()=>{var n;return k(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const q=C({start:Boolean,end:Boolean,icon:P,image:String,...u(),...z(),...A(),...I(),...j(),...h(),...F({variant:"flat"})},"VAvatar"),G=i()({name:"VAvatar",props:q(),setup(a,r){let{slots:e}=r;const{themeClasses:t}=S(a),{colorClasses:l,colorStyles:s,variantClasses:n}=R(a),{densityClasses:c}=T(a),{roundedClasses:v}=b(a),{sizeClasses:g,sizeStyles:d}=B(a);return f(()=>o(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,l.value,c.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var m;return[a.image?o(p,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?o(D,{key:"icon",icon:a.icon},null):(m=e.default)==null?void 0:m.call(e),_(!1,"v-avatar")]}})),{}}});export{G as V,w as c};

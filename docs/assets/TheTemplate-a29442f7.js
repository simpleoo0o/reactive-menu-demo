import{i as y,u as g,c as l,o as s,a as o,b as k,d as e,e as c,t as r,F as i,r as M,f as N,g as t,l as x,R as B,h as S,w as V}from"./index-71c78080.js";import{E as b}from"./index-f7a41c3b.js";import"./use-form-item-fb079a1a.js";const C=t("br",null,null,-1),D=t("hr",null,null,-1),E=t("hr",null,null,-1),v=t("h5",null,"匹配菜单配置：",-1),w=t("hr",null,null,-1),R=t("h5",null,"当前菜单配置：",-1),P={__name:"TheTemplate",setup(T){const u=y("reactiveMenuData"),h=g(),m=l(()=>JSON.stringify(u.currentMenu,null,2)),p=l(()=>JSON.stringify(u.currentMenuWithParents.at(-1),null,2)),_=l(()=>{var n;return x.filter((n=u.currentMenuWithParents.at(-1))==null?void 0:n.children,["type","submenu"])});function f(n){u.methods.jump(n)}return(n,j)=>{var d;return s(),o(i,null,[k(e(B)),c(" routerName: "+r(e(h).name)+" ",1),C,c(" query: "+r(e(h).query)+" ",1),(d=e(_))!=null&&d.length?(s(),o(i,{key:0},[D,(s(!0),o(i,null,M(e(_),a=>(s(),S(e(b),{key:a.id,onClick:q=>f(a)},{default:V(()=>[c(r(a.name),1)]),_:2},1032,["onClick"]))),128))],64)):N("",!0),E,v,t("pre",null,r(e(p)),1),w,R,t("pre",null,r(e(m)),1)],64)}}};export{P as default};

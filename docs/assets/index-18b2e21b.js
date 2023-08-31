import{M as A,T as N,A as ae,c as d,L as B,o as p,a as E,a6 as U,b as _,w,a3 as j,g as $,a5 as m,d as t,t as q,a4 as G,aG as K,ad as Z,af as re,P as le,O,Q as ie,n as J,aK as ue,j as M,aD as F,k as ce,D as de,K as pe,$ as me,h,ac as fe,f as T,a8 as H,a7 as ge,F as ye,ab as ve,aC as Ce,aL as he,ah as be,S as P,aH as Q,ay as I,aI as R,aJ as Te,aM as we}from"./index-cc596057.js";import{a as Ne}from"./index-493027f1.js";const V={},Se=A({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),ke=["textContent"],Me=N({name:"ElBadge"}),Be=N({...Me,props:Se,setup(s,{expose:n}){const e=s,o=ae("badge"),a=d(()=>e.isDot?"":B(e.value)&&B(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),E("div",{class:m(t(o).b())},[U(l.$slots,"default"),_(K,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[j($("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:q(t(a))},null,10,ke),[[G,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Ee=Z(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const $e=re(Ee),W=["success","info","warning","error"],i=ie({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:J?document.body:void 0}),Ie=A({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:le,default:i.icon},id:{type:String,default:i.id},message:{type:O([String,Object,Function]),default:i.message},onClose:{type:O(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:W,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),_e={destroy:()=>!0},c=ue([]),xe=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},ze=s=>{const{prev:n}=xe(s);return n?n.vm.exposed.bottom.value:0},Le=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,De=["id"],Oe=["innerHTML"],Fe=N({name:"ElMessage"}),He=N({...Fe,props:Ie,emits:_e,setup(s,{expose:n}){const e=s,{Close:o}=Ce,{ns:a,zIndex:l}=Ne("message"),{currentZIndex:u,nextZIndex:f}=l,g=M(),v=M(!1),C=M(0);let S;const Y=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&F[r]}}),x=d(()=>e.icon||F[e.type]||""),se=d(()=>ze(e.id)),z=d(()=>Le(e.id,e.offset)+se.value),ne=d(()=>C.value+z.value),te=d(()=>({top:`${z.value}px`,zIndex:u.value}));function k(){e.duration!==0&&({stop:S}=he(()=>{b()},e.duration))}function L(){S==null||S()}function b(){v.value=!1}function oe({code:r}){r===be.esc&&b()}return ce(()=>{k(),f(),v.value=!0}),de(()=>e.repeatNum,()=>{L(),k()}),pe(document,"keydown",oe),me(g,()=>{C.value=g.value.getBoundingClientRect().height}),n({visible:v,bottom:ne,close:b}),(r,D)=>(p(),h(K,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:D[0]||(D[0]=je=>r.$emit("destroy")),persisted:""},{default:w(()=>[j($("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:fe(t(te)),role:"alert",onMouseenter:L,onMouseleave:k},[r.repeatNum>1?(p(),h(t($e),{key:0,value:r.repeatNum,type:t(Y),class:m(t(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(x)?(p(),h(t(H),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:w(()=>[(p(),h(ge(t(x))))]),_:1},8,["class"])):T("v-if",!0),U(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),E(ye,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),$("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,Oe)],2112)):(p(),E("p",{key:0,class:m(t(a).e("content"))},q(r.message),3))]),r.showClose?(p(),h(t(H),{key:2,class:m(t(a).e("closeBtn")),onClick:ve(b,["stop"])},{default:w(()=>[_(t(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,De),[[G,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=Z(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Re=1;const X=s=>{const n=!s||P(s)||Q(s)||I(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(P(e.appendTo)){let o=document.querySelector(e.appendTo);Te(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ae=({appendTo:s,...n},e)=>{const o=`message_${Re++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),Ve(C)},onDestroy:()=>{R(null,l)}},f=_(Pe,u,I(u.message)||Q(u.message)?{default:I(u.message)?u.message:()=>u.message}:null);f.appContext=e||y._context,R(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},y=(s={},n)=>{if(!J)return{close:()=>{}};if(B(V.max)&&c.length>=V.max)return{close:()=>{}};const e=X(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ae(e,n);return c.push(o),o.handler};W.forEach(s=>{y[s]=(n={},e)=>{const o=X(n);return y({...o,type:s},e)}});function Ue(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=Ue;y._context=null;const Ke=we(y,"$message");export{Ke as E};

import{e as a}from"./toggleHighContrast-eea0116e.js";import{_ as o,r as t,f as s,o as c,c as l,e as i}from"./index-7c490f25.js";const r=`export interface ReactiveMenuRouteParamsVO {\r
  // 字段的key\r
  key: string;\r
  // 字段值，填了即为字段的值，\r
  // 若不填，从mockConfig中用key取值\r
  // :key 会被替换成 mockConfig[key]\r
  // 支持:key?\r
  value?: string;\r
  // 地址比较时是否必选\r
  isReal?: boolean;\r
}\r
\r
export interface ReactiveMenuItemVO {\r
  id: number;\r
  pid: number;\r
  name: string;\r
  // 只有type为 'menu' 时才会被渲染成导航项，\r
  // shadowMenu'用于详情等页面，不会生成导航项，会高亮他的parent\r
  // 自定义的 string 用于记录其他信息，如权限，选项等\r
  type: 'menu' | 'shadowMenu' | string;\r
  checked: boolean;\r
  order?: number;\r
  config: {\r
    element?: string; // 自定义元素，type为 'menu' 时生效\r
    boundary?: boolean; // 边界,对应某个菜单项内展开一个详情，自成一棵导航树的场景,如3.6版kgtext，语料管理 点击 管理，进入管理详情，自成一棵导航树\r
    showChildren?: boolean; // 显示children，对应没选中项，但是需要显示导航的场景,如3.6版kgtext，点击logo，无选中菜单项，但是需要显示导航\r
    isDefault?: boolean;\r
    icon?: string;\r
    target?: '_blank' | '_self'; // 点击menu时是新开还是本页跳转，默认_self\r
    disabled?: boolean;\r
    classList?: string[];\r
    disabledDefaultClick?: boolean; // 是否禁止默认click事件,用于自定义菜单元素自行处理click事件\r
    notBeDefault?: boolean; // 管理时是否可被设为默认菜单\r
    route?: {\r
      name: string;\r
      params?: ReactiveMenuRouteParamsVO[];\r
      query?: ReactiveMenuRouteParamsVO[];\r
      path?: string; // 会无视name、params参数，直接作为地址跳转,支持 /a/:b/:c?,query参数请在query中定义\r
    };\r
  };\r
  children?: ReactiveMenuItemVO[]\r
}\r
`;const u={class:"menu-editor"},m={__name:"Interface",setup(d){const e=t(null);console.log(r);let n=null;return s(()=>{n=a.create(e.value,{value:r,language:"typescript",readOnly:!0}),console.log(n)}),(_,p)=>(c(),l("div",u,[i("div",{class:"monaco-editor",ref_key:"$monaco",ref:e},null,512)]))}},b=o(m,[["__scopeId","data-v-c36132b8"]]);export{b as default};

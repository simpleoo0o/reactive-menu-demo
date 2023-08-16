import{e as t}from"./toggleHighContrast-398a57a2.js";import{_ as a,j as o,k as s,o as u,a as c,g as i}from"./index-497806ff.js";const r=`import { RouteLocationNamedRaw } from "vue-router";\r
\r
export interface ReactiveMenuVO {\r
  menus: ReactiveMenuItemVO[]; // 排序过滤后的所有数据,一般用在一级导航上\r
  secondMenus: ReactiveMenuItemVO[]; // 二级导航要展示的数据\r
  mock: {[key: string]: any}; // 动态参数取值的地方\r
  currentMenu: ReactiveMenuItemVO; // 当前选中的导航数据\r
  currentMenuWithParents: ReactiveMenuItemVO[]; // 当前选中导航的链路\r
  activeIndex: string;\r
  topActiveIndex: string;\r
  config: { // 配置项\r
    autoIndex: boolean | ((reactiveMenuData: ReactiveMenuVO) => void); // 无匹配导航时是否重定向到首页，布尔值或一个方法，默认true，会获取当前menus的默认菜单跳转，为方法时会调用方法，为false不跳转\r
    selfJump: boolean; // 点击当前导航时，是否跳转，默认false\r
    disableMock: boolean; // 禁用mock,自行处理参数，默认false\r
    resetId: boolean; // 重置Id和parentId，限制同级100个，默认false\r
  };\r
  methods: { // 暴露的方法\r
    jump: (data: ReactiveMenuItemVO) => void;\r
    updateMenus: (menus: ReactiveMenuItemVO[]) => void;\r
    goDefault: (menus: ReactiveMenuItemVO[]) => void;\r
    resetId: (menus: ReactiveMenuItemVO[]) => void;\r
    /**\r
     * 匹配路由，返回当前匹配的导航数据\r
     * @param $route 路由对象，不传则取当前路由,目前只比对name、params、query、hash(hash仅在history模式下生效)\r
     * @param setToReactiveMenuData 是否设置到reactiveMenuData中，默认true\r
     * @param willGoDefaultIfNeed 如果不匹配，是否跳转到默认导航，默认true\r
     */\r
    matchRoute: ($route?: RouteLocationNamedRaw, setToReactiveMenuData?: boolean, willGoDefaultIfNeed?: boolean) => {currentMenu: ReactiveMenuItemVO, currentMenuWithParents: ReactiveMenuItemVO[]};\r
  }\r
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
    isDefault?: boolean;\r
    icon?: string;// 默认为icon的class,支持path://开头的，svg path的d，或者path://开头的图片地址,仿echarts的 https://echarts.apache.org/zh/option.html#series-line.symbol\r
    viewBox?: string; // 配合icon以path://开头的使用,默认'0 0 24 24'\r
    target?: '_blank' | '_self'; // 点击menu时是新开还是本页跳转，默认_self\r
    disabled?: boolean;\r
    classList?: string[];\r
    disabledDefaultClick?: boolean; // 是否禁止默认click事件,用于自定义菜单元素自行处理click事件\r
    notBeDefault?: boolean; // 管理时是否可被设为默认菜单\r
    route?: {\r
      name?: string; // name和path必须有一个，path优先级高于name\r
      params?: ReactiveMenuRouteParamsVO[];\r
      query?: ReactiveMenuRouteParamsVO[];\r
      hash?: string; // '#'开头的hash，支持\${key}\r
      path?: string; // 会无视name、params参数，直接作为地址跳转,支持 /a/\${b}/\${c}?d=\${d},query参数也可在query中定义；支持\${e?}，表示不参与比较\r
    };\r
    menuItemAttrs: {[key: string]: any}; // Menu-Item 属性,具体参考element-plu文档\r
    subMenuAttrs: {[key: string]: any}; // SubMenu 属性,具体参考element-plu文档\r
    menuItemGroupAttrs: {[key: string]: any}; // Menu-Item-Group 属性,具体参考element-plu文档\r
  };\r
  children?: ReactiveMenuItemVO[];\r
}\r
\r
export interface ReactiveMenuRouteParamsVO {\r
  // 字段的key\r
  key: string;\r
  /**\r
   * 字段值，填了即为字段的值，\r
   * 若不填，从mockConfig中用key取值\r
   * \${key} 会被替换成 mockConfig[key]\r
   * 支持\${key?},表示不参与比较\r
   */\r
  value?: string;\r
  // 地址比较时是否必选\r
  isReal?: boolean;\r
}\r
\r
`;const l={class:"menu-editor"},m={__name:"Interface",setup(d){const e=o(null);console.log(r);let n=null;return s(()=>{n=t.create(e.value,{value:r,language:"typescript",readOnly:!0}),console.log(n)}),(p,v)=>(u(),c("div",l,[i("div",{class:"monaco-editor",ref_key:"$monaco",ref:e},null,512)]))}},g=a(m,[["__scopeId","data-v-c36132b8"]]);export{g as default};

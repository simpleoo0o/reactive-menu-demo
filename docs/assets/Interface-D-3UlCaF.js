import{e as t}from"./toggleHighContrast-Kw1QNP9l.js";import{_ as d,r as a,o as u,a as o,c as r,b as s}from"./index-DX1TNSH0.js";const i=`import { RouteLocationNamedRaw } from "vue-router";
export interface ReactiveMenuConfigVO {
    autoIndex?: boolean | ((reactiveMenuData: ReactiveMenuVO) => void);
    selfJump?: boolean;
    disableMock?: boolean;
    resetId?: boolean;
}
export interface ReactiveMenuRouteParamsVO {
    key: string;
    value?: string;
    isReal?: boolean;
}
export interface ReactiveMenuItemVO {
    id: string;
    pid: string;
    name: string;
    type: 'menu' | 'shadowMenu' | string;
    checked?: boolean;
    enable?: boolean;
    order?: number;
    config: {
        element?: string;
        boundary?: boolean;
        isDefault?: boolean;
        icon?: string;
        viewBox?: string;
        target?: '_blank' | '_self';
        disabled?: boolean;
        classList?: string[];
        disabledDefaultClick?: boolean;
        notBeDefault?: boolean;
        route?: {
            name?: string;
            params?: ReactiveMenuRouteParamsVO[];
            query?: ReactiveMenuRouteParamsVO[];
            hash?: string;
            path?: string;
        };
        attributes: Record<string, unknown>;
        menuItemGroup: boolean;
    };
    children?: ReactiveMenuItemVO[];
}
export interface ReactiveMenuVO {
    menus: ReactiveMenuItemVO[];
    secondMenus: ReactiveMenuItemVO[];
    mock: {
        [key: string]: any;
    };
    currentMenu?: ReactiveMenuItemVO;
    currentMenuWithParents?: ReactiveMenuItemVO[];
    activeIndex?: string;
    topActiveIndex?: string;
    config: ReactiveMenuConfigVO;
    methods: {
        jump: (data: ReactiveMenuItemVO) => ReactiveMenuItemVO;
        updateMenus: (menus: ReactiveMenuItemVO[]) => void;
        goDefault: (menus?: ReactiveMenuItemVO[]) => void;
        resetId: (menus: ReactiveMenuItemVO[]) => void;
        matchRoute: ($route?: RouteLocationNamedRaw, setToReactiveMenuData?: boolean, willGoDefaultIfNeed?: boolean) => {
            currentMenu: ReactiveMenuItemVO;
            currentMenuWithParents: ReactiveMenuItemVO[];
        };
    };
}
export interface ReactiveMenuOptionVO {
    mock?: {
        [key: string]: any;
    };
    config?: ReactiveMenuConfigVO;
}
export declare function useReactiveMenu(menus: ReactiveMenuItemVO[], options?: ReactiveMenuOptionVO): {
    menus: {
        id: string;
        pid: string;
        name: string;
        type: string;
        checked?: boolean | undefined;
        enable?: boolean | undefined;
        order?: number | undefined;
        config: {
            element?: string | undefined;
            boundary?: boolean | undefined;
            isDefault?: boolean | undefined;
            icon?: string | undefined;
            viewBox?: string | undefined;
            target?: "_blank" | "_self" | undefined;
            disabled?: boolean | undefined;
            classList?: string[] | undefined;
            disabledDefaultClick?: boolean | undefined;
            notBeDefault?: boolean | undefined;
            route?: {
                name?: string | undefined;
                params?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                hash?: string | undefined;
                path?: string | undefined;
            } | undefined;
            attributes: Record<string, unknown>;
            menuItemGroup: boolean;
        };
        children?: any[] | undefined;
    }[];
    secondMenus: {
        id: string;
        pid: string;
        name: string;
        type: string;
        checked?: boolean | undefined;
        enable?: boolean | undefined;
        order?: number | undefined;
        config: {
            element?: string | undefined;
            boundary?: boolean | undefined;
            isDefault?: boolean | undefined;
            icon?: string | undefined;
            viewBox?: string | undefined;
            target?: "_blank" | "_self" | undefined;
            disabled?: boolean | undefined;
            classList?: string[] | undefined;
            disabledDefaultClick?: boolean | undefined;
            notBeDefault?: boolean | undefined;
            route?: {
                name?: string | undefined;
                params?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                hash?: string | undefined;
                path?: string | undefined;
            } | undefined;
            attributes: Record<string, unknown>;
            menuItemGroup: boolean;
        };
        children?: any[] | undefined;
    }[];
    mock: {
        [key: string]: any;
    };
    currentMenu?: {
        id: string;
        pid: string;
        name: string;
        type: string;
        checked?: boolean | undefined;
        enable?: boolean | undefined;
        order?: number | undefined;
        config: {
            element?: string | undefined;
            boundary?: boolean | undefined;
            isDefault?: boolean | undefined;
            icon?: string | undefined;
            viewBox?: string | undefined;
            target?: "_blank" | "_self" | undefined;
            disabled?: boolean | undefined;
            classList?: string[] | undefined;
            disabledDefaultClick?: boolean | undefined;
            notBeDefault?: boolean | undefined;
            route?: {
                name?: string | undefined;
                params?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                hash?: string | undefined;
                path?: string | undefined;
            } | undefined;
            attributes: Record<string, unknown>;
            menuItemGroup: boolean;
        };
        children?: any[] | undefined;
    } | undefined;
    currentMenuWithParents?: {
        id: string;
        pid: string;
        name: string;
        type: string;
        checked?: boolean | undefined;
        enable?: boolean | undefined;
        order?: number | undefined;
        config: {
            element?: string | undefined;
            boundary?: boolean | undefined;
            isDefault?: boolean | undefined;
            icon?: string | undefined;
            viewBox?: string | undefined;
            target?: "_blank" | "_self" | undefined;
            disabled?: boolean | undefined;
            classList?: string[] | undefined;
            disabledDefaultClick?: boolean | undefined;
            notBeDefault?: boolean | undefined;
            route?: {
                name?: string | undefined;
                params?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string | undefined;
                    isReal?: boolean | undefined;
                }[] | undefined;
                hash?: string | undefined;
                path?: string | undefined;
            } | undefined;
            attributes: Record<string, unknown>;
            menuItemGroup: boolean;
        };
        children?: any[] | undefined;
    }[] | undefined;
    activeIndex?: string | undefined;
    topActiveIndex?: string | undefined;
    config: {
        autoIndex?: boolean | ((reactiveMenuData: ReactiveMenuVO) => void) | undefined;
        selfJump?: boolean | undefined;
        disableMock?: boolean | undefined;
        resetId?: boolean | undefined;
    };
    methods: {
        jump: (data: ReactiveMenuItemVO) => ReactiveMenuItemVO;
        updateMenus: (menus: ReactiveMenuItemVO[]) => void;
        goDefault: (menus?: ReactiveMenuItemVO[] | undefined) => void;
        resetId: (menus: ReactiveMenuItemVO[]) => void;
        matchRoute: ($route?: RouteLocationNamedRaw | undefined, setToReactiveMenuData?: boolean | undefined, willGoDefaultIfNeed?: boolean | undefined) => {
            currentMenu: ReactiveMenuItemVO;
            currentMenuWithParents: ReactiveMenuItemVO[];
        };
    };
};
`,l={class:"menu-editor"},f={__name:"Interface",setup(c){const e=a(null);console.log(i);let n=null;return u(()=>{n=t.create(e.value,{value:i,language:"typescript",readOnly:!0}),console.log(n)}),(g,b)=>(o(),r("div",l,[s("div",{ref_key:"$monaco",ref:e,class:"monaco-editor"},null,512)]))}},R=d(f,[["__scopeId","data-v-5deca29c"]]);export{R as default};

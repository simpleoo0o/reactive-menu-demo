import{e as o}from"./toggleHighContrast-CFQ8FusB.js";import{_ as i,r as a,o as r,a as s,c as u,b as l}from"./index-BOiIhUBY.js";const t=`export interface ReactiveMenuConfig {
    autoIndex?: boolean | ((reactiveMenu: ReactiveMenu) => void);
    selfJump?: boolean;
    disableMock?: boolean;
}
export interface ReactiveMenuRouteParams {
    key: string;
    value?: string;
    required?: boolean;
}
export interface ReactiveMenuItemConfig {
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
            params?: ReactiveMenuRouteParams[];
            query?: ReactiveMenuRouteParams[];
            hash?: string;
            path?: string;
        };
        attributes: Record<string, unknown>;
        menuItemGroup: boolean;
    };
    children?: ReactiveMenuItemConfig[];
}
export interface MockParams {
    [key: string]: string | MockParams;
}
export interface ReactiveMenu {
    menus: ReactiveMenuItemConfig[];
    secondMenus: ReactiveMenuItemConfig[];
    mock: MockParams;
    currentMenu?: ReactiveMenuItemConfig;
    currentMenuWithParents?: ReactiveMenuItemConfig[];
    activeIndex?: string;
    topActiveIndex?: string;
    config: ReactiveMenuConfig;
    methods: {
        jump: typeof jump;
        updateMenus: (menus: ReactiveMenuItemConfig[]) => void;
        goDefault: (menus?: ReactiveMenuItemConfig[]) => void;
        resetMenuIds: (menus: ReactiveMenuItemConfig[]) => void;
        matchRoute: typeof matchRoute;
    };
}
export interface ReactiveMenuOption {
    mock?: MockParams;
    config?: ReactiveMenuConfig;
}
export declare function useReactiveMenu(menus: ReactiveMenuItemConfig[], options?: ReactiveMenuOption): {
    menus: {
        id: string;
        pid: string;
        name: string;
        type: "menu" | "shadowMenu" | string;
        checked?: boolean;
        enable?: boolean;
        order?: number;
        config: {
            element?: string;
            boundary?: boolean;
            isDefault?: boolean;
            icon?: string;
            viewBox?: string;
            target?: "_blank" | "_self";
            disabled?: boolean;
            classList?: string[];
            disabledDefaultClick?: boolean;
            notBeDefault?: boolean;
            route?: {
                name?: string;
                params?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                hash?: string;
                path?: string;
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
        type: "menu" | "shadowMenu" | string;
        checked?: boolean;
        enable?: boolean;
        order?: number;
        config: {
            element?: string;
            boundary?: boolean;
            isDefault?: boolean;
            icon?: string;
            viewBox?: string;
            target?: "_blank" | "_self";
            disabled?: boolean;
            classList?: string[];
            disabledDefaultClick?: boolean;
            notBeDefault?: boolean;
            route?: {
                name?: string;
                params?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                hash?: string;
                path?: string;
            } | undefined;
            attributes: Record<string, unknown>;
            menuItemGroup: boolean;
        };
        children?: any[] | undefined;
    }[];
    mock: MockParams;
    currentMenu?: {
        id: string;
        pid: string;
        name: string;
        type: "menu" | "shadowMenu" | string;
        checked?: boolean;
        enable?: boolean;
        order?: number;
        config: {
            element?: string;
            boundary?: boolean;
            isDefault?: boolean;
            icon?: string;
            viewBox?: string;
            target?: "_blank" | "_self";
            disabled?: boolean;
            classList?: string[];
            disabledDefaultClick?: boolean;
            notBeDefault?: boolean;
            route?: {
                name?: string;
                params?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                hash?: string;
                path?: string;
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
        type: "menu" | "shadowMenu" | string;
        checked?: boolean;
        enable?: boolean;
        order?: number;
        config: {
            element?: string;
            boundary?: boolean;
            isDefault?: boolean;
            icon?: string;
            viewBox?: string;
            target?: "_blank" | "_self";
            disabled?: boolean;
            classList?: string[];
            disabledDefaultClick?: boolean;
            notBeDefault?: boolean;
            route?: {
                name?: string;
                params?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                query?: {
                    key: string;
                    value?: string;
                    required?: boolean;
                }[] | undefined;
                hash?: string;
                path?: string;
            } | undefined;
            attributes: Record<string, unknown>;
            menuItemGroup: boolean;
        };
        children?: any[] | undefined;
    }[] | undefined;
    activeIndex?: string;
    topActiveIndex?: string;
    config: {
        autoIndex?: boolean | ((reactiveMenu: ReactiveMenu) => void);
        selfJump?: boolean;
        disableMock?: boolean;
    };
    methods: {
        jump: typeof jump;
        updateMenus: (menus: ReactiveMenuItemConfig[]) => void;
        goDefault: (menus?: ReactiveMenuItemConfig[]) => void;
        resetMenuIds: (menus: ReactiveMenuItemConfig[]) => void;
        matchRoute: typeof matchRoute;
    };
};
declare function matchRoute(route?: import("vue-router").RouteLocationNormalizedLoadedGeneric, setToReactiveMenu?: boolean, willGoDefaultIfNeed?: boolean): {
    currentMenuWithParents: ReactiveMenuItemConfig[];
    currentMenu?: ReactiveMenuItemConfig;
};
declare function jump(menu: ReactiveMenuItemConfig | undefined): ReactiveMenuItemConfig | undefined;
export {};
`,d={class:"menu-editor"},c={__name:"Interface",setup(g){const e=a(null);console.log(t);let n=null;return r(()=>{n=o.create(e.value,{value:t,language:"typescript",readOnly:!0}),console.log(n)}),(m,f)=>(s(),u("div",d,[l("div",{ref_key:"$monaco",ref:e,class:"monaco-editor"},null,512)]))}},p=i(c,[["__scopeId","data-v-89c9e209"]]);export{p as default};

// 配置说明参考node_modules/@plantdata/reactive-menu-item/interface.ts
// 导航使用参考node_modules/@plantdata/reactive-menu-item/README.md
const menus = [
    {
        name: '一级菜单1',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
            isDefault: true,
            icon: 'ic-zsjm-gndy',
            boundary: true
        },
        children: [
            {
                name: '二级菜单',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-system'
                },
                children: [
                    {
                        name: '叶子菜单',
                        enable: true,
                        checked: true,
                        type: 'menu',
                        order: 1,
                        config: {
                            isDefault: true,
                            icon: 'ic-system',
                            route: {
                                name: 'template',
                                query: [{
                                    key: 'type',
                                    isReal: true,
                                    value: '1-1-2'
                                }]
                            }
                        },
                        children: [
                            {
                                name: '详情页面',
                                enable: true,
                                checked: true,
                                type: 'submenu',
                                order: 1,
                                config: {
                                    isDefault: true,
                                    icon: 'ic-system',
                                    route: {
                                        name: 'template',
                                        query: [{
                                            key: 'type',
                                            isReal: true,
                                            value: '叶子菜单的详情页'
                                        }]
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: '菜单分组测试1',
                        enable: true,
                        checked: true,
                        type: 'menu',
                        order: 1,
                        config: {
                            menuItemGroup: true,
                            isDefault: true,
                            icon: 'ic-system',
                            route: {
                                name: 'template',
                                query: [{
                                    key: 'type',
                                    isReal: true,
                                    value: '菜单分组测试1'
                                }]
                            }
                        },
                        children: [
                            {
                                name: '叶子菜单1',
                                enable: true,
                                checked: true,
                                type: 'menu',
                                order: 1,
                                config: {
                                    isDefault: true,
                                    icon: 'ic-system',
                                    route: {
                                        name: 'template',
                                        query: [{
                                            key: 'type',
                                            isReal: true,
                                            value: '叶子菜单1'
                                        }]
                                    }
                                }
                            },
                            {
                                name: '叶子菜单2',
                                enable: true,
                                checked: true,
                                type: 'menu',
                                order: 1,
                                config: {
                                    isDefault: true,
                                    icon: 'ic-system',
                                    route: {
                                        name: 'template',
                                        query: [{
                                            key: 'type',
                                            isReal: true,
                                            value: '叶子菜单2'
                                        }]
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                name: '普通菜单',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: false,
                    icon: 'ic-system',
                    route: {
                        name: 'template',
                        query: [{
                            key: 'type',
                            isReal: true,
                            value: '普通菜单'
                        }]
                    }
                }
            },
            {
                name: 'query可选参数测试',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: false,
                    icon: 'ic-system',
                    route: {
                        name: 'template',
                        query: [{
                            key: 'type',
                            isReal: true,
                            value: 'query可选参数测试'
                        }, {
                            key: 'url',
                            isReal: true,
                            // eslint-disable-next-line no-template-curly-in-string
                            value: '/a/b/c/${kgName}/${apk?}/${page?}?kw=${kw}'
                        }]
                    }
                }
            },
            {
                name: '跳转百度测试',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: false,
                    icon: 'ic-system',
                    target: '_blank',
                    route: {
                        path: 'https://www.baidu.com/s?wd=a',
                        query: [
                            {
                                key: 'kgName'
                            }
                        ]
                    }
                }
            },
            {
                name: 'path测试',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: false,
                    icon: 'ic-system',
                    route: {
                        // eslint-disable-next-line no-template-curly-in-string
                        path: '/template/${apk?}?type=path测试&apk=${apk?}',
                        query: [
                            {
                                key: 'url',
                                // eslint-disable-next-line no-template-curly-in-string
                                value: 'https://www.baidu.com/s?wd=${kgName?}',
                                isReal: true
                            }
                        ]
                    }
                }
            }
        ]
    },
    {
        name: '文档',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
            isDefault: true,
            icon: 'ic-zsjm-gndy',
            boundary: true
        },
        children: [
            {
                name: 'README',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-zsjm-gndy',
                    boundary: true,
                    route: {
                        name: 'readMe'
                    }
                }
            },
            {
                name: 'interface',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-zsjm-gndy',
                    boundary: true,
                    route: {
                        name: 'interface'
                    }
                }
            }
        ]
    },
    {
        name: '一级菜单3',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
            isDefault: true,
            icon: 'path://M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
            boundary: true,
            route: {
                name: 'template',
                query: [{
                    key: 'type',
                    isReal: true,
                    value: '一级菜单3'
                }]
            }
        }
    },
    {
        name: '菜单管理',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
            isDefault: true,
            icon: 'ic-zsjm-gndy',
            boundary: true
        },
        children: [
            {
                name: '菜单编辑',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-zsjm-gndy',
                    boundary: true,
                    route: {
                        name: 'menuEditor'
                    }
                }
            },
            {
                name: '菜单树',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-zsjm-gndy',
                    boundary: true,
                    route: {
                        name: 'menuTree'
                    }
                }
            },
            {
                name: '菜单配置',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-zsjm-gndy',
                    boundary: true,
                    route: {
                        name: 'menuConfig'
                    }
                }
            }
        ]
    },
    {
        name: '一级导航跳转测试',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
            isDefault: false,
            icon: 'ic-system',
            target: '_blank',
            route: {
                path: 'https://www.baidu.com/s?wd=b',
                query: [
                    {
                        key: 'apk'
                    }
                ]
            }
        }
    }
]
export default menus


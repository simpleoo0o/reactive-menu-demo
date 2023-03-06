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
            boundary: true,
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
                        }
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
                                    value: '1-1-1'
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
                                            value: '1-1-1-1'
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
                                            value: '1-1-1-2'
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
                            value: '/a/b/c/:kgName/:apk/:page?'
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
            icon: 'ic-zsjm-gndy',
            boundary: true,
            route: {
                name: 'template',
                query: [{
                    key: 'type',
                    isReal: true,
                    value: '3'
                }]
            }
        },
        children: [
            {
                name: '3-1',
                enable: true,
                checked: true,
                type: 'menu',
                order: 1,
                config: {
                    isDefault: true,
                    icon: 'ic-zsjm-gndy',
                    boundary: true,
                    route: {
                        name: 'template',
                        query: [{
                            key: 'type',
                            isReal: true,
                            value: '3-1'
                        }]
                    }
                },
                children: [
                    {
                        name: '3-1-1',
                        enable: true,
                        checked: true,
                        type: 'menu',
                        order: 1,
                        config: {
                            isDefault: true,
                            icon: 'ic-zsjm-gndy',
                            boundary: false,
                            route: {
                                name: 'template',
                                query: [{
                                    key: 'type',
                                    isReal: true,
                                    value: '3-1-1'
                                }]
                            }
                        },
                    },
                    {
                        name: '3-1-2',
                        enable: true,
                        checked: true,
                        type: 'menu',
                        order: 1,
                        config: {
                            isDefault: true,
                            icon: 'ic-zsjm-gndy',
                            boundary: false,
                            route: {
                                name: 'template',
                                query: [{
                                    key: 'type',
                                    isReal: true,
                                    value: '3-1-2'
                                }]
                            }
                        },
                    }
                ]
            }
        ]
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
resetId(menus)
export default menus

function resetId (list, pid = 0) {
    const baseId = pid * 100
    list.forEach((item, i) => {
        item.id = baseId + i + 1
        item.pid = pid
        if (item.children) {
            resetId(item.children, item.id)
        }
    })
}

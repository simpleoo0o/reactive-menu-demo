// 配置说明参考node_modules/@plantdata/reactive-menu
// 导航使用参考node_modules/@plantdata/reactive-menu/README.md
const menus = [
  {
    name: '一级菜单1',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
      viewBox: '0 0 1024 1024',
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
          attributes: { popperClass: 'second-reactive-menu-item-sub-menu-popper' },
          icon: 'image://data:image/image/png;base64,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'
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
              route: {
                name: 'template',
                query: [
                  {
                    key: 'type',
                    required: true,
                    value: '1-1-2'
                  }
                ]
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
                  route: {
                    name: 'template',
                    query: [
                      {
                        key: 'type',
                        required: true,
                        value: '叶子菜单的详情页'
                      }
                    ]
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
              isDefault: false,
              route: {
                name: 'template',
                query: [
                  {
                    key: 'type',
                    required: true,
                    value: '菜单分组测试1'
                  }
                ]
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
                  isDefault: false,
                  route: {
                    name: 'template',
                    query: [
                      {
                        key: 'type',
                        required: true,
                        value: '叶子菜单1'
                      }
                    ]
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
                  isDefault: false,
                  route: {
                    name: 'template',
                    query: [
                      {
                        key: 'type',
                        required: true,
                        value: '叶子菜单2'
                      }
                    ]
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
          icon: 'path://M730.693067 914.972261l-16.194764-67.456928c49.604433-21.933066 13.293733-135.168893 85.054388-212.540332h-85.53258c-61.559229 27.767006-69.433455 100.005853-154.328445 97.933688-67.425049-1.625852-146.900532-30.285483-280.284176-97.933688H162.760562c86.202049 71.792534 224.208213 135.32829 310.410261 208.109087l51.931633 71.888173h-57.223623v109.027739h339.069892v-109.027739H730.693067zM449.739423 3.729896h108.995859V120.823138c179.83201 26.077395 320.42041 173.296722 336.392018 356.284798H321.743408c-4.271847-97.519255 30.699916-189.714642 87.477226-278.8496-126.752716 60.475328-205.813767 151.427415-227.523676 278.8496h-73.641543C124.154541 292.366489 267.357056 144.031381 449.739423 120.185548V3.729896zM45.507923 525.150276h923.420317v81.770804H45.507923v-81.770804z',
          viewBox: '0 0 1024 1024',
          route: {
            name: 'template',
            query: [
              {
                key: 'type',
                required: true,
                value: '普通菜单'
              }
            ]
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
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
          route: {
            name: 'template',
            query: [
              {
                key: 'type',
                required: true,
                value: 'query可选参数测试'
              },
              {
                key: 'url',
                required: true,
                // eslint-disable-next-line no-template-curly-in-string
                value: '/a/b/c/${kgName}/${apk?}/${page?}?kw=${kw}'
              }
            ]
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
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
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
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
          route: {
            // eslint-disable-next-line no-template-curly-in-string
            path: '/template/${apk?}?type=path测试&apk=${apk?}',
            query: [
              {
                key: 'url',
                // eslint-disable-next-line no-template-curly-in-string
                value: 'https://www.baidu.com/s?wd=${kgName?}',
                required: true
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
      isDefault: false,
      icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
      viewBox: '0 0 1024 1024',
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
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
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
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
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
      isDefault: false,
      icon: 'path://M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
      boundary: true,
      route: {
        name: 'template',
        query: [
          {
            key: 'type',
            required: true,
            value: '一级菜单3'
          }
        ]
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
      isDefault: false,
      icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
      viewBox: '0 0 1024 1024',
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
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
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
          isDefault: false,
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
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
          isDefault: false,
          icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
          viewBox: '0 0 1024 1024',
          boundary: true,
          route: {
            name: 'menuConfig'
          }
        }
      }
    ]
  },
  {
    name: '有children的一级导航',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: false,
      icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
      viewBox: '0 0 1024 1024'
    },
    children: [
      {
        name: '菜单1',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
          isDefault: false,
          boundary: true,
          route: {
            name: 'template',
            query: [
              {
                key: 'type',
                required: true,
                value: '菜单1'
              }
            ]
          }
        }
      },
      {
        name: '菜单2',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
          isDefault: false,
          boundary: true,
          route: {
            name: 'template',
            query: [
              {
                key: 'type',
                required: true,
                value: '菜单2'
              }
            ]
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
      icon: 'path://M142.622701 222.211956h128.317443V354.922124H142.622701zM342.103385 222.211956h568.977193V354.922124h-568.977193zM342.103385 462.493331h568.977193v132.710169h-568.977193zM342.103385 695.342113h568.977193v132.711975h-568.977193zM142.622701 462.493331h128.317443v132.710169H142.622701zM142.622701 695.342113h128.317443v132.711975H142.622701z',
      viewBox: '0 0 1024 1024',
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
  },
  {
    name: 'Naive UI示例',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'image://data:image/image/png;base64,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',
      viewBox: '0 0 1024 1024',
      route: {
        name: 'naiveHome'
      }
    }
  }
]
export default menus

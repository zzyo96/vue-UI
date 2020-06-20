module.exports = {
    base:'/vue-UI/',
    title: 'vue-UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            // { text: '文档', link: '/安装.md' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                  '/install/',
                  '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                  '/components/button',
                  '/components/tabs',
                  '/components/input',
                  '/components/grid',
                  '/components/layout',
                  '/components/toast',
                  '/components/popover'
                ]
            }
        ]
    }
}

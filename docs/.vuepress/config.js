module.exports = {
  title: '一个小小的博客',
  description: '世界奇奇怪怪 幸好我很可爱',
  base: '/blog/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  theme: 'reco',
  themeConfig: {
    // 博客配置
    type: 'blog',
    logo: '/computer.png',
    authorAvatar: '/avatar.jpg',

    sidebarDepth: 2,
    sidebar: 'auto',
    subSidebar: 'auto',

    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息

      ]
    },

    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ],

    lastUpdatedText: '上次更新',
    autoAddCategoryToNavbar: true
  },

  plugins: [
     // 更新刷新插件
     ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
      }
    }],
  // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "copy",
      tip: {
          content: "复制成功!"
      }
    }],
    ["@vuepress-reco/vuepress-plugin-bgm-player", {
      audios: [
        // 本地文件示例
        {
          name: 'TOMBOY',
          artist: '(G)I-DLE',
          url: '/bgm/TOMBOY - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: 'LIAR',
          artist: '(G)I-DLE',
          url: '/bgm/LIAR - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: 'ALREADY',
          artist: '(G)I-DLE',
          url: '/bgm/ALREADY - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: 'ESCAPE',
          artist: '(G)I-DLE',
          url: '/bgm/ESCAPE - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: 'MY BAG',
          artist: '(G)I-DLE',
          url: '/bgm/MY BAG - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: 'POLAROID',
          artist: '(G)I-DLE',
          url: '/bgm/POLAROID - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: 'VILLAIN DIES',
          artist: '(G)I-DLE',
          url: '/bgm/VILLAIN DIES - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
        {
          name: '말리지 마',
          artist: '(G)I-DLE',
          url: '/bgm/말리지 마 - (G)I-DLE.mp3',
          cover: '/bgm/i-never-die.webp'
        },
      ],
      autoShrink: true,
    }],
    ['@vuepress/last-updated', 
    {
      transformer: (timestamp, lang) => {
        return (new Date(timestamp)).toUTCString() 
        //或者用下面这段
        // const moment = require('moment')
        // moment.locale(lang)
        // return moment(timestamp).toLocaleString()
      }
    }],
  ],


  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './public/img/'
      }
    }
  }
}
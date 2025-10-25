export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "zac",
  profile: "https://satnaing.dev/", //个人站点
  desc: "我的博客.", // 网站描述
  title: "AstroPaper", //  网站名字
  ogImage: "astropaper-og.jpg", // 分享时的图
  lightAndDarkMode: true, // 支持亮色和暗色模式切换
  postPerIndex: 4, // 首页每页文章数量
  postPerPage: 4, // 文章列表页每页文章数量
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true, // 是否显示归档菜单
  showBackButton: true, // 文章详情显示后退按钮
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  }, // 是否允许用户对文章提建议
  dynamicOgImage: true, // 是否启用动态OG图片生成,文章很多时建议通过trade-off关闭
  dir: "ltr", // "rtl" | "auto" // 网站文字方向 rtl为从右到左 auto为根据语言自动判断
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

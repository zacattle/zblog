export const SITE = {
  website: "https://blog.xcoral.top/", // replace this with your deployed domain
  author: "zac",
  profile: "https://blog.xcoral.top/", //个人站点
  desc: "记录一些生活的日常.", // 网站描述
  title: "随记", //  网站名字
  ogImage: "blog-og.jpg", // 分享时的图
  lightAndDarkMode: true, // 支持亮色和暗色模式切换
  postPerIndex: 4, // 首页每页文章数量
  postPerPage: 4, // 文章列表页每页文章数量
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true, // 是否显示归档菜单
  showBackButton: true, // 文章详情显示后退按钮
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/zacattle/zblog/issues",
  }, // 是否允许用户对文章提建议
  dynamicOgImage: true, // 是否启用动态OG图片生成,文章很多时建议通过trade-off关闭
  dir: "ltr", // "rtl" | "auto" // 网站文字方向 rtl为从右到左 auto为根据语言自动判断
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

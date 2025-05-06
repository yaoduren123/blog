export const SITE = {
  website: "https://blog.ruanqian.tech", // replace this with your deployed domain
  author: "yaoduren123",
  profile: "",
  desc: "专注AI技术、智能体开发、提示词工程与UI设计的科技博客", 
  title: "若浅talk科技 | AI技术与智能体开发 | 提示词工程与UI设计",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false, // show back button in post detail
  editPost: {
    enabled: false,
    text: "",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;


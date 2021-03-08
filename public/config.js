// 配置
window.Config = {

  // 站点名
  SiteName: 'Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptimerobot-api.dayepao.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784861279-810b793078070ebfb858c8b9',//Resource
    'm784861262-0d79e0ca85372515fe4e4818',//Blog
    'm785008956-29efa80a603e6994d5bd705d',//Media
    'm787157193-e282228e31c2e6c4f0108728',//Api
    'm784923148-7b35994f936b0fafdc982b23',//Download
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Blog',
      url: 'https://blog.dayepao.com/'
    },
    {
      text: 'API',
      url: 'https://api.dayepao.com/img/'
    }
  ]
};

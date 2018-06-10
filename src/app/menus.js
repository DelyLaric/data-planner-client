const production = [
  {
    title: '用户管理',
    icon: 'users',
    route: '/users'
  },
  {
    title: '主数据表',
    icon: 'table',
    route: '/planner/master'
  },
  {
    title: '零件数据',
    icon: 'table',
    route: '/planner/part'
  },
  {
    title: '供应商数据',
    icon: 'table',
    route: '/planner/supplier'
  },
  {
    title: '工位信息',
    icon: 'table',
    route: '/planner/line'
  },
  {
    title: '个人设置',
    icon: 'user-settings',
    route: '/user/settings'
  }
  // {
  //   title: '用户设置',
  //   icon: 'table',
  //   route: '/user-settings'
  // }
]

export default Array.concat(
  production
)

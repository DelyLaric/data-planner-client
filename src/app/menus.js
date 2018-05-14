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
    title: '零件数据表',
    icon: 'table',
    route: '/planner/parts'
  },
  {
    title: '系统设置',
    icon: 'gear',
    children: [
      {
        title: '系统备份',
        icon: 'backup',
        route: '/'
      }
    ]
  }
]

export default Array.concat(
  production
)

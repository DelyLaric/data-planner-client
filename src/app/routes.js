import Homepage from './client/Homepage'
import Users from './Users'
import MasterPlanner from './planner/master'
import PartsPlanner from './planner/parts'

const production = [
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/planner/master',
    name: 'Master Planner',
    component: MasterPlanner
  },
  {
    path: '/planner/parts',
    name: 'Parts Planner',
    component: PartsPlanner
  }
]

export default [
  {
    path: '/',
    name: 'home page',
    component: Homepage,
    children: Array.concat(
      production
    )
  }
]

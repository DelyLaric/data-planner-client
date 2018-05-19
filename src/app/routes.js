import Homepage from './client/Homepage'
import Users from './Users'
import MasterPlanner from './planner/master'
import PartsPlanner from './planner/parts'
import Login from './client/Login'
import UserSettings from './UserSettings'

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
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home page',
    component: Homepage,
    children: Array.concat(
      [
        {
          path: '/user/settings',
          name: 'user settings',
          component: UserSettings
        }
      ],
      production
    )
  }
]

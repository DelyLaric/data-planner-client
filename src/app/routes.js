import Homepage from './client/Homepage'
import Login from './client/Login'

import Users from './Users'
import UserSettings from './UserSettings'

import MasterSchema from './planner/master'
import PartsSchema from './planner/part'
import SupplierSchema from './planner/supplier'
import LineSchema from './planner/line'
import Management from '@/components/management'

const production = [
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/planner/master',
    name: 'Master Planner',
    component: Management,
    props: { schema: MasterSchema }
  },
  {
    path: '/planner/part',
    name: 'Parts Planner',
    component: Management,
    props: { schema: PartsSchema }
  },
  {
    path: '/planner/supplier',
    name: 'Supplier Planner',
    component: Management,
    props: { schema: SupplierSchema }
  },
  {
    path: '/planner/line',
    name: 'Line Planner',
    component: Management,
    props: { schema: LineSchema }
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

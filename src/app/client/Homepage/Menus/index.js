import AppMenu from './component'
import menus from '@/app/menus'

export default {
  render (h) {
    return h(
      'div',
      {
        class: 'menu-list'
      },
      menus.map(menu => {
        return h(
          AppMenu,
          {
            props: {
              icon: menu.icon,
              route: menu.route,
              title: menu.title,
              children: menu.children,
              expanding: menu.expanding
            }
          }
        )
      })
    )
  }
}

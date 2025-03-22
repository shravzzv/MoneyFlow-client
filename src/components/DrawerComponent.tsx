import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { Drawer, DrawerSelectEvent } from '@progress/kendo-react-layout'
import {
  homeIcon,
  dollarIcon,
  qrCodeScannerIcon,
  starIcon,
  wrenchIcon,
} from '@progress/kendo-svg-icons'

interface NavigationItem {
  text: string
  id: string
  svgIcon: any
  route: string
  selected?: boolean
}
const items: NavigationItem[] = [
  {
    text: 'Home',
    id: '1',
    svgIcon: homeIcon,
    route: '/',
    selected: true,
  },
  {
    text: 'Incomes',
    id: '2',
    svgIcon: dollarIcon,
    route: '/incomes',
  },
  {
    text: 'Expenses',
    id: '3',
    svgIcon: qrCodeScannerIcon,
    route: '/expenses',
  },
  {
    text: 'Ai',
    id: '4',
    svgIcon: starIcon,
    route: '/ai',
  },
  {
    text: 'Settings',
    id: '5',
    svgIcon: wrenchIcon,
    route: '/settings',
  },
]

const DrawerComponent = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = React.useState(
    items.findIndex((x) => x.selected === true)
  )

  const onSelect = (e: DrawerSelectEvent) => {
    navigate(e.itemTarget.props.route)
    setSelected(e.itemIndex)
  }

  return (
    <div className='drawerNavigation'>
      <Drawer
        className='drawer'
        expanded={true}
        position={'start'}
        mode={'push'}
        mini={true}
        items={items.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))}
        onSelect={onSelect}
        width={150}
      ></Drawer>
    </div>
  )
}

export default DrawerComponent

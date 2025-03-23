import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BottomNavigation,
  BottomNavigationSelectEvent,
} from '@progress/kendo-react-layout'
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

const BottomNavigationComponent = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = React.useState(0)

  const onSelect = (ev: BottomNavigationSelectEvent) => {
    navigate(ev.itemTarget.route)
    setSelected(ev.itemIndex)
  }

  return (
    <BottomNavigation
      className='bottomNavigation'
      positionMode={'sticky'}
      items={items.map((item, index) => ({
        ...item,
        selected: index === selected,
      }))}
      onSelect={onSelect}
      themeColor='secondary'
      style={{ zIndex: '2' }}
    />
  )
}

export default BottomNavigationComponent

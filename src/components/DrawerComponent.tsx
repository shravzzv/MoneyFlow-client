import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { Drawer, DrawerSelectEvent } from '@progress/kendo-react-layout'
import { Button } from '@progress/kendo-react-buttons'
import {
  homeIcon,
  dollarIcon,
  qrCodeScannerIcon,
  starIcon,
  wrenchIcon,
  menuIcon,
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
  const [expanded, setExpanded] = React.useState(true)
  const [selected, setSelected] = React.useState(
    items.findIndex((x) => x.selected === true)
  )

  const handleClick = () => {
    setExpanded(!expanded)
  }

  const onSelect = (e: DrawerSelectEvent) => {
    navigate(e.itemTarget.props.route)
    setSelected(e.itemIndex)
    setExpanded(!expanded)
  }

  return (
    <div className='drawerNavigation'>
      <Button
        svgIcon={menuIcon}
        fillMode='flat'
        onClick={handleClick}
        style={{ marginLeft: '10px' }}
      />
      <Drawer
        className='drawer'
        expanded={expanded}
        position={'start'}
        mode={'push'}
        mini={true}
        items={items.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))}
        onSelect={onSelect}
      ></Drawer>
    </div>
  )
}

export default DrawerComponent

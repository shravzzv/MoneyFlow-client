import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout

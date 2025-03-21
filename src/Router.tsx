import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Ai from './pages/Ai'
import Settings from './pages/Settings'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/incomes',
      element: <Incomes />,
    },
    {
      path: '/expenses',
      element: <Expenses />,
    },
    {
      path: '/ai',
      element: <Ai />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}

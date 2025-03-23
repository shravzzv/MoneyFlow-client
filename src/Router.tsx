import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Ai from './pages/Ai'
import Settings from './pages/Settings'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Error from './pages/Error'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'incomes',
          element: <Incomes />,
        },
        {
          path: 'incomes/:id',
          element: <Income />,
        },
        {
          path: 'expenses',
          element: <Expenses />,
        },
        {
          path: 'expenses/:id',
          element: <Expense />,
        },
        {
          path: 'ai',
          element: <Ai />,
        },
        {
          path: 'settings',
          element: <Settings />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

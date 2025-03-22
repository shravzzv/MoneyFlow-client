import { describe, it, expect } from 'vitest'
import React from 'react'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from '../src/Layout'
import Home from '../src/pages/Home'
import Incomes from '../src/pages/Incomes'
import Income from '../src/pages/Income'
import Expense from '../src/pages/Expense'
import Expenses from '../src/pages/Expenses'
import Ai from '../src/pages/Ai'
import Settings from '../src/pages/Settings'
import Error from '../src/pages/Error'

describe('Router', () => {
  it('renders Home component for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('home')).toBeInTheDocument()
  })

  it('renders Incomes component for the /incomes path', () => {
    render(
      <MemoryRouter initialEntries={['/incomes']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='incomes' element={<Incomes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('incomes')).toBeInTheDocument()
  })

  it('renders Expenses component for the /expenses path', () => {
    render(
      <MemoryRouter initialEntries={['/expenses']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='expenses' element={<Expenses />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('expenses')).toBeInTheDocument()
  })

  it('renders Ai component for the /ai path', () => {
    render(
      <MemoryRouter initialEntries={['/ai']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='ai' element={<Ai />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('ai')).toBeInTheDocument()
  })

  it('renders Settings component for the /settings path', () => {
    render(
      <MemoryRouter initialEntries={['/settings']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('settings')).toBeInTheDocument()
  })

  it('renders Income component for the /incomes/:id path', () => {
    render(
      <MemoryRouter initialEntries={['/incomes/1']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='incomes/:id' element={<Income />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('income')).toBeInTheDocument()
  })

  it('renders Expense component for the /expenses/:id path', () => {
    render(
      <MemoryRouter initialEntries={['/expenses/1']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='expenses/:id' element={<Expense />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('expense')).toBeInTheDocument()
  })

  it('renders Error component for an unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <Route path='*' element={<Error />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('error')).toBeInTheDocument()
  })
})

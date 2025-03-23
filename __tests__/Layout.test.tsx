import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import '@testing-library/jest-dom/vitest'
import Layout from '../src/Layout'

describe('Layout', () => {
  it('should render Navbar', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render Outlet', () => {
    const MockChild = () => (
      <div data-testid='child-route'>Child Route Content</div>
    )

    render(
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<MockChild />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )

    expect(screen.getByTestId('child-route')).toBeInTheDocument()
  })
})

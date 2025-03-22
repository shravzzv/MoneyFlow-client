import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import '@testing-library/jest-dom/vitest'
import Home from '../src/pages/Home'

describe('Home Component', () => {
  it('should render the Home component and the FAB', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
    expect(screen.getByTestId('home')).toBeInTheDocument()

    const fab = screen.getByTestId('fab')
    expect(fab).toBeInTheDocument()
    expect(fab).toHaveClass('static-fab')
  })
})

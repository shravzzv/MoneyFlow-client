import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import '@testing-library/jest-dom/vitest'
import Navbar from '../src/components/Navbar'

describe('Navbar', () => {
  it('should contain a nav element', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument()
  })
})

import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { BrowserRouter } from 'react-router-dom'
import Entry from '../src/components/Entry'

describe('Entry Component', () => {
  const mockEntryProps = {
    id: 1,
    type: 'Income',
    amount: 1000,
    category: 'Salary',
    date: new Date(Date.now()),
  }

  it('should render the Entry component with correct data', () => {
    render(
      <BrowserRouter>
        <Entry {...mockEntryProps} />
      </BrowserRouter>
    )

    expect(screen.getByText('Income')).toBeInTheDocument()
    expect(screen.getByText('Salary')).toBeInTheDocument()
    expect(screen.getByText('0 seconds ago')).toBeInTheDocument()
    expect(screen.getByText('+$1000')).toBeInTheDocument()
  })

  it('should display the correct amount with a minus sign for expense type', () => {
    const expenseProps = { ...mockEntryProps, type: 'Expense', amount: 500 }
    render(
      <BrowserRouter>
        <Entry {...expenseProps} />
      </BrowserRouter>
    )

    expect(screen.getByText('-$500')).toBeInTheDocument()
  })
})

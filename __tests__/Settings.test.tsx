import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/vitest'
import Settings from '../src/pages/Settings'

afterEach(() => {
  cleanup()
})

describe('Settings Page', () => {
  it('renders the settings component', () => {
    render(<Settings />)
    const settingsElement = screen.getByTestId('settings')
    expect(settingsElement).toBeInTheDocument()
  })

  it('contains the issue link', () => {
    render(<Settings />)
    const issueLink = screen.getByText('issue.')
    expect(issueLink).toBeInTheDocument()
    expect(issueLink.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/shravzzv/MoneyFlow-client/issues'
    )
  })

  it('contains the github repository link', () => {
    render(<Settings />)
    const repoLink = screen.getByText('github repository')
    expect(repoLink).toBeInTheDocument()
    expect(repoLink.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/shravzzv/MoneyFlow-client'
    )
  })

  it('displays the current year', () => {
    render(<Settings />)
    const currentYear = new Date().getFullYear().toString()
    expect(
      screen.getByText(`©copyright ${currentYear} Sai Shravan Vadla`)
    ).toBeInTheDocument()
  })
})

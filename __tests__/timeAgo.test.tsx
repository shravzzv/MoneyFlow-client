import { describe, it, expect } from 'vitest'
import timeAgo from '../src/utils/timeAgo'

describe('timeAgo', () => {
  it('should return "seconds ago" for dates less than a minute ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 30 * 1000) // 30 seconds ago
    expect(timeAgo(date)).toBe('30 seconds ago')
  })

  it('should return "minutes ago" for dates less than an hour ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 5 * 60 * 1000) // 5 minutes ago
    expect(timeAgo(date)).toBe('5 minutes ago')
  })

  it('should return "hours ago" for dates less than a day ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 2 * 60 * 60 * 1000) // 2 hours ago
    expect(timeAgo(date)).toBe('2 hours ago')
  })

  it('should return "days ago" for dates less than a month ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    expect(timeAgo(date)).toBe('3 days ago')
  })

  it('should return "months ago" for dates less than a year ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 2 * 30 * 24 * 60 * 60 * 1000) // 2 months ago
    expect(timeAgo(date)).toBe('2 months ago')
  })

  it('should return "years ago" for dates more than a year ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 3 * 365 * 24 * 60 * 60 * 1000) // 3 years ago
    expect(timeAgo(date)).toBe('3 years ago')
  })
})

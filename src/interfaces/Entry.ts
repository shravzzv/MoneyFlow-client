export interface Entry {
  id: number
  type: string
  amount: number
  category: string
  notes: string
  date: Date | string
  createdAt: Date
  updatedAt: Date
}

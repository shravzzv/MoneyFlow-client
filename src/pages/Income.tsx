import '../styles/Income.css'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@progress/kendo-react-common'
import timeAgo from '../utils/timeAgo'
import { Button } from '@progress/kendo-react-buttons'

const Income: FC = () => {
  const { id } = useParams()
  const entries = [
    {
      id: 1,
      type: 'INCOME',
      amount: 500,
      category: 'Salary',
      notes: 'Monthly salary',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      type: 'EXPENSE',
      amount: 50,
      category: 'Groceries',
      notes: 'Weekly groceries',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      type: 'INCOME',
      amount: 200,
      category: 'Freelance',
      notes: 'Freelance project',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      type: 'EXPENSE',
      amount: 20,
      category: 'Transport',
      notes: 'Bus ticket',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      type: 'INCOME',
      amount: 100,
      category: 'Gift',
      notes: 'Birthday gift',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      type: 'EXPENSE',
      amount: 30,
      category: 'Entertainment',
      notes: 'Movie ticket',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      type: 'INCOME',
      amount: 150,
      category: 'Investment',
      notes: 'Stock dividends',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      type: 'EXPENSE',
      amount: 100,
      category: 'Utilities',
      notes: 'Electricity bill',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      type: 'INCOME',
      amount: 250,
      category: 'Bonus',
      notes: 'Performance bonus',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      type: 'EXPENSE',
      amount: 40,
      category: 'Dining',
      notes: 'Dinner at restaurant',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
  const entry = entries.find((entry) => entry.id === parseInt(id as string))

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this entry?'
    )
    if (confirmDelete) {
      console.log('Delete button clicked')
    } else {
      console.log('Delete cancelled')
    }
  }

  return (
    <div data-testid='income' className='income'>
      <div className='actions'>
        <Button onClick={handleDelete} themeColor={'secondary'}>
          Delete
        </Button>
      </div>

      <Typography.h5>INCOME</Typography.h5>
      <Typography.h3>$ {entry!.amount}</Typography.h3>
      <Typography.p>
        <b>Category:</b> {entry!.category}
      </Typography.p>
      <Typography.p>
        <b>Notes:</b> {entry!.notes ? entry!.notes : 'No notes provided'}
      </Typography.p>
      <Typography.p>
        <b>Date:</b> {timeAgo(entry!.date)}
      </Typography.p>
    </div>
  )
}

export default Income

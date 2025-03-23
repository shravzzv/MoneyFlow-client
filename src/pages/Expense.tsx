import '../styles/Expense.css'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@progress/kendo-react-common'
import timeAgo from '../utils/timeAgo'
import { Button } from '@progress/kendo-react-buttons'

const Expense: FC = () => {
  const { id } = useParams()

  const entry = {
    id: 2,
    type: 'EXPENSE',
    amount: 50,
    category: 'Groceries',
    notes: 'Weekly groceries',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return (
    <div data-testid='expense' className='expense'>
      <div className='actions'>
        <Button themeColor={'info'}>Update</Button>
        <Button themeColor={'secondary'}>Delete</Button>
      </div>

      <Typography.h5>Expense</Typography.h5>
      <Typography.h3>$ {entry.amount}</Typography.h3>
      <Typography.p>
        <b>Category:</b> {entry.category}
      </Typography.p>
      <Typography.p>
        <b>Notes:</b> {entry.notes ? entry.notes : 'No notes provided'}
      </Typography.p>
      <Typography.p>
        <b>Date:</b> {timeAgo(new Date())}
      </Typography.p>
    </div>
  )
}

export default Expense

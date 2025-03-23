import '../styles/Income.css'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@progress/kendo-react-common'
import timeAgo from '../utils/timeAgo'
import { Button } from '@progress/kendo-react-buttons'

const Income: FC = () => {
  const { id } = useParams()

  const entry = {
    id: 1,
    type: 'INCOME',
    amount: 500,
    category: 'Salary',
    notes: 'Monthly salary',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return (
    <div data-testid='income' className='income'>
      <div className='actions'>
        <Button themeColor={'info'}>Update</Button>
        <Button themeColor={'secondary'}>Delete</Button>
      </div>

      <Typography.h5>INCOME</Typography.h5>
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

export default Income

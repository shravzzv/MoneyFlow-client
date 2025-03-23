import '../styles/Entry.css'
import { FC } from 'react'
import { Typography } from '@progress/kendo-react-common'
import { Link } from 'react-router-dom'
import timeAgo from '../utils/timeAgo'

interface EntryProps {
  id: number
  type: string
  amount: number
  category: string
  date: Date
}

const Entry: FC<EntryProps> = ({ id, type, amount, category, date }) => {
  return (
    <Link to={`/${type.toLowerCase()}s/${id}`} className='entry'>
      <div className='textContainer'>
        <Typography.p className='type'>{type}</Typography.p>
        <Typography.p className='category'>{category}</Typography.p>
        <Typography.p className='date'>{timeAgo(date)}</Typography.p>
      </div>
      <div className='amountContainer'>
        <Typography.h2 className='amount'>
          {type.toLowerCase() === 'income' ? '+' : '-'}${amount}
        </Typography.h2>
      </div>
    </Link>
  )
}

export default Entry

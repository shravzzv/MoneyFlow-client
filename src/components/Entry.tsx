import '../styles/Entry.css'
import { FC } from 'react'
import { Typography } from '@progress/kendo-react-common'
import { Link } from 'react-router-dom'

interface EntryProps {
  id: number
  type: string
  amount: number
  category: string
  date: Date
}

const Entry: FC<EntryProps> = ({ id, type, amount, category, date }) => {
  const timeAgo = (date: Date): string => {
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    let interval = Math.floor(seconds / 31536000)
    if (interval > 1) return `${interval} years ago`

    interval = Math.floor(seconds / 2592000)
    if (interval > 1) return `${interval} months ago`

    interval = Math.floor(seconds / 86400)
    if (interval > 1) return `${interval} days ago`

    interval = Math.floor(seconds / 3600)
    if (interval > 1) return `${interval} hours ago`

    interval = Math.floor(seconds / 60)
    if (interval > 1) return `${interval} minutes ago`

    return `${Math.floor(seconds)} seconds ago`
  }

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

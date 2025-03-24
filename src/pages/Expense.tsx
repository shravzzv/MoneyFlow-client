import '../styles/Expense.css'
import { FC, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography } from '@progress/kendo-react-common'
import { Button } from '@progress/kendo-react-buttons'
import axios from 'axios'

const Expense: FC = () => {
  const [entry, setEntry] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id } = useParams()
  const root = 'https://moneyflow-server-production.up.railway.app/'
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${root}entries/${id}`)
        setEntry(res.data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this entry?'
    )
    if (confirmDelete) {
      await axios.delete(`${root}entries/${id}`)
      navigate('/')
    }
  }

  const formatDate = (dateString: string | Date): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return (
    <div data-testid='expense' className='expense'>
      <div className='actions'>
        <Button onClick={handleDelete} themeColor={'secondary'}>
          Delete
        </Button>
      </div>

      <Typography.h5>EXPENSE</Typography.h5>
      <Typography.h3>$ {entry?.amount}</Typography.h3>
      <Typography.p>
        <b>Category:</b> {entry?.category}
      </Typography.p>
      <Typography.p>
        <b>Notes:</b> {entry?.notes ? entry?.notes : 'No notes provided'}
      </Typography.p>
      <Typography.p>
        <b>Date: </b>
        {formatDate(entry?.date)}
      </Typography.p>
    </div>
  )
}

export default Expense

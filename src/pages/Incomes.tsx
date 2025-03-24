import '../styles/Incomes.css'
import { FC, useState, useEffect } from 'react'
import {
  Grid,
  GridColumn as Column,
  GridItemChangeEvent,
} from '@progress/kendo-react-grid'
import { Entry } from '../interfaces/Entry'
import axios from 'axios'

export interface EntryInterface {
  id: number
  type: string
  amount: number
  category: string
  notes: string
  date: Date | string
  createdAt: Date
  updatedAt: Date
}

const Incomes: FC = () => {
  const [allEntries, setAllEntries] = useState<EntryInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const root = 'https://moneyflow-server-production.up.railway.app/'
  const [data, setData] = useState<Entry[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`${root}entries`)
        setAllEntries(res.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const entries: Entry[] = allEntries
      .filter((entry) => entry.type === 'INCOME')
      .map((entry) => ({ ...entry, date: entry.date as Date }))

    setData(entries)
  }, [allEntries])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  const handleItemChange = (event: GridItemChangeEvent) => {
    const newData = data.map((item) =>
      item.id === event.dataItem.id
        ? { ...item, [event.field!]: event.value }
        : item
    )

    setData(newData)
  }

  const formatDate = (dateString: string | Date): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div data-testid='incomes' className='incomes'>
      <Grid
        data={data.map((item) => ({
          ...item,
          date: formatDate(item.date),
        }))}
        dataItemKey='id'
        autoProcessData={true}
        pageable={true}
        defaultSkip={0}
        defaultTake={10}
        filterable={true}
        sortable={true}
        onItemChange={handleItemChange}
        scrollable='scrollable'
      >
        <Column field='id' title='ID' />
        <Column field='amount' title='Amount $' />
        <Column field='category' title='Category' />
        {window.innerWidth > 425 && <Column field='notes' title='Notes' />}
        {window.innerWidth > 425 && <Column field='date' title='Date' />}
      </Grid>
    </div>
  )
}

export default Incomes

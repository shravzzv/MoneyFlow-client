import '../styles/Expenses.css'
import { FC, useState } from 'react'
import {
  Grid,
  GridColumn as Column,
  GridItemChangeEvent,
} from '@progress/kendo-react-grid'
import timeAgo from '../utils/timeAgo'
import { Entry } from '../interfaces/Entry'

const Expenses: FC = () => {
  const entries: Entry[] = [
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
    {
      id: 11,
      type: 'INCOME',
      amount: 300,
      category: 'Consulting',
      notes: 'Consulting fee',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      type: 'INCOME',
      amount: 400,
      category: 'Rental',
      notes: 'Rental income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      type: 'INCOME',
      amount: 350,
      category: 'Interest',
      notes: 'Bank interest',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      type: 'INCOME',
      amount: 450,
      category: 'Dividend',
      notes: 'Dividend income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      type: 'INCOME',
      amount: 500,
      category: 'Salary',
      notes: 'Monthly salary',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 16,
      type: 'INCOME',
      amount: 600,
      category: 'Bonus',
      notes: 'Year-end bonus',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      type: 'INCOME',
      amount: 700,
      category: 'Freelance',
      notes: 'Freelance project',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 18,
      type: 'INCOME',
      amount: 800,
      category: 'Gift',
      notes: 'Anniversary gift',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 19,
      type: 'INCOME',
      amount: 900,
      category: 'Investment',
      notes: 'Stock dividends',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 20,
      type: 'INCOME',
      amount: 1000,
      category: 'Rental',
      notes: 'Rental income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 21,
      type: 'INCOME',
      amount: 1100,
      category: 'Consulting',
      notes: 'Consulting fee',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 22,
      type: 'INCOME',
      amount: 1200,
      category: 'Interest',
      notes: 'Bank interest',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 23,
      type: 'INCOME',
      amount: 1300,
      category: 'Dividend',
      notes: 'Dividend income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 24,
      type: 'INCOME',
      amount: 1400,
      category: 'Salary',
      notes: 'Monthly salary',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 25,
      type: 'INCOME',
      amount: 1500,
      category: 'Bonus',
      notes: 'Performance bonus',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 26,
      type: 'INCOME',
      amount: 1600,
      category: 'Freelance',
      notes: 'Freelance project',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 27,
      type: 'INCOME',
      amount: 1700,
      category: 'Gift',
      notes: 'Holiday gift',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 28,
      type: 'INCOME',
      amount: 1800,
      category: 'Investment',
      notes: 'Stock dividends',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 29,
      type: 'INCOME',
      amount: 1900,
      category: 'Rental',
      notes: 'Rental income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 30,
      type: 'INCOME',
      amount: 2000,
      category: 'Consulting',
      notes: 'Consulting fee',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 31,
      type: 'INCOME',
      amount: 2100,
      category: 'Interest',
      notes: 'Bank interest',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 32,
      type: 'INCOME',
      amount: 2200,
      category: 'Dividend',
      notes: 'Dividend income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 33,
      type: 'INCOME',
      amount: 2300,
      category: 'Salary',
      notes: 'Monthly salary',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 34,
      type: 'INCOME',
      amount: 2400,
      category: 'Bonus',
      notes: 'Year-end bonus',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 35,
      type: 'INCOME',
      amount: 2500,
      category: 'Freelance',
      notes: 'Freelance project',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 36,
      type: 'INCOME',
      amount: 2600,
      category: 'Gift',
      notes: 'Anniversary gift',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 37,
      type: 'INCOME',
      amount: 2700,
      category: 'Investment',
      notes: 'Stock dividends',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 38,
      type: 'INCOME',
      amount: 2800,
      category: 'Rental',
      notes: 'Rental income',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 39,
      type: 'INCOME',
      amount: 2900,
      category: 'Consulting',
      notes: 'Consulting fee',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 40,
      type: 'INCOME',
      amount: 3000,
      category: 'Interest',
      notes: 'Bank interest',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
    .filter((entry) => entry.type === 'EXPENSE')
    .map((entry) => ({ ...entry, date: timeAgo(entry.date) }))

  const [data, setData] = useState<Entry[]>(entries)

  const handleItemChange = (event: GridItemChangeEvent) => {
    const newData = data.map((item) =>
      item.id === event.dataItem.id
        ? { ...item, [event.field!]: event.value }
        : item
    )

    setData(newData)
  }

  return (
    <div data-testid='expenses' className='expenses'>
      <Grid
        data={data}
        dataItemKey='id'
        autoProcessData={true}
        pageable={true}
        defaultSkip={0}
        defaultTake={10}
        filterable={true}
        sortable={true}
        editable={{ mode: 'incell' }}
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

export default Expenses

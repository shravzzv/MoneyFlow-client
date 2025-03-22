import '../styles/Home.css'
import { Typography } from '@progress/kendo-react-common'
import FAB from '../components/FAB'
import Entry from '../components/Entry'

const Home = () => {
  const income: number = 1000
  const expenses: number = 99.99
  const netWorth: number = income - expenses

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
  const formattedNetWorth =
    netWorth < 0 ? `-$${Math.abs(netWorth)}` : `$${netWorth}`

  return (
    <div data-testid='home' className='home'>
      <FAB themeColor='secondary' tooltip='Add a transaction' testId='fab' />

      <div className='card'>
        <div className='netWorth'>
          <Typography.h6>NET WORTH</Typography.h6>
          <Typography.h4 className='amount'>{formattedNetWorth}</Typography.h4>
        </div>
        <div>
          <Typography.h6 className='income'>
            INCOME <span className='amount'>${income}</span>
          </Typography.h6>
          <Typography.h6 className='expense'>
            EXPENSES <span className='amount'>${expenses}</span>
          </Typography.h6>
        </div>
      </div>

      <Typography.h5>Recent transactions</Typography.h5>

      <div className='entries'>
        {entries.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            type={entry.type}
            amount={entry.amount}
            category={entry.category}
            date={entry.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

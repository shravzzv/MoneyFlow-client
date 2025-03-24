import '../styles/Home.css'
import { Typography } from '@progress/kendo-react-common'
import FAB from '../components/FAB'
import Entry from '../components/Entry'
import { Dialog } from '@progress/kendo-react-dialogs'
import {
  RadioButton,
  RadioButtonChangeEvent,
} from '@progress/kendo-react-inputs'
import { Button } from '@progress/kendo-react-buttons'
import { FC, useCallback, useState, useEffect } from 'react'
import { TextArea, TextBox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { FloatingLabel } from '@progress/kendo-react-labels'
import { DatePicker } from '@progress/kendo-react-dateinputs'
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

const Home: FC = () => {
  const [entries, setEntries] = useState<EntryInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const root = 'https://moneyflow-server-production.up.railway.app/'
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState('INCOME')
  const [textBoxValue, setTextBoxValue] = useState<any>(null)
  const [textAreaValue, setTextAreaValue] = useState<any>(null)
  const [categoryValue, setCategoryValue] = useState<string>('Salary')
  const [dateValue, setDateValue] = useState<Date | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`${root}entries`)
        setEntries(res.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const toggleDialog = () => {
    setVisibleDialog(!visibleDialog)
  }

  const handleChange = useCallback(
    (e: RadioButtonChangeEvent) => {
      setSelectedValue(e.value)
    },
    [setSelectedValue]
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newEntry = {
      type: selectedValue,
      amount: parseFloat(textBoxValue),
      category: categoryValue,
      notes: textAreaValue,
      date: dateValue ? dateValue.toISOString() : new Date().toISOString(),
    }

    try {
      const response = await axios.post(`${root}entries`, newEntry)
      setEntries([response.data as EntryInterface, ...entries])
      toggleDialog()
      setTextBoxValue(null)
      setTextAreaValue(null)
      setDateValue(null)
    } catch (postError) {
      console.error('Error submitting entry:', postError)
      setError(true)
    }
  }

  if (isLoading) {
    return <div data-testid='home'>Loading...</div>
  }

  if (error) {
    return <div data-testid='home'>Error fetching data</div>
  }

  const income: number = parseFloat(
    entries
      .filter((entry) => entry.type === 'INCOME')
      .reduce((acc, entry) => acc + entry.amount, 0)
      .toFixed(2)
  )
  const expenses: number = parseFloat(
    entries
      .filter((entry) => entry.type === 'EXPENSE')
      .reduce((acc, entry) => acc + entry.amount, 0)
      .toFixed(2)
  )
  const netWorth: number = parseFloat((income - expenses).toFixed(2))
  const formattedNetWorth: string =
    netWorth < 0 ? `-$${Math.abs(netWorth)}` : `$${netWorth}`
  const categories = Array.from(new Set(entries.map((entry) => entry.category)))

  return (
    <div data-testid='home' className='home'>
      <FAB
        themeColor='secondary'
        tooltip='Add a transaction'
        testId='fab'
        onClick={toggleDialog}
      />

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

      {entries.length === 0 && (
        <Typography.h6 className='noEntries'>No entries yet</Typography.h6>
      )}

      <div className='entries'>
        {entries.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            type={entry.type}
            amount={entry.amount}
            category={entry.category}
            date={new Date(entry.date)}
          />
        ))}
      </div>

      {visibleDialog && (
        <Dialog
          title={'Enter a transaction'}
          onClose={toggleDialog}
          className='dialog-title'
        >
          <form onSubmit={handleSubmit}>
            <div className='formControl radio'>
              <RadioButton
                name={'type'}
                value={'INCOME'}
                checked={selectedValue === 'INCOME'}
                label={'INCOME'}
                onChange={handleChange}
              />
              <br />
              <RadioButton
                name={'type'}
                value={'EXPENSE'}
                checked={selectedValue === 'EXPENSE'}
                label={'EXPENSE'}
                onChange={handleChange}
              />
              <br />
            </div>

            <div className='formControl'>
              <FloatingLabel
                label={'amount'}
                editorId={'amount'}
                editorValue={textBoxValue}
              >
                <TextBox
                  id={'amount'}
                  value={textBoxValue}
                  onChange={(e) => setTextBoxValue(e.value)}
                  type='number'
                  required
                  min={0}
                  style={{ width: '260px' }}
                />
              </FloatingLabel>
            </div>

            <div className='formControl'>
              <div style={{ marginTop: '10px' }}>Category</div>
              <DropDownList
                style={{ width: '260px' }}
                data={categories}
                value={categoryValue} // Use categoryValue state
                onChange={(e) => setCategoryValue(e.value)} // Update categoryValue state
              />
            </div>

            <div className='formControl'>
              <FloatingLabel
                className={'k-textarea-container'}
                label={'Notes'}
                editorId={'notes'}
                editorValue={textAreaValue}
                style={{ width: '260px', resize: 'vertical' }}
              >
                <TextArea
                  id={'notes'}
                  value={textAreaValue}
                  onChange={(e) => setTextAreaValue(e.value)}
                  style={{ marginBottom: '20px' }}
                />
              </FloatingLabel>
            </div>

            <div className='formControl'>
              <DatePicker
                placeholder='Choose a date...'
                width={260}
                required
                value={dateValue} // Use dateValue state
                onChange={(e) => setDateValue(e.value)} // Update dateValue state
              />
            </div>

            <Button type='submit' themeColor={'secondary'}>
              Submit
            </Button>
          </form>
        </Dialog>
      )}
    </div>
  )
}

export default Home

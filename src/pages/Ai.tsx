import '../styles/Ai.css'
import { FC, useState, useEffect, useRef } from 'react'
import { TextArea } from '@progress/kendo-react-inputs'
import { FloatingLabel } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'
import timeAgo from '../utils/timeAgo'

const chat = [
  {
    id: 9,
    message: "What is the last transaction I've made?",
    isUser: true,
    timestamp: '2025-03-21T09:22:06.780Z',
  },
  {
    id: 10,
    message:
      'The last transaction you made was an expense of 10,000.659 recorded on 2025-03-20.',
    isUser: false,
    timestamp: '2025-03-21T09:22:09.408Z',
  },
  {
    id: 11,
    message:
      'Give me inforamtion about all of my transactions? Have I managed my money well?',
    isUser: true,
    timestamp: '2025-03-21T09:22:37.316Z',
  },
  {
    id: 12,
    message:
      'You have recorded two income and three expense transactions. Your income consists of a single monthly salary of 100.5 on 2025-03-20. However, you have incurred expenses totaling 20,001.318 (two entries of 10,000.659 each) on the same date. This indicates a severe imbalance as your total expenses significantly exceed your income, which suggests that you are not managing your money well. To improve your financial health, consider tracking your expenses carefully, creating a budget that prioritizes essential spending, reducing unnecessary expenditures, and exploring possible income-generating opportunities or debt management strategies.',
    isUser: false,
    timestamp: '2025-03-21T09:22:41.240Z',
  },
  {
    id: 13,
    message: 'Help me better manage me money please.',
    isUser: true,
    timestamp: '2025-03-21T09:44:59.024Z',
  },
  {
    id: 14,
    message:
      "To better manage your money, start by creating a detailed budget that categorizes your income and expenses, ensuring you track every dollar coming in and going out. Prioritize essential expenses such as housing, utilities, and food while looking for areas where you can cut back on discretionary spending, like dining out or entertainment subscriptions. Since your expenses currently exceed your income, consider ways to increase your income, such as taking on freelance work or part-time jobs. Additionally, set up an emergency fund with at least three to six months' worth of living expenses to cushion against unforeseen circumstances, and consider speaking to a financial advisor for personalized strategies. Regularly review your budget and financial goals to ensure you stay on track, and utilize financial apps to monitor your spending in real-time.",
    isUser: false,
    timestamp: '2025-03-21T09:45:01.252Z',
  },
  {
    id: 15,
    message: 'How much do I have left?.',
    isUser: true,
    timestamp: '2025-03-21T09:45:47.908Z',
  },
  {
    id: 16,
    message:
      'You currently have a negative balance of 19,900.818. This is calculated by subtracting your total income of 100.5 from your total expenses of 20,001.318. To address this deficit, it’s essential to implement strict budgeting, reduce expenses, and explore ways to increase your income immediately.',
    isUser: false,
    timestamp: '2025-03-21T09:45:50.953Z',
  },
]

const Ai: FC = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div data-testid='ai' className='ai'>
      <h2>Chat with AI about your finances</h2>
      <div className='container'>
        <div className='chatContainer'>
          {chat.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isUser ? 'user' : 'ai'}`}
            >
              <p className='message'>{message.message}</p>
              <span className='time'>
                {timeAgo(new Date(message.timestamp))}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className='inputsContainer'>
          <form onSubmit={handleSubmit}>
            <div className='formControl'>
              <FloatingLabel
                className={'k-textarea-container'}
                label={'Enter your message'}
                editorId={'notes'}
                editorValue={textAreaValue}
              >
                <TextArea
                  id={'notes'}
                  value={textAreaValue}
                  onChange={(e) => setTextAreaValue(e.value)}
                  required
                />
              </FloatingLabel>
            </div>

            <Button type='submit' themeColor={'secondary'}>
              Submit
            </Button>
          </form>
        </div>
        <div className='guidelines'>
          AI subjected to limits: 15 per mintue and 150 per day!
        </div>
      </div>
    </div>
  )
}

export default Ai

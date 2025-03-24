import '../styles/Ai.css'
import { FC, useState, useEffect, useRef } from 'react'
import { TextArea } from '@progress/kendo-react-inputs'
import { FloatingLabel } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'
import timeAgo from '../utils/timeAgo'
import axios from 'axios'
import { Chat } from '../interfaces/Chat'

const Ai: FC = () => {
  const [chats, setChats] = useState<Chat[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const root = 'https://moneyflow-server-production.up.railway.app/'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`${root}ai`)
        setChats(res.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const [textAreaValue, setTextAreaValue] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chats])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${root}ai`, {
        query: textAreaValue,
      })
      console.log(res.data)
      setChats((prevChats) => [
        ...prevChats,
        {
          id: res.data.id,
          message: textAreaValue,
          isUser: true,
          timestamp: new Date(),
        },
        {
          id: res.data.id,
          message: res.data.message,
          isUser: false,
          timestamp: new Date(),
        },
      ])
      setTextAreaValue('')
    } catch (error) {
      setError(true)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return (
    <div data-testid='ai' className='ai'>
      <h2>Chat with AI about your finances</h2>
      <div className='container'>
        <div className='chatContainer'>
          {chats.map((message: Chat) => (
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

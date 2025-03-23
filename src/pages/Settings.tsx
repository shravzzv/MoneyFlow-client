import '../styles/Settings.css'
import { FC } from 'react'

const Settings: FC = () => {
  return (
    <div data-testid='settings' className='settings'>
      <p>
        Submit an{' '}
        <a
          href='https://github.com/shravzzv/MoneyFlow-client/issues'
          target='_blank'
        >
          issue.
        </a>
      </p>
      <p>
        Star the{' '}
        <a href='https://github.com/shravzzv/MoneyFlow-client' target='_blank'>
          github repository
        </a>
      </p>
      <p>&copy;copyright {new Date().getFullYear()} Sai Shravan Vadla</p>
    </div>
  )
}

export default Settings

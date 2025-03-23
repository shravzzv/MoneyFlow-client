import '../styles/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div data-testid='error'>
      <h1>404</h1>
      <p>OOPS! There&apos;s nothing here.</p>
      <Link to={'/'}>Click here to go to home.</Link>
    </div>
  )
}

export default Error

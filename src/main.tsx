import 'normalize.css'
import '@progress/kendo-theme-material/dist/all.css'
import './styles/main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)

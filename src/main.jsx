import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './assets/routes/AppRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)

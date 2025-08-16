import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './Hello'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
  </StrictMode>
)

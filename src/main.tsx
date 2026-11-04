import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { prefersReducedMotion } from './lib/smooth'
import './styles/global.css'

document.documentElement.dataset.motion = prefersReducedMotion() ? 'reduced' : 'full'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

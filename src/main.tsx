import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store.ts'
import { Provider } from 'react-redux'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)

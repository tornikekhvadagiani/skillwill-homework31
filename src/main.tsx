import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore()}>
      <App />
  </Provider>,
)
 
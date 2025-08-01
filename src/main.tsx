import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Principal } from './Principal'
import { store } from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Principal />
    </Provider>
  </StrictMode>,
)

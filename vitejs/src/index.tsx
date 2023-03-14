import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { setupStore } from './store'

import App from './App'

import GlobalStyle from './styles/global'

const store = setupStore()

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <Provider store={store}>
        <GlobalStyle />
        <App />
  </Provider>,
)
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import GlobalStyle from 'styles/global'
import { ApolloProvider } from '@apollo/client'
import client from 'graphqlDir/client'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
,
)

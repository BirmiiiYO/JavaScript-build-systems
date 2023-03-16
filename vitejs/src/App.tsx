import React from 'react'

import { Header } from 'components/Header'

import Rin from 'assets/png/rin.png'
import { ErrorBoundary } from 'components/ErrorBoundary'
import { Routing } from 'components/Routes'

const App = () => {

  return (
    <>
    <Header/>
    <ErrorBoundary>
      <Routing/>
    </ErrorBoundary>
    {/* <img src={Rin} alt='google fonts'/>
    <img src='https://media.tenor.com/9vhnGwz0ivoAAAAM/bluelock-itoshi-rin.gif' alt='google fonts'/> */}
    </>
  )
}

export default App

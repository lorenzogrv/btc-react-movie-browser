import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Movies from './containers/Movies/Movies'
import Debugger from './containers/Debugger'

import './App.scss'

function App () {
  const [language, setLanguage] = React.useState('es-ES')

  React.useEffect(() => {
    console.log('App: componentDidMount')
  })

  return (
    <>
      <BrowserRouter>
        <Header {...{ language, setLanguage }} />
        <main>
          <Switch>
            <Route path='/' exact>
              <h1 className='welcome'>Welcome!</h1>
            </Route>
            <Route path='/uno' component={Movies} exact />
            <Route path='/dos' component={Debugger} exact />
            <Route path='/tres' component={Debugger} exact />
            <Route component={Debugger} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

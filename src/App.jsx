import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import axios from './lib/axios'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import MovieList from './containers/Movies/MovieList'
import Debugger from './containers/Debugger'

import './App.scss'

export default function App (props) {
  const [language, setLanguage] = React.useState('es-ES')

  const [configuration, setConfiguration] = React.useState(null)

  // https://developers.themoviedb.org/3/configuration/get-api-configuration
  React.useEffect(() => {
    console.log('App: Load configuration values')
    axios.get('/configuration')
      .then(res => setConfiguration(res.data))
      .catch(console.error)
  }, [])

  const imageUrlFactory = (key) => {
    if (!configuration) return () => ''

    const base = configuration.images.secure_base_url
    const allowed = configuration.images[key]

    return (file, size) => {
      if (!file) throw new Error('missing image file path')
      if (!size) size = allowed[2]

      if (allowed.indexOf(size) < 0) {
        throw new Error(`Size ${size} must be one of: ${allowed.join(', ')}`)
      }

      return base + size + file
    }
  }

  const renderMovieList = routeProps => (
    <MovieList
      {...routeProps} {...{
        ...routeProps,
        language,
        posterUrl: imageUrlFactory('poster_sizes'),
        backdropUrl: imageUrlFactory('backdrop_sizes')
      }}
    />
  )

  return (
    <BrowserRouter>
      <>
        <Header {...{ language, setLanguage }}>
          <NavLink to='/movie/top_rated'>Top Rated</NavLink>
          <NavLink to='/movie/popular'>Popular</NavLink>
          <NavLink to='/movie/upcoming'>Upcoming</NavLink>
        </Header>
        <main>
          <Switch>
            <Route exact path='/'>
              <h1 className='welcome'>Welcome!</h1>
            </Route>
            <Route
              exact
              path='/movie/top_rated'
              render={renderMovieList}
            />
            <Route
              exact
              path='/movie/popular'
              render={renderMovieList}
            />
            <Route
              exact
              path='/movie/upcoming'
              render={renderMovieList}
            />
            <Route component={Debugger} />
          </Switch>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  )
}

import React from 'react'
import axios from '../../lib/axios'

import MovieItem from './MovieItem'

import './MovieList.scss'

export default function MovieList (props) {
  const [data, setData] = React.useState(null)
  // const [list, setList] = React.useState([])
  // const [pager, setPager] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  // Estrategia Carga: https://www.robinwieruch.de/react-hooks-fetch-data
  React.useEffect(() => {
    let ignore = false
    console.log(props.location.pathname, 'running load')

    // https://developers.themoviedb.org/3/movies/get-top-rated-movies
    // popular, top_rated, upcoming
    setLoading(true)
    axios
      .get(props.location.pathname)
      .then(res => !ignore && setData(res.data))
      .catch(console.error)
      .finally(setLoading(false))

    return () => { ignore = true }
  }, [props.location])

  return (
    <section className='movies'>
      {
        !loading && data
          ? data.results.map(item =>
            <MovieItem
              key={item.id}
              item={item}
              {...props}
            />
            )
          : <div className='loading'>Cargando...</div>
      }
    </section>
  )
}

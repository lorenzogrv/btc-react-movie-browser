import React from 'react'
import axios from '../../lib/axios'

export default function Movies (props) {
  React.useEffect(() => {
    console.log('Movies componentDidMount?', props)
    axios
      // popular, top_rated, upcoming
      // https://developers.themoviedb.org/3/movies/get-top-rated-movies
      .get(`/movie/${props.match.params.movie || 'top_rated'}`)
      .then(res => console.log(res.data))
      .catch(console.error)
  }, [props])

  return (
    <section className='movies'>
      Este es el componente movies <code>{props.location.pathname}</code>
      <pre>{JSON.stringify(props, null, 4)}</pre>
      {props.children}
    </section>
  )
}

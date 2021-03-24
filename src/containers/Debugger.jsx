import React from 'react'
import axios from '../lib/axios'

export default function Debugger (props) {
  const [responseData, setResponseData] = React.useState(null)

  React.useEffect(() => {
    console.log('Debugger componentDidMount?', props)
    axios
      // popular, top_rated, upcoming
      // https://developers.themoviedb.org/3/movies/get-top-rated-movies
      .get(props.location.pathname || '/configuration')
      .then(res => setResponseData(res.data))
      .catch(console.error)
  }, [props])

  return (
    <section className='debug'>
      <dl>
        <dt>pathname</dt>
        <dd>
          <code>{props.location.pathname}</code>
        </dd>
        <dt>props</dt>
        <dd>
          <pre>{JSON.stringify(props, null, 4)}</pre>
        </dd>
        <dt>responseData</dt>
        <dd>
          <pre>{JSON.stringify(responseData, null, 4)}</pre>
        </dd>
      </dl>
      {props.children}
    </section>
  )
}

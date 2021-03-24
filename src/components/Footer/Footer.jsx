import tmdb from './logo-tmdb-alt-long.svg'

import './Footer.scss'

export default function Footer (props) {
  return (
    <footer>
      <p>
        Built with data owned by
        <a
          target='_blank'
          href='https://themoviedb.org'
          rel='noreferrer'
        >
          <img src={tmdb} alt='The Movie Database Logo' />
        </a>
      </p>
      <p>
        This app uses the TMDb API but is not endorsed or certified by TMDb
      </p>
    </footer>
  )
}

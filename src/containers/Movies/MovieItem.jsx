import React from 'react'

import './MovieItem.scss'

export default function MovieItem ({ item, ...props }) {
  return (
    <article
      className='movie'
      style={{
        backgroundImage: `url(${props.backdropUrl(item.backdrop_path)})`,
        backgroundSize: 'cover'
      }}
    >
      <figure>
        <img alt='Poster' src={props.posterUrl(item.poster_path)} />
        <legend>{item.title}</legend>
      </figure>
      <dl>
        <dt>ID pelicula</dt>
        <dd>{item.id}</dd>
        <dt>Titulo</dt>
        <dd>{item.title}</dd>
        <dt>Fecha Publicación</dt>
        <dd>{item.release_date}</dd>
        <dt>Popularidad</dt>
        <dd>{item.popularity}</dd>
        <dt>Puntuación</dt>
        <dd>{item.vote_average}</dd>
        <dt>Total de votos</dt>
        <dd>{item.vote_count}</dd>
      </dl>
    </article>
  )
}

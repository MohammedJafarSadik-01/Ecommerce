import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({data}) => {
  return (
    <div class="card"> 
				<img src={data.image} alt="Image 1"/> 
				<h3>{data.name}</h3> 
				<p>{data.season}</p>
				<h4>{data.language} {data.quality}</h4>
				<Link to={`/movie/:${data.id}`} class="btn btn-primary">Download</Link> 
			</div> 
  )
}

export default MovieCard
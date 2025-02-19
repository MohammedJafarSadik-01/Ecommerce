import React from 'react'
import movies from '../data'

const Movies = () => {
  return (
    <div id="data-container"> 
		<h1 class="text-white">MOVIES AND WEBSERIES</h1> 
		<div class="card-container p-3">
            {movies.map((movie) => <MovieCard key={movie.id} data={movie} />)}
			<div class="card"> 
				<img src="image1.jpg" alt="Image 1"/> 
				<h3>SQUID GAME</h3> 
				<p>SEASON 1</p>
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="squid.html" class="btn btn-primary">Download</a> 
			</div> 
			<div class="card"> 
				<img src= "image2.jpg"
					alt="Image 2"/> 
				<h3>ALL OF US ARE DEAD</h3> 
				<p>SEASON 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="allofus.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image3.jpg"
					alt="Image 3"/> 
				<h3>ALICE IN BORDERLAND</h3> 
				<p>SEASON 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="alice.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image4.jpg"
					alt="Image 4"/> 
				<h3>BANK UNDER SEIGE</h3> 
				<p>SEASON 1</p>
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="bank.html" class="btn btn-primary">download</a> 
			</div> 
			<div class="card"> 
				<img src="image5.jpg" alt="image 5"/> 
				<h3>DARK</h3> 
				<p>SEASON 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="dark.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image6.jpg"
					alt="Image 6"/> 
				<h3>MONEY HEIST</h3> 
				<p>SEASON 1</p>
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4> 
				<a href="money.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image7.jpg"
					alt="Image 7"/> 
				<h3>KILLER PARADOX</h3> 
				<p>SEASON 1</p>
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4> 
				<a href="killer.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image8.jpg"
					alt="Image 8"/> 
				<h3>SEOUL VIBE</h3> 
				<p>PART1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="seoul.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image9.jpg"
					alt="Image 9"/> 
				<h3>THE VILLAINESS</h3> 
				<p>PART 1</p>
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4> 
				<a href="villain.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image10.jpg"
					alt="Image 10"/> 
				<h3>THE GANGSTER THE COP THE DEVIL</h3> 
				<p>PART 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="cop.html" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image11.jpg"
					alt="Image 11"/> 
				<h3>outlaw</h3> 
				<p>PART 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="#" class="btn btn-primary">download</a>
			</div> 
			<div class="card"> 
				<img src= "image12.jpg"
					alt="Image 12"/> 
				<h3>bad land hunters</h3> 
				<p>PART 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="#" class="btn btn-primary">download</a>
			</div>  
			<div class="card"> 
				<img src= "image12.jpg"
					alt="Image 12"/> 
				<h3>bad land hunters</h3> 
				<p>PART 1</p> 
				<h4>hindi-english dubbed 480p,720p,1080p,4k</h4>
				<a href="#" class="btn btn-primary">download</a>
			</div>
			</div> 
			</div>
  )
}

export default Movies
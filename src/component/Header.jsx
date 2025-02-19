import React from 'react'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#">DOWNLOAD</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#">HOME</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">MOVIES</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">WEBSERIES</a>
			  </li>
			</ul>
			<span class="navbar-text">
			  CINEMA 
			</span>
		  </div>
		</div>
	  </nav>
  )
}

export default Header
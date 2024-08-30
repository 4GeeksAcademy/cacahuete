import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
	  <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
		<div className="container-fluid">
		  <Link className="navbar-brand" to="/">Navbar</Link>
		  <button 
			className="navbar-toggler" 
			type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarColor03" 
			aria-controls="navbarColor03" 
			aria-expanded="false" 
			aria-label="Toggle navigation"
		  >
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarColor03">
			<ul className="navbar-nav me-auto">
			  <li className="nav-item">
				<Link className="nav-link active" to="/">Home
				  <span className="visually-hidden">(current)</span>
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link" to="/features">Features</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link" to="/pricing">Pricing</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link" to="/about">About</Link>
			  </li>
			  <li className="nav-item dropdown">
				<a 
				  className="nav-link dropdown-toggle" 
				  data-bs-toggle="dropdown" 
				  href="#" 
				  role="button" 
				  aria-haspopup="true" 
				  aria-expanded="false"
				>
				  Dropdown
				</a>
				<div className="dropdown-menu">
				  <Link className="dropdown-item" to="/action">Action</Link>
				  <Link className="dropdown-item" to="/another-action">Another action</Link>
				  <Link className="dropdown-item" to="/something-else">Something else here</Link>
				  <div className="dropdown-divider"></div>
				  <Link className="dropdown-item" to="/separated-link">Separated link</Link>
				</div>
			  </li>
			</ul>
			<form className="d-flex">
			  <input className="form-control me-sm-2" type="search" placeholder="Search" />
			  <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
			</form>
		  </div>
		</div>
	  </nav>
	);
  };














// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

import React from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-5 text-white bg-dark">
	  <div className="container">
		<div className="row">
		  <div className="col-md-4 mb-3">
			<h5>About Us</h5>
			<p>
			  YourCompanyName offers innovative solutions with a focus on
			  delivering quality and results.
			</p>
		  </div>
		  <div className="col-md-4 mb-3">
			<h5>Quick Links</h5>
			<ul className="list-unstyled">
			  <li>
				<a href="#" className="text-info">
				  Home
				</a>
			  </li>
			  <li>
				<a href="#" className="text-info">
				  Services
				</a>
			  </li>
			  <li>
				<a href="#" className="text-info">
				  Contact
				</a>
			  </li>
			  <li>
				<a href="#" className="text-info">
				  About
				</a>
			  </li>
			</ul>
		  </div>
		  <div className="col-md-4 mb-3">
			<h5>Follow Us</h5>
			<a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-info me-3">
			  <i className="fab fa-twitter"></i> Twitter
			</a>
			<a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-info me-3">
			  <i className="fab fa-facebook"></i> Facebook
			</a>
			<a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-info">
			  <i className="fab fa-instagram"></i> Instagram
			</a>
		  </div>
		</div>
		<div className="row mt-4">
		  <div className="col text-center">
			<p>
			  © {new Date().getFullYear()} YourCompanyName. All rights reserved.
			</p>
			<p>
			  Developed by{" "}
			  <a
				href="https://yourdeveloperportfolio.com"
				target="_blank"
				rel="noopener noreferrer"
				className="text-info"
			  >
				Your Name
			  </a>
			  .
			</p>
		  </div>
		</div>
	  </div>
	</footer>
  );
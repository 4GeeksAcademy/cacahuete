import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Asegúrate de crear este archivo CSS

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<div className="container py-5 text-center">
			<div className="row">
				<div className="col-md-3 mb-3">
					<img src="ruta-al-logo.png" alt="Logo de la App" className="footer-logo" />
				</div>
				<div className="col-md-3 mb-3">
					<h4 className="footer-title">Sobre Nosotros</h4>
					<ul className="list-unstyled">
						<li><a href="#about" className="footer-link">Quiénes Somos</a></li>
						<li><a href="#team" className="footer-link">Nuestro Equipo</a></li>
						<li><a href="#careers" className="footer-link">Trabaja con Nosotros</a></li>
					</ul>
				</div>
				<div className="col-md-3 mb-3">
					<h4 className="footer-title">Ayuda</h4>
					<ul className="list-unstyled">
						<li><a href="#faq" className="footer-link">Preguntas Frecuentes</a></li>
						<li><a href="#support" className="footer-link">Soporte</a></li>
						<li><a href="#contact" className="footer-link">Contacto</a></li>
					</ul>
				</div>
				<div className="col-md-3 mb-3">
					<h4 className="footer-title">Síguenos</h4>
					<div className="d-flex justify-content-center">
						<a href="https://facebook.com" className="footer-social-link"><i className="fab fa-facebook-f"></i></a>
						<a href="https://twitter.com" className="footer-social-link"><i className="fab fa-twitter"></i></a>
						<a href="https://instagram.com" className="footer-social-link"><i className="fab fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-bottom text-center py-3">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
			<p className="mb-0">&copy; 2024 Nombre de la App. Todos los derechos reservados.</p>
		</div>
	</footer>
);
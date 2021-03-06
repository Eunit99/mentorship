import heroBg from '../../../assets/img/hero-bg.jpg';

export default function Header() {
	return (
		<>
			<section id="hero" className="d-flex justify-content-center align-items-center"
				style={{
					background: `url(${heroBg})`

				}}
			>
				<div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
					<h1>Learning Today,<br /> Leading Tomorrow</h1>
					<h2>We are team of talented designers making websites with Bootstrap</h2>
					<a href="courses.html" className="btn-get-started">Get Started</a>
				</div>
			</section>
		</>
	)
}
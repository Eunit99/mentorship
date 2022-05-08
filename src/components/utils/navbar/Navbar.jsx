export default function Navbar() {
	return (
		<>
			<header id="header" className="fixed-top">
				<div className="container d-flex align-items-center">

					<h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

					<a href="index.html" className="logo me-auto">
						<img src="assets/img/logo.png" alt="" className="img-fluid" />
					</a>

					<nav id="navbar" className="navbar order-last order-lg-0">
						<ul>
							<li><a className="active" href="/">Home</a></li>
							<li><a href="/about">About</a></li>
							<li><a href="/courses">Courses</a></li>
							<li><a href="/trainers">Trainers</a></li>
							<li><a href="/events">Events</a></li>
							<li><a href="/pricing">Pricing</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
						<i className="bi bi-list mobile-nav-toggle"></i>
					</nav>

					<a href="courses.html" className="get-started-btn">Get Started</a>

				</div>
			</header>
		</>
	)
}
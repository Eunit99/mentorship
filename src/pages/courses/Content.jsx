import course1 from '../../../src/assets/img/course-1.jpg';
import course2 from '../../../src/assets/img/course-2.jpg';
import course3 from '../../../src/assets/img/course-3.jpg';
import trainer1 from '../../../src/assets/img/trainers/trainer-1.jpg';
import trainer2 from '../../../src/assets/img/trainers/trainer-2.jpg';
import trainer3 from '../../../src/assets/img/trainers/trainer-3.jpg';

export default function Content() {
	return (
		<>
			<section id="courses" className="courses">
				<div className="container" data-aos="fade-up">

					<div className="row" data-aos="zoom-in" data-aos-delay="100">

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="course-item">
								<img src={course1} className="img-fluid" alt="..." />
								<div className="course-content">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h4>Web Development</h4>
										<p className="price">$169</p>
									</div>

									<h3><a href="course-details.html">Website Design</a></h3>
									<p>Et architecto provident deleniti facere repellat nobis iste.Id facere quia quae dolores dolorem tempore.</p>
									<div className="trainer d-flex justify-content-between align-items-center">
										<div className="trainer-profile d-flex align-items-center">
											<img src={trainer1} className="img-fluid" alt="" />
											<span>Antonio</span>
										</div>
										<div className="trainer-rank d-flex align-items-center">
											<i className="bx bx-user"></i>&nbsp; 50
											&nbsp; &nbsp;
											<i className="bx bx-heart"></i>&nbsp; 65
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
							<div className="course-item">
								<img src={course2} className="img-fluid" alt="..." />
								<div className="course-content">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h4>Marketing</h4>
										<p className="price">$250</p>
									</div>

									<h3><a href="course-details.html">Search Engine Optimization</a></h3>
									<p>Et architecto provident deleniti facere repellat nobis iste.Id facere quia quae dolores dolorem tempore.</p>
									<div className="trainer d-flex justify-content-between align-items-center">
										<div className="trainer-profile d-flex align-items-center">
											<img src={trainer2} className="img-fluid" alt="" />
											<span>Lana</span>
										</div>
										<div className="trainer-rank d-flex align-items-center">
											<i className="bx bx-user"></i>&nbsp; 35
											&nbsp; &nbsp;
											<i className="bx bx-heart"></i>&nbsp; 42
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
							<div className="course-item">
								<img src={course3} className="img-fluid" alt="..." />
								<div className="course-content">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h4>Content</h4>
										<p className="price">$180</p>
									</div>

									<h3><a href="course-details.html">Copywriting</a></h3>
									<p>Et architecto provident deleniti facere repellat nobis iste.Id facere quia quae dolores dolorem tempore.</p>
									<div className="trainer d-flex justify-content-between align-items-center">
										<div className="trainer-profile d-flex align-items-center">
											<img src={trainer3} className="img-fluid" alt="" />
											<span>Brandon</span>
										</div>
										<div className="trainer-rank d-flex align-items-center">
											<i className="bx bx-user"></i>&nbsp; 20
											&nbsp; &nbsp;
											<i className="bx bx-heart"></i>&nbsp; 85
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</section>
		</>
	)
}
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Trainers from './components/trainers/Trainers';
import Events from './components/events/Events';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';

function App() {

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path="/odecamp-mentorship" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/trainers" element={<Trainers />} />
					<Route path="/events" element={<Events />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

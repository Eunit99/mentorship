import Footer from "../utils/footer/Footer";
import Navbar from "../utils/navbar/Navbar";
import HomeAbout from "./homeabout/HomeAbout";
import Counter from "./counter/Counter";
import Header from "./header/Header";
import Trainers from "./hometrainers/HomeTrainers";
import Whyus from "./whyus/Whyus";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />

			<main id="main">
				<HomeAbout />
				<Counter />
				<Whyus />
				<Trainers />
			</main>

			<Footer />
		</>
	)
}
import Footer from "../../components/utils/footer/Footer";
import Navbar from "../../components/utils/navbar/Navbar";
import PageHeader from "../../components/utils/pageheader/PageHeader";
import PreloadAndScroll from "../../components/utils/PreloadAndScroll";
import HomeAbout from "../home/homeabout/HomeAbout";
import Counter from "../home/counter/Counter";

export default function About() {
	return (
		<>
			<Navbar />

			<main id="main">
				<PageHeader
					title="About Us"
					subTitle="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
				/>
				<HomeAbout />
				<Counter />
			</main>
			<Footer />
			<PreloadAndScroll />
		</>
	)
}
import Footer from "../utils/footer/Footer";
import Navbar from "../utils/navbar/Navbar";
import PageHeader from "../utils/pageheader/PageHeader";
import PreloadAndScroll from "../utils/PreloadAndScroll";
import HomeTrainers from '../home/hometrainers/HomeTrainers';


export default function Trainers() {
	return (
		<>
			<Navbar />

			<main id="main">
				<PageHeader
					title="Trainers"
					subTitle="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
				/>

				<HomeTrainers />
			</main>
			<Footer />
			<PreloadAndScroll />
		</>
	)
}
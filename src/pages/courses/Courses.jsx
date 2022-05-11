import Footer from "../../components/utils/footer/Footer";
import Navbar from "../../components/utils/navbar/Navbar";
import PageHeader from "../../components/utils/pageheader/PageHeader";
import PreloadAndScroll from "../../components/utils/PreloadAndScroll";
import Content from "./Content";

export default function Courses() {
	return (
		<>
			<Navbar />

			<main id="main">
				<PageHeader
					title="Courses"
					subTitle="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
				/>

				<Content />
			</main>
			<Footer />
			<PreloadAndScroll />
		</>
	)
}
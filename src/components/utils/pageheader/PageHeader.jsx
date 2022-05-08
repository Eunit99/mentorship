export default function PageHeader({ title, subTitle }) {
	return (
		<>
			<div className="breadcrumbs" data-aos="fade-in">
				<div className="container">
					<h2>{title} </h2>
					<p>
						{subTitle}
					</p>
				</div>
			</div>
		</>
	)
}
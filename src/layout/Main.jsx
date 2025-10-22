import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

const Main = props => {
	return (
		<>
		<Navbar />
		<div className="py-12 px-6">
			{props.children}
			<Footer />
		</div>
		</>
	);
};

export default Main;

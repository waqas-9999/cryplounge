import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

const Main = props => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
};

export default Main;

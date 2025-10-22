import HeroLeft from "../components/Home/HeroLeft";
import Navbar from "../components/global/Navbar";

const NewsDetails = props => {
    return (
        <>
            <Navbar />

            <div className="flex flex-1 py-12 px-6 min-h-screen max-w-7xl mx-auto">
                <div className="w-1/3">
                    <HeroLeft />
                </div>
                <div className="w-2/3">
                    {props.children}
                </div>
            </div>
        </>

    );
};

export default NewsDetails;

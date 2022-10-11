import Header from "../components/Layout/Header";
import Intro from "../components/Home/Intro";
import DisplayCards from "../components/Home/DisplayCards";
import Footer from "../components/Layout/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Intro />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home;
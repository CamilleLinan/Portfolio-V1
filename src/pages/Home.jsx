import Header from "../components/Layout/Header";
import Intro from "../components/Home/Intro";
import DisplayProjects from "../components/Home/DisplayProjects";
import Footer from "../components/Layout/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Intro />
            <DisplayProjects />
            <Footer />
        </>
    )
}

export default Home;
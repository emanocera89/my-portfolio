import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

function Home() {
    return (
        <>
            <Navbar />
            <About id="about" />
            <Projects id="projects" />
            <Contact id="contact" />
            <Footer />
        </>

    )
}

export default Home;
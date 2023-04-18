import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

function Home({ personalInfo }) {
    return (
        <>
            <Navbar />
            <About id="about" data={personalInfo} />
            <Projects id="projects" />
            <Contact id="contact" data={personalInfo} />
            <Footer data={personalInfo} />
        </>

    )
}

export default Home;
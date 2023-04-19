import { useState, useEffect } from 'react';
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function Home() {
    const [personalInfo, setPersonalInfo] = useState();

    const getPersonalInfo = () => {
      const db = getFirestore();
      const personalInfoCollection = collection(db, "personal-info");
      getDocs(personalInfoCollection).then((snapshot) => {
        const allData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPersonalInfo(allData[0]);
      })
    }
  
    useEffect(() => {
      getPersonalInfo();
    }, [])

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
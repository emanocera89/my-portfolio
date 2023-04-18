import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Resume from './pages/Resume/Resume';

import { collection, getDocs, getFirestore } from 'firebase/firestore';


function App() {
  const [personalInfo, setPersonalInfo] = useState();

  const getPersonalInfo = () => {
    const db = getFirestore();
    const personalInfoCollection = collection(db, "personal-info");
    getDocs(personalInfoCollection).then((snapshot) => {
      console.log('personal-info', snapshot.docs[0])
      const allData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPersonalInfo(allData[0]);
    })
  }

  useEffect(() => {
    getPersonalInfo();
  }, [])

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home personalInfo={personalInfo} />} />
        <Route exact path="/p/" element={<Home personalInfo={personalInfo} />} />
        <Route exact path="/p/:projectId" element={<ProjectDetail />} />
        <Route exact path="/resume" element={<Resume personalInfo={personalInfo} />} />
      </Routes>

    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProjectMedia from "../../components/ProjectMedia/ProjectMedia";
import { useParams, useLocation } from 'react-router-dom';
import { collection, getDocs, getDoc, doc, getFirestore } from 'firebase/firestore';

function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [personalInfo, setPersonalInfo] = useState();

    const getPersonalInfo = () => {
      const db = getFirestore();
      const personalInfoCollection = collection(db, "personal-info");
      getDocs(personalInfoCollection).then((snapshot) => {
        const allData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPersonalInfo(allData[0]);
      })
    }

    const getProject = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsLoading(true);
        console.log("projectId: ", params.projectId);
        
        setProject([]);
        const db = getFirestore();
        const projectRef = doc(db, "projects", String(params.projectId));
        getDoc(projectRef).then((snapshot) => {
            if (snapshot.exists()) {
                const results = [snapshot.data()];
                setProject(results[0]);
                console.log("results", results[0]);
                setIsLoading(false);
            }
        })
    }

    useEffect(() => {
        getPersonalInfo();
        getProject();
    }, [params]);



    return (
        <>
            <Navbar />
            <ProjectHeader project={project} />
            <ProjectMedia project={project} />
            <Footer data={personalInfo} />
        </>
    )
}

export default ProjectDetail;
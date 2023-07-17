import { useState, useEffect } from 'react';
import AboutMe from "../../components/AboutMe/AboutMe";
import ContactList from "../../components/ContactList/ContactList";
import Experience from "../../components/Experience/Experience";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import ResumeNav from "../../components/ResumeNav/ResumeNav";
import { useTranslation } from "react-i18next";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import LangSelector from '../../components/LangSelector/LangSelector';
import Loader from '../../components/Loader/Loader';
import Skills from '../../components/Skills/Skills';

function Resume() {
    const [personalInfo, setPersonalInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [t] = useTranslation("global");
    const lang = localStorage.getItem("lang");

  const getPersonalInfo = () => {
    setIsLoading(true);
    const db = getFirestore();
    const personalInfoCollection = collection(db, "personal-info");
    getDocs(personalInfoCollection).then((snapshot) => {
      //console.log('personal-info', snapshot.docs[0])
      const allData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPersonalInfo(allData[0]);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getPersonalInfo();
  }, [])
    
    return (
        isLoading ?
        <Loader backgroundColor='#fff' color='#000' />
        :
        <>
            <ResumeNav />
            <div className="resume">
                <div className="container nav-mobile"><LangSelector /> <a href="https://www.emmanuelnocera.com/resources/CV_Espanol_2023.pdf" target="_blank" className="btn btn-primary btn-download" rel="noreferrer">{t("resume.downloadPdf")}</a></div>
                
                <PersonalInfo data={personalInfo} />
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-4 col-lg-8 content">
                            <AboutMe data={personalInfo} id="about" sectionTitle={t("resume.about_me")} lang={lang}/>
                            <Experience sectionTitle={t("resume.experience")} data={personalInfo && personalInfo.experience} id="experience" lang={lang} />
                            <Experience sectionTitle={t("resume.education")} data={personalInfo && personalInfo.education} id="education" lang={lang} />
                            <Skills sectionTitle="Skills" data={personalInfo && personalInfo.skills} />
                            <Experience sectionTitle={t("resume.lang")} data={personalInfo && personalInfo.languages} id="languages" lang={lang} />
                            <ContactList data={personalInfo} id="contact" sectionTitle={t("resume.contact")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
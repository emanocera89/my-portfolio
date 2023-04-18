import { useState, useEffect } from 'react';
import AboutMe from "../../components/AboutMe/AboutMe";
import ContactList from "../../components/ContactList/ContactList";
import Experience from "../../components/Experience/Experience";
import Navbar from "../../components/Navbar/Navbar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import ResumeNav from "../../components/ResumeNav/ResumeNav";
import { useTranslation } from "react-i18next";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const about = "I’m an independent visual designer. For the last 7 years I’ve been crafting world class digital experiences. Currently based in Lisbon, Portugal."

const experience = [
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead UI Designer",
        company: "Contabilium",
        website: "https://www.contabilium.com",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    }
]

const education = [
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    }
]

const features = [
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Ssr. Frontend Developer",
        company: "Artear",
        website: "https://www.artear.com/es/",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    }
]

function Resume() {
    const [personalInfo, setPersonalInfo] = useState();
    const [t] = useTranslation("global");
    const lang = localStorage.getItem("lang");

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
            <ResumeNav />
            <div className="resume">
                <PersonalInfo data={personalInfo} />
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-4 col-lg-8 content">
                            <AboutMe data={personalInfo} id="about" sectionTitle={t("resume.about_me")} lang={lang}/>
                            <Experience sectionTitle={t("resume.experience")} data={personalInfo && personalInfo.experience} id="experience" lang={lang} />
                            <Experience sectionTitle={t("resume.education")} data={personalInfo && personalInfo.education} id="education" lang={lang} />
                            <Experience sectionTitle={t("resume.features")} data={features} id="features" lang={lang} />
                            <ContactList id="contact" sectionTitle={t("resume.contact")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
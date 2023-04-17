import AboutMe from "../../components/AboutMe/AboutMe";
import ContactList from "../../components/ContactList/ContactList";
import Experience from "../../components/Experience/Experience";
import Navbar from "../../components/Navbar/Navbar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import ResumeNav from "../../components/ResumeNav/ResumeNav";
import { useTranslation } from "react-i18next";

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
    const [t] = useTranslation("global");
    return (
        <>
            <ResumeNav />
            <div className="resume">
                <PersonalInfo />
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-4 col-lg-8 content">
                            <AboutMe data={about} id="about" sectionTitle={t("resume.about_me")} />
                            <Experience sectionTitle={t("resume.experience")} data={experience} id="experience" />
                            <Experience sectionTitle={t("resume.education")} data={education} id="education" />
                            <Experience sectionTitle={t("resume.features")} data={features} id="features" />
                            <ContactList id="contact" sectionTitle={t("resume.contact")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
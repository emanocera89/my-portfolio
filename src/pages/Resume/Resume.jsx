import AboutMe from "../../components/AboutMe/AboutMe";
import ContactList from "../../components/ContactList/ContactList";
import Experience from "../../components/Experience/Experience";
import Navbar from "../../components/Navbar/Navbar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

const about = "I’m an independent visual designer. For the last 7 years I’ve been crafting world class digital experiences. Currently based in Lisbon, Portugal."

const experience = [
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    }
]

const education = [
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    }
]

const features = [
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    },
    {
        title: "Lead Product Designer @ Visit.Page",
        subtitle: "Jan '18 - Oct '21",
        description: "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster."
    }
]

function Resume() {
    return (
        <>
            <Navbar />
            <div className="resume">
                <PersonalInfo />
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-4 col-lg-8 content">
                            <AboutMe data={about} />
                            <Experience sectionTitle="Experience" data={experience} />
                            <Experience sectionTitle="Education" data={education} />
                            <Experience sectionTitle="Features" data={features} />
                            <ContactList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
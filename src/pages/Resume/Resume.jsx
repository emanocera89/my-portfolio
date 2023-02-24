import About from "../../components/About/About";
import ContactList from "../../components/ContactList/ContactList";
import Experience from "../../components/Experience/Experience";
import Navbar from "../../components/Navbar/Navbar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <PersonalInfo />
                        </div>
                        <div className="col-lg-8">
                            <About />
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
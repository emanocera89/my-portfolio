import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

/*const projects = [
    {
        id: '0',
        name: 'Project Test',
        category: 'Client Project',
        img: 'https://arlo-jackson-brown.netlify.app/static/370a99c2d2a1a8bf9344163b00dc728f/1c903/project-01.webp'
    },
    {
        id: '1',
        name: 'Shoes Store Website',
        category: 'Client Project',
        img: 'https://arlo-jackson-brown.netlify.app/static/defc458b87b4f412eb7e5d8b44a9561e/82a30/project-02.webp'
    },
    {
        id: '2',
        name: 'Abstract Website',
        category: 'Experimental Project',
        img: 'https://arlo-jackson-brown.netlify.app/static/dc705cc9e28be2be0ff0223a14c63fe2/1c903/project-03.webp'
    },
    {
        id: '3',
        name: 'Food Website',
        category: 'Client Project',
        img: 'https://arlo-jackson-brown.netlify.app/static/21af964915f9f474debe3fb9afc1b0c8/a5acb/project-04.webp'
    }
]*/


function Projects({...rest}) {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProjects = () => {
        setIsLoading(true);
        const db = getFirestore();
        const projectsCollection = collection(db, "projects");
        getDocs(projectsCollection).then((snapshot) => {
            setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getProjects();
    }, [])


    return (
        <section className="projects pt-5" {...rest}>
            <div className="container">
                <ul className="project-list">
                    {projects && projects.map((project) => (
                        <li><ProjectCard project={project} /></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects;
import Social from "../Social/Social";

function About({...rest}) {
    return (
        <section className="about" style={{minHeight: '100vh'}} {...rest}>
            <div className="container">
                <h2>I’m an independent visual designer. For the last 7 years I’ve been crafting world class digital experiences. Currently based in Lisbon, Portugal.</h2>
                <Social />
            </div>
        </section>
    )
}

export default About;
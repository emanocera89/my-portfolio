import Social from "../Social/Social";

function About({ ...rest }) {
    return (
        <section className="about" {...rest}>
            <div className="container">
                <div className="wrapper">
                    <h2>I’m an independent visual designer. For the last 7 years I’ve been crafting world class digital experiences. Currently based in Lisbon, Portugal.</h2>
                    <Social />
                </div>
            </div>
        </section>
    )
}

export default About;
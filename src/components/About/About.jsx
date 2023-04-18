import Social from "../Social/Social";

function About({ data, ...rest }) {
    return (
        <section className="about" {...rest}>
            <div className="container">
                <div className="wrapper">
                    <h2>{data && data.about_description_en}</h2>
                    <Social data={data} />
                </div>
            </div>
        </section>
    )
}

export default About;
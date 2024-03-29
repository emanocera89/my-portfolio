import parse from 'html-react-parser';
function AboutMe({ sectionTitle, data, lang, ...rest }) {
    return (
        <div className="resume-item" {...rest}>
            <h3>{sectionTitle}</h3>
            <p className="about-text">
                {data &&
                    {
                        'es': parse(data.cv_about_es),
                        'en': parse(data.cv_about_en)
                    }[lang]
                }
            </p>
        </div>
    )
}

export default AboutMe;
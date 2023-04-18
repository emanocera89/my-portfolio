function Experience({ sectionTitle = 'Default Title', data, lang, ...rest }) {
    
    return (
        <div className="resume-item" {...rest}>
            <h3>{sectionTitle}</h3>
            {data && data.map((item) => (
                <div className="experience-item">
                    <h4 className="title">{item.title} @ <a href={item.website} target="_blank" rel="noreferrer">{item.company}</a></h4>
                    <span className="subtitle">
                        {item &&
                            {
                                'es': item.subtitle_es,
                                'en': item.subtitle_en
                            }[lang]
                        }
                    </span>
                    <p className="description">
                        {item &&
                            {
                                'es': item.description_es,
                                'en': item.description_en
                            }[lang]
                        }
                    </p>
                </div>
            ))}

        </div>
    )
}

export default Experience;
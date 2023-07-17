import parse from 'html-react-parser';
function Experience({ sectionTitle = 'Default Title', data, lang, ...rest }) {

    return (
        <div className="resume-item" {...rest}>
            <h3>{sectionTitle}</h3>
            {data && data.map((item) => (
                <div className="experience-item">
                    <div className='header'>
                        {item.image &&
                            <div className='img-wrapper'>
                                <img src={item.image} width="100%" alt={item.company} />
                            </div>
                        }
                        <div className='title-wrapper'>
                            <h4 className="title">
                                {{
                                    'es': <span className='main'>{item.title}</span>,
                                    'en': <span className='main'>{item.title_en ? item.title_en : item.title}</span>
                                }[lang]}
                                {item.company &&
                                    {
                                        'es': <span> en </span>,
                                        'en': <span> @ </span>
                                    }[lang]
                                }
                                <a href={item.website} target="_blank" rel="noreferrer">{item.company}</a>
                            </h4>
                            <div className='subtitle'>
                                {item &&
                                    {
                                        'es': <span className='date'>{item.subtitle_es}</span>,
                                        'en': <span className='date'>{item.subtitle_en}</span>
                                    }[lang]
                                }

                                {item && item.type_es && item.type_en &&
                                    {
                                        'es': <span className='type'>{item.type_es}</span>,
                                        'en': <span className='type'>{item.type_en}</span>
                                    }[lang]
                                }
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        {item && item.description_es && item.description_en &&
                            {
                                'es': parse(String(item.description_es)),
                                'en': parse(String(item.description_en))
                            }[lang]
                        }
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Experience;
import Social from "../Social/Social";
import { useTranslation } from 'react-i18next'

function About({ data, ...rest }) {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    return (
        <section className="about" {...rest}>
            <div className="container">
                <div className="wrapper">
                    <h2>{data &&
                        {
                            'es': data.about_description_es,
                            'en': data.about_description_en
                        }[lang]
                    }</h2>
                    <Social data={data} />
                </div>
            </div>
        </section>
    )
}

export default About;
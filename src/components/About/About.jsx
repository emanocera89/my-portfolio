import { useEffect, useState } from 'react';
import Social from "../Social/Social";
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

function About({ data, ...rest }) {
    const [textToShow, setTextToShow] = useState('')
    const { i18n } = useTranslation();
    const lang = i18n.language;

    useEffect(() => {
        console.log('test');
        switch (lang) {
            case 'es':
                
                setTextToShow(data.about_description_es);
                break;
            case 'en':
                setTextToShow(data.about_description_en);
                break;
            default:
                setTextToShow(data.about_description_es);
        }
    }, [data, lang])


    return (
        <section className="about" {...rest}>
            <div className="container">
                <div className="wrapper">
                    {textToShow && 
                        <h2>
                            <Typewriter
                                options={{
                                    delay: 20,
                                    //cursor: null
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(textToShow)
                                        .start();
                                }}
                            />
                        </h2>
                    }
                    <Social data={data} />
                </div>
            </div>
        </section>
    )
}

export default About;
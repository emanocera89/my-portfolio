import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

function Contact({ data, ...rest }) {
    return (
        <div className="contact" {...rest}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <ContactInfo data={data} />
                    </div>
                    <div className="col-lg-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
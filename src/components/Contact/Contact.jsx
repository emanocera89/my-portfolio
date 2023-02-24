import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

function Contact({ ...rest }) {
    return (
        <div className="contact" {...rest}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <ContactInfo />
                    </div>
                    <div className="col-lg-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
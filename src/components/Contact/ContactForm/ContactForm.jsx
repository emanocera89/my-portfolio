import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const initialValues = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
}

function ContactForm() {

    const [values, setValues] = useState(initialValues);
    const [isDisabled, setIsDisabled] = useState(false)


    const [t] = useTranslation("global");

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsDisabled(true);
        
        emailjs.sendForm('service_b1nuz4c', 'template_amtzj2p', event.target, '5Tfa5Fcx_oUg4vVw8')
        .then(response => {
            setValues(initialValues);
            setIsDisabled(false);
            swal(t("contact.submit_success_title"), t("contact.submit_success_subtitle"), "success");
        })
        .catch(error => { 
            swal(t("contact.submit_error_title"), t("contact.submit_error_subtitle"), "error");
            setIsDisabled(false);
        })
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <label>
                <input disabled={isDisabled} type="text" name="fullName" value={values.fullName} onChange={handleChange} required placeholder={t("contact.full_name")  + '*'} />
            </label>
            <label>
                <input disabled={isDisabled} type="email" name="email" value={values.email} onChange={handleChange} required placeholder={t("contact.email") + '*'} />
            </label>
            <label>
                <input disabled={isDisabled} type="text" name="subject" value={values.subject} onChange={handleChange} required placeholder={t("contact.subject")  + '*'} />
            </label>
            <label>
                <textarea disabled={isDisabled} name="message" value={values.message} rows="4" onChange={handleChange} required placeholder={t("contact.message")  + '*'} />
            </label>
            <button type="submit" disabled={isDisabled}>{isDisabled ? t("contact.sending") : t("contact.submit") }</button>
        </form>
    )
}

export default ContactForm;
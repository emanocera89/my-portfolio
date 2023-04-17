import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function ContactForm() {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

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
        // Código para enviar el formulario
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <label>
                <input type="text" name="fullName" value={values.fullName} onChange={handleChange} required placeholder={t("contact.full_name")  + '*'} />
            </label>
            <label>
                <input type="email" name="email" value={values.email} onChange={handleChange} required placeholder={t("contact.email") + '*'} />
            </label>
            <label>
                <input type="text" name="subject" value={values.subject} onChange={handleChange} required placeholder={t("contact.subject")  + '*'} />
            </label>
            <label>
                <textarea name="message" value={values.message} rows="4" onChange={handleChange} required placeholder={t("contact.message")  + '*'} />
            </label>
            <button type="submit">{t("contact.submit")}</button>
        </form>
    )
}

export default ContactForm;
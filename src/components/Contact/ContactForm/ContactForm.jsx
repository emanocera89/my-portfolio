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
                {t("contact.full_name")}
                <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
            </label>
            <label>
                {t("contact.email")}
                <input type="email" name="email" value={values.email} onChange={handleChange} />
            </label>
            <label>
                {t("contact.subject")}
                <input type="text" name="subject" value={values.subject} onChange={handleChange} />
            </label>
            <label>
                {t("contact.message")}
                <textarea name="message" value={values.message} rows="4" onChange={handleChange} />
            </label>
            <button type="submit">{t("contact.submit")}</button>
        </form>
    )
}

export default ContactForm;
import React, { useState } from 'react';

function ContactForm() {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

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
        <form onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={values.email} onChange={handleChange} />
            </label>
            <label>
                Subject:
                <input type="text" name="subject" value={values.subject} onChange={handleChange} />
            </label>
            <label>
                Message:
                <textarea name="message" value={values.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm;
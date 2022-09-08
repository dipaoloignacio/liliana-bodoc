import React, { useState, useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from '@emailjs/browser';

function FormMessage() {
    const [formSend, setFormSend] = useState(false);
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_sse07oe', 'template_vvjxefn', form.current, 'cyXeZCCwFdbgVMHUW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="login-box">
                <h2>Contacto</h2>
                <Formik
                    initialValues={{
                        from_name: '',
                        email: '',
                        message: ''
                    }}
                    validate={(values) => {
                        let errores = {}
                        if (!values.from_name) {
                            errores.from_name = 'el nombre no puede estar vacio'
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.from_name)) {
                            errores.from_name = 'el nombre solo puede contener letras y espacios.'
                        }
                        if (!values.email) {
                            errores.email = 'ingresa un correo'
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                            errores.email = 'correo invalido'
                        }
                        if (!values.message) {
                            errores.message = 'ingresa un mensaje'
                        }
                        return errores;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        resetForm();
                        sendEmail();
                        setFormSend(true);
                        setTimeout(() => setFormSend(false), 5000);
                    }}
                >
                    {
                        ({ errors }) => (
                            <Form action="" ref={form}>
                                <div className="user-box">
                                    <Field
                                        type="text"
                                        name="from_name"
                                        placeholder='nombre...'
                                    />
                                    <ErrorMessage name='from_name' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.from_name}</div>
                                    )} />
                                </div>
                                <div className="user-box">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder='example@example.com'
                                    />
                                    <ErrorMessage name='email' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.email}</div>
                                    )} />
                                </div>
                                <div className="user-box">
                                    <Field
                                        type="text"
                                        as="textarea"
                                        name="message"
                                        placeholder='mensaje'
                                        className='text-area'
                                    />
                                    <ErrorMessage name='message' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.message}</div>
                                    )} />
                                </div>
                                <div className='btn-submit'>
                                    <button type="input" value="Send" className='custom-btn btn-3'><span>Enviar</span></button>
                                </div>
                                {formSend ? <p className='text-center mt-3' style={{ color: 'rgb(102, 238, 113)' }}>Correo enviado con exito</p> : ''}
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </>
    )
}
export default FormMessage
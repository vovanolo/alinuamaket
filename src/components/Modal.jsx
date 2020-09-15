import React from 'react'
import { Formik, Field, Form, useFormik } from 'formik';


export default function Modal() {
    function handleFormSubmit(values) {
        console.log(values);
      }

    return (
        <div>
            <div>
                <div className="row">
                    <div className="col">
                        <h2>Fill in the form below</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: ''
                            }}
                            onSubmit={handleFormSubmit}
                        >
                            <Form>
                                <Field type='text' name='name' placeholder='Вкажіть імя' ></Field>
                                <Field type='email' name='email' placeholder='Вкажіть email' ></Field>
                                <Field type='number' name='phone' placeholder='Вкажіть телефон' ></Field>
                                <button type='submit'>Відправити</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { useState } from 'react'

const FormValidation = () => {
    const [form, setForm] = useState({
        firstName: '',
        feedback: '',
        acceptTerms: false
    })
    // const [firstName, setFirstName] = useState("")
    // const [feedback, setFeedback] = useState("")
    // const [acceptedTerms, setAcceptedTerms] = useState(false)

    const [validationErrors, setValidationErrors] = useState({})
    const [submittedTimes, setSubmittedTimes] = useState(0)
    
    const handleOnChange = (e) => {
        let value = e.target.value
        if (e.target.name === 'acceptTerms') {
            value = !form[e.target.name]
        }

        setForm({
            ...form,
            [e.target.name]: value
        })

        validationErrors[e.target.name] = ''

        // if (e.target.name === 'firstName') {
        //     setFirstName(e.target.value)
        //     validationErrors['firstName'] = ''
        // }
        // if (e.target.name === 'firstName') {
        //     setFeedback(e.target.value)
        //     validationErrors['feedback'] = ''
        // }
        // if (e.target.name === 'acceptTerms') {
        //     setAcceptedTerms(!acceptedTerms)
        //     validationErrors['acceptTerms'] = ''
        // }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const isFormValid = validateFields()
        if (isFormValid) {
            setSubmittedTimes(submittedTimes + 1)
        }
    }

    function validateFields() {
        const errors = {}
        if (!form.firstName) {
            errors['firstName'] = 'First Name cannot be empty'
        }
        if (!form.feedback) {
            errors['feedback'] = 'feedback cannot be empty'
        }
        if (!form.acceptTerms) {
            errors['acceptTerms'] = 'terms should be accepted'
        }

        setValidationErrors(errors)

        return Object.keys(errors).length === 0;
    }

    return (
        <>
            <section className='app-section'>
                <h3 className='app-h3'>Form Validation </h3>
                <form onSubmit={handleOnSubmit}>
                    <span className='error'>{validationErrors['firstName']}</span>
                    <label>
                        <input
                            type='text'
                            name='firstName'
                            placeholder='first name'
                            value={form.firstName}
                            onChange={handleOnChange}
                        />
                    </label>
                    <span className='error'>{validationErrors['feedback']}</span>
                    <label>
                        <input
                            type='text'
                            name='feedback'
                            placeholder='give feedback'
                            value={form.feedback}
                            onChange={handleOnChange}
                        />
                    </label>
                    <span className='error'>{validationErrors['acceptTerms']}</span>
                    <label className='submit-label'>
                        <input
                            type='checkbox'
                            name='acceptTerms'
                            checked={form.acceptTerms}
                            onChange={handleOnChange}
                            className='checkbox-terms'
                        /> I accept the terms
                    </label>
                    <button type='submit' className='form-button'>Summit</button>
                    <p className='submitted-times'>Submitted {submittedTimes} times</p>
                </form>
            </section>
        </>
    )
}

export default FormValidation;
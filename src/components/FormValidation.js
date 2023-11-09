import React from 'react'
import { useState } from 'react'

const FormValidation = () => {
    const [firstName, setFirstName] = useState("")
    const [feedback, setFeedback] = useState("")
    const [acceptedTerms, setAcceptedTerms] = useState(false)
    const [validationErrors, setValidationErrors] = useState({})
    const [submittedTimes, setSubmittedTimes] = useState(0)

    const handleOnChange = (e) => {
        if (e.target.name === 'firstName') {
            setFirstName(e.target.value)
            validationErrors['firstName'] = ''
        }
        if (e.target.name === 'feedback') {
            setFeedback(e.target.value)
            validationErrors['feedback'] = ''
        }
        if (e.target.name === 'acceptTerms') {
            setAcceptedTerms(!acceptedTerms)
            validationErrors['acceptTerms'] = ''
        }
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
        if (!firstName) {
            errors['firstName'] = 'First Name cannot be empty'
        }

        if (!firstName) {
            errors['feedback'] = 'feedback cannot be empty'
        }

        if (!acceptedTerms) {
            errors['acceptTerms'] = 'terms should be accepted'
        }

        setValidationErrors(errors)

        return Object.keys(errors).length === 0;
    }

    return (
        <>
            <section className='events-section'>
                <h3 className='events-h3'>Form Validation </h3>
                <form onSubmit={handleOnSubmit}>
                    <label>
                        <span className='error'>{validationErrors['firstName']}</span>
                        <input
                            type='text'
                            name='firstName'
                            placeholder='first name'
                            value={firstName}
                            onChange={handleOnChange}
                        />
                    </label>
                    <label>
                        <span className='error'>{validationErrors['feedback']}</span>
                        <input
                            type='text'
                            name='feedback'
                            placeholder='give feedback'
                            value={feedback}
                            onChange={handleOnChange}
                        />
                    </label>
                    <label>
                        <span className='error'>{validationErrors['acceptTerms']}</span>
                        <input
                            type='checkbox'
                            name='acceptTerms'
                            checked={acceptedTerms}
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
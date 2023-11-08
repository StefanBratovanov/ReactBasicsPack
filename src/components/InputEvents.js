import React from 'react'
import { useState } from 'react';

const InputEvents = () => {
    const [buttonClicked, setButtonClicked] = useState(0)
    const [mouseDown, setMouseDown] = useState(false)
    const [inputText, setInputText] = useState("")
    const [formInputText, setFormInputText] = useState("")
    const [formSubmittedText, setFormSubmittedText] = useState("")

    const handleClick = () => {
        setButtonClicked(buttonClicked + 1)
    }

    const handleOnMouseDown = () => {
        setMouseDown(true)
    }

    const handleOnMouseUp = () => {
        setMouseDown(false)
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const handleOnFormInputChange = (e) => {
        setFormInputText(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmittedText(formInputText)
    }

    return (
        <>
            <section className='events-section'>
                <h3 className='events-h3'>Mouse Events</h3>
                <button
                    onClick={handleClick}
                    onMouseDown={handleOnMouseDown}
                    onMouseUp={handleOnMouseUp}>Click the buton
                </button>
                <p className='p-mouse-down'>Button mouse down: {mouseDown ? 'true' : 'false'}</p>
                <p className='p-clicked'>Button clicked: {buttonClicked}</p>
            </section>

            <section className='events-section'>
                <h3 className='events-h3'>Input change Events</h3>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange} />
                <p className='input-value'>Input value here: {inputText}</p>
            </section>
            
            <section className='events-section'>
                <h3 className='events-h3'>Form submit events</h3>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type='text'
                        value={formInputText}
                        onChange={handleOnFormInputChange} />
                    <button type='submit' className='button-submit'>Submit</button>
                    <p className='input-value'>Input value here: {formInputText}</p>
                    <p className='submitted-value'>Submitted value here: {formSubmittedText}</p>
                </form>
            </section>
        </>
    )
}

export default InputEvents;
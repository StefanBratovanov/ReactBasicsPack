import React from "react";
import { useState, useEffect } from "react";

const MovementEvents = () => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [windowScrollY, setWindowScrollY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleOnMouseMove = (e) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
    }

    const handleScroll = () => {
        setWindowScrollY(Math.floor(window.scrollY))
    }

    return (
        <>
            <section className='app-section' onMouseMove={handleOnMouseMove}>
                <h3 className='app-h3'>Mouse Coordinates</h3>
                <div className='x-coordinate'>x: {mouseX}</div>
                <div className='y-coordinate'>y: {mouseY}</div>
            </section>

            <section className='app-section'>
                <h3 className='app-h3'>Window scroll position</h3>
                <p className='p-scroll'>Window scroll Y: {windowScrollY}</p>
            </section>
        </>
    )
}

export default MovementEvents;
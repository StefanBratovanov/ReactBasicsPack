import React, { useState } from 'react'

const Card = () => {
    const initailState = {
        firstName: 'My Nombre',
        initials: 'MN',
        info: [
            { title: 'Birthday', text: '1 Jan, 1981' },
            { title: 'Address', text: '555 New street' },
            { title: 'Phone', text: '555-555-2322' },
            { title: 'Email', text: '' }
        ]
    }
    const [cardState, setCardState] = useState(initailState)

    return (
        <>
            <section className="card-container">
                <header className="card-header">
                    <span initials={cardState.initials}></span>
                    <h2>{cardState.firstName}</h2>
                </header>
                <main>
                    <ul>
                        {cardState.info.map((i, index) => {
                            return (
                                <li className="card-info" key={index}>
                                    <span>{i.title}</span>{i.text ? i.text : 'N/A'}
                                </li>)
                        })}
                    </ul>
                </main>
            </section>
        </>
    )
}

export default Card;
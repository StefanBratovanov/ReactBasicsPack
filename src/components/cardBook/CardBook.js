import React, { useState } from 'react'
import Card from './Card.js'

const CardBook = () => {
    const cardBookInitialState = {
        contacts: [
            {
                name: 'Allen Iverson',
                initials: 'AI',
                favorite: true,
                phone: '333-33-333',
                email: 'ai@nba.com'
            },
            {
                name: 'Michael Jordan',
                initials: 'MJ',
                favorite: false,
                phone: '23-2323-2323',
                email: 'mj@nba.com'
            },
            {
                name: 'Shawn Kemp',
                initials: 'SK',
                favorite: false,
                phone: '40-4040-4040',
                email: 'sk@nba.com'
            }
        ]
    }

    const [cardBook] = useState(cardBookInitialState)
    const { contacts } = cardBook

    return (
        <>
            {!contacts.length && <p>No contacts</p>}
            {contacts.map((contact, i) => {
                return (
                    <Card contact={contact} key={i}/>
                )
            })}
        </>
    )
}

export default CardBook
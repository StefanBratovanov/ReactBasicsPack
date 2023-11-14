import React from "react";

const Card = ({ contact, index, handleFavoriteClick }) => {
    const activeClass = contact.favorite ? 'active' : ''

    return (
        <section className='card-container'>
            <header className='card-header'>
                <span initials={contact.initials}></span>
                <h2>{contact.name}</h2>
                <div className={`favorite ${activeClass}`} onClick={() => handleFavoriteClick(index)}>
                    &#9734;
                </div>
            </header>
            <main>
                <ul>
                    <li className="card-info">
                        <span>Phone</span>
                        {contact.phone ? contact.phone : 'n/a'}
                    </li>
                    <li className="card-info">
                        <span>Email</span>
                        {contact.email ? contact.email : 'n/a'}
                    </li>
                </ul>
            </main>
        </section>
    )
}

export default Card;
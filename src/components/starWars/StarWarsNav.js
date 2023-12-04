import React from 'react'
import { NavLink } from 'react-router-dom';

const StarWarsNav = ({vehicles}) => {
    return (
        <ul className='star-wars-ul'>
            {vehicles.map((v, k) => {
                const id = v.url.split("/")[5];
                return (
                    <li key={k}>
                        <NavLink activeStyle={{fontWeight:'bold'}} to={`/StarWars/vehicle/${id}`}>
                            <p>{v.name}</p>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default StarWarsNav;
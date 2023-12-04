import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Vehicle = () => {
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()

    useEffect(() => {
        fetch(`https://swapi.dev/api/vehicles/${vehicleId}`)
            .then(r => r.json())
            .then(j => setVehicle(j))
    }, [vehicleId])

    return (
        <>
            <div className='vehicle'>
                <h3>Name: {vehicle.name}</h3>
                <p>Model: {vehicle.model}</p>
                <p>Url: {vehicle.url}</p>
            </div>
        </>
    )
}

export default Vehicle;
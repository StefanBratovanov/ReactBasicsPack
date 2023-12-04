import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import StarWarsNav from './StarWarsNav';
import Vehicle from './Vehicle';

const StarWars = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/")
            .then(r => r.json())
            .then(j => setVehicles(j.results))
    }, [])

    return (
        <>
            <Router>
                <h2 className='star-wars-h2'>Star Wars Vehicles</h2>
                <StarWarsNav vehicles={vehicles} />
                <hr />

                <Switch>
                    <Route exact path="/StarWars/vehicle/:vehicleId" >
                        <Vehicle />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default StarWars
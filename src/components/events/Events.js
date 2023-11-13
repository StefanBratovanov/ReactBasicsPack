import React from "react";
import InputEvents from "./InputEvents.js";
import MovementEvents from "./MovementEvents.js";

const Events = () => {
    return (
        <div className="events-container">
            <InputEvents />
            <MovementEvents />
        </div>
    )
}

export default Events;
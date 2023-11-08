import React from "react";
import InputEvents from "./InputEvents";
import MovementEvents from "./MovementEvents";

const Events = () => {
    return (
        <div className="events-container">
            <InputEvents />
            <MovementEvents />
        </div>
    )
}

export default Events;
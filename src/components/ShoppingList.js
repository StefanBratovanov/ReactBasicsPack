import React from "react";
import { useState } from "react";

const ShoppingList = () => {
    const [shoppingListItems, setShoppingListItems] = useState({
        groceryItems: [
            { name: "Bananas", id: "id-1", completed: false },
            { name: "Meat", id: "id-2", completed: false },
            { name: "Wine", id: "id-3", completed: false }
        ]
    })

    const [newGrocery, setNewGrocery] = useState('')
    const [validationErrors, setValidationErrors] = useState({})

    const handleOnChange = (e) => {
        setNewGrocery(e.target.value)
    }

    const handleOnCompletedToggle = (e) => {
        const index = parseInt(e.target.attributes.itemindex.value, 10)

        const newGroceryState = [...shoppingListItems.groceryItems];
        newGroceryState[index] = {
            ...newGroceryState[index],
            completed: e.target.checked
        }

        setShoppingListItems({ groceryItems: newGroceryState })
    }

    const handleDelete = (e) => {
        const index = parseInt(e.target.attributes.itemindex.value, 10)
        const groceries = [
            ...shoppingListItems.groceryItems.slice(0, index),
            ...shoppingListItems.groceryItems.slice(index + 1)]

        setShoppingListItems({ groceryItems: groceries })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const isFormValid = validateFields();
        if (isFormValid) {
            const newShoppingItem = {
                name: newGrocery,
                completed: false,
                id: 'id-' + new Date()
            }
    
            let exisitngItems = [...shoppingListItems.groceryItems]
    
            if (!exisitngItems.some(l => l.name === newGrocery)) {
                const newGroceryList = [...exisitngItems, newShoppingItem]
    
                setShoppingListItems({ groceryItems: newGroceryList })
            }

            setNewGrocery('')
        }
    }

    const validateFields = () => {
        const errors = {}
        if (!newGrocery) {
            errors['newItemName'] = 'Enter grocery name'
        }

        setValidationErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const groceries = shoppingListItems.groceryItems


    return (
        <>
            <section className="app-section">
                <h3 className="app-h3">Shopping List</h3>
                {!groceries.length && <p>All Done!</p>}
                <ul>
                    {
                        groceries.map((g, index) => {
                            return (
                                <li key={index} className="li-shopping-item">
                                    <label>
                                        <input
                                            type="checkbox"
                                            className='checkbox-shopping-list'
                                            itemindex={index}
                                            onChange={handleOnCompletedToggle}
                                        />
                                        <span className="grocery-name">{g.name}</span>
                                        <button
                                            itemindex={index}
                                            onClick={handleDelete}
                                            className="delete-button">x</button>
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
                <form onSubmit={handleOnSubmit}>
                    <span className="error">{validationErrors['newItemName']}</span>
                    <input
                        type="text"
                        name="newItemName"
                        placeholder="grocery name"
                        value={newGrocery}
                        onChange={handleOnChange}
                        className="new-grocery"
                    />
                    <button type="submit" className="new-grocery-button">Add grocery</button>
                </form>
            </section>
        </>
    )
}

export default ShoppingList;
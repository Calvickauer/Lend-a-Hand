import * as itemAPI from "../utilities/item-api"
import React, { useState } from "react";

export default function AddItemPage({user}) {
    const [newItem, setNewItem] = useState({ text: ""});

    async function handleAddItem(evt) {
      evt.preventDefault();
      await itemAPI.addItem(newItem);
      setNewItem({ text: ""});
    }
  
    return (
      <>
        s<h2>New Item</h2>
        <form onSubmit={handleAddItem}>
          <input
            value={newItem.text}
            onChange={(e) => setNewItem(e.target.value)}
            required
          />
          <button type="submit">Add Item</button>
        </form>
      </>
    );
  
}
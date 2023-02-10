import { useState } from "react";
import * as itemAPI from '../utilities/item-api';


export default function AddItemPage() {

  

    const [newItem, setItem] = useState({ title: ""});

    async function handleAddItem(evt) {
      console.log(typeof(newItem));
      evt.preventDefault();
      const item = await itemAPI.create(newItem)
      console.log(item);
      
 
    }
  
    return (
      <div className="new__items">
        <h2>Add new item</h2>
        <form onSubmit={handleAddItem}>
          <input
            value={newItem.title}
            onChange={(e) => setItem(e.target.value)}
            required
          />
       
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  
}
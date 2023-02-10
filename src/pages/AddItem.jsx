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
      <div>
        <h2>Add new item</h2>
        <div className="new__items">
        <form onSubmit={handleAddItem}>
          <input
            value={newItem.title}
            onChange={(e) => setItem(e.target.value)}
            required
          />
       
          <button type="submit">Add Item</button>
        </form>
        </div>
      </div>
    );
  
}
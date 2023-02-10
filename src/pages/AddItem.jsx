import * as itemAPI from "../../utilities/item-api"
import { useState } from "react";

export default function addItemPage({user}) {

   

    const [newItem, setNewItem] = useState({ text: ""});

    function handleAddTodo(evt) {
      evt.preventDefault();
      addTodo(newTodo);
      setNewTodo({ text: "", completed: false });
    }
  
    return (
      <>
        s<h2>New To-Do</h2>
        <form onSubmit={handleAddTodo}>
          <input
            value={newTodo.text}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New To-Do"
            required
            pattern=".{4,}"
          />
          <button type="submit">ADD TO-DO</button>
        </form>
      </>
    );
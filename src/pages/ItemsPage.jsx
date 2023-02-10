import { useState, useEffect } from "react"
import * as itemsAPI from '../utilities/item-api'

export default function ItemsPage() {
    const [item, setItems] = useState([]);

    useEffect(function() {
        async function getItems() {
            const allItems = await itemsAPI.getAll();
            setItems(allItems);
        }
        getItems();
    }, []);

    return (
        <>
            <h1>Items</h1>
            {item.map((item, idx) => 
            <div>{item.title} </div>
            )}
        
        </>

    )
   
}


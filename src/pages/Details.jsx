import { useState, useEffect, useParams } from "react";
import * as itemAPI from '../utilities/item-api'


export default function Details() {

    const {it} = useParams()
    const [item, setItem] = useState([])


    useEffect(() => {
        const getItem = async () => {
          const item = await itemAPI.getItem(it);
          setItem(item);
        };
        getItem();
      }, []); 




    return (

        <table>
            <th>{item.title}</th>
            <tr>{item.image}</tr>
        </table>

    )
}
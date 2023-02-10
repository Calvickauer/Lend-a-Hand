import React, {useState, useEffect} from 'react';

import * as itemsAPI from '../../utilities/item-api'



const Profile = ({user}) => {
  console.log(user)

  const [item, setItems] = useState([]);

useEffect(() => {
    async function getItems() {
        const allItems = await itemsAPI.getOwned();
        setItems(allItems);
    }
    getItems();
}, []);

console.log(item)
  return (
    <div className='profile__page'>
       <h1>Profile Page</h1>
          <div className='profile__container'>
            <div className='profile__pic'></div>
            <div className='profile__content'>
            <h3>{user.name}</h3>
            <h4>ratings</h4>
            <h4>reviews</h4>
            <h4>about....</h4>
          </div>
      </div>
      <h1>Items</h1>
            {item.map((item, idx) => 
            <div>{item.title} </div>
            )}
    </div>
  )
}

export default Profile
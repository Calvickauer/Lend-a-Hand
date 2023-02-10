import React from "react";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/item-api";

const Homepage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

 const getItems = async () => {
  const items = await itemsAPI.getAll();
  setItems(items)
 };

 useEffect(() => {
  getItems();
 }, []);


  const filteredResults = items.filter((item, idx) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (

    <div>
      <h3>Homepage</h3>
      <div className="form__container">
        <form>
          <label className="search__label">Search for tools!</label>
          <input
            className="item__input"
            type="text"
            id="item-input"
            placeholder="Search items"
            onChange={handleSearch}
          />
        </form>
      </div>
      <div>
        {filteredResults.map((eye, idx) => (
          <div>{eye.title}</div>
        ))}
        
        
      </div>

    </div>
  );
};

export default Homepage;

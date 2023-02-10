import React from "react";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/item-api";
import { Link } from "react-router-dom";

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
<>
    <div>
      <h3 className="homepage__title">Lending Hand!</h3>
      <div className="form__container">
        <form className="form">
          <label className="search__label">Search for items to borrow!</label>
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
          <div>
          <table>
            <th>{eye.title}</th>
            <tr><img src={`${eye.image}`} alt="" style={{ width: "25rem", height: "25rem"}}/> </tr>
          </table>
            <button as={Link} to={`/items/${eye._id}`}>Info</button>

          </div>
        ))}
        
        
      </div>

    </div>
    </>
  );
};

export default Homepage;

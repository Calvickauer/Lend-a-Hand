import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Homepage from '../../components/Homepage/homepage';
import AddItemPage from '../AddItem';
import ItemsPage from '../ItemsPage';
import About from '../../components/About/about';
import Product from '../../pages/Product/Product'
import Profile from '../../pages/Profile/Profile';
import Details from '../Details';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<Homepage />} />
            <Route path='/add' element={<AddItemPage />} />
            <Route path='/items' element={<ItemsPage />} />
            <Route path='/about' element={<About />} />
            <Route path= 'search/product' element={<Product />} />
            <Route path='/user' element={<Profile user={user}/>} />
            <Route path='/items/:itemId' element={<Details user={user}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

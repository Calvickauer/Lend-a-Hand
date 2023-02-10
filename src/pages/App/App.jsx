import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
 ajcairel
import Homepage from '../../components/Homepage/Homepage';
import AddItemPage from '../AddItem';
import ItemsPage from '../ItemsPage';
 main
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
ajcairel
            <Route path='/add' element={<AddItemPage />} />
            <Route path='/items' element={<ItemsPage />} />
=======
 main
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

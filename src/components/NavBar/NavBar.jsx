import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className="navBar">
      <div className='nav__links'>
        <span className='lending'>Lending Hand</span>
      <span className='welcome__nav' >Welcome, {user.name}</span>   
      &nbsp; | &nbsp;
      <Link className='link' to="/">Search</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/add">Add</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/search/product">Product</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/user">Profile</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/about">About</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
    
  );
}
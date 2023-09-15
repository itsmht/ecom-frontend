import React from 'react';
import { Link } from 'react-router-dom';
// import quirky from '../../images/QUIRKY 3.png'
import './Searchbar.css'
const Navigation = () => {
    return (
      <>
        <div className="navbar p-4">
  <div className="navbar-start">
    <div className="dropdown">
    
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Item 1</Link></li>
        <li>
          <Link>Parent</Link>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl text-slate-950"></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Item 1</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul style={{zIndex:"1000"}} className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </details>
      </li>
      <li><Link>Item 3</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/signup' className="btn">Signup</Link>
  </div>
</div>


{/* ---------------------------search bar------------------------ */}
 <div className="navbar1">
      <div className="categories-dropdown">
        <select style={{padding:'15px'}} className=''>
          <option value="all">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <div className="search-bar">
        <input className="search-icon" type="text" placeholder="Search..."/>
        <span className="search-icon"></span>
      </div>
      <div  className="cart-icon">
    <i className="fas fa-coins"></i>
      <span style={{fontWeight:900}} id="coin-value">100</span> 
      </div>
    </div>







</>


    );
};

export default Navigation;
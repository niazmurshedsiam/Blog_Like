import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const header = () => {
    
    return (
        <div className='header'>
          
           
           <nav>
               <Link to='/profile'>My Profile </Link>
               <Link to='/user'> User</Link> 
               <Link to='/blog'> Blog</Link>
                 
           </nav>
          
        </div>
    );
};

export default header;
import React from 'react';
 import { Link } from 'react-router-dom';

 function Nav() {
    return(
        <>
        <Link to='/'>Home</Link>
        <Link to="/Students">Students</Link>
        <Link to="/ContactUs">ContactUs</Link>
        </>
    )
 }
 export default Nav;
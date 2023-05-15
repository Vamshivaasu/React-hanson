import React from 'react';
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav/>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/students">Students</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

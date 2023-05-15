import React from 'react';
import Nav from './Nav';

function ContactUs() {
  return (
    <div>
        <Nav/>
      <h1>Contact Us</h1>
      <p>Phone: 123-456-7890</p>
      <p>Email: contactus@example.com</p>
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

export default ContactUs;

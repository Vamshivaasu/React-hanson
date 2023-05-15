import React from 'react';
import Nav from './Nav'

function Students() {
  return (
    <div>
        <Nav/>

      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>18</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>17</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>16</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
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

export default Students;

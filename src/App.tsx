import React from 'react';
import { Routes,Route,Link } from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/users"}>Users</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/users' element={<Users/>}></Route>

    </Routes>
    </>
  );
}

export default App;

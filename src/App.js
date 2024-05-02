import React from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom"
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import Login from "./pages/login/Login"

import Auth from "./Auth/Auth"


function App() {
  return (
    <div className="App">
      {/* <Aside/>
      <Header/>
      <Main/>
      <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />} >
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

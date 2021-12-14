// Imports
import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

import Dashboard from "./components/pages/dashboard";
import Messages from "./components/pages/messages";
import Gallery from "./components/pages/gallery";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Calendar from "./components/pages/calendar";
import AboutUs from "./components/pages/AboutUs";


export default function App() {


  return (
    <Router>
      <div>
        <nav>
          
        </nav>

         

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />

          <Route path='/messages' element={<Messages/>} />

          <Route path='/gallery' element={<Gallery/>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/signup' element={<Signup/>} />

          <Route path='/calendar' element={<Calendar/>} />

          <Route path='/about' element={<AboutUs/>} />




        </Routes>

        
      </div>

    </Router>
  );
}

// Renders main app
ReactDOM.render(<App />, document.getElementById("root"));

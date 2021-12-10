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
import Schedule from "./components/pages/schedule";
import Gallery from "./components/pages/gallery";
import Login from "./components/pages/login";


//import Rightbar from './components/navbars/rightbar';
//import Leftbar from './components/navbars/Leftbar';


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

          <Route path='/schedule' element={<Schedule/>} />

          <Route path='/messages' element={<Messages/>} />

          <Route path='/gallery' element={<Gallery/>} />

          <Route path='/login' element={<Login/>} />


        </Routes>

        
      </div>

    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

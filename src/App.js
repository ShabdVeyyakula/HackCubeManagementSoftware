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
import firebase from '../src/firebase/init'
//import Rightbar from './components/navbars/rightbar';
//import Leftbar from './components/navbars/Leftbar';


export default function App() {
  console.log("hello");

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


        </Routes>

        
      </div>

    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

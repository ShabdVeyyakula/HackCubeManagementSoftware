import React from "react";
import ReactDOM from "react-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



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

  function constructor(props) {
    super(props);     
    this.state = {
        usernameLogin: '',
        passwordLogin: "",
        usernameSignup: "",
        passwordSignup: "",
        texts: []
    };

    this.handleChangeLoginUsername = this.handleChangeLoginUsername.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);

    this.handleChangeSignupUsername = this.handleChangeSignupUsername.bind(this);
    this.handleChangeSignupPassword = this.handleChangeSignupPassword.bind(this);

    this.login = this.login.bind(this);
    this.createFirebaseUser = this.createFirebaseUser.bind(this);


}

  function handleChangeLoginUsername(event) {  this.setState({usernameLogin:  event.target.value})  }

  function handleChangeLoginPassword(event) {  this.setState({passwordLogin:  event.target.value})  }

  function handleChangeSignupUsername(event) {  this.setState({usernameSignup:  event.target.value})  }

  function handleChangeSignupPassword(event) {  this.setState({passwordSignup:  event.target.value})  }


  console.log("hello");

  function createFirebaseUser(){

    if(this.state.usernameSignup != "" && this.state.passwordSignup != ""){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, 'test@gmail.com', 'password123')
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
          // ..
        });
    } else {
      console.log("Fields are empty")
    }

    
  }


  function login(){

    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'test@gmail.com', 'password123')
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("LOGIN SUCCESS")
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
}

  return (
    <Router>
      <div>

        <input value = {this.state.usernameLogin} onChange = {handleChangeLoginUsername}/>
        <input value = {this.state.passwordLogin} onChange = {handleChangeLoginPassword}/>


        <button onClick = {login}>Login</button>


        <input value = {this.state.usernameSignup} onChange = {handleChangeSignupUsername}/>
        <input value = {this.state.passwordSignup} onChange = {handleChangeSignupPassword}/>



        <button onClick = {createFirebaseUser}>Create Creds</button>


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

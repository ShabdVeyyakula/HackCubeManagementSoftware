import React, { Component } from 'react';
import '../../Login.css';
import firebase from '../../firebase/init';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from 'react-router-dom';


export default class Login extends Component {
    

   constructor(props) {
    super(props);     
    this.state = {
        usernameLogin: '',
        passwordLogin: "",
        usernameSignup: "",
        passwordSignup: "",
        texts: [],
        errorMessageLogin: "",
        redirect: false
    };

    this.handleChangeLoginUsername = this.handleChangeLoginUsername.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);

    this.handleChangeSignupUsername = this.handleChangeSignupUsername.bind(this);
    this.handleChangeSignupPassword = this.handleChangeSignupPassword.bind(this);

    this.login = this.login.bind(this);
    this.createFirebaseUser = this.createFirebaseUser.bind(this);


}



  handleChangeLoginUsername(event) { event.preventDefault(); this.setState({usernameLogin: event.target.value})  }

   handleChangeLoginPassword(event) {  this.setState({passwordLogin: event.target.value})  }

   handleChangeSignupUsername(event) {  this.setState({usernameSignup: event.target.value})  }

   handleChangeSignupPassword(event) {  this.setState({passwordSignup: event.target.value})  }


  createFirebaseUser(){

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


  login(){

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.usernameLogin, this.state.passwordLogin)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("LOGIN SUCCESS")
        console.log(user)
        this.state.errorMessageLogin = ""
        this.setState({})

        //this.setRedirect()
        let navigate = useNavigate();

        navigate("login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        this.state.errorMessageLogin = errorMessage
        this.setState({})
      });
}

    render() {
        return (
            <div>
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-70">
						Login
					</span>

					<div class="wrap-input100 validate-input m-t-85 m-b-35 spaceButton" data-validate = "Enter username">
						<input class="input100" type="text" placeholder="username" value = {this.state.usernameLogin} onChange = {this.handleChangeLoginUsername}/>
						<span class="focus-input100" data-placeholder="Username"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-50 spaceButton" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder = "password" value = {this.state.passwordLogin} onChange = {this.handleChangeLoginPassword}/>
						<span class="focus-input100" data-placeholder="Password" ></span>
					</div>

                    <div>
                        <p className = "redText">{this.state.errorMessageLogin}</p>
                    </div>

					<div class="container-login100-form-btn spaceButton">
						<button type="button" class="login100-form-btn" onClick= {this.login}>
							Login
						</button>
					</div>

					<ul class="login-more p-t-190 spaceButton">
						<li>
							<span class="txt1">
								Don’t have an account?
							</span>

							<a href="/signup" class="txt2 spaceWidth">
								Sign up
							</a>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
                
            </div>
        )
    }
}

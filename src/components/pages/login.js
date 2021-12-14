// Imports
import React, { Component } from 'react';
import '../../Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default class Login extends Component {
    
    // Default constructor with initial values
   constructor(props) {
    super(props);     
    this.state = {
        usernameLogin: '',
        passwordLogin: "",
        texts: [],
        errorMessageLogin: "",
        redirect: null,
    };
    this.handleChangeLoginUsername = this.handleChangeLoginUsername.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);
    this.login = this.login.bind(this);
    }

    handleChangeLoginUsername(event)  { this.setState({usernameLogin: event.target.value}) } // Handles username login input value onChange
    handleChangeLoginPassword(event)  { this.setState({passwordLogin: event.target.value}) } // Handles password login input value onChange

    // Logs user into firebase auth
  login(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.usernameLogin, this.state.passwordLogin)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("LOGIN SUCCESS")
        console.log(user)
        this.state.errorMessageLogin = ""
        this.setState({redirect: "/dashboard"})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)

        if(errorMessage == "Firebase: Error (auth/wrong-password)."){
            this.state.errorMessageLogin = "Incorrect Credentials"
        } else {
            this.state.errorMessageLogin = errorMessage
        }
        this.setState({})
      });
    }

    // Renders output to screen
    render() {
        if (this.state.redirect) {
            return <Navigate  to={this.state.redirect} />
          }

        return (
            <div>
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
				<div class="login100-form validate-form">
					<span class="login100-form-title p-b-70">
						Login
					</span>

					<div class="wrap-input100 validate-input m-t-85 m-b-35 spaceButton" data-validate = "Enter username">
						<input class="input100" type="text" placeholder="Email" value = {this.state.usernameLogin} onChange = {this.handleChangeLoginUsername}/>
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-50 spaceButton" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder = "Password" value = {this.state.passwordLogin} onChange = {this.handleChangeLoginPassword}/>
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
				</div>
			</div>
		</div>
	</div>
	
	<div id="dropDownSelect1"></div>
                
            </div>
        )
    }
}

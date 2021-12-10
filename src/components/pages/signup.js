import React, { Component } from 'react';
import '../../Login.css';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Navigate } from "react-router-dom";

export default class Signup extends Component {
    

   constructor(props) {
    super(props);     
    this.state = {
        usernameSignup: "",
        passwordSignup: "",
        texts: [],
        errorMessageLogin: "",
        redirect: null,
    };

    this.handleChangeSignupUsername = this.handleChangeSignupUsername.bind(this);
    this.handleChangeSignupPassword = this.handleChangeSignupPassword.bind(this);

    this.createFirebaseUser = this.createFirebaseUser.bind(this);


}



    handleChangeSignupUsername(event) { this.setState({usernameSignup: event.target.value})}
    handleChangeSignupPassword(event) { this.setState({passwordSignup: event.target.value})}


  createFirebaseUser(){

    if(this.state.usernameSignup != "" && this.state.passwordSignup != ""){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.state.usernameSignup, this.state.passwordSignup)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)

          this.state.errorMessageLogin = ""
          this.setState({redirect: "/login"})
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
          this.state.errorMessageLogin = errorMessage
          this.setState({})
          // ..
        });
    } else {
        this.state.errorMessageLogin = "Fields cannot be empty"
          this.setState({})
      console.log("Fields are empty")
    }

    
  }



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
						Signup
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
				</div>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
                
            </div>
        )
    }
}

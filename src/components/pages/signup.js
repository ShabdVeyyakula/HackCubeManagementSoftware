import React, { Component } from 'react';
import '../../Login.css';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { onSnapshot, collection, query, addDoc, orderBy} from "firebase/firestore";
import db from '../../firebase/init';

import { Navigate } from "react-router-dom";

export default class Signup extends Component {
    

   constructor(props) {
    super(props);     
    this.state = {
        usernameSignup: "",
        passwordSignup: "",
        name: "",
        texts: [],
        errorMessageLogin: "",
        redirect: null,
    };

    this.handleChangeSignupUsername = this.handleChangeSignupUsername.bind(this);
    this.handleChangeSignupPassword = this.handleChangeSignupPassword.bind(this);
    this.handleChangeSignupName = this.handleChangeSignupName.bind(this);


    this.createFirebaseUser = this.createFirebaseUser.bind(this);


}



    handleChangeSignupUsername(event) { this.setState({usernameSignup: event.target.value})}
    handleChangeSignupPassword(event) { this.setState({passwordSignup: event.target.value})}
    handleChangeSignupName(event) { this.setState({name: event.target.value})}



  async createFirebaseUser(){

    if(this.state.usernameSignup != "" && this.state.passwordSignup != "" && this.state.name != ""){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.state.usernameSignup, this.state.passwordSignup)
        .then(async (userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)

          const auth = getAuth();

            updateProfile(auth.currentUser, {
                displayName: this.state.name,
            }).then(async () => {
                // Profile updated!

                await addDoc(collection(db.db, "Clubs/0001/Users"), {
                  email: auth.currentUser.email,
                  name: auth.currentUser.displayName,
                  })
                  

                    this.state.errorMessageLogin = ""
                    this.setState({redirect: "/login"})

                // ...
            }).catch((error) => {
                // An error occurred
                this.state.errorMessageLogin = error.message
                // ...
            });
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
						<input class="input100" type="text" placeholder="Email" value = {this.state.usernameSignup} onChange = {this.handleChangeSignupUsername}/>
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-50 spaceButton" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder = "Password" value = {this.state.passwordSignup} onChange = {this.handleChangeSignupPassword}/>
						<span class="focus-input100" data-placeholder="Password" ></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-50 spaceButton" data-validate="Enter Name">
						<input class="input100" type="text" name="pass" placeholder = "Full Name" value = {this.state.name} onChange = {this.handleChangeSignupName}/>
						<span class="focus-input100" data-placeholder="Full Name" ></span>
					</div>

                    <div>
                        <p className = "redText">{this.state.errorMessageLogin}</p>
                    </div>

					<div class="container-login100-form-btn spaceButton">
						<button type="button" class="login100-form-btn" onClick= {this.createFirebaseUser}>
							Signup
						</button>
					</div>

					<ul class="login-more p-t-190 spaceButton">
						<li>
							<span class="txt1">
								Already have an account?
							</span>

							<a href="/login" class="txt2 spaceWidth">
								Login
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

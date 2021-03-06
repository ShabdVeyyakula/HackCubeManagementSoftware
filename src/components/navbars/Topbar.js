import React, { Component } from 'react'
import Cube from '../navbars/icons/tabler-icon-box.svg'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";


export class Topbar extends Component {


    // Default constructor with initial values
    constructor(props) {
        super(props);     
        this.state = {
            redirect: null,
        }
    }
    

    // Logs out of firebase
    logout(){
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("Signed out")
          window.location = "/login"

        }).catch((error) => {
          // An error happened.
        });
        
    }

    // Renders output to screen
    render() {

        if (this.state.redirect) {
            return <Navigate  to={this.state.redirect} />
          }

        return (
            <div>
                <div className = "topbar-container">
                    <div className = "row">
                        <div className = "col-1">
                        <img src = {Cube} className = "icon-topbar"/>
                        </div>

                        <div className = "col-7">
                        <p className  = "topbar-text">Hackcube</p>

                        </div>

                        <div className='logout col-3'>
                            <a onClick = {this.logout}><p className='logout-txt'>Logout</p></a>
                        </div>
                        
                        </div>
                </div>
            </div>
        )
    }
}

export default Topbar

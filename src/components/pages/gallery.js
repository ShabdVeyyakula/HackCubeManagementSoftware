import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import Galleryitem from '../reusable/Galleryitem';
import { getAuth } from "firebase/auth";

export class gallery extends Component {

    constructor(props) {
        super(props);     
        this.state = {
            name: "",
        }
    }
    

    getUser(){
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
            this.state.name = displayName;
            this.setState({})
        }

    }

    componentDidMount() {
        // your source code to load initial data
        this.getUser();
    }

    render() {
        return (
            <div>
                <div className = "pageLayout">
                    <Leftbar />
                    <div className = "centerSection">
                        <Topbar />
                            <div className ="row">

                                <div className = "col-md-3">
                                    <Galleryitem />
                                </div>

                                <div className = "col-md-3">
                                    <Galleryitem />
                                </div>

                                <div className = "col-md-3">
                                    <Galleryitem />
                                </div>

                            </div>
                    </div>

                    <Rightbar name = {this.state.name}/>

                </div>
            </div>
        )
    }
}

export default gallery


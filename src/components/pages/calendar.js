import React, { Component } from 'react'

import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import { getAuth } from "firebase/auth";
import Eventcalendar from '../reusable/Eventcalendar';



export class calendar extends Component {

   // Default constructor with initial values
    constructor(props) {
        super(props);     
        this.state = {
            name: "",
        }
    }
    
    // Gets locally signed in user from firebase auth instance
    getUser(){
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;
            this.state.name = displayName;
            this.setState({})
        }
    
    }


    // Executes code with component mounts (on load)
    componentDidMount() {
        this.getUser();
    }

    // Renders output to the screen
    render() {
        return (
            <div>
                <div className = "someBackground"> 
                <div className = "pageLayout">
                    <Leftbar page = "calendar"/>
                    <div className = "centerSection fghjk">
                        <Topbar />
                        <Eventcalendar />
                    </div>
                    <Rightbar name = {this.state.name}/>
                </div> 
            </div>
            </div>
        )
    }
}

export default calendar

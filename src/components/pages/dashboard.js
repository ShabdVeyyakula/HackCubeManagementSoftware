import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import Event from '../reusable/Event'
import Chat from '../reusable/Chat'
import { getAuth } from "firebase/auth";



export class dashboard extends Component {

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
            <div className = "someBackground"> 
                <div className = "pageLayout">
                    <Leftbar />
                    <div className = "centerSection">
                        <Topbar />
                            <div class="d-flex justify-content-center">
                                <div className = "box-stats-dashboard">
                                            <center className = 'stats-box-interior'>
                                                <div className = "row">
                                                    <div className = "col">
                                                        <p className = "stats-box-title">Upcoming Events</p>
                                                        <p className = "stats-box-subtitle">50</p>
                                                    </div>

                                                    <div className = "col">
                                                        <p className = "stats-box-title">Attended Events</p>
                                                        <p className = "stats-box-subtitle">50</p>
                                                    </div>

                                                    <div className = "col">
                                                        <p className = "stats-box-title">Club Members</p>
                                                        <p className = "stats-box-subtitle">50</p>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                </div>

                                <div className="row">
                                    <div className = "col">
                                        <Chat nameGiven = {this.props.name}/>
                                    </div>

                                    <div className = "col">
                                        <h1 className='eventsSec'>Events</h1>
                                        <div className='eventBigBox'>
                                            <Event type = "online"/>
                                            <Event type = "inperson"/>
                                            <Event type = "inperson"/>
                                            <Event type = "inperson"/>
                                            <Event type = "inperson"/>
                                            <Event type = "inperson"/>
                                        </div>

                                    </div>

                           
                            
                                </div>
                    </div>
                    <Rightbar name = {this.state.name}/>
                </div> 
            </div>
        )
    }
}


export default dashboard;

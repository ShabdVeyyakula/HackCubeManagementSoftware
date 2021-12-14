// Imports
import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import Event from '../reusable/Event'
import Chat from '../reusable/Chat'
import { getAuth } from "firebase/auth";
import { doc, onSnapshot, collection, query, where, getDoc, addDoc, orderBy} from "firebase/firestore";
import db from '../../firebase/init';

export class dashboard extends Component {

    // Default constructor with initial values
    constructor(props) {
        super(props);     
        this.state = {
            name: "",
            eventsList: [],
            users: 0,
            eventsListLength: 0,
        }
    }

    // Gest the clubs stats such as upcoming events and club member count
    async getClubStats() {
        const q = query(collection(db.db, "Clubs/0001/Users"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            var usersCount = 0;
            querySnapshot.forEach((doc) => {
                try{
                    var data = doc.data();
                    usersCount += 1
                    
                } catch (e){
                    console.log("error with pushing")
                }
            });
                this.setState({users: usersCount});
            });
            console.log("did it work??")
    }

    // Gets the upcomming events for the club
    async getEvents() {
        const q = query(collection(db.db, "Clubs/0001/Events"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            var items = [];
            var len = 0;
            querySnapshot.forEach((doc) => {
                try{
                    var data = doc.data();
                    console.log(data);
                    len += 1
                    if (data.type == "online") {
                        items.push(<Event eventName={data.name} eventDate = {data.date} type="online" />);
                    } else {
                        items.push(<Event eventName={data.name} eventDate = {data.date} type="inperson" />);
                    }
                    
                } catch (e){
                    console.log("error with pushing")
                }
            });
                this.eventsList = items;
                this.state.eventsListLength = len
                this.setState({});
            });
            console.log("did it work??")
    }

    

    ///Gets locally signed in user from firebase auth instance
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


    // Initial on load to execute functions
    componentDidMount() {
        this.getUser();
        this.getEvents();
        this.getClubStats();
    }


    //Renders output to the screen
    render() {

        return (
            <div className = "someBackground"> 
                <div className = "pageLayout">
                    <Leftbar page = "dashboard"/>
                    <div className = "centerSection">
                        <Topbar />
                            <div class="d-flex justify-content-center">
                                <div className = "box-stats-dashboard">
                                            <center className = 'stats-box-interior'>
                                                <div className = "row">
                                                    <div className = "col">
                                                        <p className = "stats-box-title">Upcoming Events</p>
                                                        <p className = "stats-box-subtitle">{this.state.eventsListLength}</p>
                                                    </div>

                                                    <div className = "col">
                                                        <p className = "stats-box-title">Attended Events</p>
                                                        <p className = "stats-box-subtitle">0</p>
                                                    </div>

                                                    <div className = "col">
                                                        <p className = "stats-box-title">Club Members</p>
                                                        <p className = "stats-box-subtitle">{this.state.users}</p>
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
                                            {this.eventsList}
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

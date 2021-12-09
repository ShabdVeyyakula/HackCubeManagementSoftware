import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import Event from '../reusable/Event'
import Chat from '../reusable/Chat'
import { doc, onSnapshot, collection, query, where, getDoc} from "firebase/firestore";
import db from '../../firebase/init';


async function test(){

    const q = query(collection(db.db, "Clubs/0001/Chats"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
        try{
            cities.push(doc.data());
        } catch (e){
            console.log("error with pushing")
        }
        
    });
    console.log("Current cities in CA: ", cities);
    });


    /*
    const q = query(collection(db, "buddies"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log("Data", querySnapshot.docs.map(d => doc.data()));
    });
    */


    console.log("hello1111")
}

export class dashboard extends Component {



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
                                        <Chat/>
                                    </div>

                                    <div className = "col">
                                        <Event/>
                                    </div>
                            
                                </div>
                    </div>
                    <Rightbar />
                </div> 
            </div>
        )
    }
}
test();

export default dashboard;

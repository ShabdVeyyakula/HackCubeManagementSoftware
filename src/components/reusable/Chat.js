import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ChatContentDashboardLeft from './ChatContentDashboardLeft'
import ChatContentDashboardRight from './ChatContentDashboardRight'

import '../../App.css'

import { doc, onSnapshot, collection, query, where, getDoc} from "firebase/firestore";
import db from '../../firebase/init';


var texts = [{"from": "hello"}];
var items = [];

async function test(){

    const q = query(collection(db.db, "Clubs/0001/Chats"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
        try{
            cities.push(doc.data());
            var data = doc.data();

            items.push(<ChatContentDashboardRight  name={data.from} text = {data.text} />);
        } catch (e){
            console.log("error with pushing")
        }
        
    });

    texts = cities;
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

async function sendText(){
    
}


export class Chat extends Component {
    render() {
        return (
            <div>
                <div className="chatBox">

                    <div className = "chatBoxtitle">Chat</div>

                    <div className = "chatBoxContent">
                        {items}
                    
                        <ChatContentDashboardLeft/>
                        
                    </div>

                    <div class="d-flex justify-content-center">
                        <div className = "rowFlex">
                            <input  className = "chatBoxSubmitBox"></input>
                            <button className = "chatBoxSubmitButton">&gt;</button>

                        </div>
                    </div>
                    
                   
                    
                    
                    
                </div>
            </div>
        )
    }
}

test();
export default Chat

// Imports
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ChatContentDashboardLeft from './ChatContentDashboardLeft'
import ChatContentDashboardRight from './ChatContentDashboardRight'
import { getAuth } from "firebase/auth";
import '../../App.css'
import { onSnapshot, collection, query, addDoc, orderBy} from "firebase/firestore";
import db from '../../firebase/init';

class Chat extends Component {
    
    // Default constructor with initial values
    constructor(props) {
        super(props);     
        this.state = {
            textInput: '',
            texts: [],
            name: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendText = this.sendText.bind(this);
    }

    
    handleChange(event) {  this.setState({textInput:  event.target.value})  } // Handles text input value onChange

    // Gets texts of global chat from firestore db
    async getTexts(){

        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            this.state.name =  displayName;
            this.setState({})
            const q = query(collection(db.db, "Clubs/0001/Chats"), orderBy("timestamp", "asc"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            var items = [];
            querySnapshot.forEach((doc) => {
                try{
                    var data = doc.data();

                    if(data.from !== "" && data.text !== ""){
                        if(data.from == this.state.name){
                            items.push(<ChatContentDashboardRight  name={data.from} text = {data.text} />);
                        } else {
                            items.push(<ChatContentDashboardLeft  name={data.from} text = {data.text} />);
                        }
                    }

                } catch (e){
                    console.log("error with pushing")
                }
            });
            this.texts = items;
            this.setState({texts: items})
            this.scrollToBottom();
            });

        }
    
        console.log("hello1111")
    }

    // Scrolls to bottom of div
    scrollToBottom = () => {
        try{
            var objDiv = document.getElementById("messagesList");
            objDiv.scrollTop = objDiv.scrollHeight;
        } catch(e){
            console.log("ERROR")
        }
      }
      
    // Executes code with component mounts (on load)
    componentDidMount() {
        // your source code to load initial data
        this.getTexts();
    }

    // Sends text to global chat, inserts doc to firestore db
    async sendText(){
        console.log(this.state.textInput)
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            if(this.state.textInput != ""){
                await addDoc(collection(db.db, "Clubs/0001/Chats"), {
                    from: displayName,
                    text: this.state.textInput,
                    timestamp: Math.floor(Date.now() / 1000).toString()
                  });
                  this.state.textInput = ""
                  this.setState({textInput: ""})
            }
        }
    }
    
    // Renders output to screen  
    render() {
        return (
            <div>
                <div className="chatBox">
                    <div className = "chatBoxtitle">Chat</div>
                    <div className = "chatBoxContent" id = "messagesList">
                        {this.texts}
                    </div>

                    <div class="d-flex justify-content-center">
                        <div className = "rowFlex">
                            <input  type="text" value = {this.state.textInput} onChange={this.handleChange} className = "chatBoxSubmitBox"></input>
                            <button className = "chatBoxSubmitButton" onClick = {this.sendText}>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat

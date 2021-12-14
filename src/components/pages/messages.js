import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import { getAuth } from "firebase/auth";
import MessageContentFrom from '../reusable/MessageContentFrom';
import MessageContentTo from '../reusable/MessageContentTo';
import { onSnapshot, collection, query, addDoc, orderBy} from "firebase/firestore";
import db from '../../firebase/init';

export class messages extends Component {

        constructor(props) {
        super(props);     
        this.state = {
            name: "",
            textInput: '',
            texts: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendText = this.sendText.bind(this);
    }

    
    handleChange(event) {  this.setState({textInput:  event.target.value})  }

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

                    console.log(data)

                    if(data.from !== "" && data.text !== ""){
                        if(data.from == this.state.name){
                            items.push(<MessageContentFrom  name={data.from} message = {data.text} />);
                        } else {
                            items.push(<MessageContentTo  name={data.from} message = {data.text} />);
                        }
                    }

                } catch (e){
                    console.log("error with pushing")
                }
                
            });

            this.texts = items;
            this.setState({texts: items})
            this.scrollToBottom();


            //Chat.setState({update: 'Hello'});
            });

        }
    
        console.log("hello1111")
    }

    scrollToBottom = () => {
        try{
            var objDiv = document.getElementById("messagesList");
            objDiv.scrollTop = objDiv.scrollHeight;
        } catch(e){
            console.log("ERROR")
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

    async sendText(){
        //this.stateState({})
        console.log(this.state.textInput)

        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            //const email = user.email;
            //const photoURL = user.photoURL;
            //const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            //const uid = user.uid;

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

    
    componentDidMount() {
        // your source code to load initial data
        this.getUser();
        this.getTexts();
    }
    render() {
        return (
            <div>
                 <div>
                <div className = "someBackground"> 
                <div className = "pageLayout">
                    <Leftbar page = "messages"/>
                    <div className = "centerSection">
                        <Topbar />

                        <div className = "rowFlex">

                            <div className = "messagesPageSideBar">

                                <h1 className = "messagesPageHead">Messages</h1>

                                <div className = "messagesPageClubChat">

                                    <h2>Club Chat</h2>
                                    <h4>New Messages</h4>

                                </div>

                            </div>

                            <div className = "messagesPageMainBar">

                                <div className = "messagesPageContentBox">

                                    {this.state.texts}
                                    
                                </div>

                                <div className = "rowFlex sendBarMessagesPage">
                                    <input className = "messagesPageTextBox" value = {this.state.textInput} onChange = {this.handleChange}/>

                            
                                    <button className = "messagesPageSendButton" onClick = {() => this.sendText()}>&gt;</button>
                                </div>
                                

                            </div>

                        </div>
                            
                    </div>
                    <Rightbar name = {this.state.name}/>
                </div> 
            </div>
            </div>
            </div>
        )
    }
}

export default messages;

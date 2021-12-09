import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ChatContentDashboardLeft from './ChatContentDashboardLeft'
import ChatContentDashboardRight from './ChatContentDashboardRight'
import ScrollToBottom from 'react-scroll-to-bottom';

import '../../App.css'

import { doc, onSnapshot, collection, query, where, getDoc, addDoc, orderBy} from "firebase/firestore";
import db from '../../firebase/init';


/*

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
    //Chat.setState({update: 'Hello'});
    });


    
    const q = query(collection(db, "buddies"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log("Data", querySnapshot.docs.map(d => doc.data()));
    });
    


    console.log("hello1111")
}

async function sendText(){
    var textInput = textSend

    //this.stateState({})


    console.log(textSend)

    if(textInput != ""){
        await addDoc(collection(db.db, "Clubs/0001/Chats"), {
            from: "Shabd Veyyakula",
            text: textInput,
            timestamp: Math.floor(Date.now() / 1000).toString()
          });

          textInput = ""
    }



}

*/

class Chat extends Component {

    constructor(props) {
        super(props);     
        this.state = {
            textInput: '',
            texts: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendText = this.sendText.bind(this);

    }

    
    handleChange(event) {  this.setState({textInput:  event.target.value})  }

    async getTexts(){

        const q = query(collection(db.db, "Clubs/0001/Chats"), orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities = [];
        var items = [];
        querySnapshot.forEach((doc) => {
            try{
                cities.push(doc.data());
                var data = doc.data();
    
                items.push(<ChatContentDashboardRight  name={data.from} text = {data.text} />);
            } catch (e){
                console.log("error with pushing")
            }
            
        });
    
        this.texts = items;
        console.log("Current cities in CA: ", cities);
        this.setState({texts: cities})
        //document.getElementById('textsBoxScroll').current.scrollIntoView({ behavior: "smooth" })

        //Chat.setState({update: 'Hello'});
        });

        /*
        const q = query(collection(db, "buddies"))
        const unsub = onSnapshot(q, (querySnapshot) => {
          console.log("Data", querySnapshot.docs.map(d => doc.data()));
        });
        */
    
        console.log("hello1111")
    }

    componentDidMount() {
        // your source code to load initial data
        this.getTexts();
    }

    


    async sendText(){
    
        //this.stateState({})
    
        console.log(this.state.textInput)
    
        if(this.state.textInput != ""){
            await addDoc(collection(db.db, "Clubs/0001/Chats"), {
                from: "Shabd Veyyakula",
                text: this.state.textInput,
                timestamp: Math.floor(Date.now() / 1000).toString()
              });
    
              this.state.textInput = ""
              this.setState({textInput: ""})
        }
    }
    
    
    render() {
        return (
            <div>
                <div className="chatBox">

                    <div className = "chatBoxtitle">Chat</div>

                    <div className = "chatBoxContent" id = "textsBoxScroll">
                        {this.texts}
                    
                        <ChatContentDashboardLeft/>
                        
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

//test();
export default Chat

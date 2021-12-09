import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ChatContentDashboard from '../reusable/ChatContentDashboard'
import '../../App.css'


export class Chat extends Component {
    render() {
        return (
            <div>
                <div className="chatBox">

                    <div className = "chatBoxtitle">Chat</div>

                    <div className = "chatBoxContent">
                        <ChatContentDashboard />
                        
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

export default Chat

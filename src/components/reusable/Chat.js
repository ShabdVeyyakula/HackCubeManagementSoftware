import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export class Chat extends Component {
    render() {
        return (
            <div>
                <div className="chatBox">

                    <div className = "chatBoxtitle">Chat</div>

                    <div className = "chatBoxContent">.</div>

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

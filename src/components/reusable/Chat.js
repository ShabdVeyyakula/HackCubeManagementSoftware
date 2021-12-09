import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ChatContentDashboardLeft from './ChatContentDashboardLeft'
import ChatContentDashboardRight from './ChatContentDashboardRight'

import '../../App.css'


export class Chat extends Component {
    render() {
        return (
            <div>
                <div className="chatBox">

                    <div className = "chatBoxtitle">Chat</div>

                    <div className = "chatBoxContent">
                        <ChatContentDashboardLeft />
                        <ChatContentDashboardRight />
                        
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

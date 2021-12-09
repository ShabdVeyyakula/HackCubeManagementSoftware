import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Profilepic from '../navbars/icons/Profilepic'
import '../../App.css'


export class ChatContentDashboardLeft extends Component {
    render() {
        return (
            <div className = "chatBoxContentSpaced">
                <div className="rowFlex">
                    <Profilepic/>

                    <div className = "chatContentDashboardContentContainer">
                        <h2>Shabd Veyyakula</h2>
                        <h4 className = "chatContentDashboardMessage">Hello this is a test message can you see this. I hope that you can since I sent you this text message lol.</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatContentDashboardLeft

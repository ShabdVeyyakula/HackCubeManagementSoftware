import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Profilepic from '../../components/navbars/icons/Profilepic'
import '../../App.css'


export class ChatContentDashboard extends Component {
    render() {
        return (
            <div className = "chatBoxContentSpaced">
                <div className="rowFlex">
                    <Profilepic/>

                    <div className = "chatContentDashboardContentContainer">
                        <h1>Shabd Veyyakula</h1>
                        <h4 className = "chatContentDashboardMessage">Hello this is a test message can you see this. I hope that you can since I sent you this text message lol.</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatContentDashboard

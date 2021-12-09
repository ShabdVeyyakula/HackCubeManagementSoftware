import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Profilepic from '../navbars/icons/Profilepic'
import '../../App.css'


export class ChatContentDashboardRight extends Component {
    render() {
        return (
            <div className = "chatBoxContentSpaced">
                <div className="rowFlex">

                    <div className = "chatContentDashboardContentContainerRight">
                            <h1>Shabd Veyyakula</h1>
                            <h4 className = "chatContentDashboardMessage">Hello this is a test message can you see this. I hope that you can since I sent you this text message lol.</h4>
                        </div>

                    <Profilepic/>

                </div>
            </div>
        )
    }
}

export default ChatContentDashboardRight

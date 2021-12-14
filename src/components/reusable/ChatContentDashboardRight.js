// Imports
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Profilepic from '../navbars/icons/Profilepic'
import '../../App.css'


export class ChatContentDashboardRight extends Component {
    // Renders output to screen
    render() {
        return (
            <div className = "chatBoxContentSpaced">
                <div className="rowFlex">
                    <div className = "chatContentDashboardContentContainerRight">
                            <h2>{this.props.name}</h2>
                            <h4 className = "chatContentDashboardMessage">{this.props.text}</h4>
                        </div>

                    <Profilepic/>

                </div>
            </div>
        )
    }
}

export default ChatContentDashboardRight

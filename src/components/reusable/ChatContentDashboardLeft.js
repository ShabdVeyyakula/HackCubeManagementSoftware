// Imports
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Profilepic from '../navbars/icons/Profilepic'
import '../../App.css'


export class ChatContentDashboardLeft extends Component {
    
    // Renders output to screen
    render() {
        return (
            <div className = "chatBoxContentSpacedLeft">
                <div className="rowFlex">
                    <Profilepic/>

                    <div className = "chatContentDashboardContentContainer">
                        <h2>{this.props.name}</h2>
                        <h4 className = "chatContentDashboardMessage">{this.props.text}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatContentDashboardLeft

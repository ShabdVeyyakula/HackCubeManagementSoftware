// Imports
import React, { Component } from 'react'

export class MessageContentTo extends Component {
    
    // Renders output to screen
    render() {
        return (
            <div>
                 <div className = "messagesPageMessageTo">
                    <h3 className = "messagesPageMessageToTitle">{this.props.name}</h3>
                    <p className = "messagesPageMessageToText" >{this.props.message}</p>
                </div>
                
            </div>
        )
    }
}

export default MessageContentTo

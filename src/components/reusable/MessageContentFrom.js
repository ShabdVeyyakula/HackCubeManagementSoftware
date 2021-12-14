import React, { Component } from 'react'
import '../../App.css'

export class MessageContentFrom extends Component {
    render() {
        return (
            <div>
                <div className = "messagesPageMessageFrom">
                    <h3 className = "messagesPageMessageFromTitle">{this.props.name}</h3>
                    <p className = "messagesPageMessageFromText" >{this.props.message}</p>
                </div>
                
            </div>
        )
    }
}

export default MessageContentFrom

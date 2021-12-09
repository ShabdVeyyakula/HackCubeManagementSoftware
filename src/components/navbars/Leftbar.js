import React, { Component } from 'react'
import '../../App.css'
import Profilepic from '../../components/navbars/icons/Profilepic'
import Calendar from '../../components/navbars/icons/tabler-icon-calendar-event.svg'
import Message from '../../components/navbars/icons/tabler-icon-message.svg'
import Pin from '../../components/navbars/icons/tabler-icon-pin.svg'
import Box from '../../components/navbars/icons/tabler-icon-box.svg'




export class leftbar extends Component {
    render() {
        return (
            <div>
                <div className = "leftbar col">
                    <Profilepic />
                    <div className = "divider-left-bar">
                        <hr/>
                    </div>
                    
                    <img src = {Box} className = "leftBarIcon" />
                    <img src = {Calendar} className = "leftBarIcon" />
                    <img src = {Message} className = "leftBarIcon" />
                    <img src = {Pin} className = "leftBarIcon" />
                </div>
            </div>
        )
    }
}

export default leftbar

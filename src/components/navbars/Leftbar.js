import React, { Component } from 'react'
import '../../App.css'
import Profilepic from '../../components/navbars/icons/Profilepic'
import Calendar from '../../components/navbars/icons/tabler-icon-calendar-event.svg'
import Message from '../../components/navbars/icons/tabler-icon-message.svg'
import Pin from '../../components/navbars/icons/tabler-icon-pin.svg'
import Box from '../../components/navbars/icons/tabler-icon-box.svg'


import {
    Link,
    
  } from 'react-router-dom'





export class leftbar extends Component {



   

    dashboardPressed() {
        
    }

    calendarPressed() {

    }

    messagesPressed() {

    }

    galleryPressed() {

    }


    render() {
        return (
            <div>
                <div className = "leftbar col">
                    <Profilepic />
                    <div className = "divider-left-bar">
                        <hr/>
                    </div>
                    
                    <Link Link to='/dashboard'>
                        <img src = {Box} className = "leftBarIcon"/>
                    </Link>

                    <Link Link to ='/calendar'>
                        <img src = {Calendar} className = "leftBarIcon" />

                    </Link>


                    <Link Link to ='/messages'>
                        <img src = {Message} className = "leftBarIcon" />

                    </Link>

                    <Link Link to = '/gallery'>
                        <img src = {Pin} className = "leftBarIcon" />


                    </Link>



                </div>
            </div>
        )
    }
}

export default leftbar

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

    constructor(props) {
        super(props);     
        this.state = {
         page: "",
         components: []
        }
    }

    componentDidMount(){
        console.log("this works dude")

        if(this.props.page == "dashboard"){

            this.state.components = [
                 
                <Link Link to='/dashboard'>
                <img src = {Box} className = "leftBarIcon selectedIcon"/>
                </Link>,

            <Link Link to ='/calendar'>
                <img src = {Calendar} className = "leftBarIcon" />

            </Link>,


            <Link Link to ='/messages'>
                <img src = {Message} className = "leftBarIcon" />

            </Link>,

            <Link Link to = '/gallery'>
                <img src = {Pin} className = "leftBarIcon" />


            </Link>


            ];

        }

        if(this.props.page == "calendar"){

            this.state.components = [
                 
                <Link Link to='/dashboard'>
                <img src = {Box} className = "leftBarIcon"/>
                </Link>,

            <Link Link to ='/calendar'>
                <img src = {Calendar} className = "leftBarIcon selectedIcon" />

            </Link>,


            <Link Link to ='/messages'>
                <img src = {Message} className = "leftBarIcon" />

            </Link>,

            <Link Link to = '/gallery'>
                <img src = {Pin} className = "leftBarIcon" />


            </Link>


            ];

        }

        if(this.props.page == "messages"){

            this.state.components = [
                 
                <Link Link to='/dashboard'>
                <img src = {Box} className = "leftBarIcon"/>
                </Link>,

            <Link Link to ='/calendar'>
                <img src = {Calendar} className = "leftBarIcon" />

            </Link>,


            <Link Link to ='/messages'>
                <img src = {Message} className = "leftBarIcon selectedIcon" />

            </Link>,

            <Link Link to = '/gallery'>
                <img src = {Pin} className = "leftBarIcon" />


            </Link>


            ];

        }

        if(this.props.page == "gallery"){

            this.state.components = [
                 
                <Link Link to='/dashboard'>
                <img src = {Box} className = "leftBarIcon"/>
                </Link>,

            <Link Link to ='/calendar'>
                <img src = {Calendar} className = "leftBarIcon" />

            </Link>,


            <Link Link to ='/messages'>
                <img src = {Message} className = "leftBarIcon" />

            </Link>,

            <Link Link to = '/gallery'>
                <img src = {Pin} className = "leftBarIcon selectedIcon" />


            </Link>


            ];

        }

        this.setState({})

    }

    render() {
        return (
            <div>
                <div className = "leftbar col">
                    <Profilepic />

                    
                    <div className = "divider-left-bar">
                        <hr/>
                    </div>


                    {this.state.components}

                   


                </div>
            </div>
        )
    }
}

export default leftbar

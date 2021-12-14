
// Imports
import React, { Component } from 'react'
import '../../App.css'
import Profilepic from '../../components/navbars/icons/Profilepic'
import Calendar from '../../components/navbars/icons/tabler-icon-calendar-event.svg'
import Message from '../../components/navbars/icons/tabler-icon-message.svg'
import Pin from '../../components/navbars/icons/tabler-icon-pin.svg'
import Box from '../../components/navbars/icons/tabler-icon-box.svg'
import Person from '../../components/navbars/icons/person.svg'

import {
    Link,
    
  } from 'react-router-dom'


// Leftbar which has the navigation icons

export class leftbar extends Component {

    // Default constructor with initial values
    constructor(props) {
        super(props);     
        this.state = {
         page: "",
         components: []
        }
    }

    // Renders sidebar with selected icon depending on which page is clicked
    
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
            </Link>,

            <Link Link to = '/about'>
                <img src = {Person} className = "leftBarIcon" />
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
            </Link>,

            <Link Link to = '/about'>
            <img src = {Person} className = "leftBarIcon" />
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

            </Link>,

            <Link Link to = '/about'>
            <img src = {Person} className = "leftBarIcon" />
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

            </Link>,

            <Link Link to = '/about'>
            <img src = {Person} className = "leftBarIcon" />
             </Link>

            ];
        }

        if(this.props.page == "about"){

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
                <img src = {Pin} className = "leftBarIcon" />
            </Link>,

            <Link Link to = '/about'>
                <img src = {Person} className = "leftBarIcon selectedIcon" />
             </Link>

            ];
        }

        this.setState({})
    }

    // Renders output to screen
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

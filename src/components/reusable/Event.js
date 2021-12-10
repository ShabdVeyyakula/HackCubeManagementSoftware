import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Inperson from '../reusable/Inperson'



export class Event extends Component {
    render() {
        return (
            <div className='container'>
                <div className="eventBox row no-gutters">
                    <div className='col-2'><Inperson /></div>
                    <div className ="col-5">
                        <b><p className = "eventName">Merced Hacks 2020</p></b>
                        <p className='eventDate'>December 12th</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event

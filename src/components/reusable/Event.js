import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Inperson from '../reusable/Inperson'



export class Event extends Component {
    render() {
        return (
            <div>
                <div className="eventBox row">
                    <Inperson />
                </div>
            </div>
        )
    }
}

export default Event

import React, { Component } from 'react'
import '../../App.css'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export class Eventcalendar extends Component {
    render() {
        return (
            <div>
                <FullCalendar className ="someCalendar"
                            plugins={[ dayGridPlugin ]}
                            initialView="dayGridMonth"
                        />
            </div>
        )
    }
}

export default Eventcalendar

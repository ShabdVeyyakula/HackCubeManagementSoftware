// Imports
import React, { Component } from 'react'
import '../../App.css'
import Icon from '../navbars/icons/tabler-icon-map-pin.svg'

export class Inperson extends Component {

    // Renders output to screen
    render() {
        return (
            <div>
                <div className="inperson">
                    <center>
                        <img src={Icon} className='map-icon'></img>
                    </center>
                </div>
            </div>
        )
    }
}

export default Inperson

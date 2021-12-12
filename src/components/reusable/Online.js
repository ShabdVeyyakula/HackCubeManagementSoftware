import React, { Component } from 'react'
import '../../App.css'
import Icon from '../navbars/icons/laptop.svg'

export class Online extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="online">
                        <center>
                            <img src={Icon} className='map-icon'></img>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default Online

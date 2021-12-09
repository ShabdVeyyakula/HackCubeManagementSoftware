import React, { Component } from 'react'
import Cube from '../navbars/icons/tabler-icon-box.svg'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css';


export class Topbar extends Component {
    render() {
        return (
            <div>
                <div className = "topbar-container">
                    <div className = "row">
                        <div className = "col">
                        <img src = {Cube} className = "icon-topbar"/>
                        </div>

                        <div className = "col">
                        <p className  = "topbar-text">Hackcube</p>

                        </div>
                        
                        </div>
                    
                </div>
         
                
            </div>
        )
    }
}

export default Topbar

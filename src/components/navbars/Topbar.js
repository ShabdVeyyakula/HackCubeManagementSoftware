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
                        <div className = "col-1">
                        <img src = {Cube} className = "icon-topbar"/>
                        </div>

                        <div className = "col-7">
                        <p className  = "topbar-text">Hackcube</p>

                        </div>

                        <div className='logout col-3'>
                            <a><p className='logout-txt'>Logout</p></a>
                        </div>
                        
                        </div>
                    
                </div>
         
                
            </div>
        )
    }
}

export default Topbar

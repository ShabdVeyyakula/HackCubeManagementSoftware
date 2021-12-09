import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';

export class gallery extends Component {
    render() {
        return (
            <div>
                <div className = "pageLayout">
                    <Leftbar />
                    <div className = "centerSection">
                        <Topbar />



                    </div>

                    <Rightbar />




                </div>
            </div>
        )
    }
}

export default gallery


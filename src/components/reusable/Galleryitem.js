import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';

export class galleryitem extends Component {
    render() {
        return (
            <div>
                <div className = "galleryitem">
                    <div className = "itemname">
                        <p className = "projectname">G-Alert</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default galleryitem

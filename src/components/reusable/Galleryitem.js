import React, { Component } from 'react'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css';

export class galleryitem extends Component {

    componentDidMount(){
        console.log(this.props.img)
    }
    render() {
        return (
            <div>
                <div className = "galleryitem" style = {{backgroundImage: `url(${this.props.img})`}}>
                    <div className = "itemname">
                        <p className = "projectname">{this.props.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default galleryitem

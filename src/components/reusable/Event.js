import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Inperson from '../reusable/Inperson'
import Online from '../reusable/Online'



export class Event extends Component {

    constructor(props) {
        super(props);     
        this.state = {
            widget: null,
        }
    }

    onLoad(){
        if(this.props.type == "online"){
            this.state.widget = <Online />
            this.setState({})
        } else if(this.props.type == "inperson"){
            this.state.widget = <Inperson />
            this.setState({})
        }
    }

    componentDidMount(){
        this.onLoad()
    }
    

    render() {
        return (
            <div className='container eventBoxContainer'>
                <div className="eventBox row">
                  

                    <div className='col-2'>  {this.state.widget}</div>
                    <div className ="col-5">
                        <b><p className = "eventName">{this.props.eventName}</p></b>
                        <p className='eventDate'>{this.props.eventDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event

import React, { Component } from 'react'
import '../../App.css'
import ScheduleLogo from './icons/tabler-icon-calendar-event.svg'
import Profilepic from '../../components/navbars/icons/Profilepic'
import SideBarPic from './icons/undraw_pair_programming_re_or4x 1.png'

export class rightbar extends Component {

    // Renders output to screen
    render() {
        return (
            <div>
                <div className="rightBarBody">
                    <div className ="col">
                        <h1 className = "name">Welcome back, {this.props.name}</h1>

                        <div className="col">
                            <h1 className = "upcomming">10 days left until,<br/> Merced Hacks 2022</h1>
                            <div className = "dropdown">
                                <div className = "row">
                                    <center>
                                        <p><b>Merced Hacks</b></p>
                                    </center>
                                </div>
                            </div>

                            <div className="rowFlex icon">
                                    <img src={ScheduleLogo} className = "calendarIcon" />
                                
                                    <div>
                                        <p className = "iconTag"><b>Sunday, Oct 21 2021</b></p>  
                                        <p className="iconTag2">2 days 10 hours</p>
                                    </div>

                            </div>

                            <p className = "peopleGoingText"><b>100 People are going on this trip</b></p>

                            <div className = "rowFlex">
                                
                                <Profilepic/>
                                <Profilepic/>
                                <Profilepic/>
                                <Profilepic/>

                            </div>

                            <img src={SideBarPic} className = "sidebarPicImage"></img>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}



export default rightbar

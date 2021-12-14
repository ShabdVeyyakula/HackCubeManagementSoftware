// Imports
import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import { getAuth } from "firebase/auth";
import Pranav from '../navbars/icons/pranav.jpg'
import Shabd from '../navbars/icons/shabd.jpg'
import Ravi from '../navbars/icons/ravi.jpg'
import Malco from '../navbars/icons/malco.jpg'

export class AboutUs extends Component {

    // Default constructor with initial values
    constructor(props) {
        super(props);     
        this.state = {
            name: "",
        }
    }


    ///Gets locally signed in user from firebase auth instance
    getUser(){
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;
            this.state.name = displayName;
            this.setState({})
        }

    }

    // Initial on load to execute functions
    componentDidMount() {
        this.getUser();
    }

    // Renders output to screen
    render() {
        return (
            <div>
                <div className = "someBackground"> 
                <div className = "pageLayout">
                    <Leftbar page = "about"/>
                    <div className = "centerSection">
                        <Topbar />
                            <div class="d-flex justify-content-center">
                                <h1 className='abouttitle'>About the Creators:</h1>
                                <div className='aboutitem'>
                                <div className='row'>
                                        <div className='col'>
                                            <div>
                                                <center>
                                                    <img className= 'profilepic' src={Pranav}/>

                                                    <h1 className='bioName'>Pranav Krishna</h1>
                                                    <p className='bioDescription'>I am a developer and entrepreneur based in the Bay Area. I love to code and develop projects in my free time and I see my future career in the Computer Science industry. I am currently a student at Mountain House High School, class of 2022.</p>
                                                </center>
                                            </div>

                                            <div>
                                                <center>
                                                <img className= 'profilepic' src={Ravi}/>

                                                    <h1 className='bioName'>Raviteja Pillalamarri</h1>
                                                    <p className='bioDescription'>I'm a website developer interested in coding projects in my free time. I aspire to be an entrepreneur in the computer science field. My hobbies include soccer, travelling, and hiking.</p>
                                                </center>
                                            </div>

                                           
                                        </div>

                                        <div className='col'>
                                        <div>
                                                <center>
                                                <img className= 'profilepic' src={Shabd}/>

                                                    <h1 className='bioName'>Shabd Veyyakula</h1>
                                                    <p className='bioDescription'>I am a 17-year old student and Entrepreneur attending Mountain House High School. I enjoy building projects in my free time, as well as playing instruments. Some of my skills include web development and app development with flutter.</p>
                                                </center>
                                            </div>

                                            <div>
                                                <center>
                                                    <img className= 'profilepic' src={Malco}/>

                                                    <h1 className='bioName'>Malco Salcedo</h1>
                                                    <p className='bioDescription'>Hey! My name's Malco and I'm a student currently attending MHHS. I'm a student interested in building up my skillset in all-things coding, whether that be web or app developing.</p>
                                                </center>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    <Rightbar name = {this.state.name}/>
                </div> 
            </div>                
            </div>
        )
    }
}

export default AboutUs

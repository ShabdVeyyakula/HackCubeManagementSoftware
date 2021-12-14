import React, { Component } from 'react'
import '../../App.css'
import Leftbar from  '../navbars/Leftbar'
import Rightbar from '../navbars/rightbar'
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../navbars/Topbar';
import Galleryitem from '../reusable/Galleryitem';
import { getAuth } from "firebase/auth";
import { doc, onSnapshot, collection, query, where, getDoc, addDoc, orderBy} from "firebase/firestore";
import db from '../../firebase/init';
import Plus from '../navbars/icons/plus.svg'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export class gallery extends Component {

    constructor(props) {
        super(props);     
        this.state = {
            name: "",
            projects: [],
            showModal: false,
            projectName: "",
            projectPic: ""
        }
        this.showPopup = this.showPopup.bind(this);
        this.publishProject = this.publishProject.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeURL = this.handleChangeURL.bind(this);
        this.handleClose = this.handleClose.bind(this);
        



    }

    async publishProject(){
        await addDoc(collection(db.db, "Clubs/0001/Project Gallery"), {
            name: this.state.projectName,
            project_pic: this.state.projectPic
          });
        
          this.handleClose()

    }

    async getProjects(){
            const q = query(collection(db.db, "Clubs/0001/Project Gallery"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            var items = [];
            querySnapshot.forEach((doc) => {
                try{
                    var data = doc.data();
                    console.log(data)

                    if(data.name != "" && data.picture_url != ""){
                        items.push(<div className = "col-md-3"><Galleryitem name = {data.name} img = {data.project_pic}/></div>);

                    }
                } catch (e){
                    console.log("error with pushing")
                }
            });
            this.state.projects = items
            this.setState({})
        });
    }
    

    getUser(){
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
            this.state.name = displayName;
            this.setState({})
        }
    }

    componentDidMount() {
        // your source code to load initial data
        this.getUser();
        this.getProjects();
    }

    showPopup(){
        console.log('/////////////////////////////////')
        this.setState({showModal: true})

    }

    handleClose(){
        this.setState({showModal: false})
    }

    handleChangeName(event) {  this.setState({projectName:  event.target.value})  }
    handleChangeURL(event) {  this.setState({projectPic:  event.target.value})  }



    render() {
        return (
            <div>

              <Modal show={this.state.showModal} style={{opacity:1}}>
                        <Modal.Header closeButton>
                    <Modal.Title id = "modalHeader">Create Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id = "modalBody">
                        <p id = "modalSubhead">
                            List a project that you made below!
                        </p>

                        <input placeholder = "Project Name" className = "createProjectModalInput" value = {this.state.projectName} onChange={this.handleChangeName}/>
                        <input placeholder = "Project Image URL" className = "createProjectModalInput" value = {this.state.projectState} onChange={this.handleChangeURL}/>

                    </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => this.publishProject()}>
                            Publish Project
                        </Button>
                        </Modal.Footer>
            </Modal>

                <div className = "pageLayout">
                    <Leftbar page = "gallery"/>
                    <div className = "centerSection">
                        <Topbar />
                        <div className = "rowFlex">
                            <h1 className = "projectGalleryTitle">Project Gallery</h1>
                            <span className = "plusIconGalleryClick" onClick = {() => this.showPopup()}>
                                <img src = {Plus} className = "plusIconGallery"/>
                            </span>
                        </div>
                            <div className ="row">
                                {this.state.projects}
                            </div>
                    </div>

                    <Rightbar name = {this.state.name}/>

                </div>
            </div>
        )
    }
}

export default gallery


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

export class gallery extends Component {

    constructor(props) {
        super(props);     
        this.state = {
            name: "",
            projects: []
        }
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

    render() {
        return (
            <div>
                <div className = "pageLayout">
                    <Leftbar />
                    <div className = "centerSection">
                        <Topbar />
                        <h1 className = "projectGalleryTitle">Project Gallery</h1>
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


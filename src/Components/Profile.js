import React from "react"
import StateManagement from "./Statemanagement";
const Profile = () => {
    return(

        <div>
            <div><StateManagement/></div>
            <div>
                <h2>This is My Profile Page</h2>
                <p>Welcome to my profile. I am Sidd from KCT. I am passionate on learning and exploring stuff</p>
            </div>
            <div>
                <p className="prof-text"></p>
            </div>
        </div>
    )
};



export default Profile;
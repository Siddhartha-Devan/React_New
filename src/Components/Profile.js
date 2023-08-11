import React from "react"
import StateManagement from "./Statemanagement";
import profpic from "./DSC05020.jpg";

const Profile = () => {
    return(

        <div>
            {/* <div><StateManagement/></div>
            <div>
                
                <h2 className="centeronly">This is My Profile Page</h2>
                <img src = {profpic} alt = "Profile pic" className= "prof-pic" />
                <p className="prof-text">I am Siddhartha Devan V from 3rd Year Artificial Intelligece and Data Sceience  department of KCT. I’m an aspiring and hardworking student, currently in my 3rd year of engineering who is awaiting to revolutionise the world with technology. I wish to extend
                        the limits of my knowledge and push my skills beyond  the horizon.  </p>
            </div> */}
               < div><StateManagement/></div>
                <div className="profile-box">
                    <img src={profpic} alt="Profile" className="profile-pic" />
                    <div className= "prof-text">
                        <h2>About Me</h2>
                        <p> I am Siddhartha Devan V from 3rd Year Artificial Intelligece and Data Sceience  department of KCT. I’m an aspiring and hardworking student, currently in my 3rd year of engineering who is awaiting to revolutionise the world with technology. I wish to extend
                        the limits of my knowledge and push my skills beyond  the horizon.  </p>
                    </div>
                </div>


        </div>
    )
};



export default Profile;
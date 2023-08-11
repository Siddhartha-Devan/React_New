import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.js';
import Profile from './Components/Profile.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js'
import './App.css';
import React from 'react';

// class StateManagement extends React.Component {   
  // constructor() {
  // super()
  // this.state = {os: "Windows"}
  //   }
  //   mac = () =>{ this.setState({os: "MAC"})}
  //   wind = () => {this.setState({os: "Windows"})}
  //   lin = () => {this.setState({os: "LINUX"})}

  //   render(){
  //     return(
  //       <div>

  //         {/* <div className='first_div'> */}
           
            
  //         {/* </div> */}
          
  //         <div>
  //             <div className='pratheesh'>
  //               <h1 className='center'>I'm Vengence</h1>
  //               <h2 className='center'>I'm the shadows</h2>
  //               <h2 className='center'>You either die a hero or live long enough to see yourself become the Villain </h2>
                
  //             </div>
                
  //             <h5>The dark knight</h5>

  //             <p>I am from <i>Artificial Intelligence</i> and Data Science dept
                    
  //                   I do not know what to type but still this para needs some content to be acknowledged as a <u>paragraph</u>. 
                
  //                   So the only reason Im typing it is to make it look like a paragraph and <span class="abc"> Hello Again
  //                   </span>
  //             </p>
              
  //             <h1>This is a {this.state.os} machine and it is a {this.props.laptop} laptop</h1>
  //             <button type = "button" onClick={this.wind}>Windows</button> 
  //             <button type = "button" onClick={this.lin}>LINUX</button>
  //             <button type = "button" onClick={this.mac}>MAC</button>
  //         </div>
  //       </div>
  //       )
  //     }
      // }


function App() {
  return (
    <div>
      <div>
          
          <Routes>
              <Route path = "/" element = {<Layout/>}>
              <Route index element = {<Profile />} />
              <Route path = "Resume" element = {<Resume />} />
              <Route path = "Projects" element = {<Projects />} />
              <Route path = "Contact" element = {<Contact />} /> 
              </Route>
          </Routes>
      </div>

      {/* <p>I am from <i>Artificial Intelligence</i> and Data Science dept
      
          I do not know what to type but still this para needs some content to be acknowledged as a <u>paragraph</u>. 
      
          So the only reason Im typing it is to make it look like a paragraph and <span class="abc"> Hello Again
          </span>
      </p> */}
    </div>
  );
}

{/* <Layout/> */}

export default App;


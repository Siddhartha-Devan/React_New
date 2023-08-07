import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.js';
import Profile from './Components/Profile.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';

import './App.css';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path = "/" element = {<Layout />}>
              <Route index element = {<Profile />} />
              <Route path = "Resume" element = {<Resume />} />
              <Route path = "Projects" element = {<Projects />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </div>


    <p>I am from <i>Artificial Intelligence</i> and Data Science dept
    
        I do not know what to type but still this para needs some content to be acknowledged as a <u>paragraph</u>. 
    
        So the only reason Im typing it is to make it look like a paragraph and <span class="abc"> Hello Again
        </span>
    </p>
    </div>
  );
}

export default App;

import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Footer from './pages/footer';
import Navbar from './components/navbar';
import Project from './pages/project';
import Achievements from './pages/achievements';
import Contact from './components/contact';



import Timeline from './pages/timeline';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>  
      <About/>
      <Project/>
       <Timeline/>
       <Achievements/>
       <Footer/>
      </div>
  );
}

export default App;

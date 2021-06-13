import React from 'react'
import './App.css'
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';


function App() {


  return (
    <div className="App">
     <div className="mobile">come to see me on desktop</div>
     <div className="home"><Home /></div>  
      <div className="resume"><Resume/></div>  
     <div className="footer"><Footer/></div> 
    </div>
 )
}

export default App

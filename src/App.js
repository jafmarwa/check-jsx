
import React from 'react';
import './App.css';
import myProfile from './me.jpg';
import myVideo from './vid.mp4';
import './style.css';
function App() {
  
  return (

      <div classNAme="style">

<h1 className="titleRed">JAAFOURA MARWA</h1>

<br/>

<img src={myProfile} alt="my profile"/>

<br/>
<img src="/me.jpg" alt='my profile'/>

<div>

  <video src={myVideo} width='320px'height='240px' controls/>
</div>

    </div>
  );
}


export default App;

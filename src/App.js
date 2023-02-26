import React,{useState} from 'react';
import axios from 'axios';

function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=dc5e91de9b08d11ada11c13da80edcef";

  
  return (
    <div className='App'>
      <div className='Container'>
        <div className='top'>
            <p>Dallas</p>
           <div className='temp'>
            <h1> 60 °F</h1>
           </div>
           <div className='description'>
            <p>CLouds</p>
           </div>
           <div className='bottom'>
            <div className='feels'>
              <p>60 °F</p>
            </div>
            <div className='humidity'>
              <p>20</p>
            </div>
            <div className='wind'>
              <p>12 MPH</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    


    
  );
}

export default App;

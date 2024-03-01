import {React,useEffect} from 'react';
import logo from './logo.svg';

import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { generateToken ,messaging} from './notification/firebase';
import { onMessage } from 'firebase/messaging';
function App() {
  useEffect(()=>{
generateToken();
onMessage(messaging,(payload) => {
  console.log(payload);
  toast(payload.notification.body);
})
  },[]);

  return (
    <div className="App">
       <Toaster />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

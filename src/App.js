import React, {  useState } from 'react'

import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/Registration/RegisterForm';

function App() {
   const [isRegister, setIsRegister] = useState(true)
  
  
   
   
  return (
    <div className="App">
        <div className='Form-div'>
       {(isRegister)?<RegisterForm/>:<LoginForm/>}
       
        </div>
    </div>
  );
}

export default App;

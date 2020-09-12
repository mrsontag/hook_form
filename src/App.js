import React, { useState } from 'react';
import './App.css';
import Input from "./components/input";
import Output from "./components/output"
function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [eMail, seteMail] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setConfPassword] = useState();

  // const UpdateValue = (whichval, newval) => {

  //}
  return (
    <div className="App">
      <Input type="text" id="firstname" label="First Name" defval={ "first name" } setValue={ setFirstName } />
      <Input type="text" id="lastname" label="Last Name" defval="last name" setValue={ setLastName} />
      <Input type="text" id="email" label="E-Mail" defval="email" setValue={ seteMail} />
      <Input type="password" id="password" label="Password" setValue={ setPassword} />
      <Input type="password" id="confpassword" label="Confirm Password" setValue={ setConfPassword} />
      <Output label="First Name" value= { firstName }/>
      <Output label="Last Name" value= { lastName }/>
      <Output label="Email" value= { eMail }/>
      <Output label="Password" value= { password }/>
      <Output label="Confirm Password" value= { confpassword }/>
    </div>
  );
}

export default App;

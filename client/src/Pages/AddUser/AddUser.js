import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import './AddUser.css'

export default function AddUser() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const navigate = useNavigate();

  function handleRegister (e){
    e.preventDefault();
    console.log({name:name, phone: phone, mail:email});
    fetch('/user/adduser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"User added": true});
            navigate('/clients')
          }else{
            console.log({"User added": false});
          }
        })
  }


  return (
    <div style={{marginTop: "100px"}}>
    <form
    style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "400px",
      alignContent: "center",
    }}
    onSubmit={handleRegister}
    >

      <label htmlFor="name">שם לקוח</label>
      <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter Client Name"
      onChange={(e) => {
        setName(e.target.value)
      }}
      value={name}
      required={true}
      />

      <label htmlFor="rank">מספר טלפון</label>
      <input
      type="text"
      id="Phone"
      name="Phone"
      placeholder="Client Phone Number"
      onChange={(e) => {
        setPhone(e.target.value)
      }}
      value={phone}
      required={true}

      />

      <label htmlFor="available">דואר אלקטרוני</label>
      <input
      type="text"
      id="Email"
      name="Email"
      placeholder="Client Email"
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      value={email}
      required={true}

      />


      <input type="submit" value="הוסף לקוח" />
    </form>
</div>
  )
}

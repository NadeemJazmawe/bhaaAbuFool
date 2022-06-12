import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault()
    axios.post('/user/login', { id: id, pass: pass })
        .then(({data}) => {
          if(data.ok){
            console.log({"LogIn": true});
            // nav('/clients');
          }else{
            console.log({"LogIn": false});
          }
        })
  }

  return (
    <div className='login'> 
        {/* <div className='header'>
            <p className='logo'>Bhaa Abu fool</p>
        </div> */}

        <form 
             style={{
              direction: 'rtl',
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center",
            }}
          onSubmit={handleLogIn}>
          <label htmlFor="id-input">שם משתמש</label>
          <input
            type="text"
            id="id-input"
            name="id-input"
            placeholder="ID"
            onChange={(e) => {
              setId(e.target.value)
            }}
            value={id}
            required={true}
          />
          <label htmlFor="pass-input">סיסמה</label>
          <input
            type="password"
            id="pass-input"
            name="pass-input"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value)
            }}
            value={pass}
            required={true}
          />

          <input type="submit" value="כניסה" />

        </form>
        
    </div>
  )
}

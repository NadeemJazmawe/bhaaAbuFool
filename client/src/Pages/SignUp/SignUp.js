import React from 'react'

export default function SignUp() {

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
  
    const handleSignUp = async (e) => {
      fetch('/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          pass: pass
        })
      }).then(r => r.json())
          .then(data => {
            if(data.ok){
              console.log({"User added": true});
            }else{
              console.log({"User added": false});
            }
          })
    }
  
  return (
    <div className='signup'> 
        {/* <div className='header'>
            <p className='logo'>Bhaa Abu fool</p>
        </div> */}

        <form onSubmit={handleSignUp}>
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



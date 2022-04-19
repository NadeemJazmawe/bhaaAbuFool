import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Listem() {

  const [data, setData] = useState("");
  const [listem, setListem] = useState("");


  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const name = "nadeem";
    const response = await axios.get("/user/listem",{params : {name}});
      if(response.status === 200){
        setData(response.data);
      }
  }

  const handleAddListem = (e) => {
    fetch('/user/listem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "nadeem",
        text: listem
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

  const deleteListem = async (_id) => {
    await axios.delete(`/user/listem/${_id}`);
    getUsers();
  }


  return (
    <div className='listem'>

      <form className='add-listem'
        onSubmit={handleAddListem}
      >
        <label htmlFor='listem-input'>הוסף מסימה</label>
        <input 
          type="text"
          id="listem-input"
          name='listem-input'
          placeholder='הוסף מסימה'
          onChange={(e) => {
            setListem(e.target.value)
          }}
          value={listem}
          required={true}
          />
          <input type="submit" value="הוסף לקוח" />
      </form>

      <table className='listem-table' >
        <thead>
          <tr>
            <th>מס</th>
            <th>מסימה</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <th>{item.text}</th>
                <th>
                  <button className='btn btn-delete' onClick={ () => {deleteListem(item._id)}}>מחיקה</button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

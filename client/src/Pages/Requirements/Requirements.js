import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Requirements() {

  const [data, setData] = useState("");
  const [to, setTo] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    getRequirement();
  }, [])

  const getRequirement = async () => {
    const response = await axios.get("/requirement/requirements");
    if(response.status === 200){
      setData(response.data);
    }
  }

  const handleAddRequirment = (e) => {
    fetch("/requirement/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: "nadeem",
        to: to,
        text: text
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

  const DeleteRequirement = async (_id) => {
    await axios.delete(`/requirement/delete/${_id}`);
    getRequirement();
  }


  return (
    <div className='requirement'>

      <form className='add-requirment'
           style={{
            direction: 'rtl',
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        onSubmit={handleAddRequirment}
      >
        <label htmlFor='to-input'>שלח ל</label>
        <input 
          type="text"
          id="to-input"
          name='to-input'
          placeholder='שלח ל'
          onChange={(e) => {
            setTo(e.target.value)
          }}
          value={to}
          required={true}
          />

        <label htmlFor='text-input'>נוסח הבקשה</label>
        <input 
          type="text"
          id="text-input"
          name='text-input'
          placeholder='נוסח '
          onChange={(e) => {
            setText(e.target.value)
          }}
          value={text}
          required={true}
          />
          <input type="submit" value="שלח דרישה" />
      </form>

      <table className='styled-table' >
        <thead>
          <tr>
            <th>מס</th>
            <th>התקבלה מ</th>
            <th>נוסח</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <th>{item.from}</th>
                <th>{item.text}</th>
                <th>
                  <button className='btn btn-delete' onClick={ () => {DeleteRequirement(item._id)}}>מחיקה</button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

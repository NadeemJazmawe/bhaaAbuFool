import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Listem() {

  const [data, setData] = useState("");
  const [listem, setListem] = useState("");
  const [endDate, setEndDate] = useState("");


  useEffect(() => {
    getListem();
  }, [])

  const getListem = async () => {
    const response = await axios.get("/listem");
      if(response.status === 200){
        setData(response.data);
      }
  }

  const handleAddListem = (e) => {
    fetch('/listem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: listem,
        endDate: endDate
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
    await axios.delete(`/listem/${_id}`);
    getListem();
  }


  return (
    <div className='listem'>

      <form className='add-listem'
         style={{
          direction: 'rtl',
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleAddListem}
      >
        <label htmlFor='endDate-input'>הוסף משימה</label>
        <input 
          type="text"
          id="listem-input"
          name='listem-input'
          placeholder='משימה'
          onChange={(e) => {
            setListem(e.target.value)
          }}
          value={listem}
          required={false}
        />

        <label htmlFor='endDate-input'>לסיים לפני</label>
        <input 
          type="text"
          id="endDate-input"
          name='endDate-input'
          placeholder=' זמן סיום'
          onChange={(e) => {
            setEndDate(e.target.value)
          }}
          value={endDate}
          required={true}
        />

        <input type="submit" value="הוסף משימה" />
      </form>

      <table className='styled-table' >
        <thead>
          <tr>
            <th>מס</th>
            <th>משימה</th>
            <th>התקבל ב</th>
            <th>לסיים לפני</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <th>{item.text}</th>
                <th>{item.startDate}</th>
                <th>{item.endDate}</th>
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

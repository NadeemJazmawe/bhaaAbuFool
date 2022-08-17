import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "./Requirements.css"


export default function Requirements() {

  const [getData, setGetData] = useState("");
  const [sendData, setSendData] = useState("");
  const [to, setTo] = useState("");
  const [text, setText] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    getRequirement();
  }, [])

  const getRequirement = async () => {
    setgetRequirement();
    setsendRequirement();
  }

  const setgetRequirement = async () => {
    const response = await axios.get("/requirement/getrequirements");
    if(response.status === 200){
      setGetData(response.data);
    }
  }

  const setsendRequirement = async () => {
    const response = await axios.get("/requirement/sendrequirements");
    if(response.status === 200){
      setSendData(response.data);
    }
  }

  const handleAddRequirment = (e) => {
    e.preventDefault();
    fetch("/requirement/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: to,
        text: text,
        endDate: endDate
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"User added": true});
            getRequirement();
            navigate('/requirements');
          }else{
            console.log({"User added": false});
          }
        })
  }

  const DeleteRequirement = async (_id) => {
    await axios.delete(`/requirement/delete/${_id}`);
    getRequirement();
  }

  const UpdateRequirement = async (_id, done) => {
    // e.preventDefault();
    const newdone = !done;
    fetch(`/requirement/update/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        done: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"Requiremnet Updated": true});
            getRequirement();
            navigate('/requirements');
          }else{
            console.log({"Requiremnet Updated": false});
          }
        })
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
          required={false}
        />
          
        <input type="submit" value="שלח דרישה" />
      </form>


      <div class="line"></div>

      <h2>דרישות שהתקבלו</h2>
      
      <table className='styled-table' >
        <thead>
          <tr>
            <th>מס</th>
            <th>התקבלה מ</th>
            <th>נוסח</th>
            <th>התקבל ב</th>
            <th>לסיים לפני</th>
            <th>מצב בקשה</th>
          </tr>
        </thead>
        <tbody>
          {getData && getData.map((item, index) => {
            return(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <th>{item.from}</th>
                <th>{item.text}</th>
                <th>{item.startDate}</th>
                <th>{item.endDate}</th>
                <th>
                  <button className={`btn + ${item.done ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdateRequirement(item._id, item.done)}}>שינוי מצב</button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div class="line"></div>


      <h2>דרישות שנשלחו</h2>

      <table className='styled-table' >
        <thead>
          <tr>
            <th>מס</th>
            <th>נשלח ל</th>
            <th>נוסח</th>
            <th>התקבל ב</th>
            <th>לסיים לפני</th>
            <th>מצב בקשה</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sendData && sendData.map((item, index) => {
            return(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <th>{item.to}</th>
                <th>{item.text}</th>
                <th>{item.startDate}</th>
                <th>{item.endDate}</th>
                <th>
                  <button className={`btn + ${item.done ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {}}> בוצע</button>
                </th>
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

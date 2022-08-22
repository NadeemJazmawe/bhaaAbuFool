import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";




export default function DataPage() {

  const navigate = useNavigate();
  const newDate = new Date()

  const [data, setData] = useState("");
  const [year, setYear] = useState(newDate.getFullYear());
  const [month, setMonth] = useState(newDate.getMonth()+1);




  // useEffect(() => {
  //   console.log("jeme");
  //   getdata();
  // }, [data, year])
  useEffect(() => {
    console.log("jeme");
  }, [])

  const getdata = async () => {
    // axios.post("/getdata/updatedata")

    fetch("/getdata/getdata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        month: month,
        year: year,
      })
    }).then((response) => response.json())
    .then((data) => 
      setData(data)
    );

    // console.log(response);
    // console.log(response.data);

    // if(response.status === 200){
    //   setData(response.data);
    // }
    
  }
  

  const UpdatevatMaterial = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/vatMaterial/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        vatMaterial: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"vatMaterial Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"vatMaterial Updated": false});
          }
        })
  
  }



  const UpdatehourlyReport = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/hourlyReport/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hourlyReport: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"hourlyReport Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"hourlyReport Updated": false});
          }
        })
  
  }


  const Updatevat = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/vat/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        vat: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"vat Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"vat Updated": false});
          }
        })
  
  }


  const UpdatetaxAdvances = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/taxAdvances/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taxAdvances: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"taxAdvances Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"taxAdvances Updated": false});
          }
        })
  
  }


  const UpdatesocialSecurity = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/socialSecurity/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        socialSecurity: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"socialSecurity Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"socialSecurity Updated": false});
          }
        })
  
  }


  const UpdateemployeeDeductions = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/employeeDeductions/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        employeeDeductions: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"employeeDeductions Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"employeeDeductions Updated": false});
          }
        })
  
  }

  const UpdateemployeesSocialSecurity = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/employeesSocialSecurity/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        employeesSocialSecurity: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"employeesSocialSecurity Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"employeesSocialSecurity Updated": false});
          }
        })
  
  }
  const UpdatePaymentStatus = async (_id, done) => {
    const newdone = !done;
    fetch(`/getdata/PaymentStatus/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        PaymentStatus: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"PaymentStatus Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"PaymentStatus Updated": false});
          }
        })
  
  }
  const UpdateexpensesCollection = async (_id, done) => {
    const newdone = !done;
    // console.log("hero");
    fetch(`/getdata/expensesCollection/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        expensesCollection: newdone
      })
    }).then(r => r.json())
        .then(data => {
          if(data.ok){
            console.log({"expensesCollection Updated": true});
            getdata();
            navigate('/data');
          }else{
            console.log({"expensesCollection Updated": false});
          }
        })
  
  }





  return (
    <div style={{marginTop: "150px"}}>

      {/* <form  style={{
            direction: 'rtl',
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >

        <label for="date">Choose Date:</label> */}

        <input 
          type="text"
          id="year-input"
          name='year-input'
          placeholder = {`${year}`}
          onChange={(e) => {
            setYear(e.target.value)
          }}
          value={year}
          required={false}
        />
        <input 
          type="text"
          id="month-input"
          name='month-input'
          placeholder = {`${month}`}
          onChange={(e) => {
            setMonth(e.target.value)
          }}
          value={month}
          required={false}
        />

        {/* <select name="month" id="month" onChange="setMonth(this)">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
          <option value="1">11</option>
          <option value="1">12</option>
        </select> */}

        {/* <input type="submit" value="Search" /> */}
      {/* </form> */}
  

    <table className='styled-table'>
      <thead>
        <tr>
          <th rowSpan="2" >מס</th>
          <th rowSpan="2">שם לקוח</th>
          <th rowSpan="2">חומר מעמ</th>
          <th rowSpan="2">קבלת דיווח שעות</th>
          <th colSpan="5">דיווחים</th> 
          <th rowSpan="2">סטטוס תשלומים ללקוח</th>
          <th rowSpan="2">גביית שכ"ט למשרד</th>
          </tr>
          <tr>
          <th>מעמ</th>
          <th>מקדימות מס הכנסה</th>
          <th>ביטוח ליאומי</th>
          <th>ניכויים עובדים</th>
          <th>ביטוח ליאומי לעובדים</th>


        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) =>{
          return (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{item.name}</td>
              <td>
                <button className={`btn + ${item.vatMaterial ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdatevatMaterial(item._id, item.vatMaterial)}}>מסר</button>
              </td>
              <td>
                  <button className={`btn + ${item.hourlyReport ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdatehourlyReport(item._id, item.hourlyReport)}}>מסר</button>
              </td>
              <td>
                  <button className={`btn + ${item.vat ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {Updatevat(item._id, item.vat)}}>שודר</button>
              </td>
              <td>
                  <button className={`btn + ${item.taxAdvances ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdatetaxAdvances(item._id, item.taxAdvances)}}>שודר</button>
              </td>
              <td>
                  <button className={`btn + ${item.socialSecurity ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdatesocialSecurity(item._id, item.socialSecurity)}}>שודר</button>
              </td>
              <td>
                  <button className={`btn + ${item.employeeDeductions ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdateemployeeDeductions(item._id, item.employeeDeductions)}}>שודר</button>
              </td>
              <td>
                  <button className={`btn + ${item.employeesSocialSecurity ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdateemployeesSocialSecurity(item._id, item.employeesSocialSecurity)}}>שודר</button>
              </td>
              <td>
                  <button className={`btn + ${item.PaymentStatus ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdatePaymentStatus(item._id, item.PaymentStatus)}}>שודר</button>
              </td>
              <td>
                  <button className={`btn + ${item.expensesCollection ? 'btn-edit' : 'btn-delete'}`} onClick={ () => {UpdateexpensesCollection(item._id, item.expensesCollection)}}>שודר</button>
              </td>
        

              {/* <td>
                <Link 
                  to={`/edit/${item._id}`}
                  state={{
                    data: item
                  }}
                 >
                  <button className='btn btn-edit' data={item} >Edit</button>
                </Link>
              </td> */}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  )
}

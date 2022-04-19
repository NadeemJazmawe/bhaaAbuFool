import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import "./Clients.css";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function Clients() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    
    const response = await axios.get("/client/clients");
    if(response.status === 200){
      setData(response.data);
    }
  };

  return (
    <div 
      //style={{marginTop: "150px"}}
    >


    <div className='search-bar'
       style={{
        direction: 'rtl',
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}>
      <label htmlFor='search'>חפוש</label>
      <input
      type="text"
      id="search"
      name='search'
      placeholder='חיפוש'
      onChange={(e) => {
        setSearch(e.target.value)
      }}
      value={search}
      />
    </div>

    <table className='styled-table'>
      <thead>
        <tr>
          <th> מס</th>
          <th>שם לקוח</th>
          <th>יצירת קשר</th>
          <th>מייל</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) =>{
          return (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.mail}</td>
              <td>
                <Link 
                  to={`/edit/${item._id}`}
                  state={{
                    data: item
                  }}
                 >
                  <button className='btn btn-edit' data={item} >עוד פרטים</button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  )
}

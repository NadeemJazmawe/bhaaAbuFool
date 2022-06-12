import React from 'react'

export default function DataPage() {
  return (
    <div style={{marginTop: "150px"}}>
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
        {/* {data && data.map((item, index) =>{
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
                  <button className='btn btn-edit' data={item} >Edit</button>
                </Link>
              </td>
            </tr>
          )
        })} */}
      </tbody>
    </table>
  </div>
  )
}

import React from 'react'

export default function DataPage() {
  return (
    <div style={{marginTop: "150px"}}>
    <table className='styled-table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th> </th>
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

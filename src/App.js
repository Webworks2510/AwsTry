import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('https://backend-api-production-a9b6.up.railway.app/getuser')
    .then(res=>setData(res.data))
  },[]);
  return (
    <div className="App">
      <>
      <table className='table container-md'>
        <thead>
          <th>Users</th>
          <th>Mail</th>
        </thead>
        <tbody>
          {data.map(m=>
            <tr key={m.customerID}>
              <td>{m.customerID}</td>
              <td>{m.mail}</td>
            </tr>
          )}
        </tbody>
      </table>
      </>
    </div>
  );
}

export default App;

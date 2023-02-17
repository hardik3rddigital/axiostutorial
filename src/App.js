import React, { useEffect, useState } from "react";
import axios from "./Axios";

const App = () => {
  // Fetch Api
  const [data, setData] = useState([]);
  const [error,setError] = useState('');
 


//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => setData(res.data))
//       .catch((error)=>{
//         setError(error.message);
//       })
//   }, []);


// using async await
// const getApiData = async () => {
    
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/psts');
//         setData(res.data);
        
//     } catch (error) {
//         setError(error.message)
//     }
// }

// useEffect(()=>{
//     getApiData();
// },[]);

// using async await parameter
// const Api = 'https://jsonplaceholder.typicode.com';
// const getApiData = async (url) => {
    
//     try {
//         const res = await axios.get(url);
//         setData(res.data);
        
//     } catch (error) {
//         setError(error.message)
//     }
// }

// useEffect(()=>{
//     getApiData(`${Api}/posts`);
// },[]);


// using axios create and defalut names
const getApiData = async () => {
    
    try {
        const res = await axios.get(`/posts`);
        setData(res.data);
        
    } catch (error) {
        setError(error.message)
    }
}

useEffect(()=>{
    getApiData();
},[]);

  return (
    <div className="container">
      <h1>Axios Tutorial</h1>
      {error !== '' && <h4>{error}</h4>}
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">USer ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            const {id, title, body} = value;
            return (
                <tr key={index}>
                  <th>{id}</th>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;

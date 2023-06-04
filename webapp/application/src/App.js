import React ,{useState} from 'react';
import './App.css';

const App=()=>{

const [users,setUser]= useState([]);

const loadUsers=async()=>{
  const response=await fetch
  ("https://api.github.com/users");
  const jsonresponse=await
  response.json();
  setUser(jsonresponse);

};

  return(
    <div className="Appl">
    <h1 id="text"> Welcome to the Web Application </h1>
    <button className="btn" onClick={loadUsers}>Retrieve Data</button>

    <h2 id ="text2">Users:</h2>
    <ul>
      {users.map(({id,login,type,site_admin}) => (
        <li key={id}>Name: {login} {type} {site_admin}</li>

      ))}
    </ul>
    </div>
  );
};

export default App;
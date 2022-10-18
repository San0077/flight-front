import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign&log.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Signin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const signup = () => {
    if (email, password !== "") {
      const data = {
        email,
        password,
      };
      fetch("https://capstonebackend--q.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data => {
        
        navigate("/");
      });
    }
  };
  return (
    <>
      <div>
        <img className="img" src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas="></img>
        <div className="pic">
          <p class="text-center font-weight-bold">Sign In</p>
          <TextField id="outlined-basic" className="inputs"
            onChange={e => setemail(e.target.value)}
            label="Email" style={{ width: 200 }} type="Email" variant="outlined" /><br></br>
          <TextField id="outlined-basic" className="inputs"
            onChange={e => setpassword(e.target.value)}
            label="Password" style={{ width: 200 }} type="password" variant="outlined" /><br></br>
          <Button variant="contained" onClick={() => signup()} className="inputs" style={{ width: 200 }}>SignIn</Button>
        </div>
      </div>
    </>
  );
}

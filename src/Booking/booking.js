import { NavBar } from "./navBar";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState,useContext } from "react";
import Swal from "sweetalert2";
import { MyContext } from "../context";

export function Booking (){
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [date, setdate] = useState("");
  const [fltickets,setfltickets]=useState()
  const [invaild, setinvaild] = useState(false);
  const {user,setUser}=useContext(MyContext)

  const search=()=>{
    const userdate = new Date(date).getFullYear();
    const userMonth = new Date(date).getMonth()
    const userday = new Date(date).getDay()
    const todaydate = new Date().getFullYear();
    const todayMonth = new Date().getMonth()
    const todayday = new Date().getDay()

    if(date!==""){
       const obj={
        from,
        to,
        date
       }
       
       fetch("https://capstonebackend--q.herokuapp.com/booking", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data=>data.json()).then(data=>setfltickets(data))
    }else{
      setinvaild(true)
    }
  }
  const book=(data)=>{
    
 
    fetch("https://capstonebackend--q.herokuapp.com/booking", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data=>{
      Swal.fire(
        'Good job!',
        'You are  booked get the ticket from your mail!',
        'success'
      )
    })
  }
    return(
      <div className="app">
        <NavBar/>
       <div className="fields">
                  <div className="boarding">
                       <h4 className="text-center">Search your Dream flights</h4>
                       
                       <div className="flightInputs">
                       {invaild?<p class="text-center font-weight-bold" style={{color:"red"}}>Invalid date</p>:""}
                       <TextField id="outlined-basic" onChange={e => {setfrom(e.target.value)}} className="inputs" label="From" style={{ width: 200 }} variant="outlined" /><br></br>
                       <TextField id="outlined-basic" onChange={e => {setto(e.target.value)}} className="inputs" label="To" style={{ width: 200 }} variant="outlined" /><br></br>
                       <TextField id="outlined-basic" type="date" onChange={e => {setdate(e.target.value)}} className="inputs" label="Date" style={{ width: 200 }} variant="outlined" /><br></br>
                       <Button variant="contained" onClick={() => search()} className="inputs" style={{ width: 200 }}>Search</Button>

                       </div>
                  </div>
                  <div className="flightTickets">
                    <h4 class="text-center font-weight-bold"> Available flights</h4>
                         <div >
                           {fltickets?fltickets.map(d=>
                             <div className="tickets">
                             <h4 class="text-center font-weight-bold">{d.f_name} <span style={{marginLeft:"25px",color:"red"}}>{d.price<20000?<i class="fa fa-gift" aria-hidden="true"></i>:""}</span></h4>
                             <h6 class="text-center font-weight-bold">{`${d.from_to.from} to ${d.from_to.to}`}</h6>
                             <p>{`Time ${d.timing.Takeoff} - ${d.timing.landing}`} </p>
                             <p >{`Price - ${d.price}`}</p>
                             <p >{`Date- ${new Date(d.date).getDate()}/${new Date(d.date).getMonth()}/${new Date(d.date).getFullYear()}`}</p>
                             <p> {`Food - ${d.Food.coolDrinks}`} <span style={{marginLeft:"95px"}}>{`seats - ${d.avaiableSeats}`}</span></p>
                             <Button variant="contained" onClick={() => book(d)}  style={{ width: 130,marginLeft:"75px" }}>Book Now</Button>

                         </div>
                            
                            ):"no more tickets"}
                             
                         </div>
                  </div>
            </div>
      </div>
    )
  }
  
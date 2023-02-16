import React, { useState ,useEffect} from "react";
import UserService from '../../services/user.service'
import AuthService from '../../services/auth.service'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import authHeader from "../../services/auth.headers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscription = () => {
  const user = AuthService.getCurrentUser()
  const [sub,setSub] = useState([]);
  const[date,setDate] = useState();
  const[validity,setValidity] = useState();
  const API_URL = "http://localhost:4000/";
  const[stalls,setStalls] = useState();
  const[validTill,setValidTill] = useState();
  useEffect( ()=>{
    const userId = user.id
    if(sub.length === 0){
      UserService.getSub(userId).then((res)=>{
        const {data} = res
        setSub(data)
        console.log("data",data)
        const currentDate = new Date(data[0].date)
        //console.log("data -",res)
        //var newDate = new Date(currentDate.setMonth(currentDate.getMonth()+1));
        //const validDate = String(newDate.getFullYear()) + String(newDate.getMonth()) + String(newDate.getDate());
        //setValidTill(newDate)
        //console.log(validDate)
        const year= currentDate.getFullYear();
        const month = Number(currentDate.getMonth()) + 2;
        const date = currentDate.getDate();
        const validDate = String(year) +"-" + String(month) + "-" + String(date)
        console.log(validDate)
        setValidTill(validDate)
      })
    }
    
   

    
    // await axios.post(API_URL +'sub1',{userId},{headers:authHeader()})
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })

  },[user])
 
  const handleSubmit  = async(e) => {
    e.preventDefault();
    const userId= user.id;
    
    console.log(userId)
    await axios.post(API_URL+"sub",{date,userId,validity,stalls})
          .then((res)=>{
            console.log("the return data ",res)
          })
          .catch((err)=>{
            console.log(err)
          })

  }

  return (
    <div >
      <h1>Subscription Model</h1>
      {/* not Subscribe */}
      { sub.length !== 0 ? 
      <div>
        <h2>Subscibed</h2>
        
        <h3>Start data - { sub[0].date}</h3>
        <h3>validity - {sub[0].validity}</h3>
        <h3> valid till - {validTill} </h3>


      </div> :
      
      <div> 
        <h2>not Subscibed</h2>
        <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={6}>
            <InputLabel className="stall-booking-lable">
              Enter Booking Date
            </InputLabel>
            <TextField
              inputlabelprops={{
                style: { fontSize: 14, fontFamily: "monospace" },
              }}
              name="booking-date"
              required
              fullWidth
              type="date"
              id="booking-date"
              autoFocus
              value={date}
              onChange = {(e) => {setDate(e.target.value) ;console.log("clicking");} }
              color="success"
              className="textfield"
            />
          </Grid>
          <Grid item xs={12}>
                <FormControl
                  className="textfield"
                  sx={{ width: "100%", fontSize: 14 }}
                >
                  <InputLabel
                    inputlabelprops={{
                      style: { fontSize: 14, fontFamily: "monospace" },
                    }}
                    id="demo-simple-select-helper-label"
                  >
                    Type
                  </InputLabel>
                  <Select
                    sx={{ fontSize: "1.2rem" }}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={validity}
                    label="Type"
                    name="type"
                    onChange={(e) => {
                      if(e.target.value === "1"){
                        setValidity("1")
                        setStalls(30)
                      }
                    }}
                    color="success"
                  >
                    <MenuItem
                      sx={{ fontSize: "1.3rem", fontFamily: "monospace" }}
                      value=""
                    >
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem
                      sx={{ fontSize: "1.3rem", fontFamily: "monospace" }}
                      value={"1"} 
                    >
                      1 month
                    </MenuItem>
                    {/* <MenuItem
                      sx={{ fontSize: "1.3rem", fontFamily: "monospace" }}
                      value={"customer"}
                    >
                      Consumer
                    </MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>

              <button type="submit">Proceed</button>

        </form>
      </div>
      
      }

    </div>
    
    
  );
};

export default Subscription;

//start date, month, userID

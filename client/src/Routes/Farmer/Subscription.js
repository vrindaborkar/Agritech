import React, { useState ,useEffect} from "react";
import UserService from '../../services/user.service'
import AuthService from '../../services/auth.service'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FarmerService from '../../services/farmer.service'

import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
//import Razorpay from 'razorpay';

import authHeader from "../../services/auth.headers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmModal from "../../components/ConfirmModal";

const Subscription = () => {
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = AuthService.getCurrentUser()
  const [sub,setSub] = useState([]);
  const [open, setOpen] = useState();
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const[MyStalls,setMyStalls] = useState();

  const[date,setDate] = useState();
  const[validity,setValidity] = useState();
  //const API_URL = "https://wingrowmarket.onrender.com/";
  const API_URL = "http://localhost:4000/";
  const[stalls,setStalls] = useState();
  const[validTill,setValidTill] = useState();
  const[remStalls,setRemStalls] = useState(0);
  function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
useEffect(() => {
  
  FarmerService.getBookedStalls().then((res)=>{
      const {data} = res;
      setMyStalls(data.filter(e=>e.bookedBy === user.id))
      console.log("the booked stalls are -- ", MyStalls.length)
      setRemStalls(MyStalls.length)
  })
}, [])
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}, []);
  useEffect( ()=>{
    
    const userId = user.id
    if(sub.length === 0  || isJson(sub[0]) ){
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
        setRemStalls(data[0].stalls-remStalls);
      })
    }
    
   

    
    // await axios.post(API_URL +'sub1',{userId},{headers:authHeader()})
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    handleOpen(true);
  },[])
  const confirmBookingCash = async (e) => {
    const price = 30*300*0.9;
    console.log("Im here")
    // let bookedStats = bookedStalls.toString();
    // const responseData = {
    //   bookedStalls: bookedStalls,
    //   bookedBy: userCurr.id,
    //   bookedAt: date,
    //   isBooked: true,
    // };

    // const stallsBooked = [];
    // bookedStalls.forEach((e) => {
    //   stallsBooked.push(e.stallName);
    // });

    // const price = bookedStalls.reduce(
    //   (total, item) => item.stallPrice + total,
    //   0
    // );
   // e.preventDefault();
    const userId= user.id;
    
    // console.log(userId)
    // await axios.post(API_URL+"sub",{date,userId,validity,stalls})
    //       .then((res)=>{
    //         console.log("the return data ",res)
    //         const {data} = res
    //         setSub(data)
    //       })
    //       .catch((err)=>{
    //         console.log(err)
    //       })
    //const Url = "https://wingrowmarket.onrender.com/bookedstalls";
    const orderId = "123"
    await axios
      .post(API_URL+"sub",{date,userId,validity,stalls})
      .then((response) => {
        const { data } = response;
        if (data) {
          console.log("data--",data)
            //setSub(data)
            //window.location.reload(false)
            navigate("/farmers/subscription");
        }
        toast.success("stalls booked successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          //navigate("/farmers/subscription");
          window.location.reload(false)

        }, 1000);
      })
      .catch((error) => {
        toast.warn("Failed to book stalls!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSub([])
      });

  }

  const confirmBooking = async (e) => {
    //e.preventDefault();
    console.log("hellloooo")
    if (cashOnDelivery) {
      confirmBookingCash();
    }
    else {
      const price = 300*30*0.9

      //console.log(bookedStalls.length);
      //console.log("price", price)
      
      try {
        const orderUrl = API_URL+"order";
        const { data } = await axios.post(
          orderUrl,
          { amount: price * 100 },
          { headers: authHeader() }
        );
        initPayment(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const initPayment = (data) => {
    //console.log(date)
    //let bookedStats = bookedStalls.toString();
    const options = {
      key: process.env.KEY_ID,
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      description: "Wingrow Agritech",

      handler: async (response) => {

        try {

          var orderId;
          
            const verifyUrl = "https://wingrowmarket.onrender.com/verify";
            const { data } = await axios.post(verifyUrl, response, {
              headers: authHeader(),
            });
            orderId = data.orderId;
          

          //console.log(date)
          // const responseData = {
          //   location: Id,
          //   bookedStalls: bookedStalls,
          //   bookedBy: userCurr.id,
          //   bookedAt: date,
          //   isBooked: true,
          // };

          // const stallsBooked = [];
          // bookedStalls.forEach((e) => {
          //   stallsBooked.push(e.stallName);
          // });

          // const price = bookedStalls.reduce(
          //   (total, item) => item.stallPrice + total,
          //   0
          // );
          //const Url = "https://wingrowmarket.onrender.com/bookedstalls";
          const userId = user.id
        await  axios
      .post(API_URL+"sub",{date,userId,validity,stalls})
      .then((response) => {
        const { data } = response;
        if (data) {
          console.log(data)
            setSub(data)
        }
        toast.success("stalls booked successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          //navigate("/farmers/subscription");
          window.location.reload(false)

        }, 1000);
      })
            .catch((error) => {
              toast.warn("Failed to book stalls!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            
            });
        } catch (error) {
          //console.log(error);
          setSub([])
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
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
      { (sub.length !== 0  ) ? 
      <div>
        <h2>Subscibed</h2>
        
        <h3>Start data - { sub[0].date}</h3>
        <h3>validity - {sub[0].validity}</h3>
        <h3> valid till - {validTill} </h3>
        {/* <h3>stalls - {sub[0].stalls}</h3> */}
        <h3>available - {remStalls}</h3>

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

              {/* <button type="submit">Proceed</button> */}
              {validity && date ? (
              <div className="modalbtn">
                <ConfirmModal setCashOnDelivery={setCashOnDelivery} confirmBooking={confirmBooking} />
              </div>
            ) : (
              <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={6}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      style={{ width: "110px", height: "40px", paddingLeft: '5rem', paddingRight: '5rem', margin: '1rem', color: 'white', background: "linear-gradient(90deg, #07952b 41%, #0d6a02)", borderRadius: "20px", textAlign: "center", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      PAY
                    </Button>
                    <Button style={{ width: "110px", height: "40px", paddingLeft: '5rem', paddingRight: '5rem', margin: '1rem', color: 'white', background: "linear-gradient(90deg, #07952b 41%, #0d6a02)", borderRadius: "20px", textAlign: "center", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      PAY ON DELIVERY
                    </Button>
                  </div>
                </Grid>
              </Grid>
            )}

        </form>
      </div>
      
      }

    </div>
    
    
  );
};

export default Subscription;
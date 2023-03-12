import React, { useState, useEffect } from "react";
import "../../styles/Farmer.css";
import FarmerService from "../../services/farmer.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)



const FarmersHome = () => {
  const [InwardData, setInwardData] = useState([]);
  const [OutwardData, setOutwardData] = useState([]);
  const [salesQuantity, setSalesQuantity] = useState(0);
  const [salesRate, setSalesRate] = useState(0);
  const [purchaseQuantity, setPurchaseQuantity] = useState(0);
  const [purchaseRate, setPurchaseRate] = useState(0);
  const today = new Date();
  const todayFormatted = today.toISOString().slice(0, 10);
  const [mondaySalesQuantity,setMondaySalesQuantity] = useState(0);
  const [tuesdaySalesQuantity, setTuesdaySalesQuantity] = useState(0);
  const [wednesdaySalesQuantity, setWednesdaySalesQuantity] = useState(0);
  const [thursdaySalesQuantity, setThursdaySalesQuantity] = useState(0);
  const [fridaySalesQuantity, setFridaySalesQuantity] = useState(0);
  const [saturdaySalesQuantity , setSaturdaySalesQuantity] = useState(0);
  const [sundaySalesQuantity, setSundaySalesQuantity] = useState(0);
  const [mondayPurchaseQuantity, setMondayPurchaseQuantity] = useState(0);
  const [tuesdayPurchaseQuantity, setTuesdayPurchaseQuantity] = useState(0);
  const [wednesdayPurchaseQuantity, setWednesdayPurchaseQuantity] = useState(0);
  const [thursdayPurchaseQuantity, setThursdayPurchaseQuantity] = useState(0);
  const [fridayPurchaseQuantity, setFridayPurchaseQuantity] = useState(0);
  const [saturdayPurchaseQuantity, setSaturdayPurchaseQuantity] = useState(0);
  const [sundayPurchaseQuantity, setSundayPurchaseQuantity] = useState(0);
  const [mondaySalesRate, setMondaySalesRate] = useState(0);
  const [tuesdaySalesRate, setTuesdaySalesRate] = useState(0);
  const [wednesdaySalesRate, setWednesdaySalesRate] = useState(0);
  const [thursdaySalesRate, setThursdaySalesRate] = useState(0);
  const [fridaySalesRate, setFridaySalesRate] = useState(0);
  const [saturdaySalesRate, setSaturdaySalesRate] = useState(0);
  const [sundaySalesRate, setSundaySalesRate] = useState(0);
  const [mondayPurchaseRate, setMondayPurchaseRate] = useState(0);
  const [tuesdayPurchaseRate, setTuesdayPurchaseRate] = useState(0);
  const [wednesdayPurchaseRate, setWednesdayPurchaseRate] = useState(0);
  const [thursdayPurchaseRate, setThursdayPurchaseRate] = useState(0);
  const [fridayPurchaseRate, setFridayPurchaseRate] = useState(0);
  const [saturdayPurchaseRate, setSaturdayPurchaseRate] = useState(0);
  const [sundayPurchaseRate, setSundayPurchaseRate] = useState(0);
  const arr = { 'Hadapsar': 3, 'Kharadi': 4, 'Karve Nagar': 4, 'Bramhasun City': 5, 'Wanawadi': 6, 'Magarpatta': 0, 'Amanora City': 0 }

 
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const weekdayNumber = today.getDay();

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
    datasets: [
      {
        label: 'Data',
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        data: [mondaySalesQuantity * mondaySalesRate - mondayPurchaseQuantity * mondayPurchaseRate, 
               tuesdaySalesQuantity * tuesdaySalesRate - tuesdayPurchaseQuantity * tuesdayPurchaseRate, 
               (wednesdaySalesQuantity * wednesdaySalesRate) - (wednesdayPurchaseQuantity * wednesdayPurchaseRate), 
               (thursdaySalesQuantity * thursdaySalesRate) - (thursdayPurchaseQuantity * thursdayPurchaseRate), 
               fridaySalesQuantity * fridaySalesRate - fridayPurchaseQuantity * fridayPurchaseRate, 
               (saturdaySalesQuantity * saturdaySalesRate) - (saturdayPurchaseQuantity * saturdayPurchaseRate), 
               (sundaySalesQuantity * sundaySalesRate) - (sundayPurchaseQuantity * sundayPurchaseRate) ]
      }
    ]
  };

  const options = {

  }

  useEffect(() => {
    FarmerService.getInward().then((res) => {
      setInwardData(res.data);
    });

    FarmerService.getOutward().then((res) => {
      setOutwardData(res.data);
       console.log("data ",res.data)
    });
  }, []);

  function calculateSalesQuantity(i,y){
    let temp = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === i) {
          console.log('yes')
          temp += e.sales_quantity;
        }
      });
      y(temp);
    }
  }

  function calculateSalesRate(i, y) {
    let temp = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === i) {
          console.log('yes')
          temp += e.sales_rate;
        }
      });
      y(temp);
    }
  }

  function calculatePurchaseRate(i, y) {
    let temp = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === i) {
          console.log('yes')
          temp += e.purchase_rate;
        }
      });
      y(temp);
    }
  }

  function calculatePurchaseQuality(i, y) {
    let temp = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === i) {
          console.log('yes')
          temp += e.purchase_quantity;
        }
      });
      y(temp);
    }
  }


  useEffect(() => {
    for(let i=0;i<7;i++){
      if(i===0){
        calculateSalesQuantity(0, setSundaySalesQuantity)
      }
      else if(i===1){
        calculateSalesQuantity(1, setMondaySalesQuantity)
      }
      else if(i===2){
        calculateSalesQuantity(2, setTuesdaySalesQuantity);
      }
      else if(i===3){
        calculateSalesQuantity(3, setWednesdaySalesQuantity)
      }
      else if(i===4){
        calculateSalesQuantity(4, setThursdaySalesQuantity)
      }
      else if(i===5){
        calculateSalesQuantity(5, setFridaySalesQuantity)
      }
      else if(i===6){
        calculateSalesQuantity(6, setSaturdaySalesQuantity)
      }
    }
  }, [OutwardData]);


  useEffect(() => {
  for(let i = 0; i < 7; i++){
    if (i === 0) {
      calculateSalesRate(0, setSundaySalesRate)
    }
    else if (i === 1) {
      calculateSalesRate(1, setMondaySalesRate)
    }
    else if (i === 2) {
      calculateSalesRate(2, setTuesdaySalesRate);
    }
    else if (i === 3) {
      calculateSalesRate(3, setWednesdaySalesRate)
    }
    else if (i === 4) {
      calculateSalesRate(4, setThursdaySalesRate)
    }
    else if (i === 5) {
      calculateSalesRate(5, setFridaySalesRate)
    }
    else if (i === 6) {
      calculateSalesRate(6, setSaturdaySalesRate)
    }
  }
  }, [OutwardData]);



  useEffect(() => {
     for (let i = 0; i < 7; i++) {
      if (i === 0) {
        calculatePurchaseRate(0, setSundayPurchaseRate)
      }
      else if (i === 1) {
        calculatePurchaseRate(1, setMondayPurchaseRate)
      }
      else if (i === 2) {
        calculatePurchaseRate(2, setTuesdayPurchaseRate);
      }
      else if (i === 3) {
        calculatePurchaseRate(3, setWednesdayPurchaseRate)
      }
      else if (i === 4) {
        calculatePurchaseRate(4, setThursdayPurchaseRate)
      }
      else if (i === 5) {
        calculatePurchaseRate(5, setFridayPurchaseRate)
      }
      else if (i === 6) {
        calculatePurchaseRate(6, setSaturdayPurchaseRate)
      }
    }
  }, [InwardData]);

 

  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      if (i === 0) {
        calculatePurchaseQuality(0, setSundayPurchaseQuantity)
      }
      else if (i === 1) {
        calculatePurchaseQuality(1, setMondayPurchaseQuantity)
      }
      else if (i === 2) {
        calculatePurchaseQuality(2, setTuesdayPurchaseQuantity);
      }
      else if (i === 3) {
        calculatePurchaseQuality(3, setWednesdayPurchaseQuantity)
      }
      else if (i === 4) {
        calculatePurchaseQuality(4, setThursdayPurchaseQuantity)
      }
      else if (i === 5) {
        calculatePurchaseQuality(5, setFridayPurchaseQuantity)
      }
      else if (i === 6) {
        calculatePurchaseQuality(6, setSaturdayPurchaseQuantity)
      }
    }
  }, [InwardData]);


  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {

      OutwardData.forEach((e) => {
        if (weekdayNumber === arr[e.market]) {
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setSalesQuantity(totalSalesQuantity);
    }
  }, [OutwardData]);


  useEffect(() => {
    let totalSalesRate = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (weekdayNumber === arr[e.market]) {
          totalSalesRate += e.sales_rate;
        }
      });
      setSalesRate(totalSalesRate);
    }
  }, [OutwardData]);


  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (weekdayNumber === arr[e.market]) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setPurchaseQuantity(totalPurchaseQuantity);
    }
  }, [InwardData]);




  useEffect(() => {
    let totalPurchaseRate = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (weekdayNumber === arr[e.market]) {
          console.log(e.market)
          totalPurchaseRate += e.purchase_rate;
        }
      });
      setPurchaseRate(totalPurchaseRate);
    }
  }, [InwardData]);

  return (
    <>

<div className="inOutData">

</div>

        <div className="farmers_page">
        <Link style={{ marginTop: '10px' }} className="backbtn green" to="/farmers" >
          Back
        </Link>

      {InwardData && OutwardData && (
        <div className="farmers_data">
          {InwardData.length !== 0 && (
            <div className="inwardData">
              <h3 style={{ padding: "1rem 0" }}>Inward Data</h3>
              <div className="farmersdata_container">
                  <div className="farmerdata_items">
                    <p>Purchase Rate : {purchaseRate}</p>
                  </div>
                  <div className="farmerdata_items">
                    <p>Purchase Quantity : {purchaseQuantity}</p>
                  </div>
              </div>
            </div>
            
          )}

          {InwardData.length === 0 && (
            <div className="inwardData">
              <h3 style={{ padding: "1rem 0" }}>Inward Data</h3>
              <div className="farmersdata_container">
                No Inward Data available!
              </div>
            </div>
          )}

          {OutwardData.length !== 0 && (
            <div className="outwardData">
            {console.log(salesQuantity)}
              <h3 style={{ padding: "1rem 0" }}>Outward Data</h3>
              <div className="farmersdata_container">
                  <div className="farmerdata_items">
                    <p>Sales Rate : {salesRate}</p>
                  </div>
                  <div className="farmerdata_items">
                    <p>Sales Quantity : {salesQuantity}</p>
                  </div>
              </div>
            </div>
          )}

          {OutwardData.length === 0 && (
            <div className="outwardData">
              <h3 style={{ padding: "1rem 0" }}>Outward Data</h3>
              <div className="farmersdata_container">
                No Outward Data available!
              </div>
            </div>
            
          )}

            <div
              style={
                {
                  padding: '20px',
                  width: '80%'
                }
              }

            >
              <div className="inwardData">
                <h3 style={{ padding: "1rem 0" }}>Market Day's</h3>
                <div className="farmersdata_container">
                  <div className="farmerdata_items">
                    <p>Monday    : None</p>
                    <p>Tuesday   : None</p>
                    <p>Wednesday : Hadapsar</p>
                    <p>Thursday  : Kharadi, Karve Nagar</p>
                    <p>Friday    : Bramha Sun City</p>
                    <p>Saturday  : Wanawadi</p>
                    <p>Sunday    : Magarpatta, Amonora City</p>
                  </div>
                </div>
              </div>
              <Bar
                data={data}
                options={options}
              >

              </Bar>
              
            </div>
          
            
        </div>
        
        
      )}
      {!InwardData && !OutwardData && <Spinner />}

      
      
    </div>
    
    </>

    
  );
};

export default FarmersHome;

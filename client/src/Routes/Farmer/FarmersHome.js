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
  const arr = { 'Hadapsar': 3, 'Kharadi': 4, 'Karve Nagar': 4, 'Bramhasun City': 5, 'wanawadi': 6, 'Magarpatta': 0, 'Amanora City': 0 }

 
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
               saturdaySalesQuantity * saturdaySalesRate - saturdayPurchaseQuantity * saturdayPurchaseRate, 
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

  useEffect(() => {
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 0) {
          console.log('yes')
          setSundaySalesQuantity(sundaySalesQuantity + e.sales_quantity);
        }
        else if (arr[e.market] === 6) {
          setSaturdaySalesQuantity(saturdaySalesQuantity + e.sales_quantity);
        }
        else if (arr[e.market] === 5) {
          setFridaySalesQuantity(fridaySalesQuantity + e.sales_quantity);
        }
        else if (arr[e.market] === 4) {
          setThursdaySalesQuantity(thursdaySalesQuantity + e.sales_quantity);
        }
        else if (arr[e.market] === 3) {
          setWednesdaySalesQuantity(wednesdaySalesQuantity + e.sales_quantity);
        }
        else if (arr[e.market] === 2) {
          setTuesdaySalesQuantity(tuesdaySalesQuantity + e.sales_quantity);
        }
        else if (arr[e.market] === 1) {
          setMondaySalesQuantity(mondaySalesQuantity + e.sales_quantity);
        }
      });
      
    }
  }, [OutwardData]);

  useEffect(() => {
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 0) {
          console.log('yes')
          setSundaySalesRate(sundaySalesRate + e.sales_quantity);
        }
        else if (arr[e.market] === 6) {
          setSaturdaySalesRate(saturdaySalesRate + e.sales_quantity);
        }
        else if (arr[e.market] === 5) {
          setFridaySalesRate(fridaySalesRate + e.sales_quantity);
        }
        else if (arr[e.market] === 4) {
          setThursdaySalesRate(thursdaySalesRate + e.sales_quantity);
        }
        else if (arr[e.market] === 3) {
          setWednesdaySalesRate(wednesdaySalesRate + e.sales_quantity);
        }
        else if (arr[e.market] === 2) {
          setTuesdaySalesRate(tuesdaySalesRate + e.sales_quantity);
        }
        else if (arr[e.market] === 1) {
          setMondaySalesRate(mondaySalesRate + e.sales_quantity);
        }
      });

    }
  }, [OutwardData]);


   useEffect(() => {
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 0) {
          console.log('yes')
          setSundayPurchaseQuantity(sundayPurchaseQuantity + e.purchase_quantity);
        }
        else if (arr[e.market] === 6) {
          setSaturdayPurchaseQuantity(saturdayPurchaseQuantity + e.purchase_quantity);
        }
        else if (arr[e.market] === 5) {
          setFridayPurchaseQuantity(fridayPurchaseQuantity + e.purchase_quantity);
        }
        else if (arr[e.market] === 4) {
          setThursdayPurchaseQuantity(thursdayPurchaseQuantity + e.purchase_quantity);
        }
        else if (arr[e.market] === 3) {
          setWednesdayPurchaseQuantity(wednesdayPurchaseQuantity + e.purchase_quantity);
        }
        else if (arr[e.market] === 2) {
          setTuesdayPurchaseQuantity(tuesdayPurchaseQuantity + e.purchase_quantity);
        }
        else if (arr[e.market] === 1) {
          setMondayPurchaseQuantity(mondayPurchaseQuantity + e.purchase_quantity);
        }
      });

    }
  }, [InwardData]);

  useEffect(() => {
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 0) {
          console.log('yes')
          setSundayPurchaseRate(sundayPurchaseRate + e.purchase_rate);
        }
        else if (arr[e.market] === 6) {
          setSaturdayPurchaseRate(saturdayPurchaseRate + e.purchase_rate);
        }
        else if (arr[e.market] === 5) {
          setFridayPurchaseRate(fridayPurchaseRate + e.purchase_rate);
        }
        else if (arr[e.market] === 4) {
          setThursdayPurchaseRate(thursdayPurchaseRate + e.purchase_rate);
        }
        else if (arr[e.market] === 3) {
          setWednesdayPurchaseRate(wednesdayPurchaseRate + e.purchase_rate);
        }
        else if (arr[e.market] === 2) {
          setTuesdayPurchaseRate(tuesdayPurchaseRate + e.purchase_rate);
        }
        else if (arr[e.market] === 1) {
          setMondayPurchaseRate(mondayPurchaseRate + e.purchase_rate);
        }
      });

    }
  }, [InwardData]);



  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {

      OutwardData.forEach((e) => {
        if (weekdayNumber === arr[e.market]) {
          console.log('yes')
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
                {/* {InwardData.map((e, i) => {
                  return (
                    <div key={i} className="farmerdata_items">
                      <p>Commodity : {e.commodity}</p>
                      <p>Market : {e.market}</p>
                      <p>Purchase Rate : {e.purchase_rate}</p>
                      <p>Purchase Quantity : {e.purchase_quantity}</p>
                    </div>
                  );
                })} */}
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
                {/* {OutwardData.map((e, i) => {
                  return (
                    <div key={i} className="farmerdata_items">
                      <p>Commodity : {e.commodity}</p>
                      <p>Market : {e.market}</p>
                      <p>Sales Rate : {e.sales_rate}</p>
                      <p>Sales Quantity : {e.sales_quantity}</p>
                    </div>
                  );
                })} */}
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

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
  const [InwardData, setInwardData] = useState();
  const [OutwardData, setOutwardData] = useState();
  const [salesQuantity, setSalesQuantity] = useState(0);
  const [salesRate, setSalesRate] = useState(0);
  const [purchaseQuantity, setPurchaseQuantity] = useState(0);
  const [purchaseRate, setPurchaseRate] = useState(0);
  const today = new Date();
  const todayFormatted = today.toISOString().slice(0, 10);
  const [mondaySales,setMondaySales] = useState(0);
  const [tuesdaySales, setTuesdaySales] = useState(0);
  const [wednesdaySales, setWednesdaySales] = useState(0);
  const [thursdaySales, setThursdaySales] = useState(0);
  const [fridaySales, setFridaySales] = useState(0);
  const [saturdaySales, setSaturdaySales] = useState(0);
  const [sundaySales, setSundaySales] = useState(0);
  const [mondayPurchase, setMondayPurchase] = useState(0);
  const [tuesdayPurchase, setTuesdayPurchase] = useState(0);
  const [wednesdayPurchase, setWednesdayPurchase] = useState(0);
  const [thursdayPurchase, setThursdayPurchase] = useState(0);
  const [fridayPurchase, setFridayPurchase] = useState(0);
  const [saturdayPurchase, setSaturdayPurchase] = useState(0);
  const [sundayPurchase, setSundayPurchase] = useState(0);
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
        data: [mondaySales-mondayPurchase, tuesdaySales-tuesdayPurchase, wednesdaySales-wednesdayPurchase,thursdaySales-thursdayPurchase,fridaySales-fridayPurchase,saturdaySales-saturdayPurchase,sundaySales-sundayPurchase]
      }
    ]
  };
  console.log(wednesdayPurchase)



  const options = {

  }

  useEffect(() => {
    FarmerService.getInward().then((res) => {
      setInwardData(res.data);
    });

    FarmerService.getOutward().then((res) => {
      setOutwardData(res.data);
      // console.log(res.data)
    });
  }, []);

  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 0) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setSundaySales(totalSalesQuantity);
    }
  }, [OutwardData]);
  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 6) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setSaturdaySales(totalSalesQuantity);
    }
  }, [OutwardData]);

  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 5) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setFridaySales(totalSalesQuantity);
    }
  }, [OutwardData]);

  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 4) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setThursdaySales(totalSalesQuantity);
    }
  }, [OutwardData]);

  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 3) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
          
        }
      });
      setWednesdaySales(totalSalesQuantity);
    }
  }, [OutwardData]);

  useEffect(() => {
     let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 2) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setTuesdaySales(totalSalesQuantity);
    }
  }, [OutwardData]);

  useEffect(() => {
    let totalSalesQuantity = 0;
    if (OutwardData) {
      OutwardData.forEach((e) => {
        if (arr[e.market] === 1) {
          console.log('yes')
          totalSalesQuantity += e.sales_quantity;
        }
      });
      setMondaySales(totalSalesQuantity);
    }
  }, [OutwardData]);

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

  // useEffect(() => {
  //   let totalSalesQuantity = 0;
  //   if (OutwardData) {

  //     OutwardData.forEach((e) => {
  //       if (weekdayNumber === arr[e.market]) {
  //         console.log('yes')
  //         totalSalesQuantity += e.sales_quantity;
  //       }
  //     });
  //     for (let i = 0; i < OutwardData.length; i++) {
  //       console.log(arr[OutwardData[i].market]);
  //     }
  //     console.log(OutwardData.length)
  //     setSalesQuantity(totalSalesQuantity);
  //   }
  // }, [OutwardData]);

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
        if (arr[e.market] === 0) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setSundayPurchase(totalPurchaseQuantity);
    }
  }, [InwardData]);

  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 6) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setSaturdayPurchase(totalPurchaseQuantity);
    }
  }, [InwardData]);

  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 5) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setFridayPurchase(totalPurchaseQuantity);
    }
  }, [InwardData]);

  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 4) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setThursdayPurchase(totalPurchaseQuantity);
    }
  }, [InwardData]);

  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 3) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setWednesdayPurchase(totalPurchaseQuantity);
    }
  }, [InwardData]);

  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 2) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setTuesdayPurchase(totalPurchaseQuantity);
    }
  }, [InwardData]);

  useEffect(() => {
    let totalPurchaseQuantity = 0;
    if (InwardData) {
      InwardData.forEach((e) => {
        if (arr[e.market] === 1) {
          totalPurchaseQuantity += e.purchase_quantity;
        }
      });
      setMondayPurchase(totalPurchaseQuantity);
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

  // const getInward = (InwardData) => {
  //   let sum = 0
  //   for (let i = 0; i < InwardData.length; i++) {
  //     sum += InwardData[i].purchase_quantity
  //   }
  //   return sum / InwardData.length
  // }

  // console.log(getInward())
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

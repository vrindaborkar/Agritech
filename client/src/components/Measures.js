import React from 'react';
import '../styles/Home.css'

function Location() {
    const locations = [
    {
        icon:"./images/fast-delivery.png",
        measure:"Total No. of Deliveries",
        data:"99450",
    },
    {
        icon:"./images/plane.png",
        measure:"Indian AirForce Pune",
        data:"8 Tenders",
    },
    {
        icon:"./images/multiple-users-silhouette.png",
        measure:"Number of Customers",
        data:"9100",
    },
    {
        icon:"./images/podcast.png",
        measure:"Number of Farmers",
        data:"210",
    },
    {
        icon:"./images/002-hand.png",
        measure:"Revenue Generated",
        data:"260 Lakhs",
    },
    {
        icon:"./images/003-trash-bin.png",
        measure:"Reduce Wastage",
        data:"310 MT",
    },
    {
        icon:"./images/001-user.png",
        measure:"Other citizens",
        data:"4400",
    },
    {
        icon:"./images/light-bulb.png",
        measure:"Farmers Training Programs",
        data:"21 Programs",
    }
]
  return <>
      {
          locations.map((e,i)=>{
            return(
                <div key={e}  className="measure_box">
                        <div>
                            
                            <img alt="team" className="measure_icon" src={e.icon}/>
                            
                            <div className="measure_wrapper">
                                    <h2 className="location_markets">{e.measure}</h2>

                                <p className="location_date">{e.data}</p>
                            </div>
                        </div>
                    </div>
            )
          })
      }

  </>;
}

export default Location;
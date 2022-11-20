import React from "react";
import {useSelector} from 'react-redux';
const Painding=()=>{
var paind=useSelector((e)=>e.usernotes.pai)
  return(
<>
<div >

<p style={{textAlign:"center",color:"white",fontSize:"23px"}}>Painding Tasks</p>
<div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          
        }}
      >
        {paind?.map((da,i) => {
            return (
              <>
                <div
                key={i}
                  style={{
                    margin: '6px',
                    padding: '23px',
                    color: 'white',
                    backgroundColor: '#686d75',

                    borderRadius: '9px',
                  }}
                >
                  <h3> {da.text}</h3>
                  <h5 style={{marginTop:"-13px"}}>
                    {da.time}
                    </h5>
                    <p style={{marginTop:"-28"}}>{da.mainbod}</p>
                   
                </div>
              </>
            );
          })}

      </div>
      </div>
</>

  )
}
export default Painding;
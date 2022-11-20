import React, { useRef } from 'react';
import './styles.css';
import Painding from './painding';
import Reduxnotes from './reduxnotes';
import ReactTooltip from 'react-tooltip';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
export default function App() {
  const [index, setIndex] = React.useState(null);
  const [inp, setInp] = React.useState('');
  const [data, setData] = React.useState([{}]);
  const [filt, setFilt] = React.useState(true);
  document.body.style.backgroundColor = 'black';
  const reff = useRef(null);
  const ids = (ob) => {
    setIndex(ob);
    reff.current.value = data[ob].text;
  };

  const edit = () => {
    setFilt(true);
    const tdo = [...data];
    tdo[index].text = reff.current.value;
    setData(tdo);
  };
  const dell = (idd) => {
    let del = data.filter((e) => e.id !== idd);
    setData(del);
  };
  
  return (
    <div>
      {/*<input type={filt?"hidden":"text"} ref={reff}  />
     <button onClick={()=>{
edit()
     }}> edit</button>
      <h1>Hello StackBlitz!</h1>
      <p >Start editing to see some magic happen :)</p>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          
          setData([...data,{text:inp,id:data.length-1+1}])
        
        }}
      >
        se
      </button>

      {data.length >=1
        && data.map((e) => {
            return (
              <>
                
                  <p key={e.id}>{e.text}{e.id}</p>
                
                <button
                  onClick={() => {
                  
                    setFilt(!filt)
                 ids(e.id)
                
                  }}
                >
                  {' '}
                  update
                </button>

                <button onClick={()=>{
dell(e.id)
                }}>del</button>
              </>
           
          )  })}
     

<p>reduxpart</p>*/}


<Link to="/p">
      <div
        style={{
          position: 'absolute',
          right: '0',
          marginRight: '22px',
          top: '23px',
          cursor: 'pointer',
        }}
      >
      
      <ReactTooltip/>
        <svg
        data-tip="Painding"
        data-type="warning"
        data-border="true" 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{ height: '22px', width: '22px', color: 'white' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
          />
        </svg>
        
      </div>
      </Link>
      <Routes>
        <Route path="/" element={<Reduxnotes />} />
        <Route path="/p" element={<Painding />} />
      </Routes>

      
    </div>
  );
}

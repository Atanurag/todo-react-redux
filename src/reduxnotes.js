import React from 'react';
import { add, dele, update ,imgrr,pain} from './actio';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';
const Reduxnotes = () => {
  const reduim=React.useRef();
  const redref = React.useRef();
  const redref1 = React.useRef();
  const textarear = React.useRef();
  const user = useSelector((e) => e.usernotes.notes);
  const fire = useSelector((e) => e.usernotes.firedata);
  const dispatch = useDispatch();
  const [useinp, setUseinp] = React.useState(false);
  const [getid, setGetid] = React.useState(null);
  const [newtext, setNewtext] = React.useState('');
  const[im,setIm]=React.useState([{id:0,p:"ha"},{id:1,p:"haa"}]);
  var current = new Date();
  
  const [togmod, setTogmod] = React.useState({
    st: false,
    nd: false,
  });
const[ch,setCh]=React.useState(false);
  const mod = {
    content: {
      margin: 'auto',
      height: '222px',
      width:"55%"
    },
  };

  const edittext = (id) => {};
React.useEffect(()=>{
  dispatch(pain())
})


  return (
    <>

      {/*add modal */}
      <Modal ariaHideApp={false} isOpen={togmod.st} style={mod}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{
            height: '33px',
            width: '26px',
            cursor: 'pointer',
            position: 'absolute',
            right: '0',
            top: '0',
          }}
          onClick={() => {
            setTogmod({ ...togmod, st: false });
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            ref={redref}
            style={{
              border: 'none',
              borderBottom: '1.6px solid black',
              outline: 'none',
              fontSize:"17px"
            }}
            placeholder="Title"
          />
          <br />

          <textarea
            ref={textarear}
            style={{
              height: '100px',
              marginTop: '22px',
              border: '1.6px solid grey',
              outline: 'none',
              fontSize:"15px"
            }}
            placeholder="Type something here..."
          ></textarea>
          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                backgroundColor: '#5ff56c',
                color: 'black',
                padding: '4px  22px',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '600',
                marginTop: '12px',
                outline: 'none',
                cursor: 'pointer',
                border: ' 2px #5ff56c ',
              }}
              onClick={() => {
                dispatch(
                  add({
                    text: redref.current.value,
                    mainbod: textarear.current.value,
                    id: user.length + 1 - 1,
                    time: current.toLocaleString(),
                    chk:false
                  })
                );
                setTogmod({ ...togmod, st: false });
              }}
            >
              add
            </button>
          </div>
        </div>
      </Modal>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{
          height: '66px',
          width: '55px',
          cursor: 'pointer',
          color: 'white',
        }}
        onClick={() => {
          setTogmod({ ...togmod, st: true });
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {/*add modal */}

      <br />
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {user &&
          user.map((da,i) => {
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
                   <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >  <ReactTooltip/>

                   <svg    data-tip={da.chk?"completed":"uncompleted"}
                    data-type="info"
                    data-border="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{
                      height: '22px',
                      width: '22px',
                      color: da.chk?'#66fc03':'lightblue',
                      cursor: 'pointer',
                    }}   onClick={() => {
                      edittext(da.id);
                      setCh(true)
                      {/*setUseinp(true);
                      redref1.current.value = user[da.id].mainbod;*/}
                      setGetid(da.id);
                      dispatch(update({ii:da.id,te:da.text,mai:da.mainbod,tim:da.time},{tr:true}))
                    }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
                    <ReactTooltip /> 
                    <svg
                     data-tip="delete"
                     data-type="error"
                     data-border="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{
                        height: '22px',
                        width: '22px',
                        color: '#d9323a',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        dispatch(dele(da.id));
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </>
            );
          })}

      </div>
    
    </>
  );
};
export default Reduxnotes;

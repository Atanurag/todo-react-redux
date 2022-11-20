
import React from "react";

const init={
notes:[],
listcompleted:[],
pai:[],
firedata:[]

}
var current = new Date();
const usernotes=(state=init,action)=>{

switch(action.type){
 
  case "add":

//console.log(state.notes)
    return{
      ...state,
      notes:[...state.notes,action.payload]
    }
    break;
    case "update":

   
state.notes[action.payload.ii].chk=action.two.tr

    return{
      ...state,
      listcompleted:[...state.listcompleted,action.payload],
      notes:[...state.notes]
    }
    break;
    case "del":
      let d=state.notes.filter(e=>e.id!==action.payload)
     
      return{

        ...state,
        notes:d
      }
break;
case "imgr":
let  w=action.payload.map((e)=>{
  return e;
})
  console.log(state.firedata,"fi3e")
 
    //console.log(da,action.payload)
return{
...state,
  firedata:w
}

break;
case "pai":
  var p=state.notes.filter((e)=>{
    return e.chk===false
  })

return{
...state,
  pai:p
}


  default:
    return state;
    
}

}
export default usernotes;


{/*const init={
notes:[]

}
const usernotes=(state=init,action)=>{

switch(action.type){

  case "add":
   
    return{
      ...state,
      notes:[...state.notes,action.payload]
    }
    break;
    case "update":
    console.log(action.payload)
   
   
    state.notes[action.payload.i].text=action.payload.te

    return{
      ...state,
      notes:[...state.notes]
    }
    break;
    case "del":
      let d=state.notes.filter(e=>e.id!==action.payload)
      console.log(d)
      return{

        ...state,
        notes:d
      }
  default:
    return state;
    
}

}
export default usernotes;*/ }


export const add=(pay)=>{
  return{
    type:"add",
    payload:pay
  }
  
  }
  export const update=(pay,c)=>{
    return{
      type:"update",
      payload:pay,
      two:c
    }
    
    }
    export const dele=(pay)=>{
      return{
        type:"del",
        payload:pay
      }
      
      }
      
      export const imgrr=(pay)=>{
        return{
          type:"imgr",
          payload:pay
        }
  
      }
      export const pain=(pay)=>{
        return{
          type:"pai",
          payload:pay
        }
  
      }
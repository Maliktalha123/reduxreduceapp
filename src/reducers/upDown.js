const initailState =10;
const changeNumber = (state = initailState,action)=>{
    switch(action.type){
        case "increement" : return state + 1;
        case "decreement" : return state - 1;
  default : return state;
    }    
}
export default changeNumber;
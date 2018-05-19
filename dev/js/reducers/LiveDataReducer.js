const INITIAL_STATE = {
    "_id":"",
    "Location":"",
    "Product":"",
    "Subject":"",
    "AlertPriority":"",
    "AlertType":"",
    "__v":0,
    "AlertStatus":""
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_LIVEDATA':
        return {state,livedata:Response};
      case 'SUCESS_LIVEDATA':
        return {state,livedata:action.payload};
      default:
        return state;
    }
  };
import axios from 'axios';
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const  getAlerts = () => {
    console.log("in getAlerts action");
    return (dispatch) => {
      dispatch({ type: 'GET_LIVEDATA' });
      axios.get('https://ns-idpovaimhn.now.sh/alert', {
        headers: {
          'Content-Type': 'application/json',
        },
        params: [{
            AlertStatus: "all"
          }]
      })
        .then((response) => getDataSuccess(dispatch, response.data)).then((response =>{
            this.setState({data: response.data});
        }))
        .catch(  (error) => {
          const response = error.response
          console.log(response)
        })
    };
  };
  
  export const getDataSuccess = (dispatch, data) => {
    console.log("in getDataSuccess action"+JSON.stringify(data));
    // can we stop the process for 2 seconds
    setTimeout(()=>{},4000);
    dispatch({
      type: 'SUCESS_LIVEDATA',
      payload: data
    });
  }
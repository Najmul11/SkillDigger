import axios from "axios";
import { server } from "../store";
import { loadUser } from "./user";

export const buySubscription = (paymentMethodId) => async dispatch => {
    try {
      dispatch({ type: 'buySubscriptionRequest' });
  
      const { data } = await axios.post(`${server}/subscribe`,
        {paymentMethodId},
        {
          withCredentials: true,
        }
      );
        
      dispatch({ type: 'buySubscriptionSuccess', payload: data});
      return data
    } catch (error) {
      dispatch({type: 'buySubscriptionFail', payload: error.response.data.message});
    }
  };
  
  export const cancelSubscription = () => async dispatch => {
    try {
      dispatch({ type: 'cancelSubscriptionRequest' });
  
      const { data } = await axios.post(`${server}/cancelsubscribe`,
      {},
        {
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
      dispatch(loadUser())
      return data
    } catch (error) {
      dispatch({
        type: 'cancelSubscriptionFail',
        payload: error.response.data.message,
      });
    }
  };


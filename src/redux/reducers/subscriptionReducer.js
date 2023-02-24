import { createReducer } from "@reduxjs/toolkit";

export const subscriptionReducer= createReducer({},{
    buySubscriptionRequest: state => {
        state.loading = true;
    },

    buySubscriptionSuccess: (state, action) => {
        state.loading = false;
        state.subscriptionId = action.payload.subscriptionId;
        state.invoice = action.payload.invoice;
        state.payment_id=action.payload.payment_id
    },
    
    buySubscriptionFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
  
    cancelSubscriptionRequest: state => {
        state.loading = true;
    },

    cancelSubscriptionSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },

    cancelSubscriptionFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: state => {
        state.error = null;
    },

    clearMessage: state => {
        state.message = null;
    },
})
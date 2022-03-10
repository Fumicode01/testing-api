import React from 'react'
import axios from 'axios'

export const SendOrder = async (state, activeStep, setActiveStep, setError, setRedirectUrl) => {
    console.log(state)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer qhtfs87hjnc12kkos',
        }
    }

    await axios.post('http://localhost:5000/api/order', state, config)
            .then(res => {
                setActiveStep(activeStep + 1);
                console.log(res.data.checkoutUrl)
                setRedirectUrl(res.data.checkoutUrl);
            }).catch((err) => {
                if(err.response.status === 400){
                    setError("Please check your details and try again.");
                }
                if(err.response.status === 401){
                    setError("Authentication failed. Please login again or Contact us.");
                }
                else {
                    setError("This is an internal Error. Please Contact us.");
                    throw new Error(err);
                }
            })
}

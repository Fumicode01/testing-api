import React, {useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

export const AddressForm = ({ activeStep, setActiveStep, handleBack,  steps }) => {
    const { state, dispatch } = useContext(AppContext);
    const phoneNumber = state.user.phoneNumber
    const [formValue, setFormValue] = useState({
        line1: '',
        name: '',
        suburb: '',
        postcode: '',
        countryCode: '',
        phoneNumber: '',
    });
    useEffect(()=> {
        console.log(state)
    },[state])


    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "SET_SHIPPING", payload: formValue});
        setActiveStep(activeStep + 1);
    }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField
                required
                id="line1"
                name="line1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="name"
                name="name"
                label="Country Name"
                fullWidth
                autoComplete="country-name"
                variant="standard"
                onChange={handleChange}

            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="suburb"
                name="suburb"
                label="Suburb"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                onChange={handleChange}

            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="postcode"
                name="postcode"
                label="postcode"
                fullWidth
                variant="standard"
                onChange={handleChange}

            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="countryCode"
                name="countryCode"
                label="CountryCode"
                fullWidth
                variant="standard"
                onChange={handleChange}

            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="phone"
                name="phoneNumber"
                label="Mobile Phone"
                value={phoneNumber}
                fullWidth
                autoComplete="mobile phone"
                variant="standard"
                onChange={handleChange}

            />
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                    </Button>
                )}

                <Button
                    variant="contained"
                    type="submit"
                    // onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
                </Box>
            {/* <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
            </Grid> */}
        </Grid>
      </form>
    </React.Fragment>
  );
}
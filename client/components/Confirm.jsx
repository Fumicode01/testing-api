import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/router'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer qhtfs87hjnc12kkos',
    }
  
}



export const Confirm = ({ activeStep, setActiveStep, handleBack,  steps })  => {
    const { state, dispatch } = useContext(AppContext);
    const { items, shipping, consumer, totalAmount } = state
    const router = useRouter()
    
    useEffect(()=>{
        console.log(state)
    },[])

    const handleClick = async () => {
       const res = await axios.post('http://localhost:5000/api/order', state, config)
        try{
            console.log(res.data)
            // setActiveStep(activeStep + 1);
            router.push(res.data.checkoutUrl)
        } catch(err){
            console.error(err)
        }
     
    }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((item) => (
          <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} />
            <Typography variant="body2">{item.price.amount}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {totalAmount.amount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            User Info
          </Typography>
          <Typography gutterBottom>{consumer.givenNames} {consumer.sername}</Typography>
          <Typography gutterBottom>{consumer.email}</Typography>
          {consumer.phoneNumber && <Typography gutterBottom>{consumer.phoneNumber}</Typography>}

        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Detail
          </Typography>
          <Typography gutterBottom>{shipping.line1}</Typography>
          <Typography gutterBottom>{shipping.suburb}</Typography>
          <Typography gutterBottom>{shipping.postcode}</Typography>
          <Typography gutterBottom>{shipping.name}</Typography>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                    </Button>
                )}

                <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
            </Box>
      </Grid>
    </React.Fragment>
  );
}
import React from 'react';
import { Grid, Typography, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';

const UserProfile = () => {

  const name = localStorage.getItem('authName')
  const email = localStorage.getItem('authEmail')


  return (
    <>
      <Navbar />
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>

        {/* Center-align content */}
        <Grid item xs={12} md={6} lg={4} style={{ marginTop: -200 }}>

          <Typography marginLeft="-20px" marginBottom="30px" pt={20} variant='h5' justifyContent="center" alignItems="center" style={{ color: 'white', mt: 0 }}>My Account</Typography>

          <Card style={{ borderRadius: 15, marginLeft: 60, backgroundColor: 'grey', opacity: 0.5, width: '70%', padding: '20px', textAlign: 'center' }}>

            <img src="https://images.slivcdn.com/UI_icons/Multiprofile/profile-00.png?w=82&q=high&fr=webp" />

            <Typography style={{ color: 'white' }} variant="h5" gutterBottom>
              {name}
            </Typography>

            <Typography style={{ color: 'white' }} variant="body1" color="textSecondary" gutterBottom>
              {email}
            </Typography>

            <Button style={{ color: 'white' }}>
              {<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAAAAADFHGIkAAAArElEQVQoz2NQxAEYiJWIuP1xuhIWibgf////X6uEIQEUv7/m///Z6BIgcQvF5f9/qaJKAMU/WSrqnP7/HlUH2PxZQPF/hSgSIHO2////8v+/ShRXgc1X2fofKg6XgNgLMqcSxYMY4lAJTHGIBBZxsIQbFnGwxOb/DzDEQRLKH/7XKmqjiYMkAv7/D8k5jyYOkuj9DwJo4iCJU0DhH8eiMGPw8fmpMRrkxzlhCQDvra1OxXd1fgAAAABJRU5ErkJggg==" />} Edit DETAILS
            </Button>

          </Card>

          <Link className="header-account-menu-item normal-link" to="#">
            <Button style={{ color: 'white', justifyContent: 'center', margin: '40px 0 0 0px' }}>
              {<img
                className="menuItemimage"
                alt="transaction hisorty"
                width="22"
                height="22"
                src="https://images.slivcdn.com/UI_icons/transaction_history/transaction_history.png?q=high&fr=webp "
              />} Transaction History
            </Button>
          </Link>

          <Link className="header-account-menu-item normal-link" to="#">
            <Button style={{ color: 'white', justifyContent: 'center', margin: '40px 0 0 0px' }}>
              {<img
                className="menuItemimage"
                alt="device management"
                width="22"
                height="22"
                src="https://images.slivcdn.com/UI_icons/transaction_history/devicemanagementicon.png?q=high&fr=webp"
              />} Device Management
            </Button>
          </Link>

          <Link className="header-account-menu-item normal-link" to="/login">
            <Button style={{ color: 'white', justifyContent: 'center', margin: '40px 0 0 0px' }}>
              {<img
                className="menuItemimage"
                alt="Sign Out"
                width="22"
                height="22"
                src="https://images.slivcdn.com/UI_icons/transaction_history/signout.png?q=high&fr=webp "
              />} Sign out
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfile;
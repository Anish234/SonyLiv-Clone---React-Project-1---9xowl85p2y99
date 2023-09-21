import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const MyList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const navigate = useNavigate()
  const token = localStorage.getItem('authToken')
  useEffect(() => {
    // Fetch the user's watchlist using the API
    axios.get('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
      },
    })


      .then((response) => {
        setWatchlist(response.data.data.shows);
      })
      .catch((error) => {
        alert(`Server is down. Please try after sometime `)
      });
  }, []);


  return (
    <>
      <Navbar />
      <div>
        <Typography variant='h4' pt={5} style={{ margin: "30px", color: 'white' }}>My Watchlist</Typography>
        {watchlist.length >= 1 ? watchlist.map((show) =>

        (

          <Grid item xs={8} sm={4} md={2} key={show._id} style={{ border: "black" }}>

            <img onClick={() => {
              navigate('/content', { state: show })
            }} name={show._id} src={show.thumbnail} alt={show.title} style={{ margin: "30px 50px", height: 300, width: '80%', maxWidth: '300px' }} />
            <p>{show.title}</p>
          </Grid>
        )
        ) : (
          <h2>No Watchlist added</h2>
        )}
      </div>
    </>
  );
};

export default MyList;
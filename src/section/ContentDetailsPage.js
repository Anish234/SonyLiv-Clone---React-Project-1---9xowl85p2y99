import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ReactPlayer from 'react-player';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const ContentDetailsPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState("");
  const [added, setAdded] = useState(false);
  const { state } = useLocation()
  const handleOpenVideo = () => {

    setIsVideoOpen(true);
  };
  useEffect(() => {
    // Fetch the user's watchlist using the API
    axios.get('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
      },
    })


      .then((response) => {
        const addedWatch = response.data.data.shows.filter(e => e._id === state._id)?.[0]?._id   //optional chaining
        setIsInWatchlist(addedWatch || "");
        setAdded(addedWatch ? true : false);
      })
      .catch((error) => {

      });
  }, []);
  console.log(isInWatchlist, "pathan")
  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };
  const token = localStorage.getItem('authToken');
  const addToWatchlist = async (e) => {
    try {
      if (isInWatchlist) {
        // Remove from watchlist
        await axios.patch(
          `https://academics.newtonschool.co/api/v1/ott/watchlist/${state._id}`,
          { showId: state._id },
          {
            headers: {
              'state-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              projectID: PROJECT_ID,
            },
          }
        );
        setAdded(false);
      } else {
        // Add to watchlist
        await axios.patch(
          `https://academics.newtonschool.co/api/v1/ott/watchlist/${state._id}`,
          { showId: state._id },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              projectID: PROJECT_ID,
            },
          }
        );
        setAdded(true);
      }

      if (state._id == selectedId) {
        setSelected(state)
      }
    } catch (error) {
    }
  };
  return (
    <>
      <Navbar />
      <Container style={{ backgroundColor: 'black' }} maxWidth="md">
        {isVideoOpen ? (
          <Box style={{ marginTop: 200 }}>
            <AiOutlineClose style={{ color: 'white' }} onClick={handleCloseVideo} />
            <ReactPlayer
              url={state.video_url}
              controls
              width="100%"
              height="300px"
              playing='true'
              style={{ marginTop: '20px' }}
              onEnded={handleCloseVideo}
            />
          </Box>
        ) : (
          <Box style={{ color: 'white' }} padding={10} display="flex" flexDirection="column" alignItems="center">

            <img src={state.thumbnail} alt={state.title} style={{ width: '80%', maxWidth: '300px' }} />
            <Typography variant="h4" gutterBottom>
              {state.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {state.keywords}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {state.type}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cast: {state.cast}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Director: {state.director}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {state.description}
            </Typography>
            <Button onClick={handleOpenVideo} style={{ marginTop: 10, backgroundColor: 'white', color: 'black', fontWeight: 600 }}
              variant='contained'><BsFillPlayFill />Watch Free Preview</Button>

            <Button name={state._id}
              style={{ marginTop: 10, backgroundColor: 'white', color: 'black', fontWeight: 600 }}
              variant="contained" color="primary" onClick={addToWatchlist}>
              {added ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ContentDetailsPage;
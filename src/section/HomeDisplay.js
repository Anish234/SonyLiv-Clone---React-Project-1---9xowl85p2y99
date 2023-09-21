import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { fetchShows } from '../api';
import ReactPlayer from 'react-player';
import './HomeDisplay.css'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
const HomeDisplay = () => {
  const [homeShow, setHomeShow] = useState([]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  useEffect(() => {
    const fetchHomeShow = async () => {
      const data = await fetchShows(68, 1);
      setHomeShow(data.data);
    };

    fetchHomeShow();
  }, []);
  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <Container>
      {homeShow.map((home, index) => (
        <div key={index}>
          <Box style={{
            width: '115%',
            background: `linear-gradient(to right,#000, transparent),url(${homeShow ? home.thumbnail : ""})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            minHeight: '40px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '150px',
            color: 'white',
          }}
          >
            <div className='left'>

              <Typography variant="subtitle1" marginLeft={-39} gutterBottom>
                {home.description}
              </Typography>
              <Typography variant='h6' marginLeft={-40}>{`Cast: ${home.cast}`}</Typography>
              <Typography variant='h6' marginLeft={-40}>{home.keywords[0]}|{home.keywords[1]}|{home.keywords[2]}</Typography>
              <Button onClick={handleOpenVideo} style={{ marginTop: 10, marginLeft: -320, backgroundColor: 'white', color: 'black', fontWeight: 600 }}
                variant='contained'><BsFillPlayFill />Watch Free Preview</Button>
            </div>
            <div className='player'>

              {isVideoOpen && (
                <Box>
                  <AiOutlineClose onClick={handleCloseVideo} />
                  <ReactPlayer
                    url={home.video_url}

                    playing='true'
                    controls
                    width="100%"
                    height="300px"
                    style={{ marginTop: '20px' }}
                    onEnded={handleCloseVideo}
                  />

                </Box>
              )}
            </div>

            <div className='right'>
              <Button style={{
                height: 40,
                padding: '5px 0 0 0',
                width: 150,
                textSizeAdjust: 'auto',
                borderRadius: '100px',
                marginLeft: 20,
                alignContent: 'center',
                backgroundImage: 'linear-gradient(to right, darkblue, red)',
              }} variant="contained" color="primary" >
                New Movie
              </Button>
              <Typography variant="h6" gutterBottom>
                Movie : {home.title}
              </Typography>

              <Typography variant="h8" gutterBottom>
                Director : {home.director}
              </Typography>

            </div>

          </Box>
        </div>
      ))}
    </Container>

  );
};

export default HomeDisplay;
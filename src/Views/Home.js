import React from 'react';
import Footer from "../components/common/footer/Footer";
import MovieCardList from "../components/common/movieCardList/MovieCardList";
import Navbar from '../components/common/navbar/Navbar';
import HomeDisplay from '../section/HomeDisplay';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeDisplay />
      <MovieCardList className="body-bg" />
      <br />
      <Footer />
    </>
  );
};

export default Home;

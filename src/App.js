import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import TVShows from './section/TVShows';
import Sports from "./Views/Home";
import MoviesSection from './section/MoviesSection';
import Webseries from "./section/Webseries";
import ShortFilm from "./section/ShortFilm";
import VideoSong from "./section/VideoSong";
import Trailer from "./section/Trailer";
import Documentary from "./section/Documentary";
import ActivateTV from "./Views/activateTv/ActivateTV";
import Subscribe from "./Views/subscribe/Subscribe";
import Settings from "./Views/settings/Settings";
import UserProfile from './section/UserProile';
import Login from './Views/login/Login';
import RegistrationForm from './Views/registration/RegistrationForm';
import MyList from './section/MyList';
import ContentDetailsPage from './section/ContentDetailsPage';
import UpdatePassword from './Views/updatepassword/UpdatePassword';

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/content' element={<ContentDetailsPage />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/movies" element={<MoviesSection />} />
        <Route path="/webseries" element={<Webseries />} />
        <Route path="/shortfilm" element={<ShortFilm />} />
        <Route path="/videosong" element={<VideoSong />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/activate" element={<ActivateTV />} />
        <Route path="/subscription" element={<Subscribe />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path='/updatepassword' element={<UpdatePassword />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </div>
  );
}

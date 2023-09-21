import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleMovieCard from "./SingleMovieCard";
import LanguageCard from "./LanguageCard";
import axios from "axios";
import "./MovieCardList.css";
import { PROJECT_ID } from '../../../api';
import "swiper/swiper.css";
import "swiper/modules/pagination/pagination.js";
import "swiper/modules/navigation/navigation.js";
import { Pagination, Navigation } from "swiper";

const MovieCardList = () => {
    const [movies, setMovies] = useState([]);
    const languages = [
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Tamil_lang_1x1.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Telugu_lang_1x1.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/malayalam_lang_square_imageNEW.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Marathi_lang_1x1.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Hindi_lang_1x1.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Eng_lang_1x1.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/bangla_lang_1x1.jpg",
        "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/kannada_rev22_squre_thumbnail.jpg"
    ];

    useEffect(() => {
        axios.get('https://academics.newtonschool.co/api/v1/ott/show?limit=100', {
            headers: {
                projectId: PROJECT_ID,
            },
        })
            .then((response) => {
                setMovies(response.data.data);
            })
            .catch((error) => {
                alert(`Server is down. Please try after sometime `)
            });
    }, []);

    return (

        <>

            <div className="listing-label">
                <h3>More Like This</h3>
            </div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.slice(0, 20).map((movie, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <SingleMovieCard movie={movie} num={key} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Today's Hot Picks */}
            <div className="listing-label">
                <h3>Today's Hot Picks</h3>
            </div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.slice(20, 40).map((movie, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <SingleMovieCard movie={movie} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Watch in your language */}
            <div className="listing-label">
                <h3>Watch in your Language</h3>
            </div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {languages.map((l, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <LanguageCard lang={l} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* movie banner 1 */}
            <div className="movie-big-banner">
                <img
                    id="multicards#$$#card_cutout_layout#$$#33958_14719"
                    className="Cutout-img listing-link"
                    alt="banner-1"
                    title="sports-banner-1"
                    src="https://images.slivcdn.com/videoasset_images/kbc2023_29aug_web.jpg?h=191&w=1416&q=high&fr=webp"
                />
            </div>
            {/* New on LIV */}
            <div className="listing-label">
                <h3>New On LIV</h3>
            </div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.slice(41, 60).map((movie, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <SingleMovieCard movie={movie} newSeason={true} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Latest Episodes */}
            <div className="listing-label">
                <h3>Latest Episodes</h3>
            </div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.slice(61, 80).map((movie, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <SingleMovieCard movie={movie} newSeason={key === 0 && true} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Classic TV Shows */}
            <div className="listing-label">
                <h3>Classic TV Shows</h3>
            </div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.slice(81, 100).map((movie, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <SingleMovieCard movie={movie} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};
export default MovieCardList;




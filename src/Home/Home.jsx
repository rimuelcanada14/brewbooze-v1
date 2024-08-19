import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Ensure pagination styles are imported

const Welcome = () => {
    const swiperRef = useRef(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(0);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleSkip = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const totalSlides = swiperRef.current.swiper.slides.length;
            swiperRef.current.swiper.slideTo(totalSlides - 1); // Skip to last slide
        }
    };

    const onSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const isLast = swiper.activeIndex === swiper.slides.length - 1;
            setIsLastSlide(isLast);
            setCurrentSlide(swiper.activeIndex + 1);
        }
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            setTotalSlides(swiper.slides.length);
            setCurrentSlide(swiper.activeIndex + 1);
        }
    }, []);

    return (
        <div className='welcome-page'>
                    <div className='simulate-text'>
                        <h2 className='welcome-title'>Welcome to Homepage</h2>
                        <div className='welcome-content'>
                            <p>BrewBooze is now ready to help you in enhancing your experience with your beverages. 
                                Click the button below to start.</p>
                        </div>
                    </div>

                    <div>
                        <img src='./Logo.png' alt='Business' className='business-image' />  
                    </div>
                    
                    <div className='button-container'>
                        <button onClick={handleNext} className='next-button'>Next</button>
                    </div>

        </div>
    );
};

export default Welcome;

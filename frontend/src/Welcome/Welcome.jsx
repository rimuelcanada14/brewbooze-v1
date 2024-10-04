import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Welcome.css';

const Welcome = () => {
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(0);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (swiper.activeIndex === swiper.slides.length - 1) {
                navigate('/home');
            } else {
                swiper.slideNext(); 
            }
        }
    };
    
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev(); 
        }
    };
    

    const handleSkip = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const total = swiperRef.current.swiper.slides.length;
            swiperRef.current.swiper.slideTo(total - 1);
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
            {!isLastSlide && (
                <button onClick={handleSkip} className='skip-button'>Skip</button>
            )}
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }} 
                allowTouchMove={false} 
                className='swiper-container'
                onSlideChange={onSlideChange}
                onInit={onSlideChange}
            >
                <SwiperSlide className='welcome-slide'>
                    <div className='simulate-text'>
                        <h2 className='welcome-title'>Welcome to BrewBooze</h2>
                        <div className='welcome-content'>
                            <p>BrewBooze is now ready to help you in enhancing your experience with your beverages. 
                                Click the button below to start.</p>
                        </div>
                    </div>
                    
                    <div>
                        <img src='./Logo.png' alt='Business' className='logo-image' />  
                    </div>
                </SwiperSlide>

                <SwiperSlide className='welcome-slide'>
                    <div className='simulate-text'>
                        <h2 className='welcome-title'>Learn how your drink was made</h2>
                        <div className='welcome-content'>
                            <p>With the help of the simulator of BrewBooze, you will know how your
                                favorite coffee or cocktail is being prepared before it gets to your 
                                table.</p>
                        </div>
                    </div>

                    <div>
                        <img src='./Barista3D.png' alt='Drink being made' className='barista-image' />
                    </div>
                </SwiperSlide>

                <SwiperSlide className='welcome-slide'>
                    <div className='simulate-text'>
                        <h2 className='welcome-title'>Know your real flavor preferences</h2>
                        <div className='welcome-content'>
                            <p>Using GPT OpenAI, BrewBooze can help you in finding your real flavor preference for
                                your beverage to enhance your drinking experiences!</p>
                        </div>
                    </div>

                    <div>
                        <img src='./Flavor3D.png' alt='Flavor' className='flavor-image' />
                    </div>
                </SwiperSlide>

                <SwiperSlide className='welcome-slide'>
                    <div className='simulate-text'>
                        <h2 className='welcome-title'>Be prepared for your future business</h2>
                        <div className='welcome-content'>
                            <p>With the help of BrewBooze, you will know how to 
                                break down costs and prepare for possibilities in creating your café for a specific year.</p>
                        </div>
                    </div>

                    <div>
                        <img src='./Business3D.png' alt='Business' className='business-image' />  
                    </div>
                </SwiperSlide>
            </Swiper>

           
            <div className='button-container'>
                {currentSlide > 1 && (
                    <button onClick={handlePrev} className='back-button'>Back</button>
                )}
                <button
                    onClick={handleNext}
                    className={isLastSlide ? 'next-button' : 'next2-button'}
                >
                    {isLastSlide ? 'Start' : 'Next'}
                </button>
            </div>

            <div className='slide-number'>
                {currentSlide}/{totalSlides}
            </div>
        </div>
    );
};

export default Welcome;

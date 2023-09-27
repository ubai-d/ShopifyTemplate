"use client"
import { useTypewriter } from 'react-simple-typewriter';
import Slider from "react-slick";
import Slide from "./slide";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:5000,
        pauseOnHover: false,
        arrows:false
    };

    const slideData = [
        {
            id: 0,
            image: '/blue-shoe-banner.jpg',
            showButton: true,
            showHeading: true,
        },
        {
            id: 1,
            image: '/blue-sale-banner2.jpg',
            showButton: false,
            showHeading: false,
        },
        {
            id: 2,
            image: '/banner-3.jpg',
            showButton: false,
            showHeading:false
        }
    ];

    const [text1] = useTypewriter({
        words: [
            "Your Feet, Your Fashion,\n Your Store.",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (

            <div className='lg:pt-0  lg:top'>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            image={item.image}
                            showButton={item.showButton}
                            buttonText='Buy now!'
                            buttonStyle='relative left-[22vw] mt-10 lg:left-[25vw] bg-sub outline-main text-text hover:bg-white hover:text-sub'
                            showText={item.showHeading}
                            text={text1}
                            heading='Urban Treasures'
                            sectionStyle='absolute top-[25vh] left-[15vw]'


                        />
                    ))}
                </Slider>
                </div>
    

    );
};

export default Hero;

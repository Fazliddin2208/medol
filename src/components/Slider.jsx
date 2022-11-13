import React from 'react';
import Carousel from 'better-react-carousel';
import '../styles/style.scss';

const Slider = () => {
    return(
        <div className='my-slider'>
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                </Carousel.Item>
                <Carousel.Item>
                    {/* anything you want to show in the grid */}
                    <h4>Salom</h4>
                </Carousel.Item>
                {/* ... */}
            </Carousel>
        </div>
    );
};

export default Slider;
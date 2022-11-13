import React from 'react';
import Carousel from 'better-react-carousel';
import '../styles/style.scss'

const responsive=[
    // {
    //     breakpoint: 1024,
    //     cols: 4,
    //     rows: 2,
    //     gap: 10,
    //     loop: true,
    //     autoplay: 5000
    // },
    {
        breakpoint: 991,
        cols: 3,
        rows: 2,
        gap: 10,
        loop: true,
        autoplay: 5000
    },
    {
        breakpoint: 767,
        cols: 2,
        rows: 2,
        gap: 10,
        loop: true,
        autoplay: 5000
    }
  ]

const infos = [
    {
        img: <img src={require('../assets/p1.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p2.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p3.png')} alt='...' className='new-img' />
     },
    {
        img: <img src={require('../assets/p4.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p5.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p6.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p7.png')} alt='...' className='new-img' />
     },
    {
        img: <img src={require('../assets/p8.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p1.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p2.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p3.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p4.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p5.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p6.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p7.png')} alt='...' className='new-img' />
    },
    {
        img: <img src={require('../assets/p8.png')} alt='...' className='new-img' />
    }
]

const Partner = () => {

    const next = () => (
        <span className='next'><i className='fas fa-angle-right'></i></span>
      )

    const prev = () => (
        <span className='prev'><i className='fas fa-angle-left'></i></span>
    )

    return (
        <div className='my-partner'>
            <div className="container">
                <div className="my-slider">
                    <Carousel responsiveLayout={responsive} mobileBreakpoint={'767px'} cols={4} rows={2} gap={20} loop autoplay={5000} arrowRight={next} arrowLeft={prev}>
                        {infos.map((info,index)=>(
                            <Carousel.Item key={index}>
                                <div className='my-carousel'>
                                    {info.img}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};


export default Partner;
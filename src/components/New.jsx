import React from 'react';
import Carousel from 'better-react-carousel';
import '../styles/style.scss';

const responsive=[
    {
        breakpoint: 3000,
        cols: 3,
        rows: 1,
        gap: 10,
        loop: true,
        autoplay: 5000
    },
    {
        breakpoint: 991,
        cols: 2,
        rows: 1,
        gap: 10,
        loop: true,
        autoplay: 5000
    },
    {
        breakpoint: 767,
        cols: 1,
        rows: 1,
        gap: 10,
        loop: true,
        autoplay: 5000
    }
  ]

const infos = [
    {
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        img: <img src={require('../assets/new-img.png')} alt='...' className='new-img' />,
        desc: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
        date: "26.07.21",
        button: "Подробнее"
    },
    {
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        img: <img src={require('../assets/new-img.png')} alt='...' className='new-img' />,
        desc: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
        date: "26.07.21",
        button: "Подробнее"
    },
    {
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        img: <img src={require('../assets/new-img.png')} alt='...' className='new-img' />,
        desc: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
        date: "26.07.21",
        button: "Подробнее"
    },
    {
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        img: <img src={require('../assets/new-img.png')} alt='...' className='new-img' />,
        desc: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
        date: "26.07.21",
        button: "Подробнее"
    }
]

const New = () => {

    const next = () => (
        <span className='next'><i className='fas fa-angle-right'></i></span>
      )

    const prev = () => (
        <span className='prev'><i className='fas fa-angle-left'></i></span>
    )

    return (
        <div className='new'>
            <div className="container">
                <div className="my-container">
                    <Carousel responsiveLayout={responsive} mobileBreakpoint={'767px'} cols={3} rows={1} gap={30} loop autoplay={5000} arrowRight={next} arrowLeft={prev}>
                        {infos.map((info,index)=>(
                            <Carousel.Item key={index}>
                                <div className='my-carousel'>
                                    {info.img}
                                    <div className='my-carousel-body'>
                                        <h6><a href='#'>{info.title}</a></h6>
                                        <p><b>{info.date}</b></p>
                                        <p>{info.desc}</p>
                                    </div>
                                    <button className='main-btn'>{info.button}</button>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};


export default New;
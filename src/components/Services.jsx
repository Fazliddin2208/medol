import React from 'react'

const OurServices = [
    {
        title: "Сервис оборудования",
        img: <img src={require("../assets/service1.png")} className="card-img-top" alt="Image" />,
        desc: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
        button: "Подробнее"
    },
    {
        title: "Регистрации",
        img: <img src={require("../assets/register.png")} className="card-img-top" alt="Image" />,
        desc: "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
        button: "Подробнее"
    },
    {
        title: "Услуги логистики",
        img: <img src={require("../assets/logistic.png")} className="card-img-top" alt="Image" />,
        desc: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
        button: "Подробнее"
    }
]

const Services = () => {
    return(
        <div className='services'>
            <div className="container">
                <div className="my-cards">
                    {OurServices.map((service,index)=>(
                        <div className="card text-center my-services" key={index}>
                            {service.img}
                            <div className='card-body'>
                                <h5 className='card-title'>{service.title}</h5>
                                <p className='card-text'>
                                    {service.desc}
                                </p>
                            </div>
                            <button className='main-btn'>{service.button}</button>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Services;
import React from 'react'
import '../styles/style.scss'

const MedicalProducts = [
        {
            title: "Ендоваскулярная хирургия",
            img: <img src={require("../assets/endeavor.png")} className="card-img-top" alt="Image" />,
            button: "Посмотреть все"
        },
        {
            title: "Лабораторная диагностика",
            img: <img src={require("../assets/laboratory.png")} className="card-img-top" alt="Image" />,
            button: "Посмотреть все"
        },
        {
            title: "Кардиохирургия",
            img: <img src={require("../assets/cardio.png")} className="card-img-top" alt="Image" />,
            button: "Посмотреть все"
        },
        {
            title: "ДИАБЕТ",
            img: <img src={require("../assets/diabet.png")} className="card-img-top" alt="Image" />,
            button: "Посмотреть все"
        },
        {
            title: "ЕНДОУРОЛОГИЯ",
            img: <img src={require("../assets/endo.png")} className="card-img-top" alt="Image" />,
            button: "Посмотреть все"
        },
        {
            title: "АРИТМОЛОГИЯ",
            img: <img src={require("../assets/pacemaker.png")} className="card-img-top" alt="Image" />,
            button: "Посмотреть все"
        }
    ]

const Products = () => {
    

  return (
    <div className="products">
        <div className='container'>
            <div className="my-cards">
                {MedicalProducts.map((product,index)=>(
                    <div className="my-card" key={index}>
                        <div className="card-container">
                            <div className="card-image">
                                {product.img}
                            </div>
                            <h4>{product.title}</h4>
                            <button className='main-btn'>{product.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default Products
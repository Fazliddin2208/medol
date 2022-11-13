import React from 'react';
import '../styles/style.scss';
import Slider from '../assets/slide 1.png'

const Header = () => {
    
    return (
        <div className="header" >
            <div className="container">
                <div className="top">
                    <div className='top-left'>
                        <div className="top-left-1">
                            <i className='fas fa-location-dot'></i>
                            <div className='text'>
                                <p className="">г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1</p>
                            </div>
                        </div>
                        <div className='top-left-1'>
                            <i className='fas fa-phone'></i>
                            <div className='number'>
                                <div>
                                    <a href='tel:+998 71 276-62-53'>+998 71 276-62-53</a> <br />
                                    <a href='tel:+998 71 276-62-54'>+998 71 276-62-54</a>
                                </div>
                             </div>
                        </div>
                        <div className='top-left-1'>
                            <img src={require("../assets/logo.png")} alt='logo' />
                        </div>
                    </div>
                    <div className='top-right'>
                        <div className='search-icon'>
                            <i className='fas fa-search' data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            

                        </div>
                        <div className=''>
                            <a href="https://www.fb.com" className='btn btn-light'>
                                <i className='fab fa-facebook-f'></i>
                                <span className='hide1'>Мы на </span><span className='hide2'>Facebook</span>
                            </a>
                        </div>
                        <div className=''>
                            <select name="search" id="search" className='form-select'>
                                <option value="rus">Русский</option>
                                <option value="uz">O'zbekcha</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* modal start */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Search anything</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="search" placeholder='Search' className='form-control'/>
                            <button className='btn btn-success mt-2'>Search</button>
                        </div>
                    </div>
                </div>
                    {/* modal end */}
                </div>
                <div className=" navbar navbar-expand-lg bg-light my-menu">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse my-navbar" id="navbarTogglerDemo01">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Магазин <span></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">О компании <span></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Продукция <span></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Услуги <span></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Акции и новости <span></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Обратная связь <span></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='my-carousel'>
                                <div className='carousel-left col col-6'>
                                    <h1>Анализатор <br /> ABL800 FLEX</h1>
                                    <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                                    <button className='main-btn'>Подробнее</button>
                                </div>
                                <div className='carousel-right col col-6'>
                                    <img src={Slider} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='my-carousel'>
                                <div className='carousel-left col col-6'>
                                    <h1>Анализатор <br /> ABL800 FLEX</h1>
                                    <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                                    <button className='main-btn'>Подробнее</button>
                                </div>
                                <div className='carousel-right col col-6'>
                                    <img src={Slider} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='my-carousel'>
                                <div className='carousel-left col col-6'>
                                    <h1>Анализатор <br /> ABL800 FLEX</h1>
                                    <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                                    <button className='main-btn'>Подробнее</button>
                                </div>
                                <div className='carousel-right col col-6'>
                                    <img src={Slider} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
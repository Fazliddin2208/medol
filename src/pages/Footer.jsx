import React from 'react'; 
import '../styles/style.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="my-footer">
                    <div className="main">
                        <div className="contacts">
                            <div className="top">
                                <h6>Контакты</h6>
                                <div className="contact">
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
                                        <i className='fas fa-envelope'></i>
                                        <div className='number'>
                                            <div>
                                                <a href='mailto:info@medol.uz'>info@medol.uz</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='top-left-1'>
                                        <button className='main-btn'>Оставит заявку</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <img src={require("../assets/logo.png")} alt="logo" />
                                <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
                            </div>
                        </div>

                        <div className="links">
                            <div>
                                <h5>О компании</h5>
                                <ul>
                                    <li><a href="#">История</a></li>
                                    <li><a href="#">Партнеры</a></li>
                                    <li><a href="#">Вакансии</a></li>
                                </ul>
                            </div>

                            <div>
                                <h5>Продукция</h5>
                                <ul>
                                    <li><a href="#">Эндоваскулярная хирургия</a></li>
                                    <li><a href="#">Аритмология</a></li>
                                    <li><a href="#">Кардиохирургия</a></li>
                                    <li><a href="#">Лабораторная диагностика</a></li>
                                    <li><a href="#">Хирургия</a></li>
                                    <li><a href="#">Эндоурология</a></li>
                                    <li><a href="#">Нейрохирургия</a></li>
                                    <li><a href="#">Анестезиология и реаниматсия</a></li>
                                    <li><a href="#">Диабет</a></li>
                                </ul>
                            </div>

                            <div>
                                <h5>Услуги</h5>
                                <ul>
                                    <li><a href="#">Сервис</a></li>
                                    <li><a href="#">Регистрации</a></li>
                                    <li><a href="#">Услуги логистики</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="author">
                        <p>© 2021 ООО «Medical Online Services»</p>
                        <p>Дизайн сделан: <a href="mailto:damingues92@gmail.com">damingues92@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;
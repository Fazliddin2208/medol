import React from 'react'
import New from '../components/New'
import '../styles/style.scss'

const News = () => {
    return(
        <div className='news'>
            <h2 className='main-title'>Новости</h2>
            <New />
            <div className='links container'>
                <a href="#">Посмотреть все новости <i className='fas fa-angle-right'></i></a>
                <a href="#">Подписаться на новости <i className='fas fa-angle-right'></i></a>
            </div>
        </div>
    );
};

export default News;
import React from 'react';
import Products from '../components/Products';
import '../styles/style.scss'

const Production = () => {
    return (
        <div className='production'>
            <h2 className='main-title'>Продукция</h2>
            <Products />
            <p>
              <a href='#'>Перейти в каталог нашей продукции <i className='fas fa-angle-right'></i></a>  
            </p>
        </div>
    );
};


export default Production;
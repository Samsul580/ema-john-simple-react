import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    console.log(props);
    return (
        <div className='product-box'>
            <div>
                <img src={props.product.img}/>
            </div>
            <div className='product-info'>
                <h4>{props.product.name}</h4>
                <p className='seller'>by: {props.product.seller}</p>
                <p>${props.product.price}</p>
                <p className='stock'>only {props.product.stock} left in stock - order soon</p>
                <button onClick={props.handleAddProduct}><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div>
    );
};

export default Product;
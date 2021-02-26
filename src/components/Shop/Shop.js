import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = () => {
        console.log("added")
    }
    console.log(first10);
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="card-container">
                <h1>samsul shekh</h1>
            </div>

        </div>
    );
};

export default Shop;
import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Card from '../Card/Card';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [card, setCard] = useState([]);
    const handleAddProduct = (product) => {
        console.log("added");
        const newCard = [...card, product];
        setCard(newCard);
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
                <Card card={card}></Card>
            </div>

        </div>
    );
};

export default Shop;
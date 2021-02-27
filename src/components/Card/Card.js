import React from 'react';

const Card = (props) => {
    const card = props.card;
    const total = card.reduce((total,prd)=> total + prd.price, 0);
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = total / 10;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order: {card.length}</p>
            <p>Product Price: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax + VAT: {formatNumber(tax)}</p>
            <p>Total price: {formatNumber(total + shipping)}</p>
        </div>
    );
};

export default Card;
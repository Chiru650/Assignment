// View.js
import React from 'react';
import './View.css';

const View = () => {
    return (
        <div className="product-view">
            
            <div className="product">
                <h3>Apple Phone</h3>
                <p>
                    The Apple Phone is a high-end smartphone known for its cutting-edge technology and sleek design.
                    Priced at ₹75,000, it offers top-notch features and a premium user experience. Take advantage of
                    our special discount and get it now at an unbeatable price!
                </p>
                <p>Discount: 10%</p>
            </div>

            <div className="product">
                <h3>Casio Watch</h3>
                <p>
                    The Casio Watch is a stylish timepiece that combines functionality with elegance. With a price of
                    ₹12,000, it's a perfect accessory for any occasion. Don't miss out on this affordable yet
                    sophisticated watch!
                </p>
                <p>Discount: No discount available</p>
            </div>

            <div className="product">
                <h3>Puma Shoes</h3>
                <p>
                    Step out in style with the Puma Shoes! Priced at ₹3,000, these shoes offer both comfort and
                    fashion. Our extensive collection caters to every style, ensuring you find the perfect fit. Grab
                    yours now and walk confidently!
                </p>
                <p>Discount: 20%</p>
            </div>

            <div className="product">
                <h3>Skybag</h3>
                <p>
                    The Skybag is a durable and trendy backpack that complements your lifestyle. Priced at ₹2,000, it
                    provides ample space for your essentials. Avail of our exclusive offer and enjoy the perfect blend
                    of style and functionality!
                </p>
                <p>Discount: 15%</p>
            </div>
        </div>
    );
}

export default View;

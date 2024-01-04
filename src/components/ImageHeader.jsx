import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

export default function ImageHeader(props) {
    const { item, removeFromCart } = props;

    const calculateSubtotal = () => {
        return props.item.reduce((total, item) => {
            const itemPrice = parseFloat(item.price);
            if (!isNaN(itemPrice) && typeof item.quantity === 'number') {
                return total + item.quantity * itemPrice;
            } else {
                console.error(`Invalid item format: ${JSON.stringify(item)}`);
                return total;
            }
        }, 0).toFixed(2);
    };

    return(
        <div>
            <div className="heading-container">
                <h1>Beauty Alchemy</h1>
                <div className="paragraph">Eco-Friendly natural products <br/>for your body, face and hair.</div>
            </div>
            <div className="image-header-container flex-row">
                <div className='flex-row two-links-header'>
                <Link to='/' className="link flex-row">
                        <div className="div flex-row image-header-link">
                            <img width='30px' src="https://img.icons8.com/dotty/80/4D4D4D/home.png"></img>
                            <div className="link-text">Home</div>
                        </div>
                    </Link>
                    <Link to={props.to} className="link flex-row">
                        <div className="div flex-row image-header-link">
                            <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632067f99a7338287d0876cf_info.svg"></img>
                            <div className="link-text">{props.section}</div>
                        </div>
                    </Link>
                </div>
                <div>
                <Popup trigger={<Link to="#" className="link flex-row">
                        <div className="div flex-row image-header-link">
                            <div className="cart-item-number">{props.count}</div>
                            <div className="link-text cart">Cart</div>
                        </div>
                    </Link>} position="right">
                        <div className='cart-container flex-column'>
                            <div className='cart-top-info flex-column'>
                                <div className='your-cart-header flex-row'>
                                    <h3>Your Cart</h3>
                                    <div></div>
                                </div>
                                {item.map(item => (
                                <div className='product-cart-container flex-row' key={item.id} >
                                    <img src={item.img}></img>
                                    <div className='product-cart-details flex-column'>
                                        <h5>{item.name}</h5>
                                        <div>$ {item.price}</div>
                                        <button onClick={() => props.removeFromCart(item.id)}>Remove</button>
                                    </div>
                                    <div className='quantity'>{item.quantity}</div>
                                </div>))}
                            </div>
                            <div className='checkout-cart flex-column'>
                                <div className='subtotal-cart flex-row'>
                                    <div>Subtotal</div>
                                    <div>$ {calculateSubtotal()} USD</div>
                                </div>
                                <button>Continue to Checkout</button>
                            </div>
                        </div>
                </Popup>
                </div>
            </div>
        </div>
    )
}
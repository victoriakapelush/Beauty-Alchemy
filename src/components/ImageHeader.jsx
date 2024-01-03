import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export default function ImageHeader(props) {
    return(
        <div className="image-header-container flex-row">
            <div>
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
                                <div>x</div>
                            </div>
                            <div className='product-cart-container flex-row'>
                                <img src="https://uploads-ssl.webflow.com/630fa4e1220d4258b5ef5691/630fc3b2cf6ff32d13440944_14-01.jpg"></img>
                                <div className='product-cart-details flex-column'>
                                    <h5>Hillary Hair Complex Mask with Jojoba</h5>
                                    <div>$99.00</div>
                                    <button>Remove</button>
                                </div>
                                <input type='number' min="1"></input>
                            </div>
                        </div>
                        <div className='checkout-cart flex-column'>
                            <div className='subtotal-cart flex-row'>
                                <div>Subtotal</div>
                                <div>$ 1000.00 USD</div>
                            </div>
                            <button>Continue to Checkout</button>
                        </div>
                    </div>
            </Popup>
            </div>
            
        </div>
    )
}
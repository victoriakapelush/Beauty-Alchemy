import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {

    return (
        <div className="header flex-column">
            <div className="header-container">
                <div className="heading-container">
                    <a href="/">
                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/6325c003fed41f0436e9ac07_pexels-anna-nekrashevich-7946210-transcode.mp4"></img>
                    </a>
                    <h1>Beauty Alchemy</h1>
                </div>
                <div className="links-container flex-row">
                <Link to="/" className="link flex-row">   
                    <div className="div flex-row">
                        <img width='30px' src="https://img.icons8.com/dotty/80/4D4D4D/home.png"></img>
                        <div className="link-text">Home</div>
                    </div>
                    </Link>
                <Popup trigger=
                    {<a href="#" className="link flex-row">   
                    <div className="div flex-row">
                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632065cbeba0815e5d8a2631_message-circle.svg"></img>
                        <div className="link-text">Message</div>
                    </div>
                    </a>}
                        position="center">
                        <div className="flex-column message-container">
                            <h5>Message</h5>
                            <div class="message-popup-text">Usually respond within 48 hours.</div>
                            <div class="message-popup-text">Don't forget to include your email.</div>
                            <form className='flex-column message-popup-form'>
                                <input placeholder="Your name"></input>
                                <textarea placeholder="Your message"></textarea>
                                <button action="submit">Send Message</button>
                            </form>
                        </div>
                </Popup>
                <Popup trigger=
                    {<a href="#" className="link flex-row">
                    <div className="div flex-row">
                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/63206768eba0817f838a3cee_truck.svg"></img>
                        <div className="link-text">Deliver</div>
                    </div>
                    </a>}
                        position="center">
                        <div className="flex-row delivery-container">
                            <img className='delivery-image' src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/63206768eba0817f838a3cee_truck.svg"></img>
                            <div className='flex-column delivery-box'>
                                <h5 className='delivery-text'>Delivery</h5>
                                <h6 className='delivery-text'>Local</h6>
                                <div className='delivery-text'>Enjoy the convenience of local delivery when shopping with us online. We bring your favorite products right to your doorstep, ensuring a seamless and efficient shopping experience within your community.</div>
                                <h6 className='delivery-text'>Global Shipping</h6>
                                <div className='delivery-text'>Explore our global shipping options for a world of possibilities. We deliver your favorite products to international destinations, providing a seamless and reliable shopping experience across the globe.</div>
                            </div>
                        </div>
                </Popup>
                <Popup trigger=
                    {<a href="#" className="link flex-row">
                    <div className="div flex-row">
                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632067f9623a6a16dcf60937_users.svg"></img>
                        <div className="link-text">About</div>
                    </div>
                    </a>}
                        position="center">
                        <div className="flex-row delivery-container">
                            <div className='flex-column delivery-box'>
                                <h5 className='delivery-text'>About Us</h5>
                                <div className='delivery-text'>Discover an eco-conscious online shop dedicated to your well-being. <br /> <br /> Our curated selection features a range of natural products crafted with care for your body, face, and hair. <br /> <br /> Embrace sustainability without compromising on quality, and indulge in a healthier, greener self-care routine.</div>
                                <div className='flex-column contact-popup-container'>
                                    <div className='contact-popup flex-row'>
                                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/6324593010e9db58f18a1e78_phone.svg"></img>
                                        <div className='link-text link div'>+1 500 235 45 80</div>
                                    </div>
                                    <div className='contact-popup flex-row'>
                                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632459579ebeb07bb94209fa_smartphone.svg"></img>
                                        <div className='link-text link div'>WHATSAPP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Popup>
                </div>
                <div className="paragraph">Eco-Friendly natural products <br/>for your body, face and hair.</div>
            </div>
        </div>
    )
}
import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'
import React, { useState, useEffect } from 'react';

export default function NuviRoller() {
    const initialCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Update local storage whenever count changes
        localStorage.setItem('cartCount', count.toString());
      }, [count]);

    function addToCart() {
        setCount(count + 1);
    }

    const nuviRoller = { 
        index: 11, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3c87b197e3ed3d3631d_13-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/631111809044cf206baf3b5e_13-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63111180084be039ad5fd33a_13-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6324607ce1c3a6293b196958_09-02%402x.jpg',
        alt: 'Nuvi Roller and Gouaches', 
        reference: '#100116', 
        name: 'Nuvi Roller and Gouaches' ,
        price: '48.00',
        discount: '89.00',
        description: "Step into a world of rejuvenation with our Nuvi Roller and Gouaches, a dynamic duo designed to elevate your skincare routine. The Nuvi Roller, crafted for a soothing facial massage, pairs seamlessly with our Gouaches—luxurious skincare formulations infused with vibrant pigments. Immerse yourself in a holistic experience that promotes relaxation, boosts radiance, and leaves your skin aglow with a natural luminosity."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            count={count}
            section="Makeup"
            to='/makeup' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={nuviRoller.src1} alt={nuviRoller.alt} />
                        <img className='product-image' src={nuviRoller.src2} alt={nuviRoller.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={nuviRoller.src3} alt={nuviRoller.alt} />
                    <img className='product-image' src={nuviRoller.src4} alt={nuviRoller.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{nuviRoller.name}</h5>
                            <div>{nuviRoller.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {nuviRoller.price} USD <span>$ {nuviRoller.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{nuviRoller.description}</p>
                            </div>
                        </div>
                        <div className='addtocart-button-div'>
                            <button onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
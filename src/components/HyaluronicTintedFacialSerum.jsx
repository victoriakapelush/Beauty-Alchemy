import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'
import React, { useState, useEffect } from 'react';

export default function HyaluronicTintedFacialSerum() {
    const initialCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Update local storage whenever count changes
        localStorage.setItem('cartCount', count.toString());
      }, [count]);

    function addToCart() {
        setCount(count + 1);
    }

    const hyaluronicTintedFacialSerum = { 
        index: 20, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc4e8cf6ff336cb4412e3_04-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc4f0c6bb912b2bd42aff_04-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc47e3ae3ff26e8031fd6_05-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f50424a040f4162df39_14-01%402x.jpg', 
        alt: 'Hyaluronic tinted facial serum', 
        reference: '#100118', 
        name: 'Hyaluronic tinted facial serum' ,
        price: '95.00',
        discount: '189.00',
        description: "This luxurious formula combines the nourishment of a serum with the luminosity of a tint. Immerse yourself in the lightweight, silky texture that effortlessly enhances your complexion, providing a natural and radiant finish."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Face"
            to='/face'
            count={count} />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={hyaluronicTintedFacialSerum.src1} alt={hyaluronicTintedFacialSerum.alt} />
                        <img className='product-image' src={hyaluronicTintedFacialSerum.src2} alt={hyaluronicTintedFacialSerum.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={hyaluronicTintedFacialSerum.src3} alt={hyaluronicTintedFacialSerum.alt} />
                    <img className='product-image' src={hyaluronicTintedFacialSerum.src4} alt={hyaluronicTintedFacialSerum.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{hyaluronicTintedFacialSerum.name}</h5>
                            <div>{hyaluronicTintedFacialSerum.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {hyaluronicTintedFacialSerum.price} USD <span>$ {hyaluronicTintedFacialSerum.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{hyaluronicTintedFacialSerum.description}</p>
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
import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'
import React, { useState, useEffect } from 'react';

export default function HeauthyHyaluronicAcid() {
    const initialCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Update local storage whenever count changes
        localStorage.setItem('cartCount', count.toString());
      }, [count]);

    function addToCart() {
        setCount(count + 1);
    }

    const HeauthyHyaluronicAcid = { 
        index: 2, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1b3c9d636d9ca3f7963_22-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1b9a6058c096fc3eb19_22-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1a1f16b719b181b6349_22-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f50424a040f4162df39_14-01%402x.jpg', 
        alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', 
        reference: '#100122', 
        name: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum' ,
        price: '39.00',
        discount: '69.00',
        description: "A skincare product designed to provide effective hydration and nourishment for the skin. Infused with the powerful combination of hyaluronic acid and niacinamide, it aims to promote a plump and radiant complexion while addressing concerns such as fine lines, uneven skin tone, and texture."
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
                        <img className='product-image' src={HeauthyHyaluronicAcid.src1} alt={HeauthyHyaluronicAcid.alt} />
                        <img className='product-image' src={HeauthyHyaluronicAcid.src2} alt={HeauthyHyaluronicAcid.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={HeauthyHyaluronicAcid.src3} alt={HeauthyHyaluronicAcid.alt} />
                    <img className='product-image' src={HeauthyHyaluronicAcid.src4} alt={HeauthyHyaluronicAcid.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{HeauthyHyaluronicAcid.name}</h5>
                            <div>{HeauthyHyaluronicAcid.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {HeauthyHyaluronicAcid.price} USD <span>$ {HeauthyHyaluronicAcid.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{HeauthyHyaluronicAcid.description}</p>
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
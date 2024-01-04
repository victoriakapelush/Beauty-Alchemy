import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'
import React, { useState, useEffect } from 'react';

const loadFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
};

//To save data to local storage
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export default function HyaluronicTintedFacialSerum() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

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

    const addToCart = () => {
        const newItem = {
            id: hyaluronicTintedFacialSerum.index,
            img: hyaluronicTintedFacialSerum.src1,
            name: hyaluronicTintedFacialSerum.name,
            price: hyaluronicTintedFacialSerum.price,
            quantity: 1,
        };

        const existingItem = items.find((item) => item.id === newItem.id);

        if (existingItem) {
            setItems(
                items.map((item) =>
                    item.id === existingItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setItems([...items, newItem]);
        }

        setCount(count + 1);
    };

    //Save count and items to local storage whenever they change
    useEffect(() => {
        saveToLocalStorage('cartCount', count);
        saveToLocalStorage('cartItems', items);
    }, [count, items]);

    const removeFromCart = (itemId) => {
        const existingItem = items.find((item) => item.id === itemId);

        if (existingItem) {
            const updatedItems = items.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

            setItems(updatedItems.filter((item) => item.quantity > 0));
            setCount(count - 1);
        }
    };

    return(
        <>
        <ImageHeader 
            section="Face"
            to='/face'
            count={count}
            item={items}
            removeFromCart={removeFromCart} />
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
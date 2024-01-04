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

export default function MishanePani() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const mishanePani = { 
        index: 9, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc4777f07354f79cc2dd9_05-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc47e3ae3ff26e8031fd6_05-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6310878a84e35bbcf8549b0c_05-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f8488eeaa6bdbd2ab6e_13-02%402x.jpg', 
        alt: 'Mishane Pani', 
        reference: '#100105', 
        name: 'Mishane Pani' ,
        price: '75.00',
        discount: '159.00',
        description: "This sublime formula designed to cocoon your skin in nourishment. Immerse yourself in the light, yet deeply hydrating texture, leaving your skin with a heavenly softness."
      };

    const addToCart = () => {
        const newItem = {
            id: mishanePani.index,
            img: mishanePani.src1,
            name: mishanePani.name,
            price: mishanePani.price,
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
            count={count}
            item={items}
            removeFromCart={removeFromCart}
            section="Perfumery"
            to='/perfumery' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={mishanePani.src1} alt={mishanePani.alt} />
                        <img className='product-image' src={mishanePani.src2} alt={mishanePani.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={mishanePani.src3} alt={mishanePani.alt} />
                    <img className='product-image' src={mishanePani.src4} alt={mishanePani.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{mishanePani.name}</h5>
                            <div>{mishanePani.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {mishanePani.price} USD <span>$ {mishanePani.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{mishanePani.description}</p>
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
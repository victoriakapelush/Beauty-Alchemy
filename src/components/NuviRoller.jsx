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

export default function NuviRoller() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

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

    const addToCart = () => {
        const newItem = {
            id: nuviRoller.index,
            img: nuviRoller.src1,
            name: nuviRoller.name,
            price: nuviRoller.price,
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
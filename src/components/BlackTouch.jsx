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

export default function BlackTouch() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const blackTouch = { 
        index: 9, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc398c47e5701558fb700_15-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63111104a37cd05ebfdda2de_15-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1c44a677c3f7d4d0c79_21-01.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f770c3f225aac0287af_23-03%402x.jpg',
        alt: 'BlackTouch', 
        reference: '#100115', 
        name: 'BlackTouch' ,
        price: '75.00',
        discount: '129.00',
        description: "A a meticulously crafted blend that rejuvenates and protects your hands with every application. Immerse yourself in the velvety texture and enchanting fragrance as our formula, enriched with nourishing ingredients, deeply hydrates, leaving your hands soft, smooth, and delicately scented—a daily indulgence for hands that deserve the best."
      };

    const addToCart = () => {
        const newItem = {
            id: blackTouch.index, 
            img: blackTouch.src1,
            name: blackTouch.name,
            price: blackTouch.price, 
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
            section="Face"
            to='/face' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={blackTouch.src1} alt={blackTouch.alt} />
                        <img className='product-image' src={blackTouch.src2} alt={blackTouch.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={blackTouch.src3} alt={blackTouch.alt} />
                    <img className='product-image' src={blackTouch.src4} alt={blackTouch.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{blackTouch.name}</h5>
                            <div>{blackTouch.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {blackTouch.price} USD <span>$ {blackTouch.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{blackTouch.description}</p>
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
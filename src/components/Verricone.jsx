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

export default function Verricone() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const verricone = { 
        index: 5, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc338138265ad4f9e4982_20-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc33f44e1a3de7122dc8e_20-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc33fedcf49c0052828b5_20-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f690c3f2271a0028755_16-02%402x.jpg', 
        alt: 'Verricone MD No Blush Blush SPF 90', 
        reference: '#100120', 
        name: 'Verricone MD No Blush Blush SPF 90' ,
        price: '95.00',
        discount: '180.00',
        description: "Transform your complexion with the radiant blush collection, offering a spectrum of flattering hues to suit every skin tone. Our long-lasting, velvety formula blends seamlessly, delivering a healthy and natural flush that enhances your beauty, leaving you with a radiant and luminous glow all day."
    };

    const addToCart = () => {
        const newItem = {
            id: verricone.index,
            img: verricone.src1,
            name: verricone.name,
            price: verricone.price,
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
            section="Makeup"
            to='/makeup'
            count={count}
            item={items}
            removeFromCart={removeFromCart} />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={verricone.src1} alt={verricone.alt} />
                        <img className='product-image' src={verricone.src2} alt={verricone.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={verricone.src3} alt={verricone.alt} />
                    <img className='product-image' src={verricone.src4} alt={verricone.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{verricone.name}</h5>
                            <div>{verricone.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {verricone.price} USD <span>$ {verricone.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{verricone.description}</p>
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
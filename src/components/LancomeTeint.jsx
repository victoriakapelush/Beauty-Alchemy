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

export default function LancomeTeint() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const lancomeTeint = { 
        index: 19, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc40ba2f49064f1a7a974_10-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc41196ed612d53ea64e5_10-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc411536179b581f4f2ed_10-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/632460a3bbcc3b209119a324_12-02%402x.jpg', 
        alt: 'Lancome Teint Ultra Wear SPF15', 
        reference: '#100111', 
        name: 'Lancome Teint Ultra Wear SPF15' ,
        price: '75.00',
        discount: '159.00',
        description: "Elevate your daily beauty ritual with a sophisticated formula that effortlessly imparts a radiant and natural glow. Transform your makeup routine with this luminous tint, where sophistication meets effortless beauty for a radiant and radiant complexion."
      };

    const addToCart = () => {
        const newItem = {
            id: lancomeTeint.index,
            img: lancomeTeint.src1,
            name: lancomeTeint.name,
            price: lancomeTeint.price,
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
                        <img className='product-image' src={lancomeTeint.src1} alt={lancomeTeint.alt} />
                        <img className='product-image' src={lancomeTeint.src2} alt={lancomeTeint.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={lancomeTeint.src3} alt={lancomeTeint.alt} />
                    <img className='product-image' src={lancomeTeint.src4} alt={lancomeTeint.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{lancomeTeint.name}</h5>
                            <div>{lancomeTeint.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {lancomeTeint.price} USD <span>$ {lancomeTeint.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{lancomeTeint.description}</p>
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
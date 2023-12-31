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

export default function AlmondBodyButter() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);
    
    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const almondBodyButter = { 
        index: 12, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3dd055041c0e42ab51f_12-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3e47b197e02d7d3635e_12-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3e5fe8d3a6436dc2f53_12-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f2a151f6f22a52353ec_05-02%402x.jpg',
        alt: 'Phytorelax Laboratories Almond Body Butter', 
        reference: '#100112', 
        name: 'Phytorelax Laboratories Almond Body Butter' ,
        price: '89.00',
        discount: '149.00',
        description: "A sumptuous blend of nourishing ingredients designed to lavish your body with deep hydration and a velvety touch. Immerse yourself in the luscious aroma of almonds as this luxurious body butter melts into your skin, leaving it feeling irresistibly soft and beautifully replenished, making every skincare moment a pampering delight."
      };

    const addToCart = () => {
        const newItem = {
            id: almondBodyButter.index,
            img: almondBodyButter.src1,
            name: almondBodyButter.name,
            price: almondBodyButter.price,
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
                        <img className='product-image' src={almondBodyButter.src1} alt={almondBodyButter.alt} />
                        <img className='product-image' src={almondBodyButter.src2} alt={almondBodyButter.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={almondBodyButter.src3} alt={almondBodyButter.alt} />
                    <img className='product-image' src={almondBodyButter.src4} alt={almondBodyButter.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{almondBodyButter.name}</h5>
                            <div>{almondBodyButter.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {almondBodyButter.price} USD <span>$ {almondBodyButter.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{almondBodyButter.description}</p>
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
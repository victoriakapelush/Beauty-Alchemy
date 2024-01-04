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

export default function Misolo() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const misoloCream = { 
        index: 0, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1847b197e2bc1d34c4b_24-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc192f645e664598bf5d9_24-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1927b197ea1f3d34d4f_24-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f0632e0b54be284b83c_19-01%402x.jpg', 
        alt: 'Misolo Moisturizing Cream', 
        reference: '#100125', 
        name: 'Misolo Moisturising Cream' ,
        price: '75.00',
        discount: '99.00',
        description: "Hydrating skincare product designed to nourish and replenish the skin's moisture, leaving it soft and supple. Formulated with premium ingredients, it aims to provide effective hydration and promote a healthy complexion."
    };

    const addToCart = () => {
        const newItem = {
            id: misoloCream.index,
            img: misoloCream.src1,
            name: misoloCream.name,
            price: misoloCream.price,
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
            section="Body and Bath"
            to='/bodyandbath' 
            />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={misoloCream.src1} alt={misoloCream.alt} />
                        <img className='product-image' src={misoloCream.src2} alt={misoloCream.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={misoloCream.src3} alt={misoloCream.alt} />
                    <img className='product-image' src={misoloCream.src4} alt={misoloCream.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{misoloCream.name}</h5>
                            <div>{misoloCream.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {misoloCream.price} USD <span>$ {misoloCream.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{misoloCream.description}</p>
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
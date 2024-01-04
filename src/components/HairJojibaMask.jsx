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

export default function HairJojibaMask() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const hairJojibaMask = { 
        index: 10, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3b2cf6ff32d13440944_14-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3b822b57f5c41ecc43f_14-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3b8590af290426945b2_14-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f690c3f2271a0028755_16-02%402x.jpg', 
        alt: 'Hillary Hair Complex Mask with Jojoba', 
        reference: '#100114', 
        name: 'Hillary Hair Complex Mask with Jojoba' ,
        price: '89.00',
        discount: '149.00',
        description: "A lavish formula that nurtures and rejuvenates your locks. Immerse yourself in the enriching blend of ingredients, including the hydrating essence of Jojoba, for a deep conditioning experience. Elevate your hair care ritual with this indulgent mask, where luxurious nourishment meets the brilliance of Jojoba, leaving your hair silky, smooth, and revitalized."
      };

    const addToCart = () => {
        const newItem = {
            id: hairJojibaMask.index,
            img: hairJojibaMask.src1,
            name: hairJojibaMask.name,
            price: hairJojibaMask.price,
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
            to='/bodyandbath' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={hairJojibaMask.src1} alt={hairJojibaMask.alt} />
                        <img className='product-image' src={hairJojibaMask.src2} alt={hairJojibaMask.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={hairJojibaMask.src3} alt={hairJojibaMask.alt} />
                    <img className='product-image' src={hairJojibaMask.src4} alt={hairJojibaMask.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{hairJojibaMask.name}</h5>
                            <div>{hairJojibaMask.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {hairJojibaMask.price} USD <span>$ {hairJojibaMask.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{hairJojibaMask.description}</p>
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
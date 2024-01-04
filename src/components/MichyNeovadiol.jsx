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

export default function MichyNeovadiol() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const michyNeovadiol = { 
        index: 13, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3f328f73773458d7b24_11-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3fb084d6e7be2dcc1cd_11-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3fb4a677c401f4d2e18_11-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/632460948eaaa809fc1ba6b6_22-02%402x.jpg', 
        alt: 'Michy Neovadiol Eyes & Lips', 
        reference: '#100104', 
        name: 'Michy Neovadiol Eyes & Lips' ,
        price: '75.00',
        discount: '129.00',
        description: "Revitalize your eyes and lips with this indulgent formula crafted to rejuvenate and enhance your delicate features. Rediscover the essence of youthful beauty with Michy Neovadiol Eyes & Lips, a decadent formulation tailored to revive and accentuate your most expressive features."
      };

    const addToCart = () => {
        const newItem = {
            id: michyNeovadiol.index,
            img: michyNeovadiol.src1,
            name: michyNeovadiol.name,
            price: michyNeovadiol.price,
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
            section="Body And Bath"
            to='/bodyandbath' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={michyNeovadiol.src1} alt={michyNeovadiol.alt} />
                        <img className='product-image' src={michyNeovadiol.src2} alt={michyNeovadiol.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={michyNeovadiol.src3} alt={michyNeovadiol.alt} />
                    <img className='product-image' src={michyNeovadiol.src4} alt={michyNeovadiol.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{michyNeovadiol.name}</h5>
                            <div>{michyNeovadiol.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {michyNeovadiol.price} USD <span>$ {michyNeovadiol.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{michyNeovadiol.description}</p>
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
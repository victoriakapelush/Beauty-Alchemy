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

export default function RoseQuartzGouache() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const roseQuartzGouache = { 
        index: 16, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc433d0700a1edb773076_08-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63111309186fb2ab2891f13e_08-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6311130ab40cccc2ae1d180a_08-03.jpg',
        alt: 'Rose Quartz Gouache for Facial Massage', 
        reference: '#100109', 
        name: 'Rose Quartz Gouache for Facial Massage' ,
        price: '65.00',
        discount: '169.00',
        description: "Transform your skincare ritual with our Rose Quartz Gouache for Facial Massage, a luxurious fusion of traditional beauty techniques and modern elegance. Experience the gentle caress of rose quartz as you elevate your self-care routine, promoting relaxation and enhancing product absorption for a radiant, revitalized complexion that truly glows from within."
      };

    const addToCart = () => {
        const newItem = {
            id: roseQuartzGouache.index,
            img: roseQuartzGouache.src1,
            name: roseQuartzGouache.name,
            price: roseQuartzGouache.price,
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
            section="Hair"
            to='/Hair' 
            count={count}
            item={items}
            removeFromCart={removeFromCart} />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={roseQuartzGouache.src1} alt={roseQuartzGouache.alt} />
                        <img className='product-image' src={roseQuartzGouache.src2} alt={roseQuartzGouache.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={roseQuartzGouache.src3} alt={roseQuartzGouache.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{roseQuartzGouache.name}</h5>
                            <div>{roseQuartzGouache.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {roseQuartzGouache.price} USD <span>$ {roseQuartzGouache.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{roseQuartzGouache.description}</p>
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
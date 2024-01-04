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

export default function HeauthyHyaluronicAcid() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const HeauthyHyaluronicAcid = { 
        index: 2, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1b3c9d636d9ca3f7963_22-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1b9a6058c096fc3eb19_22-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1a1f16b719b181b6349_22-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f50424a040f4162df39_14-01%402x.jpg', 
        alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', 
        reference: '#100122', 
        name: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum' ,
        price: '39.00',
        discount: '69.00',
        description: "A skincare product designed to provide effective hydration and nourishment for the skin. Infused with the powerful combination of hyaluronic acid and niacinamide, it aims to promote a plump and radiant complexion while addressing concerns such as fine lines, uneven skin tone, and texture."
      };

    const addToCart = () => {
        const newItem = {
            id: HeauthyHyaluronicAcid.index,
            img: HeauthyHyaluronicAcid.src1,
            name: HeauthyHyaluronicAcid.name,
            price: HeauthyHyaluronicAcid.price,
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
                        <img className='product-image' src={HeauthyHyaluronicAcid.src1} alt={HeauthyHyaluronicAcid.alt} />
                        <img className='product-image' src={HeauthyHyaluronicAcid.src2} alt={HeauthyHyaluronicAcid.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={HeauthyHyaluronicAcid.src3} alt={HeauthyHyaluronicAcid.alt} />
                    <img className='product-image' src={HeauthyHyaluronicAcid.src4} alt={HeauthyHyaluronicAcid.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{HeauthyHyaluronicAcid.name}</h5>
                            <div>{HeauthyHyaluronicAcid.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {HeauthyHyaluronicAcid.price} USD <span>$ {HeauthyHyaluronicAcid.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{HeauthyHyaluronicAcid.description}</p>
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
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

export default function SanePlantAzelaic() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const SanePlantAzelaic = { 
        index: 1, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc19ddf226607677fabee_23-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1a16751e7eb94e551ec_23-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1a1f16b719b181b6349_22-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f2a151f6f22a52353ec_05-02%402x.jpg', 
        alt: 'Misolo Moisturizing Cream', 
        reference: '#100123', 
        name: 'Sane Plant Azelaic' ,
        price: '99.00',
        discount: '149.00',
        description: "Elevate your skincare routine with our premium serum, meticulously crafted to deliver transformative results. Experience radiant and youthful-looking skin as you indulge in the powerful formulations of Sane Plant Azelaic, carefully curated for your beauty needs."
    };

    const addToCart = () => {
        const newItem = {
            id: SanePlantAzelaic.index,
            img: SanePlantAzelaic.src1,
            name: SanePlantAzelaic.name,
            price: SanePlantAzelaic.price,
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
                        <img className='product-image' src={SanePlantAzelaic.src1} alt={SanePlantAzelaic.alt} />
                        <img className='product-image' src={SanePlantAzelaic.src2} alt={SanePlantAzelaic.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={SanePlantAzelaic.src3} alt={SanePlantAzelaic.alt} />
                    <img className='product-image' src={SanePlantAzelaic.src4} alt={SanePlantAzelaic.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{SanePlantAzelaic.name}</h5>
                            <div>{SanePlantAzelaic.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {SanePlantAzelaic.price} USD <span>$ {SanePlantAzelaic.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{SanePlantAzelaic.description}</p>
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
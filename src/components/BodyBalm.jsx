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

export default function BodyBalm() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const bodyBalm = { 
        index: 18, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc463edcf49d9f82833bd_06-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc46adf2266183e7fd0b6_06-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc46a1382657f8a9e572c_06-02.jpg',
        alt: 'Varnangen Mordic Care All Over Rescue Body Balm', 
        reference: '#100106', 
        name: 'Varnangen Mordic Care All Over Rescue Body Balm' ,
        price: '49.00',
        discount: '89.00',
        description: "Revitalize your skin with carefully curated fusion of potent botanicals designed to nurture and restore. This indulgent balm offers comprehensive rescue for your skin, delivering profound hydration and replenishment. Enriched with natural goodness, make this soothing balm your daily essential for an all-encompassing pampering experience, leaving your skin luxuriously soft and revitalized."
      };

      const addToCart = () => {
        const newItem = {
            id: bodyBalm.index,
            img: bodyBalm.src1,
            name: bodyBalm.name,
            price: bodyBalm.price,
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

    // Save count and items to local storage whenever they change
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
                        <img className='product-image' src={bodyBalm.src1} alt={bodyBalm.alt} />
                        <img className='product-image' src={bodyBalm.src2} alt={bodyBalm.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={bodyBalm.src3} alt={bodyBalm.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{bodyBalm.name}</h5>
                            <div>{bodyBalm.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {bodyBalm.price} USD <span>$ {bodyBalm.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{bodyBalm.description}</p>
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
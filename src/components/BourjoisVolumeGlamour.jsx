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

export default function BourjoisVolumeGlamour() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const bourjoisVolumeGlamour = { 
        index: 17, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc44ca2f49083cea7ad0a_07-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc4557b197e818dd364bb_07-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc455fe8d3a6ba5dc3816_07-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63246052f835896640c0864a_18-03%402x.jpg', 
        alt: 'Bourjois Volume Glamour', 
        reference: '#100113', 
        name: 'Bourjois Volume Glamour' ,
        price: '99.00',
        discount: '149.00',
        description: "A sublime formula that transcends ordinary skincare. Immerse yourself in the velvety cream, offering a hydrating and nourishing experience for your skin. Let the rich, creamy texture pamper your complexion, leaving it with a glamorous radiance and a silky smooth finish."
      };

    const addToCart = () => {
        const newItem = {
            id: bourjoisVolumeGlamour.index,
            img: bourjoisVolumeGlamour.src1,
            name: bourjoisVolumeGlamour.name,
            price: bourjoisVolumeGlamour.price,
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
            section="Face"
            to='/face' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={bourjoisVolumeGlamour.src1} alt={bourjoisVolumeGlamour.alt} />
                        <img className='product-image' src={bourjoisVolumeGlamour.src2} alt={bourjoisVolumeGlamour.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={bourjoisVolumeGlamour.src3} alt={bourjoisVolumeGlamour.alt} />
                    <img className='product-image' src={bourjoisVolumeGlamour.src4} alt={bourjoisVolumeGlamour.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{bourjoisVolumeGlamour.name}</h5>
                            <div>{bourjoisVolumeGlamour.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {bourjoisVolumeGlamour.price} USD <span>$ {bourjoisVolumeGlamour.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{bourjoisVolumeGlamour.description}</p>
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
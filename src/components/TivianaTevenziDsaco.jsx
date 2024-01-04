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

export default function TivianaTevenziDsaco() {
    //Load initial count and items from local storage
    const initialCount = loadFromLocalStorage('cartCount', 0);
    const initialItems = loadFromLocalStorage('cartItems', []);

    const [count, setCount] = useState(initialCount);
    const [items, setItems] = useState(initialItems || []);

    const tivianaTevenziDsaco = { 
        index: 7, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245ff459df1013d04d6fb2_17-01%402x.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245ff49ebeb01acc425977_17-02%402x.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245ff459df101bbe4d6fb1_17-03%402x.jpg',
        alt: 'Tiviana Tevenzi Dsaco', 
        reference: '#100117', 
        name: 'Tiviana Tevenzi Dsaco' ,
        price: '48.00',
        discount: '89.00',
        description: "Indulge in the ultimate foundation experience with our exquisite line, offering a seamless blend of coverage and nourishment. Achieve a flawless complexion with our lightweight, long-lasting formula that not only provides impeccable coverage but also cares for your skin, leaving you with a radiant and naturally beautiful finish."
    };

    const addToCart = () => {
        const newItem = {
            id: tivianaTevenziDsaco.index,
            img: tivianaTevenziDsaco.src1,
            name: tivianaTevenziDsaco.name,
            price: tivianaTevenziDsaco.price,
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
            section="Perfumery"
            to='/perfumery'
            count={count}
            item={items}
            removeFromCart={removeFromCart} />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={tivianaTevenziDsaco.src1} alt={tivianaTevenziDsaco.alt} />
                        <img className='product-image' src={tivianaTevenziDsaco.src2} alt={tivianaTevenziDsaco.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={tivianaTevenziDsaco.src3} alt={tivianaTevenziDsaco.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{tivianaTevenziDsaco.name}</h5>
                            <div>{tivianaTevenziDsaco.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {tivianaTevenziDsaco.price} USD <span>$ {tivianaTevenziDsaco.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{tivianaTevenziDsaco.description}</p>
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
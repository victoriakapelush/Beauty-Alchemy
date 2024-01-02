import React, { useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

export default function Gallery () {


    const handleProductClick = () => {
      return(
        <Link to={image.linkto}></Link>)
    };


  const galleryImages = [
    { index: 0, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream', reference: '#100125', name: 'Misolo Moisturising Cream', linkto: 'product/misolo' },
    { index: 1, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic', reference: '#100126', name: 'Misolo Moisturising', linkto: 'product/saneplantazelaic' },
    { index: 2, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', reference: '#100125', name: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum' },
    { index: 3, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 4, src: 'setofmakeup.jpg', alt: 'Verricone MD No Blush Blush SPF 90', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 5, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 6, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 7, src: 'tiviana.jpg', alt: 'Tiviana Tevenzi Dsaco', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 8, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 9, src: 'touchcream.jpg', alt: 'BlackTouch', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 10, src: 'hair.jpg', alt: 'Hillary Hair Complex Mask with Jojoba', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 11, src: 'glamour.jpg', alt: 'Nuvi roller and gouaches', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 12, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 13, src: 'derma.jpg', alt: 'Michy Neovadiol Eyes & Lips', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 14, src: 'almostpowder.jpg', alt: 'Lancome Teint Ultra Wear SPF15', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 15, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 16, src: 'bakedpowder.jpg', alt: 'Rose Quartz Gouache for Facial Massage', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 17, src: 'blushblush.jpg', alt: 'Bourjois Volume Glamour', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 18, src: 'mordiccare.jpg', alt: 'Varnangen Mordic Care All Over Rescue Body Balm', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 19, src: 'panl.jpg', alt: 'Mishane Pani', reference: '#100125', name: 'Misolo Moisturising Cream' },
    { index: 20, src: 'eyes.jpg', alt: 'Hyaluronic tinted facial serum', reference: '#100125', name: 'Misolo Moisturising Cream' }
  ];

  return (
    <div className='gallery-container flex-row'>
      {galleryImages.map((image) => (
        <div key={image.index} className='gallery-image-div' onClick={() => handleProductClick(image.name)} >
            <Link to={image.linkto} className="gallery-image-link flex-row">
                <img src={image.src} className='gallery-image' title={image.alt} />
                <div className='product-name'>{image.alt}</div>
           </Link>
        </div>
      ))}
      </div>)
}

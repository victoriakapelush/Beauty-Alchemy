import React, { useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

export default function Gallery () {

  const galleryImages = [
    { index: 0, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream', reference: '#100125', name: 'Misolo Moisturising Cream', linkto: 'product/misolo' },
    { index: 1, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic', reference: '#100124', name: 'Sane Plant Azelaic', linkto: 'product/saneplantazelaic' },
    { index: 2, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', reference: '#100123', name: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', linkto: 'product/heauthyhyaluronicacid' },
    { index: 3, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching', reference: '#100122', name: 'A Derma Exomega Control Emollient Cream Anti Scratching', linkto: 'product/dermacream' },
    { index: 4, src: 'setofmakeup.jpg', alt: 'Verricone MD No Blush Blush SPF 90', reference: '#100121', name: 'Verricone MD No Blush Blush SPF 90', linkto: 'product/verriconeblush' },
    { index: 5, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid', reference: '#100120', name: 'Sane Plant Retinol 2% and Azelaic Acid', linkto: 'product/saneretinol' },
    { index: 6, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes', reference: '#100119', name: 'A Set of Makeup Brushes', linkto: 'product/brushes' },
    { index: 7, src: 'tiviana.jpg', alt: 'Tiviana Tevenzi Dsaco', reference: '#100118', name: 'Tiviana Tevenzi Dsaco', linkto: 'product/tivianatevenzidsaco' },
    { index: 8, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95', reference: '#100117', name: 'Flitique Almost Powder Makeup SPF 95', linkto: 'product/flitiquealmostpowder' },
    { index: 9, src: 'touchcream.jpg', alt: 'BlackTouch', reference: '#100116', name: 'BlackTouch', linkto: 'product/blacktouch' },
    { index: 10, src: 'hair.jpg', alt: 'Hillary Hair Complex Mask with Jojoba', reference: '#100115', name: 'Hillary Hair Complex Mask with Jojoba', linkto: 'product/hairjojobamask' },
    { index: 11, src: 'glamour.jpg', alt: 'Nuvi roller and gouaches', reference: '#100114', name: 'Nuvi roller and gouaches', linkto: 'product/nuviroller' },
    { index: 12, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter', reference: '#100113', name: 'Phytorelax Laboratories Almond Body Butter', linkto: 'product/almondbodybutter' },
    { index: 13, src: 'derma.jpg', alt: 'Michy Neovadiol Eyes & Lips', reference: '#100112', name: 'Michy Neovadiol Eyes & Lips', linkto: 'product/michyneovadiol' },
    { index: 14, src: 'almostpowder.jpg', alt: 'Lancome Teint Ultra Wear SPF15', reference: '#100111', name: 'Lancome Teint Ultra Wear SPF15', linkto: 'product/lancometeint' },
    { index: 15, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder', reference: '#100110', name: 'Pura Luminys Silky Baked Face Powder', linkto: 'product/puraluminyspowder' },
    { index: 16, src: 'bakedpowder.jpg', alt: 'Rose Quartz Gouache for Facial Massage', reference: '#100109', name: 'Rose Quartz Gouache for Facial Massage', linkto: 'product/rosequartzgouache' },
    { index: 17, src: 'blushblush.jpg', alt: 'Bourjois Volume Glamour', reference: '#100108', name: 'Bourjois Volume Glamour', linkto: 'product/bourjoisvolumeglamour' },
    { index: 18, src: 'mordiccare.jpg', alt: 'Varnangen Mordic Care All Over Rescue Body Balm', reference: '#100107', name: 'Varnangen Mordic Care All Over Rescue Body Balm', linkto: 'product/bodybalm' },
    { index: 19, src: 'panl.jpg', alt: 'Mishane Pani', reference: '#100106', name: 'Mishane Pani', linkto: 'product/mishanepani' },
    { index: 20, src: 'eyes.jpg', alt: 'Hyaluronic Tinted Facial Serum', reference: '#100105', name: 'Hyaluronic Tinted Facial Serum', linkto: 'product/hyaluronictintedfacialserum' }
  ];

  return (
    <div className='gallery-container flex-row'>
      {galleryImages.map((image) => (
        <div key={image.index} className='gallery-image-div' >
            <Link to={image.linkto} className="gallery-image-link flex-row">
                <img src={image.src} className='gallery-image' title={image.alt} />
                <div className='product-name'>{image.alt}</div>
           </Link>
        </div>
      ))}
      </div>)
}

import React from 'react';

export default function Gallery ({ images }) {
    return(
    <div className='gallery-container flex-row'>
      {images.map((image) => (
        <div key={image.index} className='gallery-image-div'>
            <a href='#' className="gallery-image-link flex-row">
                <img src={image.src} className='gallery-image' title={image.alt} />
                <div className='product-name'>{image.alt}</div>
            </a>
            
        </div>
      ))}
    </div>
    )
}

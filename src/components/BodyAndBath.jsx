import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

export default function BodyAndBath () {
    const bodyandbathImages = [
        { index: 0, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream' },
        { index: 1, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching' },
        { index: 2, src: 'hair.jpg', alt: 'Hillary Hair Complex Mask with Jojoba' },
        { index: 3, src: 'derma.jpg', alt: 'Michy Neovadiol Eyes & Lips' },
        { index: 4, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder' },
        { index: 5, src: 'mordiccare.jpg', alt: 'Varnangen Mordic Care All Over Rescue Body Balm' }
    ];

    return(
        <>
            <Header />
            <Navigation />
                <div className='gallery-container flex-row'>
                {bodyandbathImages.map((image) => (
                <div key={image.index} className='gallery-image-div'>
                <a href='#' className="gallery-image-link flex-row">
                    <img src={image.src} className='gallery-image' title={image.alt} />
                    <div className='product-name'>{image.alt}</div>
                </a>
                </div>
            ))}
                </div>
            <Footer />
        </>
    )
}

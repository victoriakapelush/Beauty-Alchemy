import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import { Link, Outlet } from 'react-router-dom';

export default function BodyAndBath () {
    const bodyandbathImages = [
        { index: 0, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream', linkto: '/bodyandbath/misolo' },
        { index: 1, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching', linkto: '/bodyandbath/dermacream' },
        { index: 2, src: 'hair.jpg', alt: 'Hillary Hair Complex Mask with Jojoba', linkto: '/bodyandbath/hairjojobamask' },
        { index: 3, src: 'derma.jpg', alt: 'Michy Neovadiol Eyes & Lips', linkto: '/bodyandbath/michyneovadiol' },
        { index: 4, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder', linkto: '/bodyandbath/puraluminyspowder' },
        { index: 5, src: 'mordiccare.jpg', alt: 'Varnangen Mordic Care All Over Rescue Body Balm', linkto: '/bodyandbath/bodybalm' }
    ];

    return(
        <>
            <Header />
            <Navigation />
                <div className='gallery-container flex-row'>
                {bodyandbathImages.map((image) => (
                <div key={image.index} className='gallery-image-div'>
                <Link to={image.linkto} className="gallery-image-link flex-row">
                    <img src={image.src} className='gallery-image' title={image.alt} />
                    <div className='product-name'>{image.alt}</div>
                </Link>
                </div>
            ))}
                </div>
            <Footer />
        </>
    )
}

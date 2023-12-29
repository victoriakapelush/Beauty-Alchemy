import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

export default function Perfumery () {
    const perfumeryImages = [
        { index: 0, src: 'tiviana.jpg', alt: 'Tiviana Tevenzi Dsaco' },
        { index: 1, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95' },
        { index: 2, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter' },
        { index: 3, src: 'blushblush.jpg', alt: 'Rose Quartz Gouache for Facial Massage' },
        { index: 4, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid' },
        { index: 5, src: 'panl.jpg', alt: 'Mishane Pani' }
    ];

    return(
        <>
            <Header />
            <Navigation />
            <div className='gallery-container flex-row'>
                {perfumeryImages.map((image) => (
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
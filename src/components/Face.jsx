import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

export default function Face () {
    const faceImages = [
        { index: 0, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic' },
        { index: 1, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum' },
        { index: 2, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes' },
        { index: 3, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95' },
        { index: 4, src: 'touchcream.jpg', alt: 'BlackTouch' },
        { index: 5, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter' },
        { index: 6, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder' },
        { index: 7, src: 'eyes.jpg', alt: 'Hyaluronic tinted facial serum' }
    ];

    return(
        <>
            <Header />
            <Navigation />
            <div className='gallery-container flex-row'>
                {faceImages.map((image) => (
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
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

export default function Makeup () {
    const makeupImages = [
        { index: 0, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching' },
        { index: 1, src: 'setofmakeup.jpg', alt: 'Verricone MD No Blush Blush SPF 90' },
        { index: 2, src: 'glamour.jpg', alt: 'Nuvi roller and gouaches' },
        { index: 3, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes' },
        { index: 4, src: 'bakedpowder.jpg', alt: 'Bourjois Volume Glamour' },
        { index: 5, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic' },
        { index: 6, src: 'almostpowder.jpg', alt: 'Lancome Teint Ultra Wear SPF15' },
        { index: 7, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum' },
        { index: 8, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream' }
    ];

    return(
        <>
            <Header />
            <Navigation />
            <div className='gallery-container flex-row'>
                {makeupImages.map((image) => (
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
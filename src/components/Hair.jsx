import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

export default function Hair () {
    const hairImages = [
        { index: 0, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid' },
        { index: 1, src: 'touchcream.jpg', alt: 'BlackTouch' },
        { index: 2, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter' },
        { index: 3, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder' },
        { index: 4, src: 'bakedpowder.jpg', alt: 'Bourjois Volume Glamour' },
        { index: 5, src: 'blushblush.jpg', alt: 'Rose Quartz Gouache for Facial Massage' }
    ]

    return(
        <>
            <Header />
            <Navigation />
                <div className='gallery-container flex-row'>
                {hairImages.map((image) => (
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
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import { Link, Outlet } from 'react-router-dom';

export default function Face () {
    const faceImages = [
        { index: 0, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic', linkto: '/face/saneplantazelaic' },
        { index: 1, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', linkto: '/face/hyaluronictintedfacialserum' },
        { index: 2, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes', linkto: '/face/brushes' },
        { index: 3, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95', linkto: '/face/flitiquealmostpowder' },
        { index: 4, src: 'touchcream.jpg', alt: 'BlackTouch', linkto: '/face/blacktouch' },
        { index: 5, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter', linkto: '/face/almondbodybutter' },
        { index: 6, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder', linkto: '/face/puraluminyspowder' },
        { index: 7, src: 'eyes.jpg', alt: 'Hyaluronic tinted facial serum', linkto: '/face/hyaluronictintedfacialserum' }
    ];

    return(
        <>
            <Header />
            <Navigation />
            <div className='gallery-container flex-row'>
                {faceImages.map((image) => (
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
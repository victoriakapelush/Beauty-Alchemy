import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import { Link, Outlet } from 'react-router-dom';

export default function Makeup () {
    const makeupImages = [
        { index: 0, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching', linkto: '/makeup/dermacream' },
        { index: 1, src: 'setofmakeup.jpg', alt: 'Verricone MD No Blush Blush SPF 90', linkto: '/makeup/verriconeblush' },
        { index: 2, src: 'glamour.jpg', alt: 'Nuvi roller and gouaches', linkto: '/makeup/nuviroller' },
        { index: 3, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes', linkto: '/makeup/brushes' },
        { index: 4, src: 'bakedpowder.jpg', alt: 'Bourjois Volume Glamour', linkto: '/makeup/rosequartzgouache' },
        { index: 5, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic', linkto: '/makeup/saneplantazelaic' },
        { index: 6, src: 'almostpowder.jpg', alt: 'Lancome Teint Ultra Wear SPF15', linkto: '/makeup/lancometeint' },
        { index: 7, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum', linkto: '/makeup/heauthyhyaluronicacid' },
        { index: 8, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream', linkto: '/makeup/misolo' }
    ];

    return(
        <>
            <Header />
            <Navigation />
            <div className='gallery-container flex-row'>
                {makeupImages.map((image) => (
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
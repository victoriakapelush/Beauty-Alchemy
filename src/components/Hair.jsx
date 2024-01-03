import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import { Link, Outlet } from 'react-router-dom';

export default function Hair () {
    const hairImages = [
        { index: 0, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid', linkto: '/hair/saneplantazelaic' },
        { index: 1, src: 'touchcream.jpg', alt: 'BlackTouch', linkto: '/hair/blacktouch' },
        { index: 2, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter', linkto: '/hair/almondbodybutter'},
        { index: 3, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder', linkto: '/hair/rosequartzgouache' },
        { index: 4, src: 'bakedpowder.jpg', alt: 'Bourjois Volume Glamour', linkto: '/hair/puraluminyspowder' },
        { index: 5, src: 'blushblush.jpg', alt: 'Rose Quartz Gouache for Facial Massage', linkto: '/hair/bourjoisvolumeglamour' }
    ]

    return(
        <>
            <Header />
            <Navigation />
                <div className='gallery-container flex-row'>
                {hairImages.map((image) => (
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
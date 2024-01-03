import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import { Link, Outlet } from 'react-router-dom';


export default function Perfumery () {
    const perfumeryImages = [
        { index: 0, src: 'tiviana.jpg', alt: 'Tiviana Tevenzi Dsaco', linkto: '/perfumery/tivianatevenzidsaco' },
        { index: 1, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95', linkto: '/perfumery/flitiquealmostpowder'  },
        { index: 2, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter', linkto: '/perfumery/almondbodybutter'  },
        { index: 3, src: 'blushblush.jpg', alt: 'Rose Quartz Gouache for Facial Massage', linkto: '/perfumery/bourjoisvolumeglamour'  },
        { index: 4, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid', linkto: '/perfumery/saneplantazelaic'  },
        { index: 5, src: 'panl.jpg', alt: 'Mishane Pani', linkto: '/perfumery/mishanepani'  }
    ];

    return(
        <>
            <Header />
            <Navigation />
            <div className='gallery-container flex-row'>
                {perfumeryImages.map((image) => (
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
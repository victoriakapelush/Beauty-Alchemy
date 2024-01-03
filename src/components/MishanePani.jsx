import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function MishanePani() {

    const mishanePani = { 
        index: 14, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc4777f07354f79cc2dd9_05-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc47e3ae3ff26e8031fd6_05-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6310878a84e35bbcf8549b0c_05-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f8488eeaa6bdbd2ab6e_13-02%402x.jpg', 
        alt: 'Mishane Pani', 
        reference: '#100105', 
        name: 'Mishane Pani' ,
        price: '75.00',
        discount: '159.00',
        description: "This sublime formula designed to cocoon your skin in nourishment. Immerse yourself in the light, yet deeply hydrating texture, leaving your skin with a heavenly softness."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Perfumery"
            to='/perfumery' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={mishanePani.src1} alt={mishanePani.alt} />
                        <img className='product-image' src={mishanePani.src2} alt={mishanePani.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={mishanePani.src3} alt={mishanePani.alt} />
                    <img className='product-image' src={mishanePani.src4} alt={mishanePani.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{mishanePani.name}</h5>
                            <div>{mishanePani.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {mishanePani.price} USD <span>$ {mishanePani.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{mishanePani.description}</p>
                            </div>
                        </div>
                        <div className='addtocart-button-div'>
                            <button>Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function HairJojibaMask() {

    const hairJojibaMask = { 
        index: 10, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3b2cf6ff32d13440944_14-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3b822b57f5c41ecc43f_14-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3b8590af290426945b2_14-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f690c3f2271a0028755_16-02%402x.jpg', 
        alt: 'Hillary Hair Complex Mask with Jojoba', 
        reference: '#100114', 
        name: 'Hillary Hair Complex Mask with Jojoba' ,
        price: '89.00',
        discount: '149.00',
        description: "A lavish formula that nurtures and rejuvenates your locks. Immerse yourself in the enriching blend of ingredients, including the hydrating essence of Jojoba, for a deep conditioning experience. Elevate your hair care ritual with this indulgent mask, where luxurious nourishment meets the brilliance of Jojoba, leaving your hair silky, smooth, and revitalized."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Body and Bath"
            to='/bodyandbath' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={hairJojibaMask.src1} alt={hairJojibaMask.alt} />
                        <img className='product-image' src={hairJojibaMask.src2} alt={hairJojibaMask.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={hairJojibaMask.src3} alt={hairJojibaMask.alt} />
                    <img className='product-image' src={hairJojibaMask.src4} alt={hairJojibaMask.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{hairJojibaMask.name}</h5>
                            <div>{hairJojibaMask.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {hairJojibaMask.price} USD <span>$ {hairJojibaMask.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{hairJojibaMask.description}</p>
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
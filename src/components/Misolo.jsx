import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function Misolo() {

    const misoloCream = { 
        index: 0, 
        srcBase: 'misolocream.jpg',
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1847b197e2bc1d34c4b_24-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc192f645e664598bf5d9_24-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1927b197ea1f3d34d4f_24-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f0632e0b54be284b83c_19-01%402x.jpg', 
        alt: 'Misolo Moisturizing Cream', 
        reference: '#100125', 
        name: 'Misolo Moisturising Cream' ,
        price: '75.00',
        discount: '99.00',
        description: "Hydrating skincare product designed to nourish and replenish the skin's moisture, leaving it soft and supple. Formulated with premium ingredients, it aims to provide effective hydration and promote a healthy complexion."
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
                        <img className='product-image' src={misoloCream.src1} alt={misoloCream.alt} />
                        <img className='product-image' src={misoloCream.src2} alt={misoloCream.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={misoloCream.src3} alt={misoloCream.alt} />
                    <img className='product-image' src={misoloCream.src4} alt={misoloCream.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{misoloCream.name}</h5>
                            <div>{misoloCream.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {misoloCream.price} USD <span>$ {misoloCream.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{misoloCream.description}</p>
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
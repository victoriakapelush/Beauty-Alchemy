import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function RoseQuartzGouache() {

    const roseQuartzGouache = { 
        index: 16, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc433d0700a1edb773076_08-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63111309186fb2ab2891f13e_08-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6311130ab40cccc2ae1d180a_08-03.jpg',
        alt: 'Rose Quartz Gouache for Facial Massage', 
        reference: '#100109', 
        name: 'Rose Quartz Gouache for Facial Massage' ,
        price: '65.00',
        discount: '169.00',
        description: "Transform your skincare ritual with our Rose Quartz Gouache for Facial Massage, a luxurious fusion of traditional beauty techniques and modern elegance. Experience the gentle caress of rose quartz as you elevate your self-care routine, promoting relaxation and enhancing product absorption for a radiant, revitalized complexion that truly glows from within."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Hair"
            to='/Hair' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={roseQuartzGouache.src1} alt={roseQuartzGouache.alt} />
                        <img className='product-image' src={roseQuartzGouache.src2} alt={roseQuartzGouache.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={roseQuartzGouache.src3} alt={roseQuartzGouache.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{roseQuartzGouache.name}</h5>
                            <div>{roseQuartzGouache.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {roseQuartzGouache.price} USD <span>$ {roseQuartzGouache.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{roseQuartzGouache.description}</p>
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
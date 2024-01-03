import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function SaneRetinol() {

    const saneRetinol = { 
        index: 5, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc349f645e629b18c05df_19-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc35218e390d626488bd9_19-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6311101f9a10b277906324a6_19-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f770c3f225aac0287af_23-03%402x.jpg', 
        alt: 'Sane Plant Retinol 2% and Azelaic Acid', 
        reference: '#100119', 
        name: 'Sane Plant Retinol 2% and Azelaic Acid' ,
        price: '65.00',
        discount: '169.00',
        description: "It combines the potent anti-aging benefits of vitamin A with the soothing properties of natural plant extracts, offering a gentle yet effective solution for promoting skin renewal. Infused with azelaic acid, this innovative formula further enhances its skincare prowess, addressing concerns like hyperpigmentation and inflammation for a comprehensive and rejuvenating skincare experience."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Hair"
            to='/hair' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={saneRetinol.src1} alt={saneRetinol.alt} />
                        <img className='product-image' src={saneRetinol.src2} alt={saneRetinol.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={saneRetinol.src3} alt={saneRetinol.alt} />
                    <img className='product-image' src={saneRetinol.src4} alt={saneRetinol.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{saneRetinol.name}</h5>
                            <div>{saneRetinol.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {saneRetinol.price} USD <span>$ {saneRetinol.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{saneRetinol.description}</p>
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
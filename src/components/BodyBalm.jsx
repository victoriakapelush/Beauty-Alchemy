import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function BodyBalm() {

    const bodyBalm = { 
        index: 18, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc463edcf49d9f82833bd_06-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc46adf2266183e7fd0b6_06-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc46a1382657f8a9e572c_06-02.jpg',
        alt: 'Varnangen Mordic Care All Over Rescue Body Balm', 
        reference: '#100106', 
        name: 'Varnangen Mordic Care All Over Rescue Body Balm' ,
        price: '49.00',
        discount: '89.00',
        description: "Revitalize your skin with carefully curated fusion of potent botanicals designed to nurture and restore. This indulgent balm offers comprehensive rescue for your skin, delivering profound hydration and replenishment. Enriched with natural goodness, make this soothing balm your daily essential for an all-encompassing pampering experience, leaving your skin luxuriously soft and revitalized."
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
                        <img className='product-image' src={bodyBalm.src1} alt={bodyBalm.alt} />
                        <img className='product-image' src={bodyBalm.src2} alt={bodyBalm.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={bodyBalm.src3} alt={bodyBalm.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{bodyBalm.name}</h5>
                            <div>{bodyBalm.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {bodyBalm.price} USD <span>$ {bodyBalm.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{bodyBalm.description}</p>
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
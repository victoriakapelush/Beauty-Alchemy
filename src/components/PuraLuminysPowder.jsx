import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function PuraLuminysPowder() {

    const puraLuminysPowder = { 
        index: 15, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc41ea2f49057aea7aa7a_09-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/631111a1b2d5a38f93e9543d_09-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/631111a1e503e371aa11731f_09-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63246052f835896640c0864a_18-03%402x.jpg',
        alt: 'Pura Luminys Silky Baked Face Powder', 
        reference: '#100108', 
        name: 'Pura Luminys Silky Baked Face Powder' ,
        price: '124.00',
        discount: '199.00',
        description: "Elevate your makeup routine with Silky Baked Face Powder, a radiant masterpiece that seamlessly fuses luminosity and silky texture. Immerse yourself in the allure of light-reflecting pigments as this luxurious powder sets and illuminates your complexion, leaving you with a natural, flawless glow that lasts throughout the day."
      };

    return(
        <>
        <Header />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={puraLuminysPowder.src1} alt={puraLuminysPowder.alt} />
                        <img className='product-image' src={puraLuminysPowder.src2} alt={puraLuminysPowder.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={puraLuminysPowder.src3} alt={puraLuminysPowder.alt} />
                    <img className='product-image' src={puraLuminysPowder.src4} alt={puraLuminysPowder.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{puraLuminysPowder.name}</h5>
                            <div>{puraLuminysPowder.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {puraLuminysPowder.price} USD <span>$ {puraLuminysPowder.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{puraLuminysPowder.description}</p>
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
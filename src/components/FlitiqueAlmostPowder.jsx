import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function FlitiqueAlmostPowder() {

    const flitiqueAlmostPowder = { 
        index: 14, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc338138265ad4f9e4982_20-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc33f44e1a3de7122dc8e_20-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc33fedcf49c0052828b5_20-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f690c3f2271a0028755_16-02%402x.jpg', 
        alt: 'Flitique Almost Powder Makeup SPF 95', 
        reference: '#100110', 
        name: 'Flitique Almost Powder Makeup SPF 95' ,
        price: '39.00',
        discount: '64.00',
        description: "Experience the epitome of flawless beauty with Flitique Almost Powder Makeup SPF 95, a luxurious formula that effortlessly evens out your complexion. Immerse yourself in the feather-light texture, providing a velvety finish while offering the added protection of SPF 95. Elevate your makeup routine with this exceptional powder, where sophistication meets sun-kissed perfection for a radiant and protected glow."
      };

    return(
        <>
        <Header />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={flitiqueAlmostPowder.src1} alt={flitiqueAlmostPowder.alt} />
                        <img className='product-image' src={flitiqueAlmostPowder.src2} alt={flitiqueAlmostPowder.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={flitiqueAlmostPowder.src3} alt={flitiqueAlmostPowder.alt} />
                    <img className='product-image' src={flitiqueAlmostPowder.src4} alt={flitiqueAlmostPowder.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{flitiqueAlmostPowder.name}</h5>
                            <div>{flitiqueAlmostPowder.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {flitiqueAlmostPowder.price} USD <span>$ {flitiqueAlmostPowder.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{flitiqueAlmostPowder.description}</p>
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
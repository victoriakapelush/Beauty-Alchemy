import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Brushes() {

    const brushes = { 
        index: 6, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc35d3b34439a467a83b8_18-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63111037132eca1476d3bf2c_18-02.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/6311173de078ad3672c104a8_18-03.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f8488eeaa6bdbd2ab6e_13-02%402x.jpg', 
        alt: 'A set of makeup brushes', 
        reference: '#100120', 
        name: 'A set of makeup brushes' ,
        price: '95.00',
        discount: '189.00',
        description: "Elevate your makeup game with our Deluxe Brush Set, a curated collection that redefines precision and luxury. Whether blending, contouring, or highlighting, each brush in this set is designed to indulge your creativity and enhance your beauty routine."
      };

    return(
        <>
        <Header />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={brushes.src1} alt={brushes.alt} />
                        <img className='product-image' src={brushes.src2} alt={brushes.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={brushes.src3} alt={brushes.alt} />
                    <img className='product-image' src={brushes.src4} alt={brushes.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{brushes.name}</h5>
                            <div>{brushes.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {brushes.price} USD <span>$ {brushes.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{brushes.description}</p>
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
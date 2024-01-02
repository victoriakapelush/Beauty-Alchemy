import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function DermaCream() {

    const dermaCream = { 
        index: 3, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1c44a677c3f7d4d0c79_21-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1c9c9d63638c53f7a61_21-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1c9c18cc8458c2c0d62_21-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f5f43f6c2652413dbb4_11-03%402x.jpg', 
        alt: 'Lancome Teint Ultra Wear SPF15', 
        reference: '#100121', 
        name: 'Lancome Teint Ultra Wear SPF15' ,
        price: '75.00',
        discount: '150.00',
        description: "A long-lasting foundation known for its exceptional coverage and lasting power, providing a flawless complexion throughout the day. With the added benefit of SPF15, it offers sun protection while delivering a velvety, comfortable finish for a radiant and even skin tone."
      };



    return(
        <>
        <Header />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={dermaCream.src1} alt={dermaCream.alt} />
                        <img className='product-image' src={dermaCream.src2} alt={dermaCream.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={dermaCream.src3} alt={dermaCream.alt} />
                    <img className='product-image' src={dermaCream.src4} alt={dermaCream.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{dermaCream.name}</h5>
                            <div>{dermaCream.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {dermaCream.price} USD <span>$ {dermaCream.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{dermaCream.description}</p>
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
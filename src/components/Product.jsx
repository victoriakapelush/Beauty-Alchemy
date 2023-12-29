import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Product( {reference} ) {
    return(
        <div>
            <Header />
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src='https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1847b197e2bc1d34c4b_24-01.jpg'></img>
                        <img className='product-image' src='https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc192f645e664598bf5d9_24-03.jpg'></img>
                    </div>
                    <div className='flex-row'>
                        <img className='product-image' src='https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc1927b197ea1f3d34d4f_24-02.jpg'></img>
                        <img className='product-image' src='https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245f0632e0b54be284b83c_19-01%402x.jpg'></img>
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                    <div>
                        <div className='product-image-heading flex-column'>
                            <h5>Misolo Moisturising Cream</h5>
                            <div>{reference}</div>
                        </div>
                        <div className='product-cost'>
                            <h5>$ 75.00 USD <span>$ 99.00 USD</span></h5>
                        </div>
                        <div className='product-description'>
                            <p>Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.</p>
                        </div>
                    </div>
                    <div className='addtocart-button-div'>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
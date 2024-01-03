import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'

export default function TivianaTevenziDsaco() {

    const tivianaTevenziDsaco = { 
        index: 7, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245ff459df1013d04d6fb2_17-01%402x.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245ff49ebeb01acc425977_17-02%402x.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/63245ff459df101bbe4d6fb1_17-03%402x.jpg',
        alt: 'Tiviana Tevenzi Dsaco', 
        reference: '#100117', 
        name: 'Tiviana Tevenzi Dsaco' ,
        price: '48.00',
        discount: '89.00',
        description: "Indulge in the ultimate foundation experience with our exquisite line, offering a seamless blend of coverage and nourishment. Achieve a flawless complexion with our lightweight, long-lasting formula that not only provides impeccable coverage but also cares for your skin, leaving you with a radiant and naturally beautiful finish."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Perfumery"
            to='/perfumery' />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={tivianaTevenziDsaco.src1} alt={tivianaTevenziDsaco.alt} />
                        <img className='product-image' src={tivianaTevenziDsaco.src2} alt={tivianaTevenziDsaco.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={tivianaTevenziDsaco.src3} alt={tivianaTevenziDsaco.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{tivianaTevenziDsaco.name}</h5>
                            <div>{tivianaTevenziDsaco.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {tivianaTevenziDsaco.price} USD <span>$ {tivianaTevenziDsaco.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{tivianaTevenziDsaco.description}</p>
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
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function MichyNeovadiol() {

    const michyNeovadiol = { 
        index: 13, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3f328f73773458d7b24_11-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3fb084d6e7be2dcc1cd_11-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc3fb4a677c401f4d2e18_11-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/632460948eaaa809fc1ba6b6_22-02%402x.jpg', 
        alt: 'Michy Neovadiol Eyes & Lips', 
        reference: '#100104', 
        name: 'Michy Neovadiol Eyes & Lips' ,
        price: '75.00',
        discount: '129.00',
        description: "Revitalize your eyes and lips with this indulgent formula crafted to rejuvenate and enhance your delicate features. Rediscover the essence of youthful beauty with Michy Neovadiol Eyes & Lips, a decadent formulation tailored to revive and accentuate your most expressive features."
      };

    return(
        <>
        <Header />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={michyNeovadiol.src1} alt={michyNeovadiol.alt} />
                        <img className='product-image' src={michyNeovadiol.src2} alt={michyNeovadiol.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={michyNeovadiol.src3} alt={michyNeovadiol.alt} />
                    <img className='product-image' src={michyNeovadiol.src4} alt={michyNeovadiol.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{michyNeovadiol.name}</h5>
                            <div>{michyNeovadiol.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {michyNeovadiol.price} USD <span>$ {michyNeovadiol.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{michyNeovadiol.description}</p>
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
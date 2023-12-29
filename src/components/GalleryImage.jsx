import Gallery from './Gallery.jsx'
import Product from './Product.jsx'

export default function GalleryImage() {
    const galleryImages = [
        { index: 0, src: 'misolocream.jpg', alt: 'Misolo Moisturizing Cream', reference: '#100124' },
        { index: 1, src: 'saintplack.jpg', alt: 'Sane Plant Azelaic' },
        { index: 2, src: 'acidfaceserum.jpg', alt: 'Heauthy Hyaluronic Acid with Niacinamide Face Serum' },
        { index: 3, src: 'lancomespf.jpg', alt: 'A Derma Exomega Control Emollient Cream Anti Scratching' },
        { index: 4, src: 'setofmakeup.jpg', alt: 'Verricone MD No Blush Blush SPF 90' },
        { index: 5, src: 'retinolacid.jpg', alt: 'Sane Plant Retinol 2% and Azelaic Acid' },
        { index: 6, src: 'setofbrushes.jpg', alt: 'A Set of Makeup Brushes' },
        { index: 7, src: 'tiviana.jpg', alt: 'Tiviana Tevenzi Dsaco' },
        { index: 8, src: 'nuvlroller.jpg', alt: 'Flitique Almost Powder Makeup SPF 95' },
        { index: 9, src: 'touchcream.jpg', alt: 'BlackTouch' },
        { index: 10, src: 'hair.jpg', alt: 'Hillary Hair Complex Mask with Jojoba' },
        { index: 11, src: 'glamour.jpg', alt: 'Nuvi roller and gouaches' },
        { index: 12, src: 'bodybutter.jpg', alt: 'Phytorelax Laboratories Almond Body Butter' },
        { index: 13, src: 'derma.jpg', alt: 'Michy Neovadiol Eyes & Lips' },
        { index: 14, src: 'almostpowder.jpg', alt: 'Lancome Teint Ultra Wear SPF15' },
        { index: 15, src: 'rosefacial.jpg', alt: 'Pura Luminys Silky Baked Face Powder' },
        { index: 16, src: 'bakedpowder.jpg', alt: 'Bourjois Volume Glamour' },
        { index: 17, src: 'blushblush.jpg', alt: 'Rose Quartz Gouache for Facial Massage' },
        { index: 18, src: 'mordiccare.jpg', alt: 'Varnangen Mordic Care All Over Rescue Body Balm' },
        { index: 19, src: 'panl.jpg', alt: 'Mishane Pani' },
        { index: 20, src: 'eyes.jpg', alt: 'Hyaluronic tinted facial serum' }
      ];

      const reference = galleryImages[0].reference;
  
      return (
        <>
          <Gallery images={galleryImages} />
        </>
      );
  }
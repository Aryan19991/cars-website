
import image1 from './assets/images/image1.webp';
import image2 from './assets/images/image2.jpg';

const ImageGallery = () => {
    return (
        <div>
            <h1>Image Gallery</h1>
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
        </div>
    );
};

export default ImageGallery;

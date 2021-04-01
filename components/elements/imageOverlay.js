// dependencies
import classNames from 'classnames';

const ImageOverlay = ({
    images, // array
    className,
    imageClassName
}) => {

    const imageOverlayWrapperClasses = classNames( 'image-overlay-wrapper', className );
    const imageClassNames = classNames( 'overlay-image site-image', imageClassName );

    return(
        <div className='image-container'>
            <div className={imageOverlayWrapperClasses}>
                {
                    images.map( ({ imagePath, imageAltText }) => (
                        <img key={imageAltText} src={imagePath} alt={imageAltText} role='presentation' className={imageClassNames} />
                    ) )
                }
            </div>
        </div>    
    );
}

export default ImageOverlay;
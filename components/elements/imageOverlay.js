// dependencies
import classNames from 'classnames';

const ImageOverlay = ({
    className,
    images,
    imageClassName
}) => {

    const imageOverlayWrapperClasses = classNames( 'image-overlay-wrapper', className );
    const imageClassNames = classNames( 'overlay-image site-image', imageClassName );

    return(
        <div className='image-container'>
            <div className={imageOverlayWrapperClasses}>
                {
                    images.map( ({ imagePath, imageAltText }) => (
                        <img className={imageClassNames} key={imageAltText} src={imagePath} alt={imageAltText} role='presentation' />
                    ) )
                }
            </div>
        </div>    
    );
}

export default ImageOverlay;
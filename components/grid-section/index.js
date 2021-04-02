// dependencies
import classNames from 'classnames';

// elements
import { ImageOverlay } from '../elements';

// content
import { GridSectionContent } from './content';


const GridSection = ({
    alignImage='left' // 'left' || 'right'
}) => {
    
    /* CONTENT */
    const { images, description } = GridSectionContent;

    /* CLASSNAMES */
    const gridSectionClasses = classNames( 'grid-section', alignImage === 'left' ? 'image-align-left' : 'image-align-right' );

    return (
        <section id='grid-section' className='container'>
            <div className={gridSectionClasses}>

                <div className='grid-section-image-wrapper'>
                    <ImageOverlay images={images} />
                </div>

                <div className='grid-section-description-wrapper'>
                    <h1>{description.descriptionTitle}</h1>
                    <p>{description.descriptionText}</p>
                </div>

            </div>
        </section>
    );
}

export default GridSection;
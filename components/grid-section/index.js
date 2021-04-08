// dependencies
import classNames from 'classnames';

// elements
import { ImageOverlay } from '../elements';


const GridSection = ({
    id,
    content: { gridSectionTitle, gridSectionDescription, gridSectionImages },
    alignImage='left' // 'left' || 'right'
}) => {

    /* CLASSNAMES */
    const gridSectionClasses = classNames( 'grid-section', alignImage === 'left' ? 'image-align-left' : 'image-align-right' );

    return (
        <section id={id} className='container'>
            <div className={gridSectionClasses}>

                <div className='grid-section-image-wrapper'>
                    <ImageOverlay images={gridSectionImages} />
                </div>

                <div className='grid-section-description-wrapper'>
                    <h1>{gridSectionTitle}</h1>
                    <p>{gridSectionDescription}</p>
                </div>

            </div>
        </section>
    );
}

export default GridSection;
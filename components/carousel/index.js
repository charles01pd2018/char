// dependencies
import { useState } from 'react';
import classNames from 'classnames';
import Swing from 'react-reveal/Swing';
// elements
import { ImageBackground, Tags } from '../elements';


const Carousel = ( {
    id,
    content: { carouselTitle, carouselItems }
} ) => {

    /* HOOKS */
    const [ carouselIndex, setCarouselIndex ] = useState(0); // display the first carousel item
    const [ carouselDirection, setCarouselDirection ] = useState(''); // set the direction the carousel is going (for animations)

    /* FUNCTIONS */
    const incrementCarouselIndex = () => {
        setCarouselIndex( state => {
            setCarouselDirection('carousel-right-enter');
            return state + 1;
        });
    }

    const decrementCarouselIndex = () => {
        setCarouselIndex( state => {
            setCarouselDirection('carousel-left-enter');
           return state - 1;
        });
    }

    const handleCarouselWrapperClasses = ( objectIndex, currentIndex ) => {
        if ( objectIndex === currentIndex ) return carouselDirection;
        return 'hide';
    }
    
    /* CLASSNAMES */
    const carouselLeftIconClasses = classNames( 'chevron left carousel-toggle-icon carousel-toggle-left site-link', carouselIndex === 0 && 'hide' );
    const carouselRightIconClasses = classNames( 'chevron right carousel-toggle-icon carousel-toggle-right site-link', carouselIndex === carouselItems.length - 1 && 'hide' );
    
    return (
        <section id={id} className='carousel-background'>
            <div className='container'>
                <div className='carousel-title-wrapper'>
                    <h1>{carouselTitle}</h1>
                </div>

                    { carouselItems.map( ( carouselObject, index ) => {
                        /* CONTENT */
                        const { carouselDisplay, carouselDescriptionTitle, carouselDescriptionText, ...optionalCarouselContent } = carouselObject; // main content
                        const { displayImages, carouselDisplayDestination } = carouselDisplay; // display content
                        // don't display if these object are null
                        const { carouselDescriptionFeatures, carouselDescriptionTags } = optionalCarouselContent; // optional descriptions

                        /* CLASSNAMES */
                        const carouselWrapperClasses = classNames( 'carousel-wrapper', handleCarouselWrapperClasses(index, carouselIndex) );

                        return (
                                <div key={`carousel-object-${index}`} className={carouselWrapperClasses}>
                                    <div className='carousel-display-wrapper'>
                                        <div className='carousel-image-wrapper'>
                                            {
                                                carouselDisplayDestination ? ( 
                                                    <a href={carouselDisplayDestination} target='_blank'>
                                                        <ImageBackground className='zoom-image' imageBackgroundURL={displayImages[0].imagePath} imageOnTop={displayImages[1]}  />
                                                    </a> ) : ( 
                                                    <ImageBackground imageBackgroundURL={displayImages[0].imagePath} imageOnTop={displayImages[1]} /> )
                                            }
                                        </div>

                                        <div className='carousel-state-tracker'>
                                            {carouselIndex + 1} of {carouselItems.length}
                                        </div>
                                    </div>

                                    <div className='carousel-description-wrapper'>
                                        <span className='carousel-description-title'><h4>{carouselDescriptionTitle}</h4></span>
                                        <span className='carousel-description-text'>{carouselDescriptionText}</span>
                                        <hr className='horizontal-line-sm align-left'/>

                                        {
                                            carouselDescriptionFeatures ? (
                                                <div className='carousel-description-features-wrapper'>
                                                    <i>{carouselDescriptionFeatures.featuresTitle}</i>
                                                    <ul className='carousel-description-features-list'>
                                                        {
                                                            carouselDescriptionFeatures.featuresList.map( feature => (
                                                                <li key={feature} className='carousel-description-feature'>{feature}</li>
                                                            ))
                                                        }
                                                    </ul> 
                                                </div> ) : ( null )
                                        }


                                        {
                                            carouselDescriptionTags ? ( 
                                            <div className='carousel-tags-wrapper'>
                                                <Swing>
                                                    <Tags tags={carouselDescriptionTags} />
                                                </Swing>
                                            </div> ) : ( null )
                                        }

                                        <div className='carousel-toggle-wrapper' aria-hidden='true'>
                                            <button className={carouselLeftIconClasses} onClick={decrementCarouselIndex}>
                                                <span className='screen-reader'>toggle carousel left</span>
                                                <span aria-label='toggle carousel left'></span>
                                            </button>

                                            <button className={carouselRightIconClasses} onClick={incrementCarouselIndex}>
                                                <span className='screen-reader'>toggle carousel right</span>
                                                <span aria-label='toggle carousel right'></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                );
                        } )
                    }
            </div>
        </section>
    );
}

export default Carousel;
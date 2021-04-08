const Card = ({
    cardContent
}) => {

    /* CONTENT */
    const { cardHeader, cardHeaderDescription, cardImage, cardDescription, cardLink } = cardContent;
    const { imagePath, imageAltText } = cardImage;

    return (
        <div className='flex-panel-card'>
            <h1>{cardHeader}</h1>
            <p>{cardHeaderDescription}</p>

            <div className='image-container card-image-wrapper'>
                <a href={cardLink} target='_blank'>
                    <img className='flex-panel-card-image zoom-image' src={imagePath} role='presentation' alt={imageAltText}/>
                </a>
            </div>

            <p>{cardDescription}</p>
        </div>
    );
}

export default Card;
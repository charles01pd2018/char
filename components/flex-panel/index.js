// partials
import Card from './card';

const FlexPanel = ({
    id,
    content: { flexPanelTitle, flexPanelDescription, flexPanelCardItems }
}) => {

    return (
        <section id={id} className='container'>
            <h1>{flexPanelTitle}</h1>
            <p>{flexPanelDescription}</p>
                <div className='flex-panel'>
                    {
                        flexPanelCardItems.map( ( cardContent ) => (
                            <Card key={cardContent.cardHeader} cardContent={cardContent}  />
                        ))
                    }
                </div>
        </section>
    )
}

export default FlexPanel;
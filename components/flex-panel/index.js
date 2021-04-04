// content
import { FlexPanelContent } from './content';

// partials
import Card from './card';

const FlexPanel = ({
    id
}) => {

    return (
        <section id={id} className='container'>
            <h1>Hackathons</h1>
            <p>I don’t usually win, but when I do, it’s because my team carried me</p>
                <div className='flex-panel'>
                    {
                        FlexPanelContent.map( ( cardContent ) => (
                            <Card key={cardContent.cardHeader} cardContent={cardContent}  />
                        ))
                    }
                </div>
        </section>
    )
}

export default FlexPanel;
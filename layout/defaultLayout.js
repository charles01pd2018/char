// components
import { Header, Footer } from '../components/layout'

// content
import { HeaderContent, FooterContent } from '../content/layoutContent';

const DefaultLayout = ({
    children
}) => {
    
    var SITE_NAME = 'pofo';

    return (
        <>
            <Header siteName={SITE_NAME} content={HeaderContent} />
                <main className='site-content'>{children}</main>
            <Footer siteName={SITE_NAME} content={FooterContent} />
        </>
    );
}

export default DefaultLayout;
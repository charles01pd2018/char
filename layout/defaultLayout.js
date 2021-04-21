// components
import { Header, Footer } from '../components/layout'
// content
import { HeaderContent, FooterContent } from '../content/layoutContent';


var SITE_NAME = 'pofo';

const DefaultLayout = ({
    children
}) => {

    return (
        <>
            <Header siteName={SITE_NAME} content={HeaderContent} />
                <main className='site-content'>{children}</main>
            <Footer siteName={SITE_NAME} content={FooterContent} />
        </>
    );
}

export default DefaultLayout;
// dependencies
import Link from 'next/link';
// partials
import Logo from '../logo';


const Footer = ({
    siteName,
    content: { footerNavLinks, footerSocialIcons, footerDescription }
}) => {

    return (
        <section id='footer' className='footer-container'>
                <footer className='footer-wrapper'>
                    <div className='footer-branding-wrapper'>
                        <Logo />
                    </div>

                    <nav className='container'>
                        <div className='footer-category-wrapper'>
                            {
                                footerNavLinks.map( ({ categoryDescription, categoryLinks }) => {
                                    return (
                                        <div key={categoryDescription} className='footer-category'>
                                            <h4 className='footer-category-title'>{categoryDescription}</h4>

                                            <ul className='footer-category-links-wrapper'>
                                                {
                                                    categoryLinks.map( ({ linkTitle, linkDestination }) => (
                                                        <li key={linkTitle} className='footer-list-item site-link'>
                                                            <Link href={linkDestination}><a>{linkTitle}</a></Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </div>
                                    );
                                } )
                            }
                        </div>

                        <div className='footer-social-bar-wrapper'>
                            {
                                footerSocialIcons.map( ({ socialIconType, socialIconPath, socialIconDestination }) => (
                                    <a key={socialIconType} href={socialIconDestination} target='_blank'>
                                        <img src={socialIconPath} alt={socialIconType} className='footer-social-icon site-link'/>
                                    </a>
                                ))
                            }
                        </div>

                        <div className='footer-copyright-statement'>
                            <p className='footer-small-text'>{siteName}</p>
                            <p className='footer-small-text'>{footerDescription}</p>
                        </div>

                    </nav>
                </footer>
        </section>
    );
}

export default Footer;
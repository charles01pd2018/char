// dependencies
import Link from 'next/link';

// content
import { HeroWaveContent } from './content';

const HeroWave = ({
}) => {

    return (
        <section id='hero' className='hero-wave-background'>
            <div className='container'>
                <div className='hero-wave-wrapper'>
                    <div className='hero-wave-content'>
                        <h1 className='hero-wave-content-title'>{HeroWaveContent.title}</h1>
                        <p className='hero-wave-content-description'>{HeroWaveContent.description}</p>
                    </div>

                    <div className='hero-wave-visual-wrapper'>
                        <object type="image/svg+xml" data='/static/branding/pofoAnimation.svg' alt='pofo-site-logo-animation' role='presentation' className='hero-wave-visual-image' >
                            Pofo Site Logo Animation
                        </object>
                    </div>
                </div>

                <div className='hero-wave-redirect'>
                    <Link href='#grid-section'><a><span className='triangle-down round site-link'></span></a></Link>
                </div>
            </div>
            <object type="image/svg+xml" data='/static/styling/wavesAnimation.svg' alt='hero-waves-animation' role='presentation' >
                Hero Waves Animation
            </object>
        </section>
    );
}

export default HeroWave;
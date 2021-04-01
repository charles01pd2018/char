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
                        <object type="image/svg+xml" data='/static/branding/pofoAnimation.svg' alt='pofo-site-logo-animation' className='hero-wave-visual-image site-image' >
                            Pofo Site Logo
                        </object>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroWave;
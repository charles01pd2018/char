// dependencies
import Link from 'next/link';

const HeroWave = ({
    id,
    content: { heroWaveTitle, heroWaveDescription }
}) => {

    return (
        <section id={id} className='hero-wave-background'>
            <div className='container'>
                <div className='hero-wave-wrapper'>
                    <div className='hero-wave-content'>
                        <h1 className='hero-wave-content-title'>{heroWaveTitle}</h1>
                        <p className='hero-wave-content-description'>{heroWaveDescription}</p>
                    </div>

                    <div className='hero-wave-visual-wrapper'>
                        <object type="image/svg+xml" data='/static/branding/pofoAnimation.svg' alt='pofo-site-logo-animation' role='presentation' className='hero-wave-visual-image' >
                            Pofo Site Logo Animation
                        </object>
                    </div>
                </div>

                <div className='hero-wave-redirect'>
                    <Link href='#about'>
                        <a>
                            <span className='screen-reader'>triangle nav site content icon</span>
                            <span className='triangle-down round hero-wave-triangle' aria-label='triangle nav site content icon'></span>
                        </a>
                    </Link>
                </div>
            </div>
            <object type="image/svg+xml" data='/static/styling/wavesAnimation.svg' alt='hero-waves-animation' role='presentation' >
                Hero Waves Animation
            </object>
        </section>
    );
}

export default HeroWave;
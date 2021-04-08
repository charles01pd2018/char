// dependencies
import Head from 'next/head';

// components
import { HeroWave, FlexPanel, GridSection, Carousel } from '../components';

// content
import { HomeHeroWaveContent, HomeCarouselContent, HomeFlexPanelContent, HomeGridSectionContent } from './homeContent';

const Home = ({
}) => {
  return (
        <>
          <Head>
              <title>pofo</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

            <HeroWave id='welcome' content={HomeHeroWaveContent} />
            <GridSection id='about' content={HomeGridSectionContent} />
            <Carousel id='projects' content={HomeCarouselContent} />
            <FlexPanel id='hackathons' content={HomeFlexPanelContent} />
        </>
  );
}

export default Home;
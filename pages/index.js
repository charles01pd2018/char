// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../layout';
// components
import { HeroWave, FlexPanel, GridSection, Carousel } from '../components';
// content
import HomeContent from '../content/homeContent';


const Home =  ({
  content: { 
    HomeHeroWaveContent, 
    HomeCarouselContent, 
    HomeFlexPanelContent,
    HomeGridSectionContent 
}
}) => {
  return (
    <DefaultLayout>
        <Head>
            <title>pofo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

          <HeroWave id='welcome' content={HomeHeroWaveContent} />
          <GridSection id='about' content={HomeGridSectionContent} />
          <Carousel id='projects' content={HomeCarouselContent} />
          <FlexPanel id='hackathons' content={HomeFlexPanelContent} />
    </DefaultLayout>
  );
}

export default Home;


export function getStaticProps() {
  return {
    props: {
      content: HomeContent
    }
  }
}
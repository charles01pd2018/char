// dependencies
import Head from 'next/head';

// layout
import { DefaultLayout } from '../layout';

// components
import { HeroWave, FlexPanel, GridSection, Carousel } from '../components';


const Home = ({
}) => {
  return (
        <DefaultLayout>
                <Head>
                    <title>pofo</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                  <HeroWave id='welcome' />
                  <GridSection id='about'/>
                  <Carousel id='projects' />
                  <FlexPanel id='hackathons '/>
        </DefaultLayout>
  );
}

export default Home;
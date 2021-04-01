// dependencies
import Head from 'next/head';

// layout
import { DefaultLayout } from '../layout';

// components
import { Hero, FlexPanel, GridSection, Carousel } from '../components';


const Home = ({
}) => {
  return (
        <DefaultLayout>
                <Head>
                    <title>pofo</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                  <Hero />
                  <GridSection />
                  <Carousel />
                  <FlexPanel />
        </DefaultLayout>
  );
}

export default Home;
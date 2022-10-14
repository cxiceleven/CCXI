import type { NextPage } from 'next'
import Head from 'next/head'
import Benefits from '../components/benefits';
import Cta from '../components/cta';
import { benefitOne, benefitThree, benefitTwo } from '../components/data';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Hero2 from '../components/hero2';
import Navbar from '../components/navbar';
import PopupWidget from '../components/popupWidget';
import Roadmap from '../components/roadmap';
import SectionTitle from '../components/sectionTitle';
import Testimonials from '../components/testimonials';
import Video from '../components/video';

const Home: NextPage = () => {
  return (
    <>
          <Head>
        <title>CXI - Cricket Club</title>
        <meta
          name="description"
          content=">CXI - Cricket Club"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-blue-900">
      <div className="bg-no-repeat bg-cover dark:bg-[url('/img/CXIBlue/heroBg.png')]">
      <Navbar />
      <Hero2 />
      </div>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle preTitle="Our Timeline" title="Road Map" align="align"></SectionTitle>
      <Roadmap/>
      <Benefits data={benefitThree} />
      <SectionTitle preTitle="Join Us" title="Community">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Footer />
      </div>
    </>
  );
}

export default Home

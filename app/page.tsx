import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import StoryExample from '@/components/StoryExample';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <StoryExample />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

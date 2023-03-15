import {
  LandingHeroSection,
  LandingFeatureSection,
  LandingStatsSection,
  LandingPricingSection,
  LandingCTASection,
  LandingFooterSection,
} from '../components/landing/index';

type LandingPageProps = {
  //
};

const LandingPage: React.FC<LandingPageProps> = () => {
  /** @Render */
  return (
    <>
      <LandingHeroSection />
      <div id="LandingFeatures">
        <LandingFeatureSection />
        <LandingFeatureSection />
        <LandingFeatureSection />
      </div>
      <LandingStatsSection />
      <LandingPricingSection />
      <LandingCTASection />
      <LandingFooterSection />
    </>
  );
};

export default LandingPage;

export const getServerSideProps = async () => {
  console.log('no server side render issues?');
  return {
    props: {},
  };
};

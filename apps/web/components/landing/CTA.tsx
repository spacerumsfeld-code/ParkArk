import { Button, ButtonSizeEnum, ButtonStyleEnum } from '@park-ark/ui/*';
import router from 'next/router';

type LandingCTASectionProps = {
  //
};

export const LandingCTASection: React.FC<LandingCTASectionProps> = () => {
  /** @Actions */
  const handleCTAButtonClick = () => {
    router.push('/login');
  };

  /** @Render */
  return (
    <div id="LandingCTA" className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start exploring.
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Free to try, no credit card required. We&lsquo;ll never charge you
            for the basic version of our app.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={() => handleCTAButtonClick()}
              style={ButtonStyleEnum.secondary}
              size={ButtonSizeEnum.lg}
            >
              <Button.Label>Get Started</Button.Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

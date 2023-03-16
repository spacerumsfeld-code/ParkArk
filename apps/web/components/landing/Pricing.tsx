import { CheckIcon } from '@heroicons/react/20/solid';
import { Button } from '@park-ark/ui/*';
import router from 'next/router';

/** @Config - pull from CMS eventually */
const tiers = [
  {
    name: 'Freemium',
    id: 'tier-freemium',
    priceMonthly: '$0',
    description: 'Free for life!',
    features: [
      'Up to 10 trips',
      'Basic notifications and alerts',
      'Community packing lists and trip reviews',
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    priceMonthly: '$4.99',
    description:
      'Enhance your outdoor experience for the cost of a Starbucks Mocha.',
    features: [
      'Unlimited trips',
      'Advanced AI outdoor chatbot functionality',
      'Invite your friends to join you on your trip',
      'Advanced alerts and notifications',
    ],
    mostPopular: true,
  },
  {
    name: 'Lifetime',
    id: 'tier-lifetime',
    priceMonthly: '$49',
    description:
      'The same features of the Pro plan for life (no monthly fees!)',
    features: ['see Pro plan'],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type LandingPricingSectionProps = {
  //
};

export const LandingPricingSection: React.FC<
  LandingPricingSectionProps
> = () => {
  /** @Actions */
  const handleCTAButtonClick = () => {
    router.push('/login');
  };

  /** @Render */
  return (
    <div id="LandingPricingSection" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-grey-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Do your part - Ten percent of all profits go right back to national
            parks
          </p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          For the price of a cup of coffee, you can help support the national
          parks.
        </p> */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                index === 0 ? 'lg:rounded-r-none' : '',
                index === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-green-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-green-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-green-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className="bg-green-600 text-white shadow-sm hover:bg-green-500"
                onClick={() => handleCTAButtonClick()}
              >
                <Button.Label>Buy plan</Button.Label>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

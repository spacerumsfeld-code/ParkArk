import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, ButtonSizeEnum, ButtonStyleEnum } from '@park-ark/ui/index';

const navigationItems = [
  { name: 'Features', sectionId: 'LandingFeatures' },
  { name: 'Stats', sectionId: 'LandingStats' },
  { name: 'Pricing', sectionId: 'LandingPricing' },
  { name: 'Get Started', sectionId: 'LandingCTA' },
];

type LandingHeroSectionProps = {
  //
};

export const LandingHeroSection: React.FC<LandingHeroSectionProps> = () => {
  /** @State */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /** @Hooks */
  const router = useRouter();

  /** @Actions */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleCTAButtonClick = () => {
    router.push('/login');
  };

  /** @Render */
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link className='className="-m-1.5 p-1.5' href={'/login'}>
              <span className="sr-only">Parkark</span>
              <Image
                src={'/logos/blackNoBG.svg'}
                alt="Your Company"
                height="80"
                width="80"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              onClick={() => handleCTAButtonClick()}
              style={ButtonStyleEnum.ghost}
              size={ButtonSizeEnum.sm}
            >
              <Button.Label>Login</Button.Label>
            </Button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => console.log('close')}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link className='className="-m-1.5 p-1.5' href={'/login'}>
                <span className="sr-only">Parkark</span>
                <Image
                  src={'/logos/blackNoBG.svg'}
                  alt="Your Company"
                  height="60"
                  width="60"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigationItems.map((item) => (
                    <div
                      key={item.name}
                      onTouchStart={() => {
                        scrollToSection(item.sectionId);
                        /** if line below not commented, scroll does not work. Nice. */
                        // setMobileMenuOpen(false);
                      }}
                      className="cursor-pointer -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    onClick={() => handleCTAButtonClick()}
                    style={ButtonStyleEnum.ghost}
                    size={ButtonSizeEnum.sm}
                  >
                    <Button.Label>Login</Button.Label>
                  </Button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              {/* <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient> */}
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Explore more.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the natural beauty of America&apos;s national parks with
              our app that makes it easy to plan and organize your next
              adventure.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
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
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          {/* <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
      </div>
    </div>
  );
};

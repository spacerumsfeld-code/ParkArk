import Image from 'next/image';

type LandingFeatureSectionProps = {
  header: {
    title: string;
    subtitle: string;
    description: string;
  };
  keyPoints: {
    name: string;
    description: string;
    icon: any;
  }[];
  arrangement?: 'left' | 'right';
  imgSrc: string;
};

export const LandingFeatureSection: React.FC<LandingFeatureSectionProps> = ({
  header,
  keyPoints,
  arrangement,
  imgSrc,
}) => {
  /** @Render */
  return (
    <div id="top container" className="overflow-hidden bg-white py-10 sm:py-16">
      <div id="who we?" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          id="grid huh?"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {arrangement === 'left' ? (
            <>
              <Image
                src={imgSrc}
                alt="Product screenshot"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full sm:h-full md:-mr-4 lg:-mr-0"
                width={2432}
                height={1442}
              />
              <div id="text block" className="lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-600">
                    {header.title}
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {header.subtitle}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {header.description}
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {keyPoints.map((point) => (
                      <div key={point.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <point.icon
                            className="absolute top-1 left-1 h-5 w-5 text-green-600"
                            aria-hidden="true"
                          />
                          {point.name}
                        </dt>{' '}
                        <dd className="inline">{point.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </>
          ) : (
            <>
              <div id="text block" className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-600">
                    {header.title}
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {header.subtitle}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {header.description}
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {keyPoints.map((point) => (
                      <div key={point.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <point.icon
                            className="absolute top-1 left-1 h-5 w-5 text-green-600"
                            aria-hidden="true"
                          />
                          {point.name}
                        </dt>{' '}
                        <dd className="inline">{point.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                src={imgSrc}
                alt="Product screenshot"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full sm:h-full md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

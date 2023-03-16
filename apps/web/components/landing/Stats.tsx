/** @Data -- load from CMS eventually */

const stats = [
  { id: 1, name: 'Trips planned', value: '8,000 +' },
  { id: 2, name: 'Outdoor activities enjoyed', value: '7000 +' },
  { id: 3, name: 'Adventurers like you', value: '1 +' },
  { id: 4, name: 'Donated to national parks', value: '$0' },
];

type LandingStatsSectionProps = {
  //
};

export const LandingStatsSection: React.FC<LandingStatsSectionProps> = () => {
  /** @Render */
  return (
    <div id="LandingStats" className="bg-white py-24 sm:py-32">
      <div className="flex align-center justify-center pb-16">Stats</div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by outdoor adventurers across the nation
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

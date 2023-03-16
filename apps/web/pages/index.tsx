import { GetServerSideProps } from 'next';
import {
  LandingHeroSection,
  LandingFeatureSection,
  LandingStatsSection,
  LandingPricingSection,
  LandingCTASection,
  LandingFooterSection,
} from '../components/landing/landingBarrel';

type LandingPageProps = {
  //
};

const LandingPage: React.FC<LandingPageProps> = () => {
  /** @Render */
  return (
    <>
      <LandingHeroSection />
      <div id="LandingFeatures">
        <h2 className="text-base flex align-center justify-center font-semibold leading-7 text-gray-900">
          Features
        </h2>
        {featureConfig.map((feature) => {
          return (
            <LandingFeatureSection
              key={feature.header.title}
              arrangement={feature.arrangement as 'left' | 'right'}
              imgSrc={feature.imgSrc}
              header={feature.header}
              keyPoints={feature.keyPoints}
            />
          );
        })}
      </div>
      <LandingStatsSection />
      <LandingPricingSection />
      <LandingCTASection />
      <LandingFooterSection />
    </>
  );
};

export default LandingPage;

import {
  CalendarIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  SunIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  LightBulbIcon,
  InformationCircleIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';

/** @Config - pull from CMS eventually */

const featureConfig = [
  {
    arrangement: 'right',
    imgSrc: '/logos/blackNoBG.svg',
    header: {
      title: 'Plan Your National Park Trip',
      subtitle: 'Get the most out of your outdoor adventure',
      description:
        'With our app, planning your national park trip has never been easier. You can make detailed itineraries and packing lists so that you are ready to enjoy the great outdoors as soon as you arrive.',
    },
    keyPoints: [
      {
        name: 'Customizable Itineraries',
        description:
          'Create a personalized itinerary with activities, lodging, and food options based on your interests and preferences. Get the most out of your trip with a plan that fits your schedule.',
        icon: CalendarIcon,
      },
      {
        name: 'Packing Lists',
        description:
          'Never forget anything on your next outdoor adventure with our customizable packing list feature. Get personalized recommendations for clothing and gear based on the time of year and location.',
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: 'Expert Recommendations',
        description:
          'Get insider tips and expert recommendations on the best trails, campsites, and activities in each national park. Make the most out of your trip with recommendations from those who know it best.',
        icon: SparklesIcon,
      },
    ],
  },
  {
    arrangement: 'left',
    imgSrc: '/logos/colorBG.svg',
    header: {
      title: 'Stay Informed and Prepared',
      subtitle: 'Get alerts and updates on the go',
      description:
        "Our app's advanced notification system keeps you informed about important details such as weather changes, trail conditions, and reminders about your upcoming trip. With email, SMS, and in-app notifications, you can stay up-to-date and prepared for anything.",
    },
    keyPoints: [
      {
        name: 'Weather Alerts',
        description:
          'Get real-time weather updates and alerts for the national park you are visiting. Be prepared for any changes in weather with advanced notice right to your phone.',
        icon: SunIcon,
      },
      {
        name: 'Trail Conditions',
        description:
          'Receive updates on trail closures, hazards, and conditions in real-time, so you can plan your trip accordingly and stay safe on the trails.',
        icon: ExclamationTriangleIcon,
      },
      {
        name: 'Reminder Notifications',
        description:
          'Get reminders about your upcoming trip, including booking confirmations, departure times, and more. Never miss a detail with our comprehensive notification system.',
        icon: ClockIcon,
      },
    ],
  },
  {
    arrangement: 'right',
    imgSrc: '/logos/colorNoBg.svg',
    header: {
      title: 'Advanced Chatbot',
      subtitle: 'Your own Park Ranger in your pocket',
      description:
        'Get personalized recommendations and insider tips from our advanced chatbot, designed to help you plan your perfect outdoor adventure.',
    },
    keyPoints: [
      {
        name: 'Intelligent Conversations',
        description:
          'Our chatbot uses advanced AI to understand your preferences and make personalized recommendations for your outdoor adventure.',
        icon: ChatBubbleBottomCenterIcon,
      },
      {
        name: '24/7 Support',
        description:
          'Our chatbot is available 24/7 to answer your questions and help you plan your trip, no matter where you are in the world.',
        icon: InformationCircleIcon,
      },
      {
        name: 'Expert Recommendations',
        description:
          'Our chatbot has been trained by outdoor experts to provide you with the most accurate and up-to-date information about national parks and outdoor activities.',
        icon: LightBulbIcon,
      },
    ],
  },
];

export const getServerSideProps: GetServerSideProps<any> = async () => {
  return {
    props: {},
  };
};

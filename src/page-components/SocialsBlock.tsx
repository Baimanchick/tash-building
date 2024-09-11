import React from 'react';

import { SocialCard } from '@/components/SocialCard';
import Socials from '@/components/Socials';
import Transition from '@/components/Transition';
import link2 from '@/public/assets/images/contact.png';
import link from '@/public/assets/images/link.png';

const SocialsBlock = () => {
  return (
    <Transition duration={1.4}>
      <div className="m-auto mb-[100px] max-w-[1360px]">
        <h3 className="m-auto mb-[30px] max-w-[720px] px-3 text-center text-[44px] leading-[34px] text-black md:px-0 md:text-[64px] md:leading-[60px]">
          Смотрите нас в{' '}
          <span className="text-primary-gray">социальных сетях</span>
        </h3>
        <Socials />
        <div className="flex flex-col items-center gap-1 px-3 md:flex-row">
          <SocialCard
            link="https://youtu.be/bT-r-sDDhLQ?si=xXk8CyOtfxeucADy"
            image={link}
            text="Почему ЛСТК в 2024 году это технология будущего"
          />
          <SocialCard
            link="https://youtu.be/zYTE87rKn5Q?si=JMs62NZvHGUsE6fM"
            image={link2}
            text="Современный дом в Кыргызстане За 4 месяца от проекта до реальности с ЛСТК и пенобетоном"
          />
        </div>
      </div>
    </Transition>
  );
};

// @ts-ignore
export { SocialsBlock };

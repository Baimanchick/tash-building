import React from 'react';

import Transition from '@/components/Transition';

const TextBlock = ({ text }: { text: string }) => {
  return (
    <Transition>
      <section className="my-[60px] md:my-[70px]">
        <div className="text-center text-[20px] leading-[21px] text-black md:px-[120px] md:py-[100px] md:text-[64px] md:leading-[60px]">
          <h3 className="m-auto max-w-[1200px]">{text}</h3>
        </div>
      </section>
    </Transition>
  );
};

export { TextBlock };

import React from 'react';

import Instagram from '@/public/assets/svgs/instagram.svg';
import YouTube from '@/public/assets/svgs/youtube.svg';


const Socials = ({item} : any) => {
  if (!item) {
    return null
  }
  return (
    <div className="flex items-center justify-center">
      <div
        className="mb-[30px] flex h-[64px] w-[250px] items-center justify-center gap-[16px] rounded-[9px] bg-white px-[30px] py-[20px]"
        style={{
          boxShadow:
            '3px 10px 23px 0px #70707005, 12px 39px 41px 0px #70707005, 27px 89px 56px 0px #70707003, 48px 157px 66px 0px #70707000, 75px 246px 72px 0px #70707000',
        }}
      >
        <span>Мы есть в:</span>
        <ul className="flex items-center gap-2">
          <li>
            <a
              href={item.link_inst}
              aria-label="Instagram"
              target="_blank"
              rel="noopener"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href={item.link_youtube}
              aria-label="YouTube"
              target="_blank"
              rel="noopener"
            >
              <YouTube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;

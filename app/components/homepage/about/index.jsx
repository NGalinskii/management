// @flow strict

import { personalData } from '@/utils/data/personal-data';

import Image from 'next/image';

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          О нас
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            КТО МЫ?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            Мы - команда креативных профессионалов, объединенных общей страстью
            к маркетингу в социальных сетях. Наше агентство специализируется на
            разработке и реализации стратегий, которые помогают брендам
            создавать прочные связи с их аудиторией, увеличивать узнаваемость и
            стимулировать продажи.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src="/image/team.png"
            width={400}
            height={280}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

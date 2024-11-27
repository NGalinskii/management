// @flow strict

import { skillsData } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

function Skills() {
  const skills = [
    'https://cdn.sanity.io/images/p2zxqf70/production/95b8399c3e6c5a2918eb02efdd20b694870ec7ef-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/aff2b4833593c0f2a508eea995059f39a1aa65ba-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/a90d30d5351da2d1facf4b9154dc3d9747b59cc3-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/eda3ca4062383da57a8cc92efbab0916036df4f7-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/6ebcd3aa51b1d752bcdcc9c3237c7540a7484c84-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/a02c54fd987fe22cdef7ca8b210c7ee8f8abe2ab-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/37af8a1c9748a6a6258a4dc34839e66614e7cce3-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/aa548a1d39580bf6240c78db15a767142ce76f65-78x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/cccfabb4b83e35299d5c1ebaa4b3549a7ecbfe60-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/e58db11990af301ae62fa7c3d0c5cb78f254a49b-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/4a6a12910372b8326709c153f7a1954fbc948525-226x32.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/95b8399c3e6c5a2918eb02efdd20b694870ec7ef-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/aff2b4833593c0f2a508eea995059f39a1aa65ba-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/a90d30d5351da2d1facf4b9154dc3d9747b59cc3-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/eda3ca4062383da57a8cc92efbab0916036df4f7-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/6ebcd3aa51b1d752bcdcc9c3237c7540a7484c84-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/a02c54fd987fe22cdef7ca8b210c7ee8f8abe2ab-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/37af8a1c9748a6a6258a4dc34839e66614e7cce3-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/aa548a1d39580bf6240c78db15a767142ce76f65-78x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/cccfabb4b83e35299d5c1ebaa4b3549a7ecbfe60-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/e58db11990af301ae62fa7c3d0c5cb78f254a49b-168x64.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/4a6a12910372b8326709c153f7a1954fbc948525-226x32.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/2b2166f26f1631e3d9259df47ba76fcac76b1391-880x141.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/6400293e64722f1eca2563ede031d8dfdabcde74-120x60.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/19a631a058fab0f068d17fd54248322eacfc8cfd-1184x245.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/1c8c8f0e5c6f4322b664698732e4bea3a3f6c33a-320x60.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/184ffee933c1f9d14ac31ed60e1213f26a07279f-256x133.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/5a69c068d167f585ee20d7a8218a9bc4cd95177c-589x150.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/c632d8de9921b43dcde9c849e11e6d94f3e2ef0f-600x263.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/2b2166f26f1631e3d9259df47ba76fcac76b1391-880x141.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/6400293e64722f1eca2563ede031d8dfdabcde74-120x60.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/19a631a058fab0f068d17fd54248322eacfc8cfd-1184x245.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/1c8c8f0e5c6f4322b664698732e4bea3a3f6c33a-320x60.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/184ffee933c1f9d14ac31ed60e1213f26a07279f-256x133.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/5a69c068d167f585ee20d7a8218a9bc4cd95177c-589x150.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/c632d8de9921b43dcde9c849e11e6d94f3e2ef0f-600x263.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/a4ee56178998248691b2938af88f35d4772e5338-164x46.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/2865c4eb208201b4b9d2a4ec8aa875466617f2d9-134x27.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/67ac43a45f223c0f7461fab5da7fc360f45df583-84x74.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/981d09f62d220572eab12c0ee5a573f19aea5f1b-160x50.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/bb0cb9e9133d5bf73ba110e0064cafa0ba3bb0a7-121x44.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/292fd709c09302748202fa578860b1317b8c4a6c-141x42.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/a4ee56178998248691b2938af88f35d4772e5338-164x46.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/2865c4eb208201b4b9d2a4ec8aa875466617f2d9-134x27.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/67ac43a45f223c0f7461fab5da7fc360f45df583-84x74.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/981d09f62d220572eab12c0ee5a573f19aea5f1b-160x50.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/bb0cb9e9133d5bf73ba110e0064cafa0ba3bb0a7-121x44.svg',
    'https://cdn.sanity.io/images/p2zxqf70/production/292fd709c09302748202fa578860b1317b8c4a6c-141x42.svg',
  ];

  return (
    <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Переверните рекламную индустрию вместе с нами.
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skill}
                      alt="company"
                      width={60}
                      height={60}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;

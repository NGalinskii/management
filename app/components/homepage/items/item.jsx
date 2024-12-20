// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';

function Item({ blog }) {
  const hasLink = !!blog?.url;

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <Link
        href={blog?.url ?? ''}
        className={`${!hasLink && 'pointer-events-none'}`}
      >
        <div
          className={`h-44 lg:h-52 w-auto ${
            hasLink && 'cursor-pointer'
          } overflow-hidden rounded-t-lg`}
        >
          <Image
            src={blog?.cover_image}
            height={1080}
            width={1920}
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="p-2 sm:p-3 flex flex-col">
          <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p>Опубликовано: {blog.published_at}</p>
          </div>

          <p
            className={`my-2 lg:my-3 ${
              hasLink && 'cursor-pointer'
            } text-lg text-white sm:text-xl font-medium ${
              hasLink && 'hover:text-violet-500'
            }`}
          >
            {blog.title}
          </p>

          <p className="mb-2 text-sm text-[#16f2b3]">
            {`прочитать за ${blog.reading_time_minutes} минут`}
          </p>
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3 whitespace-pre-line	">
            {blog.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Item;

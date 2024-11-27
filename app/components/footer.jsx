// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <p className="text-sm">
              © Разработка сайта by{' '}
              <Link
                target="_blank"
                href="https://spb.ranepa.ru/raspisanie/bi-3-21-07-08-noyabr/"
                className="text-[#16f2b3]"
              >
                БИ-3-21-07 group
              </Link>
            </p>
            <div className="flex items-center gap-5">
              <Link
                target="_blank"
                href="https://spb.ranepa.ru/raspisanie/bi-3-21-07-08-noyabr/"
                className="text-[#16f2b3]"
              >
                Политика обработки данных
              </Link>
              <Link
                target="_blank"
                href="https://spb.ranepa.ru/raspisanie/bi-3-21-07-08-noyabr/"
                className="text-[#16f2b3]"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-3/4">
            <form className="flex flex-row gap-5 justify-center w-full">
              <div>
                Подписаться
                <br />
                на рассылку
              </div>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                maxLength="100"
                required={true}
              />
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

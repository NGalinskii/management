import AboutSection from './components/homepage/about';
import ContactSection from './components/homepage/contact';
import Experience from './components/homepage/experience';
import HeroSection from './components/homepage/hero-section';
import Skills from './components/homepage/skills';
import Items from './components/homepage/items';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Experience />
      <Items blogs={cases} title="Кейсы" id="cases" />
      <Items blogs={articles} title="Статьи" id="articles" />
      <ContactSection />
    </>
  );
}

const cases = [
  {
    title: 'Бренд здорового питания "GreenBite"',
    reading_time_minutes: '6',
    published_at: 'вчера',
    description:
      'Клиент: Новый бренд здорового питания "Greenbet".\n• Задача: Запустить полноценное присутствие в социальных сетях с нуля.',
    cover_image: '/management/image/case1.webp',
  },
  {
    title: 'Национальная сеть фитнес-клубов "FitNation"',
    published_at: 'сегодня',
    reading_time_minutes: '7',
    description:
      'Клиент: Национальная сеть фитнес-клубов "FitNation".\n• Задача: Увеличить участие существующих клиентов и привлечь новых через социальные сети.\n• Решение: Организация интерактивных челленджей и мастер-классов с известными спортсменами, использование инфлюенсеров для продвижения челленджей, создание вирусного контента.\n• Результат: Рост числа подписчиков на 200%, улучшение вовлеченности аудитории, увеличение числа новых регистраций в клубах.',
    cover_image: '/management/image/case2.webp',
  },
  {
    title: 'Международный бренд косметики "BeautyGlow"',
    published_at: 'сегодня',
    reading_time_minutes: '5',
    cover_image: '/management/image/case3.webp',
    description:
      'Клиент: Международный бренд косметики "BeautyGlow".\n• Задача: Управление кризисом после негативных отзывов о новом продукте.\n• Решение: Мониторинг социальных сетей и форумов, оперативное реагирование на отзывы, запуск кампании с объяснением состава продуктов и демонстрацией их безопасности, организация встреч с потребителями.\n• Результат: Восстановление доверия к бренду, улучшение общественного восприятия продукта.',
  },
];
export const articles = [
  {
    id: 1,
    published_at: 'сегодня',
    title: 'Зачем существуют SMM-агенство?',
    reading_time_minutes: '10',
    description:
      'Социальный медиамаркетинг (SMM) стал неотъемлемой частью маркетинговых стратегий компаний различного масштаба. В этой статье мы рассмотрим, почему ведение SMM так важно для бизнеса и какие преимущества оно может предоставить.',
    cover_image: '/management/image/article1.jpg',
    url: `/article/1`,
  },
  {
    id: 2,
    published_at: 'сегодня',
    title:
      'Инструменты для работы  саудиторией. Зачем бизнесу интернет комьюнити?',
    reading_time_minutes: '15',
    description:
      'В современном мире, где конкуренция среди брендов невероятно высока, ключевым фактором успеха становится создание и поддержка комьюнити в социальных сетях. ',
    cover_image: '/management/image/article2.jpg',
    url: `/article/2`,
  },
  {
    id: 3,
    published_at: 'сегодня',
    title: 'Как создать эффективную SMM-стратегию для бизнеса?',
    reading_time_minutes: '20',
    description:
      'В современном мире социальные сети стали неотъемлемой частью маркетинговой стратегии любого бизнеса. Независимо от размера компании и сферы деятельности, правильный подход к SMM может значительно повысить узнаваемость бренда, привлечь новых клиентов и увеличить продажи.',
    cover_image: '/management/image/article3.jpg',
    url: `/article/3`,
  },
];

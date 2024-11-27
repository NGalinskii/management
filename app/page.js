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
    cover_image: '/image/article1.jpg',
    url: `/management/article/1`,
  },
  {
    id: 2,
    published_at: 'сегодня',
    title:
      'Инструменты для работы  саудиторией. Зачем бизнесу интернет комьюнити?',
    reading_time_minutes: '15',
    description:
      'В современном мире, где конкуренция среди брендов невероятно высока, ключевым фактором успеха становится создание и поддержка комьюнити в социальных сетях. ',
    cover_image: '/image/article2.jpg',
    url: `/management/article/2`,
  },
  {
    id: 3,
    published_at: 'сегодня',
    title: 'Как создать эффективную SMM-стратегию для бизнеса?',
    reading_time_minutes: '20',
    description:
      'В современном мире социальные сети стали неотъемлемой частью маркетинговой стратегии любого бизнеса. Независимо от размера компании и сферы деятельности, правильный подход к SMM может значительно повысить узнаваемость бренда, привлечь новых клиентов и увеличить продажи.',
    cover_image: '/image/article3.jpg',
    url: `/management/article/3`,
  },
];

// {
//   type_of: 'article',
//   id: 1856033,
//   title: 'GitHub and EC2 manual deployment with Deploy keys',
//   description: 'For those looking to quickly deploy a project, whether it’s a prototype or a solo endeavor, manual...',
//   readable_publish_date: 'May 17',
//   slug: 'github-and-ec2-manual-deployment-with-deploy-keys-397d',
//   path: '/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d',
//   url: 'https://dev.to/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d',
//   collection_id: null,
//   published_timestamp: '2024-05-17T05:39:03Z',
//   cover_image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmv441cy8r4os5mhsufl9.jpeg',
//   social_image: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmv441cy8r4os5mhsufl9.jpeg',
//   canonical_url: 'https://dev.to/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d',
//   created_at: '2024-05-17T05:39:04Z',
//   edited_at: '2024-05-17T05:48:57Z',
//   crossposted_at: null,
//   published_at: '2024-05-17T05:39:03Z',
//   last_comment_at: '2024-10-31T18:15:51Z',
//   reading_time_minutes: 2,
//   tag_list: [ 'aws', 'ec2', 'github', 'deployment' ],
//   tags: 'aws, ec2, github, deployment',
//   user: {
//     name: 'ABU SAID',
//     username: 'said7388',
//     twitter_username: null,
//     github_username: 'said7388',
//     user_id: 770279,
//     website_url: 'https://abusaid.me',
//     profile_image: 'https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fcfbe8b1a-22d8-4826-937c-3736ef6f2005.png',
//     profile_image_90: 'https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fcfbe8b1a-22d8-4826-937c-3736ef6f2005.png'
//   }
// }

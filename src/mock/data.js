import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'あいうえお',
  name: '',
  subtitle: 'やりたいことを本気で遊ぶ',
  cta: 'どんな会社？',
};

// ABOUT DATA
export const aboutData = {
  img: 'hayukataishi.jpg',
  paragraphOne: 'SUPER ULTRA THUNDER代表取締役の\n羽床 大志（はゆか たいし）です！',
  paragraphTwo:
    'この会社で実現したいことはただ一つ、\n「やりたいことを本気で遊ぶ」ということ。\n"プライベート"でも"仕事"でも遊びたいという\nわがままな思いを叶えるべくこの会社を設立いたしました。',
  paragraphThree: '皆さまとも一緒に遊べるときを心から楽しみにしております！',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'INDIE INDIE（インディーインディー）',
    info: 'アーティストとファンで創る新しいコミュニティサービス"INDIE INDIE"',
    info2:
      '投げっぱなしで終わらない、リアルな反応や双方向のコミュニケーションを楽しめるこの空間はあなたたちだけのもの。',
    info3: '素敵な仲間がアートを彩る。',
    url: 'https://www.youtube.com/watch?v=0ADXo2R0aSo',
    repo: 'https://www.youtube.com/channel/UC6L539koTfc2IaqdFhkaAaQ/featured', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'お問い合わせはこちらから',
  btn: 'メール',
  email: 'hayukataishi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

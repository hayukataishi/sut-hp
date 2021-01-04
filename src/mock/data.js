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
    'この会社で実行したい大きなテーマは\n「やりたいことを本気で遊ぶ」ということです。\n"プライベート"でも"仕事"でも遊びたい\nそしてそのワクワクした気持ちを誰かのために役立てたい\nそんな思いを叶えるべくこの会社を設立いたしました。',
  paragraphThree:
    'それが実現することができれば、\n世界中にこんなに楽しい働き方があるんだ！と伝えることができます。\n「仕事は楽しい」を世界中に広めること。それが僕の夢です。',
  paragraphFour:
    '会社名に深い意味はありません（笑）\nなんか必殺技みたいでカッコいいですよね！（笑）\n突拍子もない名前をつけちゃうような子供心、遊び心を忘れずに！',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'indieindie.png',
    title: '【開発中】INDIE INDIE（インディーインディー）',
    info: 'アーティストとファンで創る新しいコミュニティサービス"INDIE INDIE"',
    info2:
      '投げっぱなしで終わらない、リアルな反応や双方向のコミュニケーションを楽しめるこの空間はあなたたちだけのもの。',
    info3: '素敵な仲間がアートを彩る。\nComming Soon.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'SUZURI.jpg',
    title: '公式アイテム販売',
    info: 'SUPER ULTRA THUNDERをロゴに使った様々なグッズを「SUZURI」にて販売中！',
    info2:
      'かっこいいデザインのものから、少し変わったなデザインのものまで数々のラインナップを揃えておリます！',
    info3: '会社関係なく、どれもイカしたデザインなので是非身につけてみてください！',
    url: 'https://suzuri.jp/hayukataishi',
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
];

// CONTACT DATA
export const contactData = {
  cta: 'お問い合わせはこちらから',
  btn: 'メール',
  email: 'info@super-ultra-thunder.jp',
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

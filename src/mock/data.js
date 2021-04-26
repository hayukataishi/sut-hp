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
    info:
      'アーティストとファンで創る新しいコミュニティサービス"INDIE INDIE"\n代表の羽床自身もバンド活動を通して感じた思いから「売れていないアーティストとそのファン」に向けてのサービスを作りました。',
    info2:
      '音楽に限らず、個人で頑張っている広義のアーティストが対象となるサービスになります。（音楽、芸術、クリエイター、YouTuber etc...）',
    info3:
      '今までのアーティストとファンの関係とは違い\nお互いの気持ちが投げっぱなしで終わらない\nリアルな反応や双方向のコミュニケーションを\n信頼できる仲間と楽しめるこの空間はあなたたちだけのもの。',
    url: '',
    youtube: '',
    ios: '',
    android: '',
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
    youtube: '',
    ios: '',
    android: '',
  },
  {
    id: nanoid(),
    img: 'kyouyaru.png',
    title: 'きょうやる！',
    info: '今日やることだけに絞ったタスク管理アプリ「きょうやる！」',
    info2: '今までうまくタスク達成ができていなかったあなたへ。今日やることだけに絞ってみませんか？',
    info3:
      '現在、AppStoreにて配信中！\n是非ダウンロードして使ってみてください！レビューもお待ちしています！',
    url: '',
    youtube: 'https://www.youtube.com/embed/-H7pMqfaYkc',
    ios:
      'https://apps.apple.com/jp/app/%E3%81%8D%E3%82%87%E3%81%86%E3%82%84%E3%82%8B/id1548250082?itsct=apps_box&itscg=30200',
    android: '',
  },
];

// COLLABORATE DATA
export const collaborateData = [
  {
    id: nanoid(),
    img: 'nostalgic.png',
    title: 'nostalgic new world',
    info: '愛知県名古屋市「鶴舞駅」の近くにお店を構える家具屋 "nostalgic new world"',
    info2:
      '「アップサイクル」というリサイクルやリメイクなどの視点とは異なり、単なる素材の 原料化・その他再利用ではなく、元の製品よりも次元、価値の高いものを生み出すことをコンセプトに置いた商品が特徴。',
    info3:
      'SUPER ULTRA THUNDERではHPやECサイトの製作・営業のサポート（SNS活用・SNS広告など）でお手伝いしております。',
    url: 'https://www.nostalgicnewworld.jp/',
    youtube: 'https://www.youtube.com/embed/uTfhF14Utpk',
  },
  {
    id: nanoid(),
    img: 'monyan.png',
    title: 'moニャンfurniture',
    info:
      'moニャンfurnitureは猫の家具やインテリアにモダンスタイルを取り入れたお洒落でキュートな猫ちゃん専用のハイブランド家具屋さんです。',
    info2:
      'デザインは人用の家具・インテリアブランドを手掛けている専属デザイナーによるシンプルでスタイリッシュなモダンデザインを基調としています。\nまた商品の一つ一つは全て職人のハンドメイドで作られており温かみと繊細な技術がmoニャンfurnitureのこだわりと強みになります。',
    info3:
      'SUPER ULTRA THUNDERではHPやECサイトの製作・営業のサポート（SNS活用・SNS広告など）でお手伝いしております。',
    url: 'https://monyanfurnit.thebase.in',
    youtube: '',
  },
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

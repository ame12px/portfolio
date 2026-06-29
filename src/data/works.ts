export type TechGroup = {
  title: string;
  items: string[];
};

export type ChallengeEntry = {
  problem: string;
  solution: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  aspectRatio?: string;
};

export type Work = {
  slug: string;
  entryNumber: string;
  name: string;
  platform: string;
  description: string;
  techStack: string[];
  previewVariant: "browser" | "phone";
  aspectRatio?: string;
  screenshotSrc: string;
  links: {
    viewApp: string;
    github: string;
  };
  demoAccount?: {
    id: string;
    password: string;
  };
  techGroups?: TechGroup[];
  highlights?: string[];
  challenges?: ChallengeEntry[];
  gallery?: GalleryImage[];
};

export const works: Work[] = [
  {
    slug: "misocho",
    entryNumber: "01",
    name: "misocho",
    platform: "web app",
    description:
      "作家が使う「味噌帳」をヒントにしたアイディアメモアプリ。タイトルと内容を記録して、ふと浮かんだ着想を寝かせておける場所。",
    techStack: ["React", "TypeScript", "Hono", "Prisma"],
    previewVariant: "browser",
    aspectRatio: "800 / 700",
    screenshotSrc: "/works/misocho.png",
    links: {
      viewApp: "https://misocho-hdsz.vercel.app/",
      github: "https://github.com/ame12px/misocho",
    },
    demoAccount: {
      id: "test@example.com",
      password: "testpass123",
    },
    techGroups: [
      {
        title: "フロントエンド",
        items: ["React", "TypeScript", "Vite", "CSS"],
      },
      {
        title: "バックエンド",
        items: ["Hono", "Prisma", "SQLite", "JWT", "bcrypt.js"],
      },
      { title: "テスト", items: ["Vitest"] },
      { title: "インフラ", items: ["Vercel", "Railway"] },
    ],
    highlights: [
      "状態管理をuseReducer + useContextに一元化し、機能が増えても管理しやすい構造にした。",
      "カスタムフック(useMemos, useAuth)でロジックを分離し、画面の見た目とデータ操作を分けて管理できるようにした。",
      "色やサイズをCSS変数(デザイントークン)として管理し、ダークモード切り替えを変数の上書きだけで実現した。",
      "JWT認証を用いたミドルウェアで、ログインしていないユーザーがデータにアクセスできないように保護した。",
    ],
    challenges: [
      {
        problem:
          "Prisma 7の仕様変更やRailwayのVolumeマウント、CORSなど、知らなければ気づけない種類のエラーに何度も遭遇した。",
        solution:
          "エラーメッセージを一つひとつ調べ、原因を切り分けていく地道な作業を繰り返して解決した。",
      },
      {
        problem:
          "「メモを削除すると1回目は復活する」「家族のメモが全部見える」といった現象が起きた。",
        solution:
          "実際に自分で使ってみることでIDのズレやユーザー紐付け忘れが原因だと分かり、一つずつ確認しながら修正した。",
      },
    ],
    gallery: [
      {
        src: "/works/misocho-dark.png",
        alt: "misochoのダークモード・タグ絞り込み画面",
        aspectRatio: "800 / 700",
      },
    ],
  },
  {
    slug: "kusuripo",
    entryNumber: "02",
    name: "くすりぽ",
    platform: "web app / mobile UI",
    description:
      "服薬記録アプリ。いつ・何を・なぜ飲んだかを残せる、スマホでの使用を想定した爽やかな配色のUI。",
    techStack: ["React", "Vite", "React Router", "Figma"],
    previewVariant: "phone",
    screenshotSrc: "/works/kusuripo.png",
    links: {
      viewApp: "https://kusuripo.vercel.app/",
      github: "https://github.com/ame12px/kusuripo",
    },
    techGroups: [
      {
        title: "フロントエンド",
        items: ["React", "Vite", "React Router", "CSS", "localStorage"],
      },
      { title: "ツール・運用", items: ["Git / GitHub", "Vercel", "Figma"] },
    ],
    highlights: [
      "Appにデータ管理を集約し、各画面は受け取った情報を表示するだけの構造にした。",
      "新規登録と編集を同じフォームで扱い、内部フラグで処理を分岐させることで画面を増やさず実装した。",
      "色指定をCSS変数に一元化し、ライト/ダークモードの切り替えを実現した。",
      "空欄登録を防ぐバリデーション処理を実装した。",
    ],
    challenges: [
      {
        problem:
          "起動直後にlocalStorageの保存データが、空データで上書きされて消えてしまった。",
        solution: "データが空でないときのみ保存する条件を追加して解決した。",
      },
      {
        problem: "React Router導入後、URLを直接開くと404エラーになった。",
        solution:
          "Vercelにリライト設定を追加し、全URLでindex.htmlを返すようにして解決した。",
      },
      {
        problem: "iOS実機で日付入力欄が画面からはみ出す表示崩れが発生した。",
        solution:
          "iOS Safari特有のデフォルトスタイルを打ち消すCSSを追加して解決した。",
      },
      {
        problem:
          "データ形式変更時に、一部のコードで古いプロパティ名が残り機能が動かなくなった。",
        solution: "該当箇所を洗い出し、新しいプロパティ名に統一して解決した。",
      },
    ],
    gallery: [
      {
        src: "/works/kusuripo-register.png",
        alt: "くすりぽの登録画面",
        aspectRatio: "375 / 667",
      },
      {
        src: "/works/kusuripo-dark.png",
        alt: "くすりぽのダークモード画面",
        aspectRatio: "375 / 667",
      },
    ],
  },
];

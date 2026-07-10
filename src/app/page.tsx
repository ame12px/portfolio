import SkillRing from "@/components/SkillRing";
import WorkPreview from "@/components/WorkPreview";
import Tag from "@/components/Tag";
import Link from "next/link";
import { works } from "@/data/works";

type CareerEntry = {
  period: string;
  role: string;
  org: string;
  description: string;
};

const career: CareerEntry[] = [
  {
    period: "2015 - 2016",
    role: "Webデザイナー / コーダー",
    org: "宝飾品・ジュエリーECサイト",
    description:
      "宝飾品・ジュエリーメーカーのECサイト更新を担当。イベントLPのデザイン・コーディング、メルマガ・商品画像の制作などを行う。",
  },
  {
    period: "2017 - 2021",
    role: "Webデザイナー / コーダー",
    org: "百貨店ECサイト(出向)",
    description:
      "百貨店ECサイトのデザイン・コーディングを担当。お中元・おせち・バレンタイン・母の日などの特設ページを数多く制作。常設ギフトページの改修では要件定義からクライアントと相談しながら進行。",
  },
  {
    period: "2022 - 2025",
    role: "UIデザイナー(一部進行管理)",
    org: "ふるさと納税サイト(出向)",
    description:
      "ふるさと納税サイトのUIデザインを担当。キャンペーンページの要件定義からワイヤー作成・デザイン制作を担当し、リリースまでのスケジュール管理を含む進行管理も兼務。デザインガイドラインの整備やガイドページ・機能改修にも携わる。",
  },
  {
    period: "2026 -",
    role: "個人開発",
    org: "misocho / くすりぽ",
    description:
      "React・TypeScriptを用いてmisocho・くすりぽを開発。これまでの実装経験を、今のWeb技術であらためて深めている。",
  },
];

const certifications = [
  "色彩検定1級",
  "色彩検定UC級",
  "HTML5プロフェッショナル検定",
  "Webデザイナー検定2級",
  "統計検定3級",
  "UX検定",
  "Webアナリスト検定",
  "繊維製品品質管理士",
  "奈良検定2級",
];

export default function Home() {
  return (
    <main className="flex flex-col bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 md:px-16">
          <a href="#" className="font-display text-sm font-bold">
            雨
          </a>
          <nav className="flex gap-6 font-mono text-xs text-ink-muted">
            <a href="#projects" className="hover:text-ink">
              Works
            </a>
            <a href="#about" className="hover:text-ink">
              About
            </a>
            <a href="#contact" className="hover:text-ink">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="flex flex-col gap-6 px-6 py-24 md:px-16">
        <p className="flex items-center gap-2 text-sm text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-stamp" />
          個人開発ログ — developer&apos;s record
        </p>
        <h1 className="font-display text-4xl font-bold leading-snug md:text-5xl">
          日々の記録を、
          <br />
          かたちにする。
        </h1>
        <p className="font-display text-lg font-medium text-ink-muted">
          デザインの視点を大切に、使いやすさを考えながら実装しています。
        </p>
        <p className="max-w-md text-ink-muted">
          Webデザイナー・コーダーとして、Webサイトの設計から実装まで携わってきました。現在はReactやNext.jsを用いたフロントエンド開発に取り組んでいます。デザインの視点を大切にしながら、ユーザーにとってわかりやすいUIを心がけて実装しています。写真や手芸など、ものづくりが好きです。
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-ink-muted">Built with</span>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Next.js</Tag>
          <Tag>Tailwind CSS</Tag>
        </div>
      </section>

      <section id="projects" className="border-t border-line">
        <div className="px-6 py-20 md:px-16">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-mono text-xs text-stamp">
              entries — {works.length}
            </span>
            <h2 className="font-display text-2xl font-bold">projects</h2>
            <div className="h-px flex-1 bg-line" />
          </div>

          {works.map((work, index) => (
            <div
              key={work.slug}
              className={`flex flex-col items-center gap-10 border-b border-line py-10 last:border-b-0 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <WorkPreview
                variant={work.previewVariant}
                src={work.screenshotSrc}
                alt={`${work.name}のスクリーンショット`}
                aspectRatio={work.aspectRatio}
              />
              <div className="flex-1">
                <p className="mb-2 font-mono text-xs text-ink-muted">
                  <span className="text-stamp">entry {work.entryNumber}</span> ·{" "}
                  {work.platform}
                </p>
                <h3 className="mb-2 font-display text-xl font-bold">
                  {work.name}
                </h3>
                <p className="mb-4 max-w-md text-ink-muted">
                  {work.description}
                </p>
                <div className="mb-5 flex gap-2">
                  {work.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/works/${work.slug}`}
                    className="rounded-lg border border-ink bg-ink px-4 py-2 text-sm text-paper"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-line">
        <div className="px-6 py-20 md:px-16">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-mono text-xs text-stamp">page — 03</span>
            <h2 className="font-display text-2xl font-bold">about / skills</h2>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <SkillRing label="JavaScript" initials="Js" percent={50} />
            <SkillRing label="React" initials="Re" percent={45} />
            <SkillRing label="TypeScript" initials="Ts" percent={30} />
            <SkillRing label="Next.js" initials="Nx" percent={30} />
            <SkillRing label="HTML5" initials="H5" percent={80} />
            <SkillRing label="CSS" initials="Cs" percent={80} />
            <SkillRing label="Figma" initials="Fg" percent={70} />
            <SkillRing label="生成AI" initials="AI" percent={65} />
          </div>

          <p className="mb-3 mt-16 font-mono text-xs text-stamp">career</p>
          <div className="flex flex-col">
            {career.map((item) => (
              <div
                key={item.period}
                className="flex flex-col gap-1 border-b border-line py-5 last:border-b-0 sm:flex-row sm:gap-8"
              >
                <p className="w-32 flex-none font-mono text-xs text-ink-muted">
                  {item.period}
                </p>
                <div>
                  <p className="text-sm font-bold">
                    {item.role}{" "}
                    <span className="font-normal text-ink-muted">
                      — {item.org}
                    </span>
                  </p>
                  <p className="mt-1 max-w-md text-sm text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-3 mt-12 font-mono text-xs text-stamp">
            certifications
          </p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <Tag key={cert}>{cert}</Tag>
            ))}
          </div>
        </div>
      </section>
      <footer id="contact" className="border-t border-line">
        <div className="flex flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-16">
          <p className="font-mono text-xs text-ink-muted">© 2026 雨</p>
          <div className="flex flex-wrap gap-4 font-mono text-xs text-ink-muted">
            <a href="mailto:uioua.com@gmail.com" className="hover:text-ink">
              Email
            </a>
            <a
              href="https://note.com/ame12px"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              note
            </a>
            <a
              href="https://github.com/ame12px"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { notFound } from "next/navigation";
import WorkPreview from "@/components/WorkPreview";
import { works } from "@/data/works";
import Tag from "@/components/Tag";
import Image from "next/image";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-paper text-ink">
      <div className="px-6 py-20 md:px-16">
        <p className="mb-2 font-mono text-xs text-ink-muted">
          <span className="text-stamp">entry {work.entryNumber}</span> ·{" "}
          {work.platform}
        </p>
        <h1 className="mb-6 font-display text-3xl font-bold">{work.name}</h1>

        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <WorkPreview
            variant={work.previewVariant}
            src={work.screenshotSrc}
            alt={`${work.name}のスクリーンショット`}
            aspectRatio={work.aspectRatio}
          />
          <div className="flex-1">
            <p className="mb-5 max-w-md text-ink-muted">{work.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={work.links.viewApp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-ink bg-ink px-4 py-2 text-sm text-paper"
              >
                View app
              </a>
              <a
                href={work.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-ink px-4 py-2 text-sm text-ink"
              >
                GitHub
              </a>
            </div>

            {work.demoAccount && (
              <div className="mt-8 rounded-lg border border-line bg-paper-alt p-4">
                <p className="mb-2 font-mono text-xs text-stamp">試してみる</p>
                <p className="mb-2 text-sm text-ink-muted">
                  ログイン機能があるアプリのため、お試し用アカウントを用意しています。
                </p>
                <p className="font-mono text-sm">
                  ID: {work.demoAccount.id} / PW: {work.demoAccount.password}
                </p>
                <p className="mt-2 text-xs text-ink-muted">
                  ※どなたでも編集・削除ができる状態のため、内容は予告なく変わることがあります。
                </p>
              </div>
            )}

            {work.techGroups && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs text-stamp">使用技術</p>
                <div className="flex flex-col gap-4">
                  {work.techGroups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-2 text-sm font-bold">{group.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.highlights && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs text-stamp">工夫した点</p>
                <ul className="flex flex-col gap-2">
                  {work.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-muted">
                      <span className="text-stamp">―</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {work.challenges && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs text-stamp">
                  つまずいた点と解決方法
                </p>
                <div className="flex flex-col gap-4">
                  {work.challenges.map((c, i) => (
                    <div key={i} className="border-l-2 border-line pl-4">
                      <p className="text-sm">{c.problem}</p>
                      <p className="mt-1 text-sm text-ink-muted">
                        → {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.gallery && work.gallery.length > 0 && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs text-stamp">
                  スクリーンショット
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {work.gallery.map((img) => (
                    <div
                      key={img.src}
                      className="relative overflow-hidden rounded-lg border border-line"
                      style={{ aspectRatio: img.aspectRatio ?? "4 / 3" }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

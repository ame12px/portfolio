import type { Metadata } from "next";
import {
  Zen_Maru_Gothic,
  Noto_Sans_JP,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "雨 | Portfolio",
  description: "個人開発のログ — misocho, くすりぽ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenMaruGothic.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}

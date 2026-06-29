import Image from "next/image";

type WorkPreviewProps = {
  variant: "browser" | "phone";
  src: string;
  alt: string;
  aspectRatio?: string;
};

export default function WorkPreview({
  variant,
  src,
  alt,
  aspectRatio,
}: WorkPreviewProps) {
  const isPhone = variant === "phone";
  const ratio = aspectRatio ?? (isPhone ? "9 / 16" : "3 / 4");

  return (
    <div
      className={`w-full flex-none overflow-hidden border border-line ${
        isPhone ? "rounded-[28px] md:w-[220px]" : "rounded-lg md:w-[280px]"
      }`}
    >
      <div
        className={
          isPhone
            ? "flex justify-center bg-paper-alt py-2"
            : "flex items-center gap-1.5 border-b border-line bg-paper-alt px-3 py-2"
        }
      >
        {isPhone ? (
          <span className="h-1 w-8 rounded-full bg-line" />
        ) : (
          <>
            <span className="h-2 w-2 rounded-full bg-stamp/40" />
            <span className="h-2 w-2 rounded-full bg-stamp/25" />
            <span className="h-2 w-2 rounded-full bg-stamp/15" />
          </>
        )}
      </div>
      <div className="relative" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            isPhone
              ? "(min-width: 768px) 220px, 100vw"
              : "(min-width: 768px) 280px, 100vw"
          }
          className="object-contain"
        />
      </div>
    </div>
  );
}

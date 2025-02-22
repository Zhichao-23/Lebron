import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imgSrc: StaticImageData;
  altText: string;
  title: string;
}

export default function Hero({ imgSrc, altText, title }: HeroProps) {
  return (
    <div className="h-screen relative">
      <div>
        <Image src={imgSrc} fill style={{objectFit: 'cover'}} alt={altText} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900">
          <h2 className="mt-48 text-center text-white text-5xl font-extrabold">{title}</h2>
        </div>
      </div>
    </div>
  );
}

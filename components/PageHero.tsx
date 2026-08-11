import Image from "next/image";

export default function PageHero({ eyebrow, title, text, image = "/images/lawn-wide.png" }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className="relative overflow-hidden bg-[#111411] pb-20 pt-40 text-white sm:pb-24"><Image src={image} alt="Maintained Lake Cities lawn" fill priority sizes="100vw" className="object-cover opacity-35" /><div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" /><div className="container relative"><p className="eyebrow text-[#82e64d]">{eyebrow}</p><h1 className="display mt-4 max-w-4xl text-5xl leading-none sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{text}</p></div></section>;
}

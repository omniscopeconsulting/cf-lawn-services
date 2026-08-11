import Link from "next/link";

export default function NotFound() {
  return <main className="flex min-h-[75vh] items-center bg-[#111411] pt-20 text-white"><div className="container py-24 text-center"><p className="eyebrow">404</p><h1 className="display mt-4 text-5xl sm:text-7xl">This page needs a trim.</h1><p className="mx-auto mt-5 max-w-xl text-lg text-white/65">The page you requested could not be found. Head home or contact CF Lawn Services for a quote.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="btn btn-green">Back to Home</Link><Link href="/contact#quote" className="btn btn-outline">Get a Quote</Link></div></div></main>;
}

import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import QuoteBanner from "@/components/QuoteBanner";
export const metadata: Metadata = { title: "Recent Lawn Care Work | CF Lawn Services", description: "See recent lawn care and landscaping work from CF Lawn Services in the Lake Cities area." };
export default function GalleryPage(){return <main><PageHero eyebrow="Our work" title="Recent Work" text="See what CF Lawn Services can do for your property." image="/images/lake-sunset.png"/><section className="section"><div className="container"><Gallery/></div></section><QuoteBanner/></main>}

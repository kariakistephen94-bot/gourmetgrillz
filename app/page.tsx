import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MenuSection } from '@/components/MenuSection';
import { About, Feature, Gallery, WhySection } from '@/components/BrandSections';
import { Footer, Location, OrderSection, Reviews } from '@/components/Contact';
export default function Home(){return <><Header/><main id="main"><Hero/><MenuSection/><WhySection/><Feature/><About/><Gallery/><Reviews/><OrderSection/><Location/></main><Footer/></>}

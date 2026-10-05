import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/ordering/CartProvider';
export const metadata: Metadata = {title:'Gourmet Grillz | Fresh Off the Grill in Wuse 2, Abuja',description:'Big bites. Bold flavours. Discover Gourmet Grillz in Wuse 2, Abuja. Dine in, takeaway or order online.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><CartProvider>{children}</CartProvider></body></html>}

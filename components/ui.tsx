import Image from 'next/image';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { imagePath } from '@/lib/business';
export function OrderButton({children='Explore the menu',className=''}:{dish?:string;children?:React.ReactNode;className?:string}) {return <a className={`button button-red ${className}`} href="/#menu"><ShoppingBag size={18}/>{children}<ArrowUpRight size={17}/></a>}
export function FoodImage({file,alt,className='',priority=false,sizes='(max-width: 700px) 100vw, 50vw'}:{file:string;alt:string;className?:string;priority?:boolean;sizes?:string}) {return <div className={`food-image ${className}`}><Image src={imagePath(file)} alt={alt} fill sizes={sizes} priority={priority}/></div>}
export function Logo(){return <a href="/#home" className="brand" aria-label="Gourmet Grillz home"><Image src={imagePath('gourmet-grillz-logo.jpg')} alt="Gourmet Grillz logo" width={54} height={54} priority/><span>GOURMET<span>GRILLZ<span className="brand-dot">.</span></span></span></a>}
export function Eyebrow({children}:{children:React.ReactNode}){return <p className="eyebrow"><span/>{children}</p>}

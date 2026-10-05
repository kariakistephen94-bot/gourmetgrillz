'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Utensils, ShoppingBag, PackageSearch } from 'lucide-react';
import { Logo } from './ui';
import { useCart } from './ordering/CartProvider';
const links=['Home','Menu','About','Gallery','Contact'];
export function Header(){const [open,setOpen]=useState(false);const {count}=useCart();return <><header className="site-header"><div className="header-inner"><Logo/><nav aria-label="Main navigation" className={open?'main-nav is-open':'main-nav'}>{links.map(x=><Link href={`/#${x.toLowerCase()}`} key={x} onClick={()=>setOpen(false)}>{x}</Link>)}<Link href="/track-order" onClick={()=>setOpen(false)}>Track order</Link></nav><Link className="button button-red header-cart" href="/cart"><ShoppingBag size={17}/><span>Cart</span><span className="cart-count">{count}</span></Link><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?'Close navigation':'Open navigation'}>{open?<X/>:<Menu/>}</button></div></header><nav className="mobile-bottom" aria-label="Quick actions"><Link href="/#menu"><Utensils size={19}/><span>Menu</span></Link><Link href="/track-order"><PackageSearch size={19}/><span>Track</span></Link><Link className="mobile-order" href="/cart"><ShoppingBag size={19}/><span>View cart</span><span className="cart-count">{count}</span></Link></nav></>}

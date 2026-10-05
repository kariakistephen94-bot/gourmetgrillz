'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { dishes } from '@/data/menu';
import { CART_KEY, CartLine } from '@/lib/orders';
type CartContextType = { items: CartLine[]; count: number; ready: boolean; add: (name: string) => void; update: (name: string, quantity: number) => void; clear: () => void; notice: string };
const CartContext = createContext<CartContextType | null>(null);
export function CartProvider({children}:{children:React.ReactNode}) {
 const [items,setItems]=useState<CartLine[]>([]); const [ready,setReady]=useState(false); const [notice,setNotice]=useState('');
 useEffect(()=>{try { const parsed=JSON.parse(localStorage.getItem(CART_KEY)||'[]'); if(Array.isArray(parsed))setItems(parsed.filter(i=>dishes.some(d=>d.name===i.name)&&Number.isInteger(i.quantity)&&i.quantity>0&&i.quantity<=99)); }catch{} setReady(true);},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem(CART_KEY,JSON.stringify(items));}catch{setNotice('Your browser cannot save the cart. Keep this page open.');}},[items,ready]);
 useEffect(()=>{if(notice){const timer=setTimeout(()=>setNotice(''),3000);return()=>clearTimeout(timer);}},[notice]);
 const add=(name:string)=>{if(!dishes.some(d=>d.name===name))return;setItems(old=>old.some(i=>i.name===name)?old.map(i=>i.name===name?{...i,quantity:Math.min(99,i.quantity+1)}:i):[...old,{name,quantity:1}]);setNotice(`${name} added to your cart`);};
 const update=(name:string,quantity:number)=>setItems(old=>quantity<=0?old.filter(i=>i.name!==name):old.map(i=>i.name===name?{...i,quantity:Math.min(99,quantity)}:i));
 return <CartContext.Provider value={{items,count:items.reduce((s,i)=>s+i.quantity,0),ready,add,update,clear:()=>setItems([]),notice}}>{children}<div className={`cart-toast ${notice?'visible':''}`} role="status">{notice}</div></CartContext.Provider>;
}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error('Cart provider is missing');return value;}

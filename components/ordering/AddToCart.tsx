'use client';
import { Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';
export function AddToCart({name}:{name:string}){const {add,items,ready}=useCart();const quantity=items.find(i=>i.name===name)?.quantity||0;return <button className="dish-order add-to-cart" disabled={!ready||quantity>=99} onClick={()=>add(name)} aria-label={`Add ${name} to cart`}><span><ShoppingBag size={15}/> {quantity?`Add another · ${quantity} in cart`:'Add to cart'}</span><Plus size={18}/></button>}

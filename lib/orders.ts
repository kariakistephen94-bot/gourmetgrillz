export type CartLine = { name: string; quantity: number };
export type Delivery = { name: string; phone: string; email: string; address: string; area: string; notes: string; method: 'delivery' | 'pickup' };
export type Order = { id: string; createdAt: string; items: CartLine[]; delivery: Delivery; paymentStatus: 'awaiting_verification'; status: 'submitted'; total: number | null; paymentReference: string; demo: true };
// Demo values only. Replace with owner-approved details before connecting live orders.
export const checkoutConfig = { bankName: 'Demo Bank — not a real account', accountName: 'Gourmet Grillz · DEMO', accountNumber: '0000000000', deliveryFee: 2000 as number | null, prices: {'Griddle burgers': 5500, 'Chicken & noodles': 7500, 'Burgers & hot dogs': 9000, 'Loaded burger': 6500, 'Toasted sandwich': 4500, 'Fruit drinks': 3000} as Record<string, number> };
export const money = (amount: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
export function cartTotal(items: CartLine[]) { return items.length && items.every(i => typeof checkoutConfig.prices[i.name] === 'number') ? items.reduce((sum, i) => sum + checkoutConfig.prices[i.name] * i.quantity, 0) : null; }
export const CART_KEY = 'gourmet-grillz-cart-v1';
export const ORDERS_KEY = 'gourmet-grillz-orders-v1';
export function readOrders(): Order[] { try { const value = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]'); return Array.isArray(value) ? value.filter(o => o && typeof o.id === 'string' && Array.isArray(o.items) && o.delivery && o.demo === true) : []; } catch { return []; } }

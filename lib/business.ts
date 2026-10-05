export const business = { name: 'Gourmet Grillz', phone: '0705 890 5409', telephone: '+2347058905409', address: 'Adetokunbo Ademola Crescent, Wuse 2, Abuja, FCT', googleListingUrl: null as string | null };
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address)}`;
export const imagePath = (file: string) => `/images/gourmet-grillz/${file}`;

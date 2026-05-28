import { images } from '../assets/images'

export const categories = [
  { id: 'pcase', name: 'Phone Cases', image: images.pcase },
  { id: 'pbank', name: 'Power Banks', image: images.pbank },
  { id: 'hphone', name: 'Headphones', image: images.hphone },
  { id: 'swatch', name: 'Smart Watches', image: images.swatch },
  { id: 'speaker', name: 'Speakers', image: images.speaker },
  { id: 'monitor', name: 'Monitors', image: images.monitor }
]

export const products = [
  {
    id: 'pcase-1',
    category: 'pcase',
    name: 'Stylish Iphone Case',
    price: 4.99,
    priceLabel: '$4.99',
    rating: 4.8,
    image: images.pcase1,
    description: 'Premium protective case designed for a seamless fit and lasting drop resistance.',
    features: ['Impact-resistant shell', 'Compatible with wireless charging', 'Soft interior lining']
  },
  {
    id: 'pcase-2',
    category: 'pcase',
    name: 'Clear MagSafe Samsung Case',
    price: 5.99,
    priceLabel: '$5.99',
    rating: 4.6,
    image: images.pcase2,
    description: 'Clear sleek coverage with MagSafe compatibility and subtle camera protection.',
    features: ['Crystal-clear finish', 'Grip-friendly edges', 'Streamlined durability']
  },
  {
    id: 'pcase-3',
    category: 'pcase',
    name: 'Silicone Samsung Case',
    price: 6.99,
    priceLabel: '$6.99',
    rating: 4.7,
    image: images.pcase3,
    description: 'Silicone case with soft-touch grip, premium drop cushioning, and bright style.',
    features: ['Shock absorption', 'Sweat-resistant surface', 'Raised camera lip']
  },
  {
    id: 'pcase-4',
    category: 'pcase',
    name: 'Pixel Magsafe phone case',
    price: 7.99,
    priceLabel: '$7.99',
    rating: 4.9,
    image: images.pcase4,
    description: 'Matte finish phone case with pro-level protection and a slim silhouette.',
    features: ['Anti-fingerprint coating', 'Magnetic mount ready', 'Full button coverage']
  },
  {
    id: 'pbank-1',
    category: 'pbank',
    name: '30,000mAh Ultra Pack',
    price: 15.99,
    priceLabel: '$15.99',
    rating: 4.7,
    image: images.pbank1,
    description: 'Compact powerhouse with dual fast-charging ports for all your devices.',
    features: ['USB-C quick charge', 'LED power display', 'Compact form factor']
  },
  {
    id: 'pbank-2',
    category: 'pbank',
    name: '20,000mAh Slim Charge',
    price: 13.99,
    priceLabel: '$13.99',
    rating: 4.5,
    image: images.pbank2,
    description: 'Slim rechargeable battery pack that fits easily in backpacks and pockets.',
    features: ['Dual output ports', 'Fast recharge', 'Scratch-resistant finish']
  },
  {
    id: 'pbank-3',
    category: 'pbank',
    name: '10,000mAh Pocket Power',
    price: 11.99,
    priceLabel: '$11.99',
    rating: 4.4,
    image: images.pbank3,
    description: 'Portable power bank for on-the-go charging with premium safety features.',
    features: ['Smart temperature control', 'Built-in cable storage', 'Anti-slip case']
  },
  {
    id: 'pbank-4',
    category: 'pbank',
    name: '5,000mAh USB-C Mini',
    price: 8.99,
    priceLabel: '$8.99',
    rating: 4.3,
    image: images.pbank4,
    description: 'Ultra-light mini power bank ideal for one quick top-up while traveling.',
    features: ['USB-C input/output', 'Ultra compact', 'Fast charge support']
  },
  {
    id: 'hphone-1',
    category: 'hphone',
    name: 'NoiseSeal Wireless',
    price: 29.99,
    priceLabel: '$29.99',
    rating: 4.6,
    image: images.hphone1,
    description: 'Wireless headphones with active noise control and premium comfort padding.',
    features: ['Noise cancelling', '40-hour playtime', 'Touch controls']
  },
  {
    id: 'hphone-2',
    category: 'hphone',
    name: 'Pulse Bass Studio',
    price: 34.99,
    priceLabel: '$34.99',
    rating: 4.7,
    image: images.hphone2,
    description: 'Studio-grade audio with deep bass, foldable design, and crisp mids.',
    features: ['Enhanced bass', 'Built-in mic', 'Foldable design']
  },
  {
    id: 'hphone-3',
    category: 'hphone',
    name: 'JBL Sport',
    price: 27.99,
    priceLabel: '$27.99',
    rating: 4.5,
    image: images.hphone3,
    description: 'Sport-friendly headphones with sweat resistance and secure ear hooks.',
    features: ['Sweatproof', 'Secure fit', 'Long battery life']
  },
  {
    id: 'hphone-4',
    category: 'hphone',
    name: 'Echo Comfort Pro',
    price: 31.99,
    priceLabel: '$31.99',
    rating: 4.8,
    image: images.hphone4,
    description: 'Premium cushions and balanced sound for all-day listening comfort.',
    features: ['Soft ear cushions', 'Balanced audio', 'Voice assistant ready']
  },
  {
    id: 'swatch-1',
    category: 'swatch',
    name: 'Orbit Smart Watch',
    price: 49.99,
    priceLabel: '$49.99',
    rating: 4.7,
    image: images.swatch1,
    description: 'Smart watch with fitness tracking, message alerts, and customizable faces.',
    features: ['Heart rate monitor', 'Sleep tracking', 'App notifications']
  },
  {
    id: 'swatch-2',
    category: 'swatch',
    name: 'Pulse Track Elite',
    price: 59.99,
    priceLabel: '$59.99',
    rating: 4.6,
    image: images.swatch2,
    description: 'Advanced sport watch designed for runners and gym enthusiasts.',
    features: ['GPS tracking', 'Workout modes', 'Water-resistant']
  },
  {
    id: 'swatch-3',
    category: 'swatch',
    name: 'Neon Sport Watch',
    price: 42.99,
    priceLabel: '$42.99',
    rating: 4.4,
    image: images.swatch3,
    description: 'Lightweight wearable with vivid screen and all-day activity tracking.',
    features: ['Bright display', 'Track steps', 'Sleep monitoring']
  },
  {
    id: 'swatch-4',
    category: 'swatch',
    name: 'Luna Fitness Band',
    price: 39.99,
    priceLabel: '$39.99',
    rating: 4.5,
    image: images.swatch4,
    description: 'Minimalist fitness band with alerts, step counting, and long battery life.',
    features: ['Minimal design', 'Smart alerts', '10-day battery']
  },
  {
    id: 'speaker-1',
    category: 'speaker',
    name: 'BoomX Portable',
    price: 22.99,
    priceLabel: '$22.99',
    rating: 4.6,
    image: images.speaker1,
    description: 'Portable Bluetooth speaker built for bold sound anywhere you go.',
    features: ['Bluetooth 5.3', 'Bass boost', 'Water resistant']
  },
  {
    id: 'speaker-2',
    category: 'speaker',
    name: 'JBL Mini',
    price: 19.99,
    priceLabel: '$19.99',
    rating: 4.4,
    image: images.speaker2,
    description: 'Compact speaker with clear vocals, crisp highs, and stylish metal grille.',
    features: ['Compact size', 'Rich audio', 'USB-C charging']
  },
  {
    id: 'speaker-3',
    category: 'speaker',
    name: 'WaveSound',
    price: 24.99,
    priceLabel: '$24.99',
    rating: 4.7,
    image: images.speaker3,
    description: 'Room-filling speaker for small spaces and desktop music setups.',
    features: ['360° sound', 'Long battery', 'Sleek finish']
  },
  {
    id: 'speaker-4',
    category: 'speaker',
    name: 'Bass Pulse',
    price: 29.99,
    priceLabel: '$29.99',
    rating: 4.8,
    image: images.speaker4,
    description: 'Bass-forward speaker with vivid lighting and premium media controls.',
    features: ['Powerful bass', 'Light ring', 'Easy pairing']
  },
  {
    id: 'monitor-1',
    category: 'monitor',
    name: 'Lenovo 24" Gaming',
    price: 149.99,
    priceLabel: '$149.99',
    rating: 4.6,
    image: images.monitor2,
    description: '24-inch monitor built for sharp gaming visuals and responsive performance.',
    features: ['144Hz refresh rate', 'IPS panel', 'Low response time']
  },
  {
    id: 'monitor-2',
    category: 'monitor',
    name: 'MacBook Pro',
    price: 189.99,
    priceLabel: '$189.99',
    rating: 4.8,
    image: images.monitor3,
    description: '27-inch pro display with vivid colors, high clarity, and sleek design.',
    features: ['Color-accurate display', 'Thin bezels', 'Adjustable stand']
  },
  {
    id: 'monitor-3',
    category: 'monitor',
    name: 'HP EliteBook',
    price: 229.99,
    priceLabel: '$229.99',
    rating: 4.5,
    image: images.monitor4,
    description: 'Immersive 32-inch display optimized for creative work and immersive play.',
    features: ['Ultra-wide view', 'High contrast', 'Multiple inputs']
  },
  {
    id: 'monitor-4',
    category: 'monitor',
    name: 'Studio 21" Focus',
    price: 139.99,
    priceLabel: '$139.99',
    rating: 4.4,
    image: images.monitor,
    description: 'Compact studio monitor for productivity and clear detail in small workspaces.',
    features: ['Flicker-free', 'Full HD', 'Compact footprint']
  }
]

export const getProductById = (productId) => products.find((product) => product.id === productId)
export const categoryLabels = {
  pcase: 'Phone Cases',
  pbank: 'Power Banks',
  hphone: 'Headphones',
  swatch: 'Smart Watches',
  speaker: 'Speakers',
  monitor: 'Monitors'
}
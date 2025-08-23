import { db } from "./drizzle";
import { products } from './schema';

export async function seedProducts() {
  // Sample Nike products
  const items = [
    {
      name: 'Nike Air Max 270',
      description: 'Breathable mesh upper with Max Air cushioning.',
      price: 15000,
    //   image: '/images/airmax270.jpg',
    image: 'https://static.nike.com/a/images/t_default/50abd837-dc02-4247-a3f4-17899081879a/W+AIR+MAX+270.png',
    },
    {
      name: 'Nike Air Force 1',
      description: 'Classic style with premium comfort.',
      price: 12000,
    //   image: '/images/airforce1.jpg',
    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/444f1053-ee7f-4009-badc-58a8a847caba/AIR+FORCE+1+LOW+RETRO.png'
    },
    {
      name: 'Nike Dunk Low',
      description: 'Iconic silhouette with modern updates.',
      price: 11000,
    //   image: '/images/dunklow.jpg',
    image: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/eee0a695-bee8-4349-90c6-9c6eb400036c/dunk-low-vivid-green-dj6188-300-release-date.jpg'
    },
  ];

  // Insert products
  await db.insert(products).values(items);
  console.log('Seeded Nike products!');
}

// To run: npx tsx db/seed.ts
if (require.main === module) {
  seedProducts().then(() => process.exit(0));
}

/**
 * SCARFACE — Product Data
 * 
 * This file contains all product information.
 * To update products, modify the entries below.
 * Future: Replace with API/database fetch without changing UI components.
 */

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'agricultural', label: 'Agricultural' },
  { id: 'spices', label: 'Spices & Herbs' },
  { id: 'food', label: 'Food Products' },
  { id: 'dehydrated', label: 'Dehydrated Products' },
  { id: 'oilseeds', label: 'Oilseeds & Oils' },
]

export const products = [
  // ─── SPICES & HERBS ──────────────────────────────────
  {
    id: 1,
    name: 'Cumin Seeds',
    slug: 'cumin-seeds',
    category: 'spices',
    categoryLabel: 'Spices & Herbs',
    shortDescription: 'Premium quality whole cumin seeds sourced from Gujarat. Known for their rich aroma and superior flavour profile.',
    description: `Cumin seeds (Cuminum cyminum) are one of India's most prized export spices. Gujarat produces some of the world's finest cumin, known globally for its strong aroma, deep earthy flavour, and exceptional quality. SCARFACE sources cumin directly from trusted farmers across the Saurashtra region of Gujarat, ensuring freshness and consistent quality.\n\nOur cumin seeds meet international food safety standards and are processed in hygienic facilities with proper sorting, cleaning, and grading before packaging.`,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    specifications: [
      { label: 'Variety', value: 'Gujarat Cumin (GC-1 / GC-2)' },
      { label: 'Purity', value: '99% min' },
      { label: 'Moisture', value: '10% max' },
      { label: 'Foreign Matter', value: '0.5% max' },
      { label: 'Colour', value: 'Greenish-grey to brownish' },
      { label: 'Form', value: 'Whole seeds' },
    ],
    packaging: ['25 kg PP bags', '50 kg PP bags', 'Custom packaging on request'],
    moq: '1 Metric Ton',
    origin: 'Gujarat, India',
    markets: ['Middle East', 'Europe', 'North America', 'Southeast Asia'],
  },
  {
    id: 2,
    name: 'Coriander Seeds',
    slug: 'coriander-seeds',
    category: 'spices',
    categoryLabel: 'Spices & Herbs',
    shortDescription: 'High-quality whole coriander seeds with a balanced citrusy aroma, ideal for culinary and processing industries.',
    description: `Coriander seeds (Coriandrum sativum) from India are among the most sought-after globally. Gujarat and Rajasthan are the primary producing regions, delivering seeds with a consistent citrusy, slightly sweet aroma. SCARFACE sources coriander seeds from established growing regions and processes them to meet export standards.\n\nAvailable in whole and split forms. Widely used in spice blends, curry powders, food processing, and pharmaceutical industries.`,
    image: 'https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=800&q=80',
    specifications: [
      { label: 'Variety', value: 'Eagle / Scooter' },
      { label: 'Purity', value: '99% min' },
      { label: 'Moisture', value: '12% max' },
      { label: 'Foreign Matter', value: '1% max' },
      { label: 'Form', value: 'Whole / Split' },
    ],
    packaging: ['25 kg PP bags', '50 kg PP bags'],
    moq: '1 Metric Ton',
    origin: 'Gujarat / Rajasthan, India',
    markets: ['Middle East', 'Europe', 'Africa', 'North America'],
  },
  {
    id: 3,
    name: 'Turmeric (Haldi)',
    slug: 'turmeric',
    category: 'spices',
    categoryLabel: 'Spices & Herbs',
    shortDescription: 'Vibrant golden turmeric fingers and powder with high curcumin content, sourced from India\'s finest growing regions.',
    description: `Turmeric (Curcuma longa) is one of India's most iconic spices with significant culinary, medicinal, and cosmetic applications. SCARFACE sources premium turmeric from Maharashtra and Andhra Pradesh, India — regions renowned for high curcumin content and rich golden colour.\n\nAvailable as whole rhizomes (fingers), polished fingers, and ground powder. Widely exported for use in food processing, nutraceuticals, cosmetics, and natural health products.`,
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80',
    specifications: [
      { label: 'Curcumin Content', value: '3% – 5% (min)' },
      { label: 'Moisture', value: '10% max' },
      { label: 'Volatile Oil', value: '2.5% min' },
      { label: 'Form', value: 'Finger / Powder' },
    ],
    packaging: ['25 kg kraft bags', '50 kg PP bags', 'Custom bulk packaging'],
    moq: '500 kg',
    origin: 'Maharashtra / Andhra Pradesh, India',
    markets: ['Middle East', 'Europe', 'North America', 'Asia Pacific'],
  },
  {
    id: 4,
    name: 'Red Chilli',
    slug: 'red-chilli',
    category: 'spices',
    categoryLabel: 'Spices & Herbs',
    shortDescription: 'Premium Indian red chillies with vibrant colour and heat, available in whole, stemless, and powder forms.',
    description: `India is the world's leading producer and exporter of red chillies. SCARFACE sources high-quality red chillies from Andhra Pradesh and Gujarat, known for their deep red colour (high ASTA value), intense flavour, and consistent heat levels.\n\nAvailable in multiple forms including whole chillies with stem, stemless, crushed, and ground powder. Widely used in food manufacturing, spice blends, sauces, and seasonings globally.`,
    image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&q=80',
    specifications: [
      { label: 'ASTA Value', value: '100–200+' },
      { label: 'Scoville Heat Units', value: '25,000 – 75,000 SHU' },
      { label: 'Moisture', value: '12% max' },
      { label: 'Form', value: 'Whole / Stemless / Powder' },
    ],
    packaging: ['10 kg, 25 kg, 50 kg PP bags'],
    moq: '1 Metric Ton',
    origin: 'Andhra Pradesh / Gujarat, India',
    markets: ['Middle East', 'Europe', 'Africa', 'Asia Pacific'],
  },

  // ─── AGRICULTURAL ─────────────────────────────────────
  {
    id: 5,
    name: 'Basmati Rice',
    slug: 'basmati-rice',
    category: 'agricultural',
    categoryLabel: 'Agricultural',
    shortDescription: 'Aromatic long-grain basmati rice with exceptional fragrance and fluffy texture, a premium Indian export staple.',
    description: `Basmati rice is India's most prestigious rice export, prized globally for its distinctive fragrance, long slender grains, and fluffy non-sticky texture. SCARFACE sources basmati rice from the finest growing regions of India, ensuring top-quality grains processed and polished to international export standards.\n\nAvailable in multiple grades including 1121, Pusa, and Traditional Basmati varieties. Suitable for premium retail, foodservice, and bulk trade buyers worldwide.`,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
    specifications: [
      { label: 'Variety', value: '1121 / Pusa / Traditional' },
      { label: 'Grain Length', value: '7.5 mm + (average)' },
      { label: 'Moisture', value: '12.5% max' },
      { label: 'Broken', value: '2% max' },
      { label: 'Processing', value: 'Sortex cleaned, Polished' },
    ],
    packaging: ['1 kg, 5 kg retail bags', '25 kg, 50 kg bulk bags', 'Custom branding available'],
    moq: '10 Metric Tons',
    origin: 'Punjab / Haryana / UP, India',
    markets: ['Middle East', 'Europe', 'North America', 'Africa'],
  },
  {
    id: 6,
    name: 'Non-Basmati Rice',
    slug: 'non-basmati-rice',
    category: 'agricultural',
    categoryLabel: 'Agricultural',
    shortDescription: 'Quality non-basmati rice varieties including IR-64, Sona Masoori, and Swarna — competitively priced for global markets.',
    description: `India produces a wide variety of non-basmati rice varieties that are in high demand globally for their quality and value. SCARFACE supplies multiple non-basmati varieties suited for different regional preferences and end uses.\n\nVarieties include IR-64 Parboiled, Sona Masoori, Swarna, and Long Grain White Rice. These are widely consumed across Africa, Middle East, Southeast Asia, and other regions.`,
    image: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9d8cf?w=800&q=80',
    specifications: [
      { label: 'Varieties', value: 'IR-64, Sona Masoori, Swarna, Long Grain' },
      { label: 'Moisture', value: '14% max' },
      { label: 'Broken', value: '5–25% as per grade' },
      { label: 'Processing', value: 'Raw / Parboiled / Sortex cleaned' },
    ],
    packaging: ['25 kg, 50 kg PP woven bags', 'Bulk containers'],
    moq: '25 Metric Tons',
    origin: 'India',
    markets: ['Africa', 'Middle East', 'Southeast Asia', 'Europe'],
  },
  {
    id: 7,
    name: 'Groundnut (Peanuts)',
    slug: 'groundnut',
    category: 'oilseeds',
    categoryLabel: 'Oilseeds & Oils',
    shortDescription: 'Premium Gujarat groundnuts (peanuts) — bold, Java, and TJ varieties. A key Indian oilseed export with consistent quality.',
    description: `Gujarat is India's largest groundnut-producing state, making it a natural hub for groundnut exports. SCARFACE sources premium groundnuts directly from Gujarat's agricultural heartland, ensuring fresh, high-quality nuts that meet international food safety standards.\n\nAvailable in multiple varieties: Bold (Runner), Java (Spanish), TJ (Virginia), and Groundnut Oil. Used in snack foods, peanut butter, confectionery, oil extraction, and animal feed.`,
    image: 'https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=800&q=80',
    specifications: [
      { label: 'Varieties', value: 'Bold (40/50, 50/60, 60/70), Java, TJ' },
      { label: 'Moisture', value: '7% max' },
      { label: 'Aflatoxin', value: 'As per destination requirement' },
      { label: 'Form', value: 'In-shell / Shelled / Blanched / Split' },
    ],
    packaging: ['25 kg jute/PP bags', '50 lb bags', 'Custom packaging'],
    moq: '5 Metric Tons',
    origin: 'Gujarat, India',
    markets: ['Southeast Asia', 'Europe', 'Middle East', 'Africa', 'North America'],
  },
  {
    id: 8,
    name: 'Sesame Seeds',
    slug: 'sesame-seeds',
    category: 'oilseeds',
    categoryLabel: 'Oilseeds & Oils',
    shortDescription: 'High-quality natural and hulled sesame seeds from Gujarat — a top global export with premium oil content.',
    description: `India is one of the world's largest exporters of sesame seeds, with Gujarat being a primary production hub. SCARFACE supplies premium sesame seeds in both natural (unhulled) and hulled forms. Known for high oil content (50%+), excellent purity, and superior whiteness after hulling.\n\nWidely used in bakery products, confectionery, tahini, halva, sesame oil extraction, and as a topping ingredient globally.`,
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80',
    specifications: [
      { label: 'Purity', value: '99.95% min (Hulled)' },
      { label: 'Oil Content', value: '50% min' },
      { label: 'Moisture', value: '5% max' },
      { label: 'Form', value: 'Natural / Hulled / Black / White' },
    ],
    packaging: ['25 kg PP bags', '50 kg PP bags'],
    moq: '5 Metric Tons',
    origin: 'Gujarat / Rajasthan, India',
    markets: ['China', 'Japan', 'Southeast Asia', 'Middle East', 'Europe'],
  },

  // ─── DEHYDRATED PRODUCTS ──────────────────────────────
  {
    id: 9,
    name: 'Dehydrated Onion',
    slug: 'dehydrated-onion',
    category: 'dehydrated',
    categoryLabel: 'Dehydrated Products',
    shortDescription: 'Premium dehydrated onion flakes, powder, granules, and minced — processed in Gujarat\'s leading dehydration facilities.',
    description: `India is the world's leading exporter of dehydrated onion products, with Gujarat home to some of the largest and most advanced dehydration facilities globally. SCARFACE supplies premium dehydrated onion processed from fresh Mahuva and Bhavnagar onions — known for their high dry matter content and superior pungency.\n\nAvailable in multiple forms: flakes, powder, granules, minced, and kibbled. Widely used in ready meals, seasonings, soups, snacks, fast food industry, and spice blends worldwide.`,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=80',
    specifications: [
      { label: 'Moisture', value: '5% max' },
      { label: 'Ash Content', value: '5% max' },
      { label: 'Colour', value: 'White to light cream' },
      { label: 'Forms', value: 'Flakes, Powder, Granules, Minced, Kibbled' },
    ],
    packaging: ['12.5 kg, 25 kg cartons with inner poly bags', 'Bulk 200 kg fibre drums'],
    moq: '500 kg',
    origin: 'Gujarat (Mahuva / Bhavnagar), India',
    markets: ['USA', 'Europe', 'Middle East', 'Australia', 'Japan'],
  },
  {
    id: 10,
    name: 'Dehydrated Garlic',
    slug: 'dehydrated-garlic',
    category: 'dehydrated',
    categoryLabel: 'Dehydrated Products',
    shortDescription: 'Pungent, flavour-rich dehydrated garlic flakes, powder, and granules from premium Indian garlic varieties.',
    description: `India produces high-quality garlic known for its strong pungency and high allicin content. SCARFACE sources dehydrated garlic processed from fresh garlic grown in Gujarat and Madhya Pradesh. The dehydration process preserves the flavour intensity and aroma of fresh garlic.\n\nAvailable as flakes, powder, granules, and minced. Extensively used in seasoning blends, marinades, ready meals, sauces, snack coatings, and the restaurant industry globally.`,
    image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?w=800&q=80',
    specifications: [
      { label: 'Moisture', value: '5% max' },
      { label: 'Total Plate Count', value: 'As per food safety norms' },
      { label: 'Colour', value: 'White to cream' },
      { label: 'Forms', value: 'Flakes, Powder, Granules, Minced' },
    ],
    packaging: ['12.5 kg, 25 kg cartons', '200 kg fibre drums'],
    moq: '500 kg',
    origin: 'Gujarat / Madhya Pradesh, India',
    markets: ['USA', 'Europe', 'Southeast Asia', 'Middle East'],
  },

  // ─── FOOD PRODUCTS ────────────────────────────────────
  {
    id: 11,
    name: 'Toor Dal (Split Pigeon Peas)',
    slug: 'toor-dal',
    category: 'food',
    categoryLabel: 'Food Products',
    shortDescription: 'Premium toor dal (arhar dal) — a dietary staple across South Asia and globally popular Indian pulse export.',
    description: `Toor dal (split pigeon peas) is one of India's most widely consumed pulses and a significant export commodity. SCARFACE supplies high-quality toor dal processed and graded for consistent size, colour, and cooking quality.\n\nAvailable as oiled (traditional) and non-oiled variants. Rich in protein, widely consumed across South Asia, Africa, and the Indian diaspora globally. A staple ingredient in dals, soups, stews, and various cuisines.`,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    specifications: [
      { label: 'Type', value: 'Split Pigeon Peas (Oiled / Non-Oiled)' },
      { label: 'Moisture', value: '12% max' },
      { label: 'Admixture', value: '1% max' },
      { label: 'Packing', value: 'Machine packed' },
    ],
    packaging: ['500 g, 1 kg retail packs', '25 kg, 50 kg PP bags'],
    moq: '10 Metric Tons',
    origin: 'India',
    markets: ['Middle East', 'Africa', 'UK', 'North America', 'Southeast Asia'],
  },
  {
    id: 12,
    name: 'Fenugreek Seeds (Methi)',
    slug: 'fenugreek-seeds',
    category: 'spices',
    categoryLabel: 'Spices & Herbs',
    shortDescription: 'Aromatic fenugreek seeds from Gujarat — used in spice blends, ayurveda, and health food applications globally.',
    description: `Fenugreek (Trigonella foenum-graecum) is a uniquely flavourful seed used across culinary and medicinal applications. India, particularly Gujarat and Rajasthan, produces some of the world's finest fenugreek. SCARFACE supplies premium quality fenugreek seeds with high purity and consistent quality.\n\nWidely used in spice blends, curry powders, maple syrup flavouring, ayurvedic medicines, nutraceuticals, and dietary supplements. Growing demand globally in the health food and functional food segments.`,
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80',
    specifications: [
      { label: 'Purity', value: '99% min' },
      { label: 'Moisture', value: '10% max' },
      { label: 'Foreign Matter', value: '1% max' },
      { label: 'Colour', value: 'Yellow-amber' },
    ],
    packaging: ['25 kg PP bags', '50 kg PP bags'],
    moq: '1 Metric Ton',
    origin: 'Gujarat / Rajasthan, India',
    markets: ['Europe', 'Middle East', 'North America', 'Southeast Asia'],
  },
]

/**
 * Get all products in a category.
 * @param {string} categoryId - The category ID to filter by. Use 'all' for all products.
 */
export function getProductsByCategory(categoryId) {
  if (categoryId === 'all') return products
  return products.filter(p => p.category === categoryId)
}

/**
 * Get a single product by its slug.
 * @param {string} slug - The product slug.
 */
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null
}

/**
 * Get related products (same category, excluding current).
 * @param {string} categoryId - Category to search in.
 * @param {string} excludeSlug - The current product slug to exclude.
 */
export function getRelatedProducts(categoryId, excludeSlug) {
  return products
    .filter(p => p.category === categoryId && p.slug !== excludeSlug)
    .slice(0, 3)
}

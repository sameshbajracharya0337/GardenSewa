// ========================================
// src/data/mockData.js (Complete Version)
// ========================================

// Store image paths as strings, not require() calls
export const servicesData = [
  {
    id: 1,
    title: 'Landscaping Services',
    price: 'NPR 5000',
    imagePath: 'landscaping',
  },
  {
    id: 2,
    title: 'Garden Design Advice',
    price: 'NPR 3000',
    imagePath: 'garden_design',
  },
  {
    id: 3,
    title: 'Plant Care Program',
    price: 'NPR 4500',
    imagePath: 'plant_care',
  },
  {
    id: 4,
    title: 'Garden Maintenance',
    price: 'NPR 2500',
    imagePath: 'garden_maintenance',
  },
];

export const plantsData = [
  {
    id: 1,
    name: 'Rose',
    price: 'NPR 5000',
    category: 'Indoor/Outdoor',
    imagePath: 'rose',
  },
  {
    id: 2,
    name: 'Daisy',
    price: 'NPR 3200',
    category: 'Indoor/Outdoor',
    imagePath: 'daisy',
  },
  {
    id: 3,
    name: 'Hibiscus',
    price: 'NPR 3200',
    category: 'Outdoor',
    imagePath: 'hibiscus',
  },
];

export const reviewsData = [
  {
    id: 1,
    name: 'Niranjan Sharma',
    rating: 5,
    comment: "Didn't expect hiring a gardener online to be this easy. Found one in just a few minutes, and the booking process was seamless.",
    date: '8/1/2025',
    avatarPath: 'niranjan',
  },
  {
    id: 2,
    name: 'Aavash Tamang',
    rating: 5,
    comment: 'Garden Sewa app helped me with my house redecorating and gardening services. Highly recommend!',
    date: '8/3/2025',
    avatarPath: 'aavash',
  },
  {
    id: 3,
    name: 'Vishal Thapa',
    rating: 5,
    comment: 'Excellent service and professional gardeners. My garden looks amazing now!',
    date: '8/5/2025',
    avatarPath: 'vishal',
  },
];

export const categoriesData = [
  { id: 1, name: 'Indoor Plants', icon: 'home', count: '25 items', color: '#4CAF50' },
  { id: 2, name: 'Outdoor Plants', icon: 'sunny', count: '30 items', color: '#FF9800' },
  { id: 3, name: 'Garden Tools', icon: 'build', count: '15 items', color: '#2196F3' },
  { id: 4, name: 'Fertilizers', icon: 'leaf', count: '12 items', color: '#8BC34A' },
  { id: 5, name: 'Seeds', icon: 'ellipse', count: '40 items', color: '#795548' },
  { id: 6, name: 'Landscaping', icon: 'image', count: '8 services', color: '#607D8B' },
  { id: 7, name: 'Plant Care', icon: 'heart', count: '10 services', color: '#E91E63' },
  { id: 8, name: 'Consultation', icon: 'chatbubble', count: '5 services', color: '#9C27B0' },
];

// Indoor Plants data
export const indoorPlantsData = [
  {
    id: 1,
    name: 'Snake Plant',
    imagePath: 'snake_plant',
    price: 'Rs 2500',
    sold: '45 sold',
    rating: 4.8,
    tags: ['Indoor', 'Low Light'],
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    imagePath: 'monstera',
    price: 'Rs 4500',
    sold: '32 sold',
    rating: 4.7,
    tags: ['Indoor', 'Tropical'],
  },
  {
    id: 3,
    name: 'Peace Lily',
    imagePath: 'peace_lily',
    price: 'Rs 3000',
    sold: '28 sold',
    rating: 4.6,
    tags: ['Indoor', 'Air Purifier'],
  },
  {
    id: 4,
    name: 'Rubber Plant',
    imagePath: 'rubber_plant',
    price: 'Rs 3500',
    sold: '19 sold',
    rating: 4.5,
    tags: ['Indoor', 'Large'],
  },
  {
    id: 5,
    name: 'Pothos',
    imagePath: 'pothos',
    price: 'Rs 1800',
    sold: '67 sold',
    rating: 4.9,
    tags: ['Indoor', 'Hanging'],
  },
  {
    id: 6,
    name: 'ZZ Plant',
    imagePath: 'zz_plant',
    price: 'Rs 2800',
    sold: '23 sold',
    rating: 4.4,
    tags: ['Indoor', 'Low Maintenance'],
  },
];

// Outdoor Plants data
export const outdoorPlantsData = [
  {
    id: 1,
    name: 'Cherry Blossom',
    imagePath: 'cherry_blossom',
    price: 'Rs 5000',
    sold: '23 sold',
    rating: 4.5,
    tags: ['Outdoor', 'Flowering'],
  },
  {
    id: 2,
    name: 'Rose Garden',
    imagePath: 'rose_garden',
    price: 'Rs 3800',
    sold: '34 sold',
    rating: 4.7,
    tags: ['Outdoor', 'Fragrant'],
  },
  {
    id: 3,
    name: 'Mango Tree',
    imagePath: 'mango_tree',
    price: 'Rs 8500',
    sold: '12 sold',
    rating: 4.6,
    tags: ['Outdoor', 'Fruit'],
  },
  {
    id: 4,
    name: 'Bougainvillea',
    imagePath: 'bougainvillea',
    price: 'Rs 2200',
    sold: '45 sold',
    rating: 4.8,
    tags: ['Outdoor', 'Climbing'],
  },
  {
    id: 5,
    name: 'Sunflower',
    imagePath: 'sunflower',
    price: 'Rs 1500',
    sold: '56 sold',
    rating: 4.4,
    tags: ['Outdoor', 'Annual'],
  },
  {
    id: 6,
    name: 'Bamboo Plant',
    imagePath: 'bamboo',
    price: 'Rs 4200',
    sold: '18 sold',
    rating: 4.3,
    tags: ['Outdoor', 'Fast Growing'],
  },
];

// Rare Plants data
export const rarePlantsData = [
  {
    id: 1,
    name: 'Himalayan Blue Poppy',
    imagePath: 'blue_poppy',
    price: 'Rs 9000',
    sold: '5 sold',
    rating: 4.9,
    tags: ['Rare', 'Himalayan'],
  },
  {
    id: 2,
    name: 'Black Orchid',
    imagePath: 'black_orchid',
    price: 'Rs 9000',
    sold: '2 sold',
    rating: 5.0,
    tags: ['Rare', 'Orchid'],
  },
  {
    id: 3,
    name: 'Dragon Blood Tree',
    imagePath: 'dragon_blood',
    price: 'Rs 9000',
    sold: '3 sold',
    rating: 4.8,
    tags: ['Rare', 'Exotic'],
  },
  {
    id: 4,
    name: 'Jade Vine',
    imagePath: 'jade_vine',
    price: 'Rs 9000',
    sold: '4 sold',
    rating: 4.7,
    tags: ['Rare', 'Climbing'],
  },
  {
    id: 5,
    name: 'Ghost Orchid',
    imagePath: 'ghost_orchid',
    price: 'Rs 9000',
    sold: '1 sold',
    rating: 5.0,
    tags: ['Rare', 'Endangered'],
  },
  {
    id: 6,
    name: 'Corpse Flower',
    imagePath: 'corpse_flower',
    price: 'Rs 9000',
    sold: '2 sold',
    rating: 4.6,
    tags: ['Rare', 'Unusual'],
  },
];

// Category data for CategoryScreen
export const categoryScreenData = [
  {
    id: 1,
    name: 'Indoor Plants',
    imagePath: 'indoor_plant',
    screenName: 'IndoorPlants'
  },
  {
    id: 2,
    name: 'Outdoor Plants',
    imagePath: 'outdoor_plant',
    screenName: 'OutdoorPlants'
  },
  {
    id: 3,
    name: 'Rare Plants',
    imagePath: 'rare_plant',
    screenName: 'RarePlants'
  },
];

// Products data for CategoryScreen
export const categoryProductsData = [
  {
    id: 1,
    name: 'Cherry blossom',
    imagePath: 'cherry_blossom_category',
    price: 'Rs 5000',
    sold: '23 sold',
    rating: 4.5,
    tags: ['Outdoor', 'Commercial'],
  },
  {
    id: 2,
    name: 'Himalayan Blue Poppy',
    imagePath: 'blue_poppy_category',
    price: 'Rs 3200',
    sold: '12 sold',
    rating: 4.6,
    tags: ['Rare', 'Commercial'],
  },
];

// Detailed plant information for PlantDetailScreen
export const plantDetailsData = {
  // Category Screen Plants
  1: {
    id: 1,
    name: 'Cherry blossom',
    imagePath: 'cherry_blossom_detail',
    price: 'NPR 5000',
    location: 'Kathmandu Valley',
    description: 'Cherry blossoms are beautiful flowering trees known for their stunning pink and white flowers. These ornamental trees are perfect for gardens and create a spectacular display during blooming season. They symbolize renewal and the fleeting nature of life.',
    category: 'Outdoor',
    tags: ['Outdoor', 'Commercial', 'Flowering'],
    rating: 4.5,
    sold: '23 sold'
  },
  2: {
    id: 2,
    name: 'Himalayan Blue Poppy',
    imagePath: 'blue_poppy_detail',
    price: 'NPR 3200',
    location: 'Gokyo',
    description: 'Poppy is a famous flower for its bright colors and variety. The two main types are Yellow and Blue Poppy. These flowers grow in the high mountains of Nepal and are a beautiful part of the alpine landscape.',
    category: 'Rare Plants',
    tags: ['Rare', 'Commercial', 'Himalayan'],
    rating: 4.6,
    sold: '12 sold'
  },
  
  // Indoor Plants
  11: {
    id: 11,
    name: 'Snake Plant',
    imagePath: 'snake_plant_detail',
    price: 'NPR 2500',
    location: 'Available Nationwide',
    description: 'Snake plants are one of the most popular and hardy houseplants. They can survive in low light conditions and require minimal watering. Perfect for beginners and busy plant parents.',
    category: 'Indoor Plants',
    tags: ['Indoor', 'Low Light', 'Air Purifier'],
    rating: 4.8,
    sold: '45 sold'
  },
  12: {
    id: 12,
    name: 'Monstera Deliciosa',
    imagePath: 'monstera_detail',
    price: 'NPR 4500',
    location: 'Kathmandu',
    description: 'Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, glossy leaves with natural holes. It\'s a stunning statement plant that brings tropical vibes to any home.',
    category: 'Indoor Plants',
    tags: ['Indoor', 'Tropical', 'Statement Plant'],
    rating: 4.7,
    sold: '32 sold'
  },
  13: {
    id: 13,
    name: 'Peace Lily',
    imagePath: 'peace_lily_detail',
    price: 'NPR 3000',
    location: 'Pokhara',
    description: 'Peace Lilies are elegant flowering plants known for their white blooms and glossy green leaves. They are excellent air purifiers and can bloom multiple times a year with proper care.',
    category: 'Indoor Plants',
    tags: ['Indoor', 'Air Purifier', 'Flowering'],
    rating: 4.6,
    sold: '28 sold'
  },
  14: {
    id: 14,
    name: 'Rubber Plant',
    imagePath: 'rubber_plant_detail',
    price: 'NPR 3500',
    location: 'Lalitpur',
    description: 'Rubber plants are classic houseplants with thick, glossy leaves. They are excellent for beginners as they are very forgiving and can grow quite large, making them perfect statement plants.',
    category: 'Indoor Plants',
    tags: ['Indoor', 'Large', 'Low Maintenance'],
    rating: 4.5,
    sold: '19 sold'
  },
  15: {
    id: 15,
    name: 'Pothos',
    imagePath: 'pothos_detail',
    price: 'NPR 1800',
    location: 'Available Everywhere',
    description: 'Pothos is one of the easiest plants to grow and propagate. With its heart-shaped leaves and trailing vines, it\'s perfect for hanging baskets or as a climbing plant.',
    category: 'Indoor Plants',
    tags: ['Indoor', 'Hanging', 'Easy Care'],
    rating: 4.9,
    sold: '67 sold'
  },
  16: {
    id: 16,
    name: 'ZZ Plant',
    imagePath: 'zz_plant_detail',
    price: 'NPR 2800',
    location: 'Bhaktapur',
    description: 'ZZ Plant is virtually indestructible and can tolerate neglect, drought, and low light. Its waxy, dark green leaves add a modern touch to any space.',
    category: 'Indoor Plants',
    tags: ['Indoor', 'Low Maintenance', 'Drought Tolerant'],
    rating: 4.4,
    sold: '23 sold'
  },
  
  // Outdoor Plants
  21: {
    id: 21,
    name: 'Cherry Blossom',
    imagePath: 'cherry_blossom_outdoor_detail',
    price: 'NPR 5000',
    location: 'Kathmandu Valley',
    description: 'Cherry blossom trees create spectacular displays of pink and white flowers in spring. These ornamental trees are perfect for gardens and public spaces, symbolizing renewal and beauty.',
    category: 'Outdoor Plants',
    tags: ['Outdoor', 'Flowering', 'Ornamental'],
    rating: 4.5,
    sold: '23 sold'
  },
  22: {
    id: 22,
    name: 'Rose Garden',
    imagePath: 'rose_garden_detail',
    price: 'NPR 3800',
    location: 'Pokhara',
    description: 'Roses are the queen of flowers, known for their beauty and fragrance. Our rose varieties are carefully selected for the Nepali climate and will bloom throughout the growing season.',
    category: 'Outdoor Plants',
    tags: ['Outdoor', 'Fragrant', 'Classic'],
    rating: 4.7,
    sold: '34 sold'
  },
  23: {
    id: 23,
    name: 'Mango Tree',
    imagePath: 'mango_tree_detail',
    price: 'NPR 8500',
    location: 'Chitwan',
    description: 'Mango trees provide delicious fruit and beautiful shade. These tropical trees are long-lived and will provide fruit for generations when properly cared for.',
    category: 'Outdoor Plants',
    tags: ['Outdoor', 'Fruit', 'Shade Tree'],
    rating: 4.6,
    sold: '12 sold'
  },
  24: {
    id: 24,
    name: 'Bougainvillea',
    imagePath: 'bougainvillea_detail',
    price: 'NPR 2200',
    location: 'Janakpur',
    description: 'Bougainvillea is a vibrant climbing plant that produces colorful bracts in shades of pink, purple, red, and white. Perfect for walls, fences, and pergolas.',
    category: 'Outdoor Plants',
    tags: ['Outdoor', 'Climbing', 'Colorful'],
    rating: 4.8,
    sold: '45 sold'
  },
  25: {
    id: 25,
    name: 'Sunflower',
    imagePath: 'sunflower_detail',
    price: 'NPR 1500',
    location: 'Bardiya',
    description: 'Sunflowers are cheerful annual plants that track the sun across the sky. They produce large, bright yellow flowers and nutritious seeds.',
    category: 'Outdoor Plants',
    tags: ['Outdoor', 'Annual', 'Edible Seeds'],
    rating: 4.4,
    sold: '56 sold'
  },
  26: {
    id: 26,
    name: 'Bamboo Plant',
    imagePath: 'bamboo_detail',
    price: 'NPR 4200',
    location: 'Ilam',
    description: 'Bamboo is a fast-growing, sustainable plant that can be used for privacy screens, windbreaks, or decorative purposes. It\'s also an eco-friendly choice.',
    category: 'Outdoor Plants',
    tags: ['Outdoor', 'Fast Growing', 'Sustainable'],
    rating: 4.3,
    sold: '18 sold'
  },
  
  // Rare Plants  
  31: {
    id: 31,
    name: 'Himalayan Blue Poppy',
    imagePath: 'blue_poppy_rare_detail',
    price: 'NPR 9000',
    location: 'High Himalayas',
    description: 'The Himalayan Blue Poppy is Nepal\'s national flower and one of the world\'s most beautiful alpine plants. These rare flowers bloom with stunning sky-blue petals in high altitude regions.',
    category: 'Rare Plants',
    tags: ['Rare', 'Himalayan', 'National Flower'],
    rating: 4.9,
    sold: '5 sold'
  },
  32: {
    id: 32,
    name: 'Black Orchid',
    imagePath: 'black_orchid_detail',
    price: 'NPR 9000',
    location: 'Specialty Greenhouse',
    description: 'Black orchids are extremely rare and prized for their dark, mysterious beauty. These exotic flowers require special care and are perfect for serious orchid collectors.',
    category: 'Rare Plants',
    tags: ['Rare', 'Orchid', 'Exotic'],
    rating: 5.0,
    sold: '2 sold'
  },
  33: {
    id: 33,
    name: 'Dragon Blood Tree',
    imagePath: 'dragon_blood_detail',
    price: 'NPR 9000',
    location: 'Specialty Import',
    description: 'Dragon Blood Trees are unique umbrella-shaped trees that produce red resin. These ancient-looking plants are incredibly rare and make stunning conversation pieces.',
    category: 'Rare Plants',
    tags: ['Rare', 'Exotic', 'Unique Shape'],
    rating: 4.8,
    sold: '3 sold'
  },
  34: {
    id: 34,
    name: 'Jade Vine',
    imagePath: 'jade_vine_detail',
    price: 'NPR 9000',
    location: 'Protected Collection',
    description: 'Jade Vines produce stunning turquoise-colored flowers that hang in grape-like clusters. This rare climbing plant is one of the most spectacular flowering vines in the world.',
    category: 'Rare Plants',
    tags: ['Rare', 'Climbing', 'Unique Color'],
    rating: 4.7,
    sold: '4 sold'
  },
  35: {
    id: 35,
    name: 'Ghost Orchid',
    imagePath: 'ghost_orchid_detail',
    price: 'NPR 9000',
    location: 'Ultra Rare Collection',
    description: 'Ghost Orchids are legendarily rare epiphytic orchids with ethereal white flowers. They are extremely difficult to cultivate and are considered holy grail plants among collectors.',
    category: 'Rare Plants',
    tags: ['Rare', 'Endangered', 'Epiphytic'],
    rating: 5.0,
    sold: '1 sold'
  },
  36: {
    id: 36,
    name: 'Corpse Flower',
    imagePath: 'corpse_flower_detail',
    price: 'NPR 9000',
    location: 'Research Facility',
    description: 'The Corpse Flower is famous for its massive size and unique smell when blooming. This rare plant can grow over 10 feet tall and blooms very rarely, making it a botanical wonder.',
    category: 'Rare Plants',
    tags: ['Rare', 'Unusual', 'Giant'],
    rating: 4.6,
    sold: '2 sold'
  }
};

// Image maps
export const plantImages = {
  rose: require('../assets/rose.png'),
  daisy: require('../assets/daisy.png'),
  hibiscus: require('../assets/hibiscus.png'),
};

export const serviceImages = {
  landscaping: require('../assets/landscaping.png'),
  garden_design: require('../assets/garden_design.png'),
  plant_care: require('../assets/plant_care.png'),
  garden_maintenance: require('../assets/garden_maintenance.png'),
};

// Indoor plant images
export const indoorPlantImages = {
  snake_plant: require('../assets/snake-plant.png'),
  monstera: require('../assets/monstera.png'),
  peace_lily: require('../assets/peace-lily.png'),
  rubber_plant: require('../assets/rubber-plant.png'),
  pothos: require('../assets/posthos.png'),
  zz_plant: require('../assets/zz-plant.png'),
};

// Outdoor plant images
export const outdoorPlantImages = {
  cherry_blossom: require('../assets/cherry-blossom.png'),
  rose_garden: require('../assets/rose-garden.png'),
  mango_tree: require('../assets/mango-tree.png'),
  bougainvillea: require('../assets/bougainvillea.png'),
  sunflower: require('../assets/sunflower.png'),
  bamboo: require('../assets/bamboo.png'),
};

// Rare plant images
export const rarePlantImages = {
  blue_poppy: require('../assets/blue-poppy.png'),
  black_orchid: require('../assets/black-orchid.png'),
  dragon_blood: require('../assets/dragon-blood.png'),
  jade_vine: require('../assets/jade-vine.png'),
  ghost_orchid: require('../assets/ghost-orchid.png'),
  corpse_flower: require('../assets/corpse-flower.png'),
};

// Category images for CategoryScreen
export const categoryImages = {
  indoor_plant: require('../assets/indoor-plant.png'),
  outdoor_plant: require('../assets/outdoor-plant.png'),
  rare_plant: require('../assets/rare-plant.png'),
};

// Category product images
export const categoryProductImages = {
  cherry_blossom_category: require('../assets/cherry-blossom.png'),
  blue_poppy_category: require('../assets/blue-poppy.png'),
};

// Detail page images (you can reuse existing images or add new detail-specific ones)
export const plantDetailImages = {
  // Category plants
  cherry_blossom_detail: require('../assets/cherry-blossom.png'),
  blue_poppy_detail: require('../assets/blue-poppy.png'),
  
  // Indoor plants (reuse existing images)
  snake_plant_detail: require('../assets/snake-plant.png'),
  monstera_detail: require('../assets/monstera.png'),
  peace_lily_detail: require('../assets/peace-lily.png'),
  rubber_plant_detail: require('../assets/rubber-plant.png'),
  pothos_detail: require('../assets/posthos.png'),
  zz_plant_detail: require('../assets/zz-plant.png'),
  
  // Outdoor plants
  cherry_blossom_outdoor_detail: require('../assets/cherry-blossom.png'),
  rose_garden_detail: require('../assets/rose-garden.png'),
  mango_tree_detail: require('../assets/mango-tree.png'),
  bougainvillea_detail: require('../assets/bougainvillea.png'),
  sunflower_detail: require('../assets/sunflower.png'),
  bamboo_detail: require('../assets/bamboo.png'),
  
  // Rare plants
  blue_poppy_rare_detail: require('../assets/blue-poppy.png'),
  black_orchid_detail: require('../assets/black-orchid.png'),
  dragon_blood_detail: require('../assets/dragon-blood.png'),
  jade_vine_detail: require('../assets/jade-vine.png'),
  ghost_orchid_detail: require('../assets/ghost-orchid.png'),
  corpse_flower_detail: require('../assets/corpse-flower.png'),
};

// Avatar images
export const avatarImages = {
  niranjan: require('../assets/avatars/niranjan.png'),
  aavash: require('../assets/avatars/aavash.png'),
  vishal: require('../assets/avatars/vishal.png'),
};
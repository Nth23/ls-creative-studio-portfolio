const ltoImages = import.meta.glob(
  "../assets/images/projects/project-lto/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
const ltoGallery = Object.values(ltoImages);

const admiraltyImages = import.meta.glob(
  "../assets/images/projects/admiralty/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
const admiraltyGallery = Object.values(admiraltyImages);

const havaLoungeImages = import.meta.glob(
  "../assets/images/projects/hava-lounge/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
const havaLoungeGallery = Object.values(havaLoungeImages);

const rococoImages = import.meta.glob(
  "../assets/images/projects/rococo/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
const rococoGallery = Object.values(rococoImages);

const projects = [
  {
    id: 1,
    title: "Project LTO",
    location: "Lagos, Nigeria",
    year: "2024",
    category: "Residential",
    description:
      "Interior design for a bachelor who works in a tech company and spends more time working at home. Spaces include sitting room, bedroom, home office, laundry and kitchen.",
    image: ltoGallery[0],
    floorPlan: null,
    features: [
      "Dining Space",
      "Custom Bookshelves",
      "Living Room",
      "Wall Art Curation",
      "Bedroom Design",
      "Rafia Wardrobe",
      "Kitchen Area",
    ],
    gallery: ltoGallery,
  },
  {
    id: 2,
    title: "Admiralty Water Front",
    location: "Lagos, Nigeria",
    year: "2024",
    category: "Hospitality",
    description:
      "A waterfront hospitality destination designed to feel authentic, enduring and intuitively connected to its guests.",
    image: admiraltyGallery[0],
    floorPlan: null,
    gallery: admiraltyGallery,
  },
  {
    id: 3,
    title: "Hava Lounge",
    location: "Lagos, Nigeria",
    year: "2023",
    category: "Hospitality",
    description:
      "A refined hospitality destination designed to feel authentic, enduring and intuitively connected to its guests.",
    image: havaLoungeGallery[0],
    floorPlan: null,
    gallery: havaLoungeGallery,
  },
  {
    id: 4,
    title: "Rococo Fine Dining",
    location: "Lagos, Nigeria",
    year: "2023",
    category: "Hospitality",
    description:
      "Fine dining restaurant and bar with rich baroque and rococo style, featuring a stained glass skylight and ornate interiors.",
    image: rococoGallery[0],
    floorPlan: null,
    gallery: rococoGallery,
  },
  {
    id: 5,
    title: "LIV Restaurant and Bar",
    location: "Victoria Island, Lagos",
    year: "2023",
    category: "Hospitality",
    description:
      "Full restoration and renovation of an existing nightclub into a luxury fine dining restaurant on Ligali Ayorinde.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    floorPlan: null,
  },
  {
    id: 6,
    title: "McDonald Highrise",
    location: "Ikoyi, Lagos",
    year: "2023",
    category: "Residential",
    description:
      "10-story high-rise comprising 42 units including 2-bedroom, 4-bedroom and 5-bedroom penthouse apartments.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200",
    floorPlan: null,
    comingSoon: true,
  },
  {
    id: 7,
    title: "5-Bedroom Condo",
    location: "Lagos, Nigeria",
    year: "2023",
    category: "Residential",
    description:
      "Luxury 5-bedroom condo design blending comfort and refined architectural detailing for family living.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
    floorPlan: null,
    comingSoon: true,
  },
  {
    id: 8,
    title: "Airtel Headquarters",
    location: "Lagos, Nigeria",
    year: "2023",
    category: "Commercial",
    description:
      "Corporate headquarters design balancing functionality, brand identity and a modern workplace experience.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    floorPlan: null,
    comingSoon: true,
  },
  {
    id: 9,
    title: "Hans and Renee Cafe",
    location: "Lagos, Nigeria",
    year: "2022",
    category: "Commercial",
    description:
      "A warm, inviting cafe space designed for comfort, community and a memorable customer experience.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200",
    floorPlan: null,
    comingSoon: true,
  },
  {
    id: 10,
    title: "Hans and Renee Head Office",
    location: "Lagos, Nigeria",
    year: "2022",
    category: "Corporate",
    description:
      "Corporate office design focused on productivity, brand expression and employee wellbeing.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200",
    floorPlan: null,
    comingSoon: true,
  },
  {
    id: 11,
    title: "Hostel Design",
    location: "Nigeria",
    year: "2022",
    category: "Institutional",
    description:
      "Student hostel design for a private university, accommodating 200 students per block across 8 blocks with recreational and outdoor spaces.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200",
    floorPlan: null,
    comingSoon: true,
  },
];

export default projects;

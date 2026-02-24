export type ProjectDetail = {
  slug: string;
  title: string;
  location: string;
  cover: string;        // used on grid card
  scope: string;
  designDrivers: string;
  role: string;
  images: string[];     // 16:9 gallery images
};

export const projects: ProjectDetail[] = [
  {
    slug: "hotel-brookmere",
    title: "Hotel Brookmere",
    location: "Saratoga Springs, NY",
    cover: "/hospitality-project-1.webp",

    scope:
      "Concept development and full interior design vision for a boutique hospitality property, including lobby experience, guestroom direction, lounge/bar concept, and exterior arrival sequence. The design focused on creating a warm, layered mountain retreat aesthetic using natural materials, textural lighting, and curated gathering spaces intended to encourage longer guest dwell time and repeat visitation.",

    designDrivers:
      "Warm, layered retreat character. Natural materials with refined contrast. Lighting as a primary atmosphere tool. Strong ‘arrival moment’ and lobby energy. Guestroom calm with elevated detail.",

    role:
      "Lead Designer & Creative Direction. Responsible for overall design narrative, mood development, space planning concepts, finish palette selection, furniture direction, lighting concepts, and guest experience programming.",

    images: [
      "/brookmere-01.webp",
      "/brookmere-02.webp",
      "/brookmere-03.webp",
      "/brookmere-04.webp",
      "/brookmere-05.webp",
      "/brookmere-06.webp",
    ],
  },

  // Add others as you go...
];
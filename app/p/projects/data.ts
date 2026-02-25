export type ProjectSpace = "guest-rooms" | "public-spaces" | "food-beverage";

export const PROJECT_SPACES: readonly ProjectSpace[] = [
  "guest-rooms",
  "public-spaces",
  "food-beverage",
];

export type ProjectImage = {
  src: string;
  space: ProjectSpace;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  location: string;
  cover: string;
  coverSpace: ProjectSpace;
  scope: string;
  designDrivers: string;
  role: string;
  spaces: ProjectSpace[];
  images: ProjectImage[];
};

export const spaceLabels: Record<ProjectSpace, string> = {
  "guest-rooms": "Guest Rooms",
  "public-spaces": "Public Spaces",
  "food-beverage": "Food & Beverage",
};

export const projects: ProjectDetail[] = [
  {
    slug: "hotel-brookmere",
    title: "Hotel Brookmere",
    location: "Saratoga Springs, NY",
    cover: "/hospitality-project-1.webp",
    coverSpace: "public-spaces",
    scope:
      "Concept development and full interior design vision for a boutique hospitality property, including lobby experience, guestroom direction, lounge/bar concept, and exterior arrival sequence.",
    designDrivers:
      "Warm, layered retreat character. Natural materials with refined contrast. Lighting as a primary atmosphere tool. Strong arrival moment and lobby energy.",
    role:
      "Lead Designer & Creative Direction. Responsible for overall design narrative, mood development, space planning concepts, finish palette selection, furniture direction, and lighting concepts.",
    spaces: ["guest-rooms", "public-spaces", "food-beverage"],
    images: [
      { src: "/brookmere-07.webp", space: "food-beverage" },
      { src: "/brookmere-01.webp", space: "public-spaces" },
      { src: "/brookmere-03.webp", space: "guest-rooms" },
      { src: "/brookmere-04.webp", space: "food-beverage" },
      { src: "/brookmere-02.webp", space: "guest-rooms" },
      { src: "/brookmere-05.webp", space: "public-spaces" },
      { src: "/brookmere-06.webp", space: "guest-rooms" },
      { src: "/brookmere-08.webp", space: "guest-rooms" },
      { src: "/brookmere-09.webp", space: "public-spaces" },
      { src: "/brookmere-10.webp", space: "guest-rooms" },
      { src: "/brookmere-11.webp", space: "public-spaces" },
      { src: "/brookmere-12.webp", space: "guest-rooms" },
      { src: "/brookmere-13.webp", space: "food-beverage" },
    ],
  },
  {
    slug: "la-roux",
    title: "La Roux",
    location: "New Orleans, LA",
    cover: "/le-roux-02.webp",
    coverSpace: "food-beverage",
    scope:
      "Boutique restaurant and bar concept centered around layered lighting and an approachable luxury atmosphere.",
    designDrivers:
      "Night-forward atmosphere, strong bar identity, and durable high-touch finishes.",
    role:
      "Design direction and hospitality planning, including front-of-house experience and seating mix.",
    spaces: ["food-beverage"],
    images: [
      { src: "/le-roux-01.webp", space: "food-beverage" },
      { src: "/le-roux-02.webp", space: "food-beverage" },
      { src: "/le-roux-03.webp", space: "food-beverage" },
      { src: "/le-roux-04.webp", space: "food-beverage" },
      { src: "/le-roux-05.webp", space: "food-beverage" },
      { src: "/le-roux-06.webp", space: "food-beverage" },
    ],
  },
  {
    slug: "laurel-oak",
    title: "Laurel Oak",
    location: "New Orleans, LA",
    cover: "/hospitality-project-4.webp",
    coverSpace: "public-spaces",
    scope:
      "Hospitality renovation concept focused on arrival sequence, lounge transitions, and guest room refinement.",
    designDrivers:
      "Clear circulation, quiet premium guest rooms, and flexible public spaces for day/evening use.",
    role: "Interior concept development, experience mapping, and phased project strategy.",
    spaces: ["guest-rooms", "public-spaces"],
    images: [
      { src: "/brookmere-03.webp", space: "guest-rooms" },
      { src: "/brookmere-06.webp", space: "public-spaces" },
    ],
  },
];

const products = [
  {
    id: "1",
    name: "Lawn Aid",
    price: 4000,
    image: "/assets/lawn-aid.avif",
    applicationDate: "2025-06-01",
  },
  {
    id: "2",
    name: "Lawn Vitality",
    price: 6500,
    image: "/assets/lawn-vitality.avif",
    applicationDate: "2025-09-02",
  },
  {
    id: "3",
    name: "Pet Patch",
    price: 3200,
    image: "/assets/pet-patch.avif",
    applicationDate: "2025-08-27",
  },
  {
    id: "4",
    name: "Potassium Boost",
    price: 1800,
    image: "/assets/potassium-boost.avif",
    applicationDate: "2025-05-28",
  },
  {
    id: "5",
    name: "Fall Fortify",
    price: 1800,
    image: "/assets/fall-fortify.avif",
    applicationDate: "2025-07-04",
  },
  {
    id: "6",
    name: "Drought Defense",
    price: 1800,
    image: "/assets/drought-defense.avif",
    applicationDate: "2025-08-07",
  },
];

// Mimic a mock API call to get products
export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 750);
  });

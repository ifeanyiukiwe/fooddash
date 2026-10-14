export type Shop = {
  id: string;
  name: string;
  description: string;
  isOpen: boolean;
  image?: string;
  deliveryMinMins: number;
  deliveryMaxMins: number;
};

export const shops: Shop[] = [
  {
    id: "dannies-corner-shop",
    name: "Dannies",
    description: "Groceries and everyday essentials",
    isOpen: true,
    deliveryMinMins: 10,
    deliveryMaxMins: 20,
  },
  {
    id: "bennies-corner-shop",
    name: "Bennies",
    description: "Classic Wines and Spirits",
    isOpen: true,
    deliveryMinMins: 20,
    deliveryMaxMins: 35,
  },
  {
    id: "esties-corner-shop",
    name: "Esties",
    description: "Fresh bread and daily baked pastries",
    isOpen: true,
    deliveryMinMins: 15,
    deliveryMaxMins: 25,
  },
  {
    id: "tasties-corner-shop",
    name: "Tasties",
    description: "Toys and games for all ages",
    isOpen: false,
    deliveryMinMins: 25,
    deliveryMaxMins: 40,
  },
];

import { ImageSourcePropType } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


// user information

export interface User {
  id: number;
  name: string;
  last_name: string;
  image?: ImageSourcePropType;
}

export const user: User = {
  id: 1,
  name: 'Jeremia',
  last_name: "Garcia",
  image: require("../assets/user/avatar.png"),
}

// Categories info

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Watch",
  },
  {
    id: 2,
    name: "Mobile",
  },
  {
    id: 3,
    name: "TV",
  },
  {
    id: 4,
    name: "Computers"
  }
];
// Colors

export interface Color {
  id: number;
  code: string;
}


const colors: Color[] = [
  {
    id: 1,
    code: Colors.primary,
  },
  {
    id: 2,
    code: Colors.secondary,
  },
  {
    id: 3,
    code: Colors.text,
  },
];
// sizes

export interface Size {
  id: number;
  name: string | any;
}

const sizes: Size[] = [
  { id: 1, name: "S" },
  { id: 2, name: "M" },
  { id: 3, name: "L" },

];

// Products info

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  image?: ImageSourcePropType;
  reviews: number;
  rating: number;
  brand: string;
  colors?: Color[];
  sizes?: Size[];
}


export const watches: Product[] = [
  {
    id: 1,
    name: "Rolex Day-Date 40",
    price: 14999,
    category: categories[0],
    description:
      "Rolex Day-Date, with its distinctive President bracelet, is a watch of first-class stature.",
    image: require("../assets/products/watch/rolex-date-40.jpg"),
    reviews: 100,
    rating: 5,
    brand: "Rolex",
    // colors: ["Gold", "Silver"],
    sizes
  },
  {
    id: 2,
    name: "Omega Seamaster",
    price: 9999,
    category: categories[0],
    description:
      "The Omega Seamaster is a classic watch that combines style and functionality.",
    image: require("../assets/products/watch/omega-seamaster-aqua-terra.jpg"),
    reviews: 80,
    rating: 4,
    brand: "Omega",
    // colors: ["Gold", "Silver", "Black"],
    sizes
  },
  {
    id: 3,
    name: "Breitling Navitimer",
    price: 12999,
    category: categories[0],
    description:
      "The Breitling Navitimer is a classic pilot's watch, with its iconic slide rule bezel.",
      image: require("../assets/products/watch/breatlimer.jpg"),
      reviews: 90,
    rating: 4.5,
    brand: "Breitling",
    // colors: ["Gold", "Silver"],
    // sizes: ["S", "M", "L"]
  },
  {
    id: 4,
    name: "Patek Philippe",
    price: 27999,
    category: categories[0],
    description:
      "The Patek Philippe Nautilus is a classic watch with its iconic porthole-style case.",
      image: require("../assets/products/watch/patek.jpg"),
      reviews: 150,
    rating: 5,
    brand: "Patek Phil..",
    // colors: ["Gold", "Silver"],
    sizes
  },
  {
    id: 5,
    name: "Cartier Santos",
    price: 15999,
    category: categories[0],
    description:
      "The Cartier Santos is a classic watch with its iconic square case and exposed screws.",
      image: require("../assets/products/watch/cartier.jpg"),
      reviews: 120,
    rating: 4.5,
    brand: "Cartier",
    // colors: ["Gold", "Silver"],
    sizes
  }
];
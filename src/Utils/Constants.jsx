export const SavedData = {
  GROCERIES: "groceries",
  CART_DATA: "cart",
  HISTORY: "history",
};
export const cacheDataGroceries = "groceriesApp-V1";

export const cacheDataPathList = [
  "/",
  "/index.html",
  "/cart",
  "/service-worker.js",
  "/static/js/bundle.js",
  "logo192.png",
  "favicon.ico",
  "/manifest.json", // If you have a manifest file
  // Add any other assets or static files you want to cache
];

export const filesToCache = [
  "build/index.html",
  "build/asset-manifest.json",
  "build/favicon.ico",
  "build/service-worker.js.map",
  "build/service-worker.js.LICENSE.txt",
  "build/service-worker.js",
  "build/robots.txt",
  "build/manifest.json",
  "build/logo512.png",
  "build/logo192.png",
  "build/static/js/787.aedc4bec.chunk.js",
  "build/static/js/787.aedc4bec.chunk.js.map",
  "build/static/js/main.c9633a93.js",
  "build/static/js/main.c9633a93.js.LICENSE.txt",
  "build/static/js/main.c9633a93.js.map",
  "build/static/css/main.d2b2b605.css",
  "build/static/css/main.d2b2b605.css.map",
];

const quantityToPriceMap = new Map();
quantityToPriceMap.set(1, 10);
quantityToPriceMap.set(1, 10);
quantityToPriceMap.set(1, 10);

export const defaultObject2 = {
  id: 0,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  rates: () => {
    return quantityToPriceMap;
  },
};
export const defaultObject = {
  id: 1,
  barcode: "",
  brand: "MotherDairy",
  name: "Double toned milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [{ quantity: 1, price: 25 }],
};
export const defaultObject3 = {
  id: 3,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};
export const defaultObject4 = {
  id: 4,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};
export const defaultObject5 = {
  id: 5,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};

export const initObject = {
  barcode: "",
  brand: "",
  name: "",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 1,
  unit: "kg",
  purchaseQuantity: 1,
  rates: [{ quantity: 1, price: "" }],
};

const initHistoryObj = { name: "Empty", snapshot: [] };

export const metricChartArray = [
  ["Kg", "1000"],
  ["g", "1"],
  ["ltr", "1000"],
  ["ml", "1"],
];

export const metricChart = new Map(metricChartArray);

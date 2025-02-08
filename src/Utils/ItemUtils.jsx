import { metricChart } from "./Constants";

export const getMiliUnit = (item) => {
  let unit = metricChart.get(item.unit);
  return item.weight * unit;
};

export const getPrice = (item) => {
  const quantity = item.purchaseQuantity;
  if (!quantity) {
    return 0;
  }
  const quantityArray = [];

  item.rates.forEach((element) => {
    quantityArray.push(element.quantity);
  });
  const sortedArray = quantityArray.sort((a, b) => {
    return a - b;
  });

  let rateCategory = "";
  sortedArray.forEach((element) => {
    if (element <= quantity) {
      rateCategory = element;
      return;
    }
  });

  const selectedRate = item.rates.filter((rate) => {
    return rate.quantity === rateCategory;
  });

  return selectedRate[0].price;
};

export const getPrice2 = (item, quantity) => {
  const rateMap = item.rates;
  const quantityArray = [];
  const iterator = rateMap.keys();
  for (let index = 0; index < item.rates.size; index++) {
    quantityArray.push(iterator.next().value);
  }

  const sortedArray = quantityArray.toSorted();
  const quant = sortedArray.reverse().forEach((element) => {
    if (element < quantity) {
      return element;
    }
  });
  return rateMap.get(quant);
};

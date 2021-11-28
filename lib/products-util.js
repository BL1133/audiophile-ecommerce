import fs from 'fs';
import path from 'path';

const data = require('../data.json');

export function getProductData(productSlug) {
  const product = data.find(({ slug }) => slug === productSlug);

  return product;
}

export function getProductsFromCategory(category) {
  const products = data.filter((product) => product.category === category);

  return products.map((product) => {
    return {
      params: {
        slug: product.slug,
      },
    };
  });
}

import classes from './category.module.scss';
import ProductSection from '../../components/templates/product-section/product-section';

import ProductInfo from '../../components/modules/product-info';
import SeeProduct from '../../components/elements/buttons/see-product';
import ProductWrapper from '../../components/modules/product-wrapper';
import data from '../../data.json';
import ImageLoader from '../../components/modules/imageLoader';

export default function Category({ category }) {
  const filteredProducts = data.filter(
    (product) => product.category === category
  );

  return (
    <ProductSection title={category.toUpperCase()}>
      <section className={`${classes.section} u-margin-b-m`}>
        {filteredProducts.map((product, index) => (
          <ProductWrapper key={index} idx={index}>
            <ImageLoader
              desktop={`/assets/category-${product.category}/desktop/image-${product.slug}.jpg`}
              tablet={`/assets/category-${product.category}/tablet/image-${product.slug}.jpg`}
              mobile={`/assets/category-${product.category}/mobile/image-${product.slug}.jpg`}
              component="product-category"
            />
            <div className={classes.product}>
              <ProductInfo
                centered={true}
                isNewProduct={product.new}
                title={product.name}
                description={product.description}
              />
              <div className={classes.button}>
                <SeeProduct
                  orange={true}
                  url={`/${product.category}/${product.slug}`}
                />
              </div>
            </div>
          </ProductWrapper>
        ))}
      </section>
    </ProductSection>
  );
}

import classes from './index.module.scss';
import ProductSection from '../../components/templates/product-section/product-section';

import ProductInfo from '../../components/modules/product-info';
import SeeProduct from '../../components/elements/buttons/see-product';
import ProductWrapper from '../../components/modules/product-wrapper';
import data from '../../data.json';
import ImageLoader from '../../components/modules/imageLoader';

export default function EarphonesSection() {
  const filteredProducts = data.filter(
    (product) => product.category === 'earphones'
  );

  return (
    <ProductSection title="Earphones">
      <section className={`${classes.section} u-margin-b-m`}>
        {filteredProducts.map((product) => (
          <ProductWrapper key={product.id}>
            <ImageLoader
              desktop={`/assets/category-${product.category}/desktop/image-${product.slug}.jpg`}
              tablet={`/assets/category-${product.category}/tablet/image-${product.slug}.jpg`}
              mobile={`/assets/category-${product.category}/mobile/image-${product.slug}.jpg`}
              component="product-category"
            />
            <div className={classes.product}>
              <ProductInfo
                centered={true}
                newProduct={true}
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

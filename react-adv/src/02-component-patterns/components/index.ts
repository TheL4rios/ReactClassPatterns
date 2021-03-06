import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';

// export { ProductCard } from './ProductCard';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;
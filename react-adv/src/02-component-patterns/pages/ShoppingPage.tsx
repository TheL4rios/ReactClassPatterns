import ProductCard, { ProductTitle, ProductImage, ProductButtons } from '../components';
import { products } from '../data/products';

import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {/* <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-img"/>
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard> */}

                {
                    products.map(product => (
                        <ProductCard 
                            key={ product.id } 
                            product={ product } 
                            className="bg-dark text-white" 
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-img"/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }

                {/* <ProductCard product={ product } style={{ background: 'red' }}>
                    <ProductImage/>
                    <ProductTitle style={{ background: 'white' }}/>
                    <ProductButtons/>
                </ProductCard> */}
            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard 
                            key={ key } 
                            product={ product } 
                            className="bg-dark text-white" 
                            style={{ width: '100px' }}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-img"/>
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>

            {/* <div>
                <code>
                    {
                        JSON.stringify(shoppingCart)
                    }
                </code>
            </div> */}

        </div>
    )
}

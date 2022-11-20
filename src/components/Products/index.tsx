import { FC, useState } from 'react';
import { Product } from '../../utils/types';
import AddForm from './AddForm';
import ProductItem from './ProductItem';
import { ProductListStyled, ProductsSectionStyled } from './styles';

type Props = {
    products: Product[]
};

const productBoilerplate = {
    id: '',
    name: '',
    description: '',
    price: 0,
    dateCreated: new Date(),
}

const ProductList: FC<Props> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(productBoilerplate);

    return (
        <ProductsSectionStyled>
            <ProductListStyled>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </ProductListStyled>
            <AddForm selectedProduct={selectedProduct} />
        </ ProductsSectionStyled>
    );
};

export default ProductList;
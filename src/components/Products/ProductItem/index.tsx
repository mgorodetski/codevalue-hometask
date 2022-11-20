import { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../../../actions/productActions'
import { Product } from '../../../utils/types'
import { ProductItemStyled } from './styles'
import img from '../../../img/img-placeholder.png'

type Props = {
    product: Product,
    setSelectedProduct: (product: Product) => void,
}

const ProductItem: FC<Props> = ({ product, setSelectedProduct }) => {
    const { id, name, description } = product;
    const dispatch = useDispatch();

    const deleteProduct = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(deleteProductAction(id));
    };

    return (
        <ProductItemStyled onClick={() => setSelectedProduct(product)}>
            <img src={img} alt="img placeholder" />
            <div className="product-text">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <button type="button" className="btn btn_delete" onClick={deleteProduct}>Delete</button>
        </ProductItemStyled>
    );
};

export default ProductItem
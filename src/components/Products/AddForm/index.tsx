import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProductAction } from '../../../actions/productActions';
import { Product } from '../../../utils/types';
import { AddFormStyled } from './styles';
import img from '../../../img/img-placeholder.png';

type Props = {
    selectedProduct: Product,
}

const AddForm: FC<Props> = ({ selectedProduct }) => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const dispatch = useDispatch();

    const updateProduct = (event: FormEvent) => {
        event.preventDefault();
        dispatch(updateProductAction({
            id: selectedProduct.id,
            name,
            description,
            price,
            dateCreated: selectedProduct.dateCreated,
        }));
    };

    useEffect(() => {
        setPrice(selectedProduct.price);
        setName(selectedProduct.name);
        setDescription(selectedProduct.description);
    }, [selectedProduct]);

    return (
        <AddFormStyled onSubmit={updateProduct}>
            <img src={img} alt="img placeholder" />
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={name}
                maxLength={30}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
            />
            <label htmlFor="description">Description</label>
            <input
                id="description"
                type="text"
                value={description}
                maxLength={200}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.currentTarget.value)}
            />
            <label htmlFor="price">Price</label>
            <input
                id="price"
                type="number"
                value={price}
                min={0}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(+e.target.value)}
            />
            <button type="submit" className="btn">Save</button>
        </AddFormStyled>
    );
};

export default AddForm;

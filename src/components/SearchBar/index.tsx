import React, { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProductAction, sortByDateAction, sortByNameAction } from '../../actions/productActions';
import { SearchPanelStyled } from './styles';

type Props = {
    setFilter: (name: string) => void;
}

const SearchBar: FC<Props> = ({ setFilter }) => {
    const dispatch = useDispatch();

    const addDummyProduct = () => {
        dispatch(addProductAction({
            id: uuidv4(),
            name: "product name",
            description: "product description",
            price: 0,
            dateCreated: new Date()
        }));
    }



    // const sortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    //     switch (e.target.value) {
    //         case 'name':
    //             dispatch(sortByNameAction());
    //             break;
    //         case 'dateCreated':
    //             dispatch(sortByDateAction());
    //             break;
    //     }
    // }

    const sortActionType = {
        name: sortByNameAction(),
        dateCreated: sortByDateAction()
    }
    const sortByWithLiteral = (e: ChangeEvent<HTMLSelectElement>) => {
        const getSortAction = (value: string) => dispatch((sortActionType as any)[value]);
        getSortAction(e.target.value);
    }

    const findProductsByName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }

    return (
        <SearchPanelStyled>
            <button type="button" onClick={addDummyProduct} className="btn">+ Add</button>
            <input type="search" onChange={findProductsByName} placeholder="Search product" />
            <span> Sort by: </span>
            <select id="sort" onChange={sortByWithLiteral}>
                <option value="name">Name</option>
                <option value="dateCreated">Recently added</option>
            </select>
        </SearchPanelStyled>
    )
}

export default SearchBar
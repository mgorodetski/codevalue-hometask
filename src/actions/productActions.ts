import { Product } from "../utils/types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_DATE = "SORT_BY_DATE";
export const FIND_BY_NAME = "FIND_BY_NAME";

export const addProductAction = (product: Product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

export const deleteProductAction = (id: string) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    };
};
export const updateProductAction = (product: Product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    };
};

export const sortByNameAction = () => {
    return {
        type: SORT_BY_NAME,
        payload: null
    };
};

export const sortByDateAction = () => {
    return {
        type: SORT_BY_DATE,
        payload: null
    };
};

export const findByNameAction = (name: string) => {
    return {
        type: FIND_BY_NAME,
        payload: name
    };
};

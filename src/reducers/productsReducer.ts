import { ADD_PRODUCT, DELETE_PRODUCT, SORT_BY_DATE, SORT_BY_NAME, UPDATE_PRODUCT } from "../actions/productActions";
import { Action, State } from "../utils/types";
import { defaultProducts } from "../utils/mockData";

const initialState = { products: defaultProducts }

export const productsReducer = (state: State = initialState, action: Action) => {
    const currentProducts = state.products;
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [...currentProducts, action.payload] };
        case DELETE_PRODUCT:
            return { ...state, products: currentProducts.filter(prod => prod.id !== action.payload) };
        case UPDATE_PRODUCT:
            const updatedProducts = currentProducts.map(prod => prod.id === action.payload.id ? action.payload : prod);
            return { ...state, products: updatedProducts };
        case SORT_BY_NAME:
            currentProducts.sort((a, b) => a.name > b.name ? 1 : -1);
            return { ...state, products: [...currentProducts] }
        case SORT_BY_DATE:
            currentProducts.sort((a, b) => a.dateCreated > b.dateCreated ? 1 : -1);
            return { ...state, products: [...currentProducts] }
        default:
            return state
    }
}
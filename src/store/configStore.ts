import { createStore } from "redux";
import { productsReducer } from "../reducers/productsReducer";
import { defaultProducts } from "../utils/mockData";

const initialState = {
    products: defaultProducts,
}

export const store = createStore(productsReducer, initialState);

store.subscribe(() => {
    localStorage.setItem("products", JSON.stringify(store.getState().products));
});
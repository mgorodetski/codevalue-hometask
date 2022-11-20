export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    dateCreated: Date
};

export interface State {
    products: Product[]
};

export interface Action {
    type: string,
    payload: any
};

export type Dispatch = (action: Action) => void;

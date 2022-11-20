import { Product } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const defaultProducts: Product[] = [
    {
        id: uuidv4(),
        name: "product1",
        description: "product1 description",
        price: 10,
        dateCreated: new Date(2022, 11, 3)
    },
    {
        id: uuidv4(),
        name: "product2",
        description: "product2 description",
        price: 20,
        dateCreated: new Date(2022, 11, 2)
    },
    {
        id: uuidv4(),
        name: "product3",
        description: "product3 description",
        price: 30,
        dateCreated: new Date(2022, 11, 1)
    },
];

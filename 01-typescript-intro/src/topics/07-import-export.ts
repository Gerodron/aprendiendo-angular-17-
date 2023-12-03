import { IProduct, taxesCalculation } from "./06-fuction-destructuring";
// AL hacer importaciones lo que importamos es todo el archivo mas no una funcion o interfaz en especifico

const shoppingCart : IProduct[] = [
    {
        description : 'Nokia',
        price : 100
    },
    {
        description : 'IPad',
        price : 10
    },
    {
        description : 'Nokia',
        price : 10
    }
];

const [total, tax] = taxesCalculation({products:shoppingCart, tax:0.15})
console.log(`${total}, ${tax}`)
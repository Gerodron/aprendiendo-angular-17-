export interface IProduct {
    description: string;
    price: number;
}

const productos: IProduct[] = [
    {
        description: 'Nokia A1',
        price: 10,
    },
    {
        description: 'iPad',
        price: 10,
    },
    {
        description: 'Nokia A1',
        price: 10,
    },
    {
        description: 'iPad',
        price: 10,
    },
];

const shoppingCart: IProduct[] = productos;
const tax: number = 0.12;

interface ITaxCalculationOption {
    products: IProduct[];
    tax: number;
}

export function taxesCalculation({ products, tax }: ITaxCalculationOption): [number, number] {
    let total: number = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    // return `El subtotal de tu compra es ${total} y después de impuestos es ${total * tax + total}`;
    return [total, tax*total]
}

const [p1, p2] = taxesCalculation({ products: shoppingCart, tax });
console.log(`El total es: `, p1);
console.log(`El tax es: `  , p2);

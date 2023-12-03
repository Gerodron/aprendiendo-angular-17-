export {};

function addNumber(a: number, b: number) {
    return a + b;
}

const addNumerArrow = (a: number, b: number): string => {
    return `${a + b}`;
};

function multiple(firstNumber: number, secondNumber?: number, base: number = 2): number {
    // if(secondNumber != undefined && secondNumber! >= 1){
    //     return firstNumber*secondNumber!*base
    // }else{
    //     return firstNumber * secondNumber! * base;
    // }
// El operador ?? proporciona una manera concisa de asignar un valor por defecto
// en caso de que una variable sea null o undefined.

    return firstNumber * (secondNumber ?? 1) *base
}

const result1: number = addNumber(1, 2);
const result2: string = addNumerArrow(2, 3);
const result3: number = multiple(1);
console.log({ resultado1: result1 });
console.log({ resultado2: result2 });
console.log({ resultado3: result3 });

interface ICharacter {
    name: string;
    hp: number;
    showhp: () => void;
}

const healCharacter = (character: ICharacter, amount: number) => {
    character.hp += amount;
};

const stride: ICharacter = {
    name: 'Saul',
    hp: 60,
    showhp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
};

healCharacter(stride, 10);
healCharacter(stride, 10);
healCharacter(stride, 10);
stride.showhp();

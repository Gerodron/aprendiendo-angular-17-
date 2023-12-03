export interface IPassenger {
    name      :string;
    children? : string [];
}

const passenger1 : IPassenger = {
    name : 'Saul'
}
const passenger2 : IPassenger = {
    name : 'Melissa',
    children : ['Juan','Miguel']
}

const printChildren = (passenger : IPassenger) : number => {
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log(howManyChildren)

    return howManyChildren
}

printChildren(passenger1)
export {};

interface ICharacter {
    name : string,
    hp : number,
    skills : string[],
    hometown? : string,
}

// let skills : string[] = ['power1','power2','power3'];

// let skills2 : string[] = ['power1','power2','power3'];

const stride : ICharacter = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Fuap'],
    hometown: undefined
}

stride.hometown = 'Rivendell';

console.table(stride);

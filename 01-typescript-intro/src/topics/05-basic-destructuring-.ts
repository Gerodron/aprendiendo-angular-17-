
interface IAudioPlayer {
    audioVolumen : number;
    songDuration : number;
    song : string;
    details : IDetails;
}

interface IDetails {
    author : string;
    year : number;
}

const audioPlayer : IAudioPlayer =  {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author : "Ed Sheeran",
        year   : 2015
    }
}

// const {audioVolumen : volumen} = audioPlayer
// const {songDuration : duracio} = audioPlayer
// const {song : anotherSong, songDuration : Duration} = audioPlayer
// const {details:{author : autor,  year : años}} = audioPlayer
// console.log(autor);

const {audioVolumen : volumen, songDuration : duracion, song: nombre, details} = audioPlayer;
const {author : autor , year : año} = details

console.log(`El volumen de la musica es ${volumen}, tiene una duracion de ${duracion} minutos ,se llama ${nombre}, su autor es ${autor}, su fecha de lanzamiento es ${año}`);



// const dbz : string  [] = ['Goku', 'Vegetaa', 'Trunks'];

// const [p1, p2, p3] = dbz

const dbz : string  [] = ['Goku', 'Vegetaa', 'Trunks'];

const [, , p3 = 'not found'] = dbz
console.log(`El personaje que escogiste es ${p3}`)

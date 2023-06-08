// let maximum = parseInt(prompt("masukkan Nilai maximum"));
// while(!maximum){
//     maximum = parseInt(prompt("Masukkan nilai maksimum"))
// }
// const targetNum = Math.floor(Math.random() * maximum) +1;
// console.log(targetNum);

// let guess = parseInt(prompt("Masukkan Nilai pertama kamu"));
// let attemps = 1;
// while(parseInt(guess) !== targetNum){
//     attemps++;
//     if(guess > targetNum){
//         guess = parseInt(prompt('terlalu tinggi, tebak lagi !'));
//     }else {
//         guess = parseInt(prompt('terlalu rendah tebak lagi'))
//     }
// }
// alert(`Selamat kamu benar dengan ${attemps} kali percobaan`)

const animes = [
    {
        title: "boruto",
        rating: 70
    },
    {
        title: "Goku",
        rating: 90
    },
    {
        title: "One pis",
        rating: 98
    },
]
animes.forEach(function(anime){
    console.log(`${anime.title} - ${anime.rating}/100`)
})
animeList = animes.map(function(anime){
    return anime.title.toUpperCase()
})
const random = () => (
    Math.floor(Math.random() * 50)
);

console.log("halo");

setTimeout(() => {
    console.log("masih disana nggak")
}, 2000);

const interval = setInterval(() => {
    console.log(Math.floor(Math.random()*20))
}, 1000);
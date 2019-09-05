// // for ( i = 9; i > -1; i-- ){console.log(i);}


// // let favouriteDrinks = ["coke", "rio","oasis"];
// // console.log(favouriteDrinks[0]);
// // console.log(favouriteDrinks[1]);
// // console.log(favouriteDrinks[2]);

// let favouriteFilms = ["shawshank", "jurassic park", "terminater", "it", "jaws"]
// /*console.log(favouriteFilms[0]);
// console.log(favouriteFilms[1]);
// console.log(favouriteFilms[2]);
// console.log(favouriteFilms[3]);
// console.log(favouriteFilms[4]);
// */
// for (i = 0; i< favouriteFilms.length; i++) {console.log(favouriteFilms[i]);}


// let Films = ["shawshank", "ghost busters", "terminater", "it", "jaws"]
// let currentFilm = "Anything but shawshank";
// while(currentFilm != "ghost busters"){
//     console.log(currentFilm);
//     currentFilm = Films[Math.floor(Math.random()*4)];
// }
// console.log(currentFilm);



// if (currentFilm != "ghost busters") {
//     console.log("Booo, We want ghost busters")
// }
// else {
//     console.log("Yay its ghost busters") 
// }

// let favFilms = [
//     "True Romance",
//     "Howl's Moving Castle",
//     "Scream",
//     "Scream 2",
// ]
// favFilms.push("Scream 3", "Scream 4")
// for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++) {
//     console.log(favFilms[filmIndex])
// }
// const filmChecker = () => {
//     if (favFilms[2] == "Ghostbusters") {
//         console.log("Boo. We want Ghostbusters.")
//     }
//     else {
//         console.log("Yay.It's Ghostbusters.")
//     }
// }
// filmChecker()

let number = 50;
let currentNumber = 0;
while(currentNumber != number){
    console.log(currentNumber);
    currentNumber = (Math.floor(Math.random()*51));
}
console.log(currentNumber);
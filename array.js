let frutas = ['maça', 'banana', 'laranja', 'uva', 'pera'];

             // 0,       1,         2,       3,        4
            frutas[3] = 'kiwi';// muda nome
             console.log(frutas[2]);
             console.log(frutas);
            frutas.push("Manga"); //Adiciona um objeto novo na array
            console.log(frutas);
            frutas.pop(); //Remove o Ultimo da array
            frutas.shift(); // Remove o primeiro

let num = [10,20,30,40,50];
// como pegar incremento
for(let i = 0; i < num.length; i++){
    console.log("Elemento" + num[i]);
}

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matriz[0][0]);

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}
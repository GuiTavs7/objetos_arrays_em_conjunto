// 1) USANDO ARRAYS DENTRO DE OBJETOS

let videoGame = {
    nome: "Xbox",
    valor: 3000,
    jogos: ["Final Fantasy", "Fallout", "Fifa"]
}

console.log("Objeto Video Game 1: ",videoGame);

// 2) USANDO OBJETOS DENTRO DE ARRAYS QUE ESTÃO DENTRO DE OUTRO OBJETO!

let jogo1 = {
    nome: "Final Fantasy"
}

let jogo2 = {
    nome: "Fallout"
}

let videoGame2 = {
    nome: "Xbox One",
    valor: 5000,
    jogos: [jogo1, jogo2]
}

// 2.1) Adicionando jogo a lista de jogos após o objeto ter sido criado com o método push() dos arrays

let jogo3 = {
    nome: "PES"
}

videoGame2.jogos.push(jogo3);

console.log("Objeto Video Game 2: ", videoGame2);

// 2.2) INSTANCIANDO OS OBJETOS DENTRO DO OBJETO PAI

let videoGame3 = {
    nome: "Nintendo Switch",
    valor: 6000,
    jogos: [
        {nome: "Zelda"},
        {nome: "Mario"}
    ]
}

let jogo4 = {
    nome: "Pokémon"
}

videoGame3.jogos.push(jogo4);

console.log("Objeto Video Game 3: ",videoGame3);

// 3) OBJETO DENTRO DE OUTRO OBJETO COM ARRAYS - SALADA DE FRUTAS DE OBJETOS E ARRAYS

let cliente = {
    nome: "Ricardo",
    ultimoPedido: {
        produto: "Xbox",
        valor: 3000,
        jogos: [
            {nome: "Halo"}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome); // Navegando para dentro do array que está dentro dos dois objetos
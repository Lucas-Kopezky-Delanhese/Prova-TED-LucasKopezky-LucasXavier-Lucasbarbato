import { criarPilha, colocarPilha, removerPilha, verseExiste} from './pilha.js'

// Cria o array de objetos para ser usados
let livro = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianças",
        paginas: 50,
        genero: "clássico",
    },
]

// Cria a pilha com tamanho 5 igual lista de exemplos
let pilha = criarPilha(5)

// For para andar na array e mostrar os livros colocados
for (let a = 0; a < livro.length; a++) {
    colocarPilha(pilha, livro[a])
    console.log("Livro " + livro[a].titulo + " inserido na pilha")
    
}
console.log("-------------------------------")

// For para correr a array e poder mostrar os livros removidos
for (let b = 0; b < livro.length; b++) {
    removerPilha(pilha, livro[b])
        console.log("Livro " + livro[b].titulo + " retirado da pilha")
}
console.log("-------------------------------")

// For para correr a array e poder Ver os livros
for (let c = 0; c < livro.length; c++) {
    verseExiste(pilha, livro[c].titulo)
}
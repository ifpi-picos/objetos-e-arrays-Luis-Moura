const usuarios = [
    {
        id: 1,
        nome: "João Silva",
        senha: "senha123"
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        senha: "senha456"
    },
    {
        id: 3,
        nome: "Carlos Souza",
        senha: "senha789"
    },
    {
        id: 4,
        nome: "Ana Lima",
        senha: "senha101"
    },
    {
        id: 5,
        nome: "Paulo Mendes",
        senha: "senha202"
    },
    {
        id: 6,
        nome: "Juliana Ferreira",
        senha: "senha303"
    },
    {
        id: 7,
        nome: "Bruno Costa",
        senha: "senha404"
    },
    {
        id: 8,
        nome: "Fernanda Rocha",
        senha: "senha505"
    },
    {
        id: 9,
        nome: "Ricardo Almeida",
        senha: "senha606"
    },
    {
        id: 10,
        nome: "Gabriela Pinto",
        senha: "senha707"
    }
];

export const addUser = (user) => {
    if(user) {
        usuarios.push(user)
    }
}

export const deleteUser = (id) => {
    if (id) {
        const idUser = usuarios.findIndex((user) => user.id === id)
        usuarios.splice(idUser)
    }
}

export const updateUser = (id, user) => {
    if (id, user) {
        const idUser = usuarios.findIndex((user) => user.id === id)
        usuarios[idUser] = user
    }
}

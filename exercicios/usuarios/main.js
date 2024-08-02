const { addUser, deleteUser, updateUser } = require("./dados");

addUser({ id: 10, nome: 'luis', senha: '123' });

deleteUser(10);

updateUser(10, {id: 6, nome: 'luisao', senha: '123'})
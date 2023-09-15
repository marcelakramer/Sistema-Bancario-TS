let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

let clientes = new Clientes();
const cliente1 = new Cliente('marcela', '123', c1);
const cliente2 = new Cliente('juan', '456', p1);
const cliente3 = new Cliente('matheus', '789', cb1);

// inserir
clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

// listar
console.log(clientes.listar());

// remover
clientes.remover('123');
console.log(clientes.listar());

//pesquisar
console.log(clientes.pesquisar('456'));


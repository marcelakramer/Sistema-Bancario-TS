class Clientes {
    constructor() {
        this.clientes = [];
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cpf === cpf);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this.clientes;
    }
}

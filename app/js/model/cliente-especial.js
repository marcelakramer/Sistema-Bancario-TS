class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta = undefined) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }
    inserir(cliente) {
        this.dependentes.push(cliente);
    }
    pesquisar(cpf) {
        return this.dependentes.find(cliente => cliente.cpf === cpf);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.dependentes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this.dependentes;
    }
}

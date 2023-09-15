class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta = undefined) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }

    inserir(cliente: Cliente): void {
        this.dependentes.push(cliente);
    }

    pesquisar(cpf: string): Cliente {
        return this.dependentes.find(cliente => cliente.cpf === cpf);
    }

    remover(cpf: string): void {
        const clienteARemover: Cliente = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.dependentes.indexOf
    (clienteARemover);
            if (indiceCliente > -1) {
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this.dependentes;
    }

}
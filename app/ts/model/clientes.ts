class Clientes {

    private clientes: Array<Cliente>;

    constructor () {
        this.clientes = [];
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cpf === cpf
        );
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf
    (clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }
}
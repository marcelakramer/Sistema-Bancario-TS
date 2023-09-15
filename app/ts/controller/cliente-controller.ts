class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.clientes = new Clientes();
    }

    inserir(evento: Event): void {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar(): void {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente): void {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}
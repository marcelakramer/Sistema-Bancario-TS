class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta = undefined) {
        this._nome = nome;
        this._cpf = cpf;
        this.conta = conta;
    }

    get nome() : string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf() : string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(conta: Conta) {
        this._conta = conta;
    }

    toString(): string {
        return `Nome: ${this.nome} 
        - CPF: ${this.cpf}
        - Conta: ${this.conta} `;
    }
}
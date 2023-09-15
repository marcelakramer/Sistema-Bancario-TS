class Cliente {
    constructor(nome, cpf, conta = undefined) {
        this._nome = nome;
        this._cpf = cpf;
        this.conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
    toString() {
        return `Nome: ${this.nome} 
        - CPF: ${this.cpf}
        - Conta: ${this.conta} `;
    }
}

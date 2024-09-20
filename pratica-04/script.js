// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erro na página
function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
}

// Função para limpar mensagens de erro
function limparErro() {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = '';
}

// Captura o formulário e adiciona evento de submissão
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página

    limparErro();

    try {
        // Captura os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        // Validação dos campos
        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha todos os campos obrigatórios.");
        }

        let funcionario;

        // Cria instância de Gerente ou Desenvolvedor baseado no cargo
        if (cargo === "Gerente") {
            if (!departamento) {
                throw new Error("Por favor, preencha o campo de departamento para o cargo de Gerente.");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) {
                throw new Error("Por favor, preencha o campo de linguagem para o cargo de Desenvolvedor.");
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            throw new Error("Cargo inválido selecionado.");
        }

        // Exibe informações do funcionário na página
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            ${funcionario instanceof Gerente ? `<p>${funcionario.gerenciar()}</p>` : ''}
            ${funcionario instanceof Desenvolvedor ? `<p>${funcionario.programar()}</p>` : ''}
        `;
    } catch (error) {
        exibirErro(error.message); // Exibe o erro na página
    }
});

// Exibe ou oculta campos com base na seleção de cargo
document.getElementById('cargo').addEventListener('change', function() {
    const cargo = this.value;
    const departamentoDiv = document.getElementById('departamentoDiv');
    const linguagemDiv = document.getElementById('linguagemDiv');

    // Exibe/oculta campos de acordo com o cargo selecionado
    if (cargo === "Gerente") {
        departamentoDiv.style.display = 'block';
        linguagemDiv.style.display = 'none';
    } else if (cargo === "Desenvolvedor") {
        departamentoDiv.style.display = 'none';
        linguagemDiv.style.display = 'block';
    } else {
        departamentoDiv.style.display = 'none';
        linguagemDiv.style.display = 'none';
    }
});

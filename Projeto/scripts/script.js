var urlBase = "http://localhost:3000/clientes"

class Cliente {
    constructor(id, tipo, nome, email, cpfOuCnpj, telefone, logradouro, numero, complemento, bairro, estados, cidades, cep) {
        this.id = id,
        this.tipo = tipo,
        this.nome = nome,
        this.email = email,
        this.cpfOuCnpj = cpfOuCnpj,
        this.telefone = telefone,
        this.logradouro = logradouro,
        this.numero = numero,
        this.complemento = complemento,
        this.bairro = bairro,
        this.estados = estados,
        this.cidades = cidades,
        this.cep = cep
    }

    salvar() {
        console.log(this)
        fetch (urlBase, {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
            
        })
            .catch(erro => console.log(erro))
    }

    consultarTodos(display){

        fetch(urlBase)
        .then(x => x.text())
        .then(data => display(data))
    }

    consultarPeloId(idCliente, display) {
        fetch(`${urlBase}/${idCliente}`)
            .then(x => x.text())
            .then(data => display(data))
    }

    update(){

        fetch(`${urlBase}/${this.id}`, {

            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
        })

    }

}

function loadEstados() {
    fetch("http://localhost:3000/estados")
        .then(x => x.text())
        .then(estado => display2(estado))
}

function loadCidades() {
    fetch("http://localhost:3000/cidades")
        .then(x => x.text())
        .then(cidade => display(cidade))
}
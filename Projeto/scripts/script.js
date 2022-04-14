var urlBase = "http://localhost:3000/clientes"

class Cliente {
    constructor(id, tipo, nome, email, telefone, cpfOuCnpj, logradouro, numero, complemento, bairro, cep) {
        this.id = id,
        this.tipo = tipo,
        this.nome = nome,
        this.telefone = email,
        this.cpfOuCnpj = cpfOuCnpj,
        this.email = telefone,
        this.logradouro = logradouro,
        this.numero = numero,
        this.complemento = complemento,
        this.bairro = bairro,
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
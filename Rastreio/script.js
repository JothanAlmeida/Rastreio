function adicionarEndereco(endereco){
    const enderecoContainer = document.querySelector("#container-endereco")
    const cardBase = document.querySelector("#main")

    let novoEndereco = cardBase.cloneNode(true)
    novoEndereco.removeAttribute("id")

    novoEndereco.querySelector(".logradouro").innerHTML = endereco.logradouro
    novoEndereco.querySelector(".bairro").innerHTML = endereco.bairro
    novoEndereco.querySelector(".localidade").innerHTML = endereco.localidade

    enderecoContainer.appendChild(novoEndereco)
}

function interrompeSubmit(e) {
    e.preventDefault()

    let cep = document.querySelector("#cep").value

    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(endereco => {
        if(endereco.erro) alert("Endereco não encontrado!")
        else adicionarEndereco(endereco)
    })
}
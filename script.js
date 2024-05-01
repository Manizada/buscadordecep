function buscar() {
    let cep = document.getElementById('cep').value
    var url = "https://viacep.com.br/ws/"+cep+"/json/"; //Sua URL
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    console.log(xhttp.responseText);
    respostaJSON = JSON.parse(xhttp.responseText)
    document.getElementById('cepp').innerHTML = "<p>"+respostaJSON.cep+"</p>"
    document.getElementById('logradouro').innerHTML = "<p>"+respostaJSON.logradouro+"</p>"
    document.getElementById('complemento').innerHTML = "<p>"+respostaJSON.complemento+"</p>"
    document.getElementById('bairro').innerHTML = "<p>"+respostaJSON.bairro+"</p>"
    document.getElementById('localidade').innerHTML = "<p>"+respostaJSON.localidade+"</p>"
    document.getElementById('uf').innerHTML = "<p>"+respostaJSON.uf+"</p>"
}


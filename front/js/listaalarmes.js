function validaLogin() {
    let userTxt = localStorage.getItem("userLogged");

    if (!userTxt) {
        window.location = "index.html";
    }

}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}

function voltar(){
    window.location = "dashmenu.html";
}

function gerarRelatorioAlarmes() {

    fetch("http://localhost:8080/alarme/todos")
        .then(res => res.json())
        .then(res => geraAlarmes(res));
}

function geraAlarmes(res) {
   // console.log(res);
    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td>
    let tabela = '<table class="table"> <tr> <th>ID</th> <th>Nome Alarmes</th> <th>Descrição</th> </tr>';
    for (let i=0; i<res.length; i++){
        tabela = tabela + `<tr> <td> ${res[i].idAlarme}</td> <td> ${res[i].nome}</td> <td> ${res[i].descricao}</td> </tr>`
    }
    tabela += '</table>';
    document.getElementById("tabela").innerHTML = tabela; 

}

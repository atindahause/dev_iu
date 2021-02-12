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

function obterDatas(){
    let dataini = document.getElementById("dtinicio").value;
    let datafim = document.getElementById("dtfinal").value;

    let dataMsg = {
        dt1: dataini,
        dt2: datafim
    }

    let cabecalho = {
        method: 'POST',
        body: JSON.stringify(dataMsg),
        headers: {
            'Content-type': 'application/json'
        }
    }

    return cabecalho;
}

function gerarRelatorioEventos() {

    let msg = obterDatas(); 

    fetch("http://localhost:8080/evento/data", msg)
        .then(res => res.json())
        .then(res => preencheEventos(res));
}

function preencheEventos(res) {
 //   console.log(res);
    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td>
    let tabela = '<table> <tr> <th>Data</th> <th>Alarme</th> <th>Equipamento</th> </tr>';
    for (let i=0; i<res.length; i++){
        tabela = tabela + `<tr> <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})}</td> <td> ${res[i].alarme.nome}</td> <td> ${res[i].equipamento.hostname}</td></tr>`
    }
    tabela += '</table>';
    document.getElementById("tabela").innerHTML = tabela; 

}

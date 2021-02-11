function autenticar(event) {
    event.preventDefault();  // interrompe o envio dos dados do formulario, que é feito por padrão

    let usuario = document.getElementById("txtUser").value;
    let senha = document.getElementById("txtSenha").value;

    let objUsuario = {
        email: usuario,
        racf: usuario,
        senha: senha
    }

    let msg = {
        method: 'POST',
        body: JSON.stringify(objUsuario),
        headers: {
            'content-type': 'application/json'
        }
    }
    fetch("http://localhost:8080/usuario/login", msg)
        .then(res => tratarResposta(res));

}

function tratarResposta(retorno) {
    if (retorno.status == 200) {
        //    document.getElementById('msgError').innerHTML = 'OK'
        retorno.json().then(dados => fazerLogin(dados));
    } else {
        document.getElementById('msgError').innerHTML = 'Usuário/Senha inválidos';
    }
}

function fazerLogin(usuario) {
 //   console.log(usuario);
 localStorage.setItem("userLogged", JSON.stringify(usuario));
 window.location = "dashmenu.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyA37PX_lCXemgLH767oX7k3B4T77J3KwfQ",
    authDomain: "chadodante-3340f.firebaseapp.com",
    databaseURL: "https://chadodante-3340f-default-rtdb.firebaseio.com",
    projectId: "chadodante-3340f",
    storageBucket: "chadodante-3340f.appspot.com",
    messagingSenderId: "1012040029017",
    appId: "1:1012040029017:web:301674153f48d07fba3248"
  };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let nomeCompleto;
  
function adicionarNome()  {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  nomeCompleto = nome + " " + sobrenome;    
  let contato = document.getElementById("contato").value;
  
  if (sobrenome == "" || nome == "" || contato == "" || nomeCompleto == "") {
      document.getElementById("aviso").innerHTML = "Preencha os campos por favor";
      document.getElementById("aviso").style.color = "green";
      document.getElementById("aviso").style.fontSize = "20px";
      document.getElementById("aviso").style.fontWeight = "bold";
  }else {
    
    firebase.database().ref("/").child(nomeCompleto).update({
      nomeConvidado : nomeCompleto,
      contatoConvidado: contato
    });

    document.getElementById("textoNome").innerHTML = "Gostaria de adicionar um(a) acompanhante?";
    document.getElementById("nome").style.display = "none";
    document.getElementById("sobrenome").style.display = "none";
    document.getElementById("contato").style.display = "none";
    document.getElementById("login").style.display = "none";

    let botaoSim = "<button id='sim' class='btn fs-4 mx-2 my-2' onclick='sim()'> Sim </button>";
    let botaoNao = "<button id='nao' class='btn fs-4' onclick='nao()'> Não </button>";
    let opcao = botaoSim + botaoNao;

    document.getElementById("aviso").innerHTML = opcao;
  }  
    
}
function nao(){
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  nomeCompleto = nome + " " + sobrenome;  

  document.getElementById("texto").innerHTML = nomeCompleto;
  document.getElementById("texto").style.fontSize = "50px";
  document.getElementById("aviso").innerHTML = "Obrigada por confirmar a sua presença!";
  document.getElementById("aviso").style.fontFamily = "Great Vibes";
  document.getElementById("aviso").style.color = "rgb(6, 66, 6)";
  document.getElementById("aviso").style.fontSize = "40px";
  document.getElementById("aviso").style.textShadow = "2px 2px rgb(173, 240, 173)";
  document.getElementById("aviso").style.marginBottom = "40px";

  document.getElementById("textoNome").style.display = "none";
  document.getElementById("listaPresenca").style.display = "none";
}

function sim(){
  document.getElementById("textoNome").innerHTML = "Nome completo do(a) acompanhante:";

  let entrada = "<input type='text' id='acompanhante' class='form-control w-50' placeholder='Escreva aqui o nome completo'>";
  let botao = "<br><button id='confirmaAcompanhante' class='btn fs-4' onclick='confirmar()'> Confirmar acompanhante </button>"
  let caixa = entrada + botao;
  document.getElementById("aviso").innerHTML = caixa;
}

function confirmar(){
  let acompanhante = document.getElementById("acompanhante").value;

  if (acompanhante == "") {
    document.getElementById("aviso").innerHTML = "Preencha o campo com o nome completo por favor";
    document.getElementById("aviso").style.color = "green";
    document.getElementById("aviso").style.fontSize = "20px";
    document.getElementById("aviso").style.fontWeight = "bold";
  }else {
  
    firebase.database().ref("/").child(nomeCompleto).update({
      acompanhante : acompanhante
    });

    document.getElementById("textoNome").style.display = "none";
    document.getElementById("listaPresenca").style.display = "none";
    document.getElementById("texto").innerHTML = nomeCompleto;
    document.getElementById("texto").style.fontSize = "50px";
    document.getElementById("aviso").innerHTML = "Obrigada por confirmar a sua presença!";
    document.getElementById("aviso").style.fontFamily = "Great Vibes";
    document.getElementById("aviso").style.color = "rgb(6, 66, 6)";
    document.getElementById("aviso").style.fontSize = "40px";
    document.getElementById("aviso").style.textShadow = "2px 2px rgb(173, 240, 173)";
    document.getElementById("aviso").style.marginBottom = "40px";
  }
}

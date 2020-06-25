function converteDinheiro(valor) {
  return valor.replace(/[\D]+/g, "");
}

function formataDinheiro(valor) {
  valor = parseInt(converteDinheiro(valor)) + "";
  valor = valor.replace(/([0-9]{2})$/g, ".$1");
  if (valor.length > 6) {
    valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  }
  return valor;
}

function mascaraDinheiro() {
  var input = this;
  var valor = input.value;
  input.value = formataDinheiro(valor);
}

var formularioHora = document.querySelector(".secao-hora form");
var spanHora = document.querySelector(".secao-hora .secao__rodape__valor span");

function calculaValorHora() {
  // entrada
  var formHora = this;
  var ganhoPorMes = converteDinheiro(formHora["ganho-mes"].value);
  var horasPorDia = parseFloat(formHora["horas-dia"].value);
  var diasPorMes = parseFloat(formHora["dias-mes"].value);

  var qtdTotalDeHoras = horasPorDia * diasPorMes;

  var valorDeHora = parseFloat(ganhoPorMes / qtdTotalDeHoras).toFixed(2);

  console.log(valorDeHora);

  var valorDeHoraFormatado;
  if (!isNaN(valorDeHora) && isFinite(valorDeHora)) {
    valorDeHoraFormatado = Math.ceil(valorDeHora) + ",00";
  } else {
    valorDeHoraFormatado = "0,00";
  }

  console.log(valorDeHoraFormatado);

  // saida
  spanHora.innerHTML = "R$ " + valorDeHoraFormatado;
}

formularioHora.addEventListener("change", calculaValorHora);

// function calculaValorProjeto() {
//   // entrada
//   var formProjeto = this;
//   var ganhoHora = parseFloat(converteDinheiro(formProjeto["ganho-hora"].value));
//   var projetoHoras = parseFloat(formProjeto["projeto-horas"].value);
//   var projetoDias = parseFloat(formProjeto["projeto-dias"].value);

//   // processamento
//   var valorDeProjeto = ganhoHora * projetoHoras * projetoDias;
//   valorDeProjeto = parseFloat(valorDeProjeto).toFixed(2);

//   var valorDeProjetoFormatado;
//   if (!isNaN(valorDeProjeto) && isFinite(valorDeProjeto)) {
//     valorDeProjetoFormatado = "R$ " + Math.ceil(valorDeProjeto) + ",00";
//   } else {
//     valorDeProjetoFormatado = "R$ 0,00";
//   }

//   // saida
//   spanProjeto.innerHTML = valorDeProjetoFormatado;
// }

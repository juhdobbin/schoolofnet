

var list = [
  {"desc":"rice","amount":"3","value":"5.99"},
  {"desc":"beer","amount":"12","value":"2.20"},
  {"desc":"meat","amount":"1","value":"22.90"}
];
function getTotal(list){
  var total = 0;
  for (var key in list){
    total += list[key].value * list[key].amount;
  }
  //  return total;
    document.getElementById("total").innerHTML = total;
}

function setList(list){
  var table = '<thead><tr><td>produto</td><td>quantidade</td><td>valor</td><td>açao</td></tr></thead><tbody>';
  //for que vai percorrer o array list e criar as linhas da tabela
  for(var key in list){
    table += '<tr><td>'+ formataDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete</td></tr>';
  }
  table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}
function formataDesc(desc){
  //toLowerCase transforma todas letras em minuscula
  var str = desc.toLowerCase();
  //charAt pega o valor do indice pedido, no caso a primeira letra. toUpperCase transforma ela em maiuscula, slice pega a partir do indice 1
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;

}
function formatValue(value){
  //parsefloat transforma string em float, toFixed seta o numero de casas decimais
  var str = parseFloat(value).toFixed(2) + "";
  str = str.replace(".", ",");
  str = "R$ " + str;
  return str;
}

function addData(){
  var desc = document.getElementById("desc").value;
  var qtd = document.getElementById("qtd").value;
  var preco = document.getElementById("valor").value;

//unshift equivale a append, ou seja, adiciona no final da lista
  list.unshift({"desc":desc,"amount":qtd ,"value":preco});
  //
  setList(list);
}

setList(list);
getTotal(list);

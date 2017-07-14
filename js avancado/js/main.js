

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
    table += '<tr><td>'+ formataDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button onclick="setUpdate('+key+')" class="btn default">Edit</button> | Delete</td></tr>';
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

function setUpdate(id){
  var obj = list[id];
  document.getElementById("desc").value = obj.desc;
  document.getElementById("qtd").value = obj.amount;
  document.getElementById("valor").value = obj.desc;
  document.getElementById("btnUpdate").style.display="inline-block";
  document.getElementById("buttonAdd").style.display="none";
}
function resetForm(){
  document.getElementById("desc").value="";
  document.getElementById("qtd").value="";
  document.getElementById("valor").value="";
  document.getElementById("btnUpdate").style.display="none";
  document.getElementById("buttonAdd").style.display="inline-block"
}
function updateData(){
  var id = document.getElementById("idUpdate").value;
  var desc = document.getElementById("desc").value;
  var qtd = document.getElementById("qtd").value;
  var preco = document.getElementById("valor").value;

  list[id]={{"desc":desc,"amount":qtd ,"value":preco}};
  resetForm();
  setList(list);
}

setList(list);
getTotal(list);

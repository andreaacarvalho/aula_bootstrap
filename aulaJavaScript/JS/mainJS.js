function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar!");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //abre em outra aba
    //window.location.href = "https://digitalinnovation.one/"; //abre na mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML="obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
   // document.getElementById("mousemove").innerHTML="passe o mouse aqui";
}

function load(){
    alert("Página Carregada!")
}

function funcaoChange(elemento){
console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1 + n2
}
***dá para declarar a variável local e globar***
function validaIdade(idade){
    var validar;
    if(idade >= 18){
    validar = true
}else{
    validar = false
}
return validar
}
var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade));
*/
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/* maneiras de trabalhar com data e hora
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/

/* estrutura com o for
var count;
for(count=0; count <=5; count++){
    alert(count)
}
*/
/* estrutura de repetição
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;  //pode ser colocado count++
}
*/

/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if(idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//var frutas = [{nome:"maçâ", cor: "vermelha"}, {nome:"uva", cor:"roxa"}] //dicionário
//console.log(frutas);
//alert(frutas[1].nome);


//var fruta = {nome:"maçâ", cor: "vermelha"} //dicionário
//console.log(fruta.nome);
//alert(fruta.cor);
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //push coloca item da lista
//lista.pop("laranja"); //pop tira item da lista
//console.log(lista.length); //para ver o tamanho da lista
//console.log(lista[1])
//console.log(lista.reverse()); //trás os elementos ao contrário na lista
//console.log(lista.toString()[1]);
//console.log(lista.join(" - ")) //coloca o traço, pode ser pipeline ou espaço em branco também
//console.log(lista);
//console.log(lista[1]); ai imprimir só a pêra porque é a número 1 da lista que começa com zero
//alert(lista[1]);
//var nome = "Andréa Carvalho";
 //var n1 = 10
 //var n2 = 5
 //var idade = 47;
 //var idade2 = 10;
 //var frase = "Japão é o melhor time do mundo!"
  // alert(nome + " tem " + idade + " anos");
  // alert(idade + idade2);
//console.log(nome); imprime no console
//console.log(idade + idade2);
//alert(n1 * n2);
//console.log(frase.replace("Japão", "Brasil")); altera de Japão para Brasil
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase()); toda a frase em caixa alta
//console.log(frase.toLowerCase()); toda a frase em caixa baixa


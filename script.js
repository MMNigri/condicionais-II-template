//let idade

// ifs alinhados

//if(idade >= 13){
    //console.log("A pessoa dependente já pode terum cartão de crédito vinculado ao seu")
//}else{
   // console.log("Idade maior ou igual a 18")
//}else{
 //   console.log("Consulte outras possibilidade do Labank")
//}


//if(idade>=13 && idade <=17){
 //   console.log("A pessoa ja pode ter um cartão de credito vinculado ao seu ")
//}else {
//    console.log("Consulte outras possibilidade do Labank")

//}


//const possuiConta = prompt("Você ja possui conta no Labank ? Responda sim ou não")

//if(possuiConta.toLowerCase() === "sim"){
  //  console.log("Boas vindas");
    
//} else {
//    console.log("Faça já seu cadastro !");

//}

//if ternario

//possuiConta.toLowerCase() === "sim" ?

    //console.log("Boas vindas")
    //console.log("Faça já seu cadastro!")




//if(ramal === "1"){
  //cartao = "Fácil"
//} else if (ramal === "2"){
  //cartao = "Black"
//}else if (ramal === "3"){
 // cartao = "Platinum"
//}else if (ramal === "4"){
 // cartao = "Master gold"
//} else{
 // console.log("Escolha uma das 4 opções disponiveis")
//}
//let cartao
//let ramal = Number(prompt("Digite o ramal desejado"))

//switch(ramal){
 // case 1:
  //cartao = "Fácil"
 // console.log(cartao)
 // break;
 // case 2:
   // cartao = "Black"
   // console.log(cartao)
   // break;
    //case 3:
      //cartao = "Platinum"
      //console.log(cartao);
     // break;
     // case 4:
        //cartao = "Master Gold"
        //console.log(cartao);
        //break;
       // default:
         // console.log("Escolha uma das 4 opções disponíveis")

//}

//console.log(cartao);

let divi = Number(prompt("Digite um numero "))

if ((divi % 2) === 0) {
  console.log("O numero é divisivel por 2");
  divi === 30 ? console.log("Ufa Acertei") : console.log("Não foi dessa vez")

}else{
  console.log("O numero não é divisivel por 2")


}
if ((divi % 3) === 0){ 
  console.log("O numero é divisivel por 3");
}else{
    console.log("O numero não é divisivel por 3")
}

switch(divi){
  case 6:
   frase = "Agora vai"
  console.log(frase)
  break;
   case 12:
     frase = "Agora foi"
    console.log(frase)
    break;
     case 24:
       frase = "Aprendendo"
       console.log(frase);
      break;
      case 30:
       frase = "Aprendeu"
         console.log(frase);
         break;
        default:
          console.log("O numero é maior que 30 ou menor que 6")
 
 }
 



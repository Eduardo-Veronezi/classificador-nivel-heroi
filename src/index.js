let nomeHeroi = "kalangonstro"
let xpHeroi = 0;
let nivelHeroi = "";


for(let contador = 0; contador < 15; contador++){
    xpHeroi += 153
    console.log("Experiência do herói é: " + xpHeroi)
}

switch(true){
    
    case xpHeroi <= 1000:
    nivelHeroi = "Ferro";
    break;

    case xpHeroi > 1000 && xpHeroi <= 2000:
    nivelHeroi = "bronze";
    break;

    case xpHeroi > 2000 && xpHeroi <= 5000:
    nivelHeroi = "Prata";
    break;

    case xpHeroi > 5000 && xpHeroi <= 7000:
    nivelHeroi = "ouro";
    break;

    case xpHeroi > 7000 && xpHeroi <= 8000:
    nivelHeroi = "Platina";
    break;

    case xpHeroi > 8000 && xpHeroi <= 9000:
    nivelHeroi = "Ascendente";
    break;

    case xpHeroi > 9000 && xpHeroi <= 10000:
    nivelHeroi = "Imortal";
    break;

    default:
    nivelHeroi = "Radiante";
}

console.log("O nível do herói " + nomeHeroi + " é: " + nivelHeroi)

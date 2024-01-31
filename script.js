const tituloProduto = document.getElementById("titulo-produto");
const imgView = document.getElementById("imagem-visualizacao");
const miniaturaImg0 = document.getElementById("0-imagem-miniatura");
const miniaturaImg1 = document.getElementById("1-imagem-miniatura");
const miniaturaImg2 = document.getElementById("2-imagem-miniatura");

const azulInverno = {
    name: "azul-inverno",
    file: "imagens-azul-inverno"
};

const estelar = {
    name: "estelar",
    file: "imagens-estelar"
};

const meiaNoite = {
    name: "meia-noite",
    file: "imagens-meia-noite"
};

const rosaClaro = {
    name: "rosa-claro",
    file: "imagens-rosa-claro"
};

const verdeCipreste = {
    name: "verde-cipreste",
    file: "imagens-verde-cipreste"
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41mm", "45mm"];
let imgSelected = 1;
let tamSelected = 1;
let corSelected = 1;

function trocarImagem() {
    selectedId = document.querySelector('[name="opcao-imagem"]:checked').id;
    imgSelected = selectedId.charAt(0);
    imgView.src = "./imagens/opcoes-cores/" + opcoesCores[corSelected].file + "/imagem-" + imgSelected +".jpeg";
}

function trocarTamanho() {
    selectedId = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamSelected = selectedId.charAt(0);

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelected].name + " para caixa de " + opcoesTamanho[tamSelected];

    if(tamSelected == 0) imgView.classList.add("caixa-pequena");
    else if(tamSelected == 1) imgView.classList.remove("caixa-pequena");
}

function trocarCor() {
    selectedId = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelected = selectedId.charAt(0);

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelected].name + " para caixa de " + opcoesTamanho[tamSelected];

    imgView.src = "./imagens/opcoes-cores/" + opcoesCores[corSelected].file + "/imagem-" + imgSelected +".jpeg";

    const corSubTitulo = document.getElementById("nome-cor-selecionada");
    corSubTitulo.innerText = "Cor - " + opcoesCores[corSelected].name;

    trocarMiniaturas();
}

function trocarMiniaturas() {
    miniaturaImg0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelected].file + "/imagem-0.jpeg";
    miniaturaImg1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelected].file + "/imagem-1.jpeg";
    miniaturaImg2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelected].file + "/imagem-2.jpeg";
}

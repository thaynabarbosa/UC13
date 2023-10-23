function abrirPagamento() {

    let valorEntrada = document.getElementById("valor");
    let valor = valorEntrada.value;

    if (valor == "") {
        alert("o campo Valor deve ser preenchido")
    }
    else {

        let input = document.querySelector('input[name = "pagamento"]:checked');
        let texto = input.value;

        if (texto == "pix") {
            document.getElementById("campo_pix").style.display = "block";
            document.getElementById("campo_cartao").style.display = "none";
            document.getElementById("valorFinal").style.display = "none";
            document.getElementById('valorTotal').innerHTML = "Total R$ ";
            document.getElementById("formCartao").reset();
            document.getElementById('visa').style.display = "none";
            document.getElementById('mastercard').style.display = "none";
            document.getElementById("cpf").value = "";
        }
        else if (texto == "cartao") {
            document.getElementById("campo_cartao").style.display = "block";
            document.getElementById("campo_pix").style.display = "none";
            document.getElementById("valorFinal").style.display = "none";
            document.getElementById('valorTotal').innerHTML = "Total R$ ";
            document.getElementsByName("bandeira").style.display = "none";
            
        }
    }
}

function pix() {
    let dadosCpf = document.getElementById("cpf").value;

    if (dadosCpf > 3) {
        let valorEntrada = document.getElementById("valor");
        let valor = valorEntrada.value;

        let valorTotal = parseFloat((valor - (valor * 0.1)));
        document.getElementById("valorFinal").style.display = "block";

        document.getElementById('valorTotal').innerHTML = "Total R$ " + valorTotal.toFixed(2);
    }
    else {
        document.getElementById("valorFinal").style.display = "none";

    }
}

function cartao() {
    let numCard = document.getElementById("numCartao").value;

    if (numCard.startsWith("1234") == true) {
        document.getElementById('visa').style.display = "inline";
        document.getElementById('cartaoValido').innerHTML = "";
        document.getElementById("valorFinal").style.display = "block";
    }
    else if (numCard.startsWith("4321") == true) {
        document.getElementById('mastercard').style.display = "inline";
        document.getElementById('cartaoValido').innerHTML = "";
        document.getElementById("valorFinal").style.display = "block";
    }
    else if (numCard != "") {
        document.getElementById('visa').style.display = "none";
        document.getElementById('mastercard').style.display = "none";
        document.getElementById('cartaoValido').innerHTML = "Número de cartão inválido";
        document.getElementById("cartaoValido").style.cssText = "color: red; font-size: 15px";
        document.getElementById("valorFinal").style.display = "none";
    } else {
        document.getElementById('visa').style.display = "none";
        document.getElementById('mastercard').style.display = "none";
        document.getElementById('cartaoValido').innerHTML = "";
        document.getElementById("valorFinal").style.display = "none";
    }

    let valorEntrada = document.getElementById("valor");
    let valor = parseFloat(valorEntrada.value);

    document.getElementById('valorTotal').innerHTML = "Total R$ ";

    let valor2 = valor / 2;
    let valor3 = valor / 3;
    let valor4 = (valor + (valor * 0.05)) / 4;
    let valor5 = (valor + (valor * 0.1)) / 5;

    document.getElementById('umaVez').innerHTML = "1x R$ " + valor.toFixed(2);
    document.getElementById('duasVezes').innerHTML = "2x R$ " + valor2.toFixed(2);
    document.getElementById('tresVezes').innerHTML = "3x R$ " + valor3.toFixed(2);
    document.getElementById('quatroVezes').innerHTML = "4x R$ " + valor4.toFixed(2);
    document.getElementById('cincoVezes').innerHTML = "5x R$ " + valor5.toFixed(2);


}

function escolheParcela() {

    let valorEntrada = document.getElementById("valor");
    let valor = parseFloat(valorEntrada.value);

    let valor4 = (valor + (valor * 0.05)) / 4;
    let valor5 = (valor + (valor * 0.1)) / 5;

    let parcelas = document.getElementById("parcelas_select").options[document.getElementById("parcelas_select").selectedIndex].value;

    if ((parcelas == 1) || (parcelas == 2) || (parcelas == 3)) {
        let valorTotal = parseFloat(valor);
        document.getElementById('valorTotal').innerHTML = "Total R$ " + valorTotal.toFixed(2);
    } else if (parcelas == 4) {
        let valorTotal = parseFloat(valor4 * 4);
        document.getElementById('valorTotal').innerHTML = "Total R$ " + valorTotal.toFixed(2);
    } else if (parcelas == 5) {
        let valorTotal = parseFloat(valor5 * 5);
        document.getElementById('valorTotal').innerHTML = "Total R$ " + valorTotal.toFixed(2);
    }
}

function confirmaPag() {
    document.getElementById("valor").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("numCartao").value = "";
    document.getElementById('valorTotal').innerHTML = "Total R$ ";
    document.getElementById("campo_pix").style.display = "none";
    document.getElementById("campo_cartao").style.display = "none";
    document.getElementById("confirma_pagamento").style.display = "block";

    let ele = document.querySelectorAll("input[type=radio]");
    for (let i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
}

function limpar() {
    document.getElementById("valorFinal").style.display = "none";
    document.getElementById("confirma_pagamento").style.display = "none";
    document.getElementById("formCartao").reset();
    document.getElementById('visa').style.display = "none";
    document.getElementById('mastercard').style.display = "none";
    document.getElementById("cpf").value = "";
}


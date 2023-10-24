$.get("http://localhost:3000/reservas", function(data, status){
    
    for (i = 0; i < data.length; i++) {
        $('#result').append("<tr><td>" + data[i].nome + "</td> <td>" + data[i].email  + "</td> <td>" + data[i].dataEntrada + "</td> <td>" + data[i].dataSaida + 
        "</td> <td>" + data[i].observacoes + "</td> <td>" + data[i].adultos + "</td> <td>" + data[i].criancas + "</td> <td>" + data[i].id + "</td></ul>");
    }
});


$(document).ready(function () {
    $("form").submit(function (event) {

        // Impede o envio normal do formulário
        event.preventDefault();

        //Serializa os valores de controle de formulário enviados
        //para serem enviados ao servidor da Web com a solicitação 
        var formValues = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/reservas',
            data: formValues
        })
            .done(function (data) {
                // enviar mensagem de registro salvo
                $('#result').append("Registro salvo!");
            })
            .fail(function (msg) {
                // caso a solicitacao de POST tenha falhado
                alert("Falha no POST" + msg);
            });
    });
});

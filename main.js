function consultar(){

    var cep = document.getElementById("cep-input").value;

    var url = "https://viacep.com.br/ws/"+ cep +"/json/";


    $.ajax({


        url: url, 
        type: "GET",
        success: function(response){
        $("#meu-cep").html(response.cep);   
        $("#logradouro").html(response.logradouro);
        $("#bairro").html(response.bairro);
        $("#localidade").html(response.localidade);
        $("#uf").html(response.uf);

        }
    })


    
}
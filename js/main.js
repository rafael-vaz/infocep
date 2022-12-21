function consultar() {
  var cep = document.getElementById("cep-box").value;
  var tabela = document.querySelector(".table-content");
  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      if (!("erro" in response)) {
        console.log(response);
        $("#cep").html(response.cep);
        $("#logradouro").html(response.logradouro);
        $("#bairro").html(response.bairro);
        $("#cidade").html(response.localidade);
        $("#uf").html(response.uf);
        $("#ibge").html(response.ibge);
        $("#ddd").html(response.ddd);
        tabela.scrollIntoView({ behavior: "smooth" });
      } else {
        $(".feedback").html("O CEP informado é inválido!").fadeIn();
        $(".feedback").delay(2000).fadeOut(1000);
      }
    },
    error: function () {
      $(".feedback").html("Preencha o campo corretamente!").fadeIn();
      $(".feedback").delay(2000).fadeOut(1000);
    },
  });
}

function toTop() {
  window.scrollTo(0, 0);
}

$(document).on("keypress", "#cep-box", function (e) {
  if (e.key == "." || e.key == "e" || e.key == "-") {
    e.preventDefault();
  }
});

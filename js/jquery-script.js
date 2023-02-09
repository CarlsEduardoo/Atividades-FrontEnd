//efeito de esconder formulário de cadastro
$(document).ready(function(){
    
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToogle("slow");
        $("#section-login").slideToogle("slow");
        $("#botao-cadastrar").hide();
    });
});
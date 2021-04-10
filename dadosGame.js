$('document').ready(function(){
    $('#cadastroDiv #enviarCadastro').click(function(event) {
        event.preventDefault()

        console.log('botao clicado')

        var usuario = $('#usuarioCadastro').val()
        var senha = $('#senhaCadastro').val()

        $.post('processamentoAjax.php',{
            usuario: usuario,
            senha: senha
        },
        function(resposta){
            console.log('post enviado')
            if(resposta=='Preencha todos os campos'){
                $('#labelCadastro').text(resposta)
            }
            else{
                console.log(resposta)
            }
            
        })
        

    })
})
$('document').ready(function(){
    $('#cadastroDiv #enviarCadastro').click(function(event) {
        event.preventDefault()

        console.log('botao clicado')

        var usuario = $('#usuarioCadastro').val()
        var senha = $('#senhaCadastro').val()

        $.post('processamentoAjax.php',{
            usuario: usuario,
            senha: senha,
            operacao: 'cadastro'
        },
        function(resposta){
            console.log('post enviado')
            if(resposta=='Preencha todos os campos'){
                $('#labelCadastro').text(resposta)
            }
            else if(resposta=='cadastrado'){
                $('label').text(resposta)
                console.log(resposta)
            }
            
        })
        

    })


    $('#loginDiv #enviarLogin').click(function(event) {
        event.preventDefault()

        console.log('botao Login clicado')

        var usuario = $('#usuarioLogin').val()
        var senha = $('#senhaLogin').val()

        $.post('processamentoAjax.php',{
            usuario: usuario,
            senha: senha,
            operacao: 'login'
        },
        function(resposta){
            console.log('post enviado')
            if(resposta=='Preencha todos os campos'){
                $('#labelLogin').text(resposta)
            }
            else{
                $('label').text('Login realizado com sucesso')
                console.log(resposta);
            }
            
        })
        

    })

    carregarjQuery()
})
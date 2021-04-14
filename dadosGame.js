var dadosUsuario

$('document').ready(function(){

    

    $('#cadastroDiv #enviarCadastro').click(function(event) {
        event.preventDefault()

        console.log('botao clicado')

        var usuario = $('#usuarioCadastro').val()
        var senha = $('#senhaCadastro').val()
        var pt = pontuacaoMaxima
        var data = Date.now()
        $.post('processamentoAjax.php',{
            usuario: usuario,
            senha: senha,
            operacao: 'cadastro',
            pt:pt
        },
        function(resposta){
            console.log('post enviado')
            if(resposta=='Preencha todos os campos'){
                $('#labelCadastro').text(resposta)
            }
            else if(resposta=='cadastrado'){
                $('label').text(resposta)
                console.log(resposta)
                

                $.post('processamentoAjax.php',{
                    usuario: usuario,
                    senha: senha,
                    operacao: 'login'
                },
                function(resposta){
                    
                    console.log(resposta);
                    resposta = JSON.parse(resposta)
                    $('#labelLogin').text('login realizado com sucesso')
                    pontuacaoMaxima = resposta['pontuacao_maxima']
                        
                    dadosUsuario = resposta
                    
                })
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

            else if(resposta=='Usuário inexistente'){
                console.log(resposta);
                $('#labelLogin').text(resposta)
            }
            else if(resposta=='Senha inválida'){
                console.log(resposta);
                $('#labelLogin').text(resposta)
            }
            else{

                    console.log(resposta);
                    resposta = JSON.parse(resposta)
                    $('#labelLogin').text('login realizado com sucesso')
                    pontuacaoMaxima = resposta['pontuacao_maxima']
                    dadosUsuario=resposta
                
            }
            
        })
        
 
    })

    

    carregarjQuery()
})


function atualizaPontuacao(pontos){

    if(dadosUsuario!=null){
        $.post('processamentoAjax.php',{
            usuario: dadosUsuario['nome_usuario'],
            pontos:pontos,
            operacao: 'atualizaPontos'
        },
        function(resposta){
            console.log(resposta)
            
        })
    }
    
}
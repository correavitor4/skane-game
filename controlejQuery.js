function carregarjQuery(){
    console.log(Date.now())
    $('#cadastroDiv').hide()
    $('#loginDiv').hide()

    $('#buttonLogin').click(function(){
        $('#loginDiv').fadeIn()
        $('#divButtons').hide()
    })

    $('#buttonCadastro').click(function(){
        $('#cadastroDiv').fadeIn()
        $('#divButtons').hide()
    })

    $('#voltarCadastro').click(function(){
        $('#loginDiv').hide()
    })

    $('#voltarLogin').click(function(){
        $('#cadastroDiv').hide()
    })
}
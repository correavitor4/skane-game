<!DOCTYPE html>
<?php
    require_once('conexao.php');
    
    


?>

<html>
<head>
    <title>Jogo da cobrinha</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    
</head>
<body>
    <div id="cadastroDiv">
        <form>
            <label id="labelCadastro"></label>
            <p>Usuário <input type="text" name="usuario" id="usuarioCadastro"></p>
            <p>Senha <input type="text" name="senha" id="senhaCadastro"></p>
            <input type="submit" name="enviar" id="enviarCadastro">
        </form>
    </div>
    


    <div id="divGame">
        <nav id="menuTopoGame">
            <ul>
                <li id="pontuacao"></li>
                <li id="pontuacaoMaxima"></li>
            </ul>
        </nav>
        <canvas id="stage" width="600" height="600"></canvas>
        <script src="game.js"></script>

    </div>
    
</body>

<script src='dadosGame.js'></script>
</html>
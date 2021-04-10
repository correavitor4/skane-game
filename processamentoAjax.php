<?php

    require_once('conexao.php');
        $u=new Conexao();
    if(isset($_POST['usuario'])&&$_POST['usuario']!='' &&$_POST['senha']!=''){

        echo $u->cadastrarUsuario($_POST['usuario'],$_POST['senha']);
    }
    else if(isset($_POST['usuario'])){
        if($_POST['usuario']=='' || $_POST['senha']==''){
            echo 'Preencha todos os campos';
        }
    }

   
    
?>
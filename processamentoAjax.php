<?php

    require_once('conexao.php');
        $u=new Conexao();

    if(isset($_POST['operacao'])){
        if($_POST['operacao']=='cadastro'){
            if(isset($_POST['usuario'])&&$_POST['usuario']!='' &&$_POST['senha']!=''){

                echo $u->cadastrarUsuario($_POST['usuario'],$_POST['senha']);
            }
            else if(isset($_POST['usuario'])){
                if($_POST['usuario']=='' || $_POST['senha']==''){
                    echo 'Preencha todos os campos';
                }
            }
        }

        else if($_POST['operacao']=='login'){
            if(isset($_POST['usuario'])&&$_POST['usuario']!='' &&$_POST['senha']!=''){

                echo json_encode($u->loginUsuario($_POST['usuario'],$_POST['senha']));
                echo 'Campos Válidos';
            }
            else if(isset($_POST['usuario'])){
                if($_POST['usuario']=='' || $_POST['senha']==''){
                    echo 'Preencha todos os campos';
                }
            }
        }
    }

    

   
    
?>
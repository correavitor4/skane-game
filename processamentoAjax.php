<?php

    require_once('conexao.php');
        $u=new Conexao();

    if(isset($_POST['operacao'])){
        if($_POST['operacao']=='cadastro'){
            if(isset($_POST['usuario'])&&$_POST['usuario']!='' &&$_POST['senha']!=''){

                echo $u->cadastrarUsuario($_POST['usuario'],$_POST['senha'],$_POST['pt']);
            }
            else if(isset($_POST['usuario'])){
                if($_POST['usuario']=='' || $_POST['senha']==''){
                    echo 'Preencha todos os campos';
                }
            }
        }

        else if($_POST['operacao']=='login'){
            if(isset($_POST['usuario'])&&$_POST['usuario']!='' &&$_POST['senha']!=''){
                if($u->loginUsuario($_POST['usuario'],$_POST['senha'])==''){
                    echo 'Senha inválida';
                }
                else{
                    if($u->loginUsuario($_POST['usuario'],$_POST['senha'])=='Esse usuário não existe no banco de dados'){
                        echo 'Usuário inexistente';
                    }
                    else{
                        echo json_encode($u->loginUsuario($_POST['usuario'],$_POST['senha']));
                    }
                    
                }
            }
            else if(isset($_POST['usuario'])){
                if($_POST['usuario']=='' || $_POST['senha']==''){
                    echo 'Preencha todos os campos';
                }
            }
                
                
            }
            

        else if($_POST['operacao']=='atualizaPontos'){
            echo $u->atualizaPontuacaoMaxima($_POST['usuario'],$_POST['pontos']);
        }
        
    

    }
   
    
?>
<?php

class Conexao{
    private $conn;

    public function __construct(){
        
        try{
            $this->conn=new PDO('mysql:host=localhost;dbname=snakegame','root','');
        }
        catch(Exception $e){
            echo 'Erro genérico: '.$e;
        }
        catch(PDOException $e){
            echo 'Erro ao se conectar ao banco de dados: '.$e;
        }
    }



    private function verificaUsuario($usuario){
        $cmd=$this->conn->prepare('SELECT nome_usuario FROM usuarios Where nome_usuario=:usuario');
        $cmd->bindParam(":usuario",$usuario);

        $cmd->execute();
        $resultado=$cmd->fetch();
        
       

        return $resultado;

    }

    public function cadastrarUsuario($usuario,$senha){
        
        $senhaSegura = password_hash($senha, PASSWORD_DEFAULT);

        $cmd=$this->conn->prepare('INSERT INTO usuarios (nome_usuario,senha) VALUES (:usuario,:senha)');
        $cmd->bindParam(":usuario",$usuario);
        $cmd->bindParam(":senha",$senhaSegura);
        

        if($this->verificaUsuario($usuario)==''){
            try{
                $cmd->execute();
                return 'cadastrado';
                
            }
            catch(Exception $e){
                return 'Erro: '.$e;
            }
        }

        else{
            
            return 'Usuario já cadastrado. Tente fazer o Login';
        }

        


    }
}

?>
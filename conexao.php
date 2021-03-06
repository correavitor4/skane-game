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


    

    public function cadastrarUsuario($usuario,$senha,$pontos){
        
        $senhaSegura = password_hash($senha, PASSWORD_DEFAULT);


        $cmd=$this->conn->prepare('INSERT INTO usuarios (nome_usuario,senha,pontuacao_maxima) VALUES (:usuario,:senha,:pontos)');
        $cmd->bindParam(":usuario",$usuario);
        $cmd->bindParam(":senha",$senhaSegura);
        $cmd->bindParam(':pontos',$pontos);

        

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


    public function loginUsuario($usuario,$senha){
        if($this->verificaUsuario($usuario)==''){
            return 'Esse usuário não existe no banco de dados';
        }
        else{
            $dadosUsuario = $this->buscaDadosUsuario($usuario);

            $senhaBancoDeDados = $dadosUsuario['senha'];
            
            if(password_verify($senha,$senhaBancoDeDados)){
                unset($dadosUsuario['senha']);
                return $dadosUsuario;
            }
            else{
                return '';
            }
        }
    }


    private function buscaDadosUsuario($usuario){
        $cmd=$this->conn->prepare('SELECT * FROM usuarios WHERE nome_usuario=:usuario');
        $cmd->bindParam(":usuario",$usuario);
        $cmd->execute();

        $resultado = $cmd->fetch(PDO::FETCH_ASSOC);

        return $resultado;

    }


    
    public function atualizaPontuacaoMaxima($usuario,$pontos){
        $cmd=$this->conn->prepare('UPDATE usuarios SET pontuacao_maxima=:pontos WHERE nome_usuario=:usuario');
        $cmd->bindParam(':pontos',$pontos);
        $cmd->bindParam(':usuario',$usuario);

        try{
            $cmd->execute();
            return $pontos;
        }
        catch(Exception $e){
            return $e;
        }
    }

}

?>
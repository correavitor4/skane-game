<?php

class Conexao{
    private $conn;

    public function __construct(){
        
        try{
            $this->conn=new PDO('mysql:localhost;dbname=snakegame','root','');
        }
        catch(Exception $e){
            echo 'Erro genérico: '.$e;
        }
        catch(PDOException $e){
            echo 'Erro ao se conectar ao banco de dados: '.$e;
        }
    }
}

?>
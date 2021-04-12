var pontos = 0
var pontuacaoMaxima = 0
        
        window.onload = function(){
            

            
           
 
            var stage = document.getElementById('stage');
            var ctx = stage.getContext("2d");
            document.addEventListener("keydown", keyPush);
            setInterval(game, 80);
 
            const vel = 1;
 
            var vx = vy = 0;
            var px =10;
            var py = 15;
            var tp = 30;
            var qp = 20;
            var ax=ay=15;
 
            var trail = [];
            tail = 5;

            
           
            
        

            var movimento=false
 
            function game(){

                document.getElementById("pontuacao").innerHTML='Pontos: '+pontos
                document.getElementById("pontuacaoMaxima").innerHTML='Pontuação Máxima: '+pontuacaoMaxima

                
                px += vx;
                py += vy;
                if (px <0) {
                    px = qp-1;
                }
                if (px > qp-1) {
                    px = 0;
                }
                if (py < 0) {
                    py = qp-1;
                }
                if (py > qp-1) {
                    py = 0;
                }
 
                ctx.fillStyle = "black";
                ctx.fillRect(0,0, stage.width, stage.height);
 

                
                
                
 
                ctx.fillStyle = "gray";
                for (var i = 0; i < trail.length; i++) {
                    ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
                    if (trail[i].x == px && trail[i].y == py)
                    {
                        gameOver()
                    }
                }


                ctx.fillStyle = "red";
                ctx.fillRect(ax*tp,ay*tp,tp,tp)
            
 
                trail.push({x:px,y:py })
                while (trail.length > tail) {
                    trail.shift();
                }
 
                if (ax==px && ay==py){
                    console.log('pontuou')
                    pontos++
                    tail++;
                    gerarMaca(true)
                }
 
            }
 
            function keyPush(event){
                movimento=true
 
                switch (event.keyCode) {
                    case 37: // Left
                        if(vx!=vel){
                            vx = -vel;
                            vy = 0;
                        }
                        
                        break;
                    case 38: // up

                        if(vy!=vel){
                            vx = 0;
                            vy = -vel;
                        }
                        
                        break;
                    case 39: // right

                        if(vx!= -vel){
                            vx = vel;
                            vy = 0;
                        }
                        
                        break;
                    case 40: // down
                        if(vy!= -vel){
                            vx = 0;
                            vy = vel;
                        }
                        
                        break;          
                    default:
                        
                        break;
                }
 
 
            }

                function gameOver(){
                    if(movimento==true){
                        vx = vy=0;
                    px = Math.floor(Math.random()*qp)
                    py = Math.floor(Math.random()*qp)
                    tail =5;
                    console.log('morreu')
                    }
                    movimento=false
                    if(pontos>pontuacaoMaxima){
                        pontuacaoMaxima=pontos
                        atualizaPontuacao(pontos)
                    }
                    pontos=0
                    
            }


            function gerarMaca(novaMaca){
                if(novaMaca==true){
                ax=Math.floor(Math.random()*qp)
                ay=Math.floor(Math.random()*qp)
                ctx.fillRect(ax*tp, ay*tp, tp,tp);
                
                }
                let liberado = false
                while(liberado==false){
                    for(var i = 0; i<trail.length;i++){
                        if(ax==trail[i].x && ay==trail[i].y){
                            gerarMaca(true)
                        }
                    }
                    liberado=true
                }

                novaMaca=false
                

            }
 
        }

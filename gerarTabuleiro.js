let tabuleiro = []

document.write('<table id="tabuleiro">')
for(var i=0;i<25;i++){

document.write('<tr>')
    
    for(var j=0;j<25;j++){
        tabuleiro.push([i,j])
        document.write('<td ><a class="pecaTabuleiro"></a></td>')
    }

document.write('</tr>')

}

document.write('</table>')


console.table(tabuleiro)
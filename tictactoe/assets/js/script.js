index = 0
scoreX = 0
scoreO = 0

function game() {
    document.turn = "X"
    display(document.turn+" , c'est à toi de jouer.")
    displayScore(scoreX, scoreO)
}
game()
function XO(elem) {
    if (checkCell(elem)){
        elem.innerText=document.turn
        nextTurn()
        index = index +1
        display(document.turn +" , c'est à toi de jouer.")
        checkWinner()
    }
}
function checkCell(elem) {
    if (elem.innerText==''){
        return 1
    }
    else{
        alert("Forbidden move")
    }
}
function nextTurn() {
    if (document.turn=="X"){
        document.turn="O"
    }
    else
    {
        document.turn="X"
    }
}
function display(elem) {
    document.getElementById("message").innerText=elem
}
function displayScore(scoreX, scoreO) {
    document.getElementById("score").innerText="Score X : " + scoreX + ", Score O : " + scoreO
}
function clearCell(number) {
    document.getElementById(number).innerText=''
}
function clearAll() {
    for (var i = 1; i<10; i++){
        clearCell(i)
    }
    index = 0
    display("Nouvelle partie, " + document.turn + ", c'est à toi de jouer.")
}
function getCell(number) {
    return document.getElementById(number).innerText
}
function checkWinner() {
    if (getCell(1) == getCell(2) && getCell(2) == getCell(3) && getCell(3) != '' ||
        getCell(4) == getCell(5) && getCell(5) == getCell(6) && getCell(6) !='' ||
        getCell(7)== getCell(8) && getCell(8)==getCell(9) && getCell(9)!=''||
        getCell(1)== getCell(4) && getCell(4)==getCell(7) && getCell(7)!=''||
        getCell(2)== getCell(5) && getCell(5)==getCell(8) && getCell(8)!=''||
        getCell(3)== getCell(6) && getCell(6)==getCell(9) && getCell(9)!=''||
        getCell(1)== getCell(5) && getCell(5)==getCell(9) && getCell(9)!=''||
        getCell(3)== getCell(5) && getCell(5)==getCell(7) && getCell(7)!=''){
        
        if (document.turn=="O"){
            display(" X a gagné ! ")
            scoreX = scoreX+1
            displayScore(scoreX, scoreO)
        }
        else{
            display(" O a gagné ! ")
            scoreO = scoreO + 1
            displayScore(scoreX, scoreO)
        }
    }
    else if (index == 9){
        display("Partie nul, rejoué !")
    }
}
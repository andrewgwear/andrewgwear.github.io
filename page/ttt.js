let choice = '';
let npc = '';
let squares = 1;
let win = 0;
let won = 0;
let comp = (Math.floor(Math.random()*9) + 1);
let loss = 0;
let vic = 0;
let tie = 0;
function start() {
    
    document.getElementById("wrap").style.display = 'none';
    const ans = prompt ('Rock, paper, scissors... Shoot!').toLowerCase();
    let xOrO = Math.floor(Math.random()*3) + 1;
    let con = '';
    if (xOrO == 1) {
        if (ans == 'paper') {
            alert('You win!');
            con = 'win';
            }
        else if (ans == 'scissors') {
            alert('I win! I`m Xs');
            con = 'lose';
            }
        else if (ans == 'rock') {
            alert('Again!');
            con = 'draw';
            }
        else if (ans == 'spock') {
            alert('Spock never loses.');
            con = 'win';
            }
        else {
            alert('That`s not how you play this game.');
        }
    }
    else if (xOrO == 2) {
        if (ans == 'rock'){
            alert('You win!');
            con = 'win';
            }
        else if (ans == 'scissors') {
            alert('I win! I`m Xs');
            con = 'lose';
            }
        else if (ans == 'paper') {
            alert('Again!');
            con = 'draw';
        }
        else if (ans == 'spock') {
            alert('Spock never loses.');
            con = 'win';
        }
        else {
            alert('That`s not how you play this game.');
        }
    }
    else {
        if (ans == 'rock') {
            alert('You win!');
            con = 'win';
        }
        else if (ans == 'paper') {
            alert('I win! I`m Xs');
            con = 'lose';
        }
        else if (ans == 'scissors') {
            alert('Again!');
            con = 'draw';
        }
        else if (ans == 'spock') {
            alert('Spock never loses.');
            con = 'win';
        }
        else {
            alert('That`s not how you play this game.');
        }
    }
    if (con == 'win') {
        choice = prompt('Xs or Os?').toUpperCase();
            if (choice !== 'O' && choice !== 'X') {
                alert('That`s not a proper choice. You are O.');
                choice = 'O';
                npc = 'X';
                document.getElementById('5').append(npc);
                squares += 1;
            }
            else if (choice == 'X'){
                alert('You are ' + choice +'.');
                npc = 'O';
            }
            else {
                alert('You are '+ choice + '.');
                npc = 'X';
                document.getElementById('5').append(npc);
                squares += 1;
            }   
        }
    else if (con == 'lose') {
        choice = 'O';
        alert('You are '+ choice + '.');
        npc = 'X';
        document.getElementById('5').append(npc);
        squares += 1;
    }
    else if (con == 'draw') {
        start();
    }
    else {
        alert ('Start again');
        document.getElementById("wrap").style.display = 'block';
    }     
}

function react (x) {
    if (document.getElementById(x).textContent.length === 0) {
    document.getElementById(x).append(choice);
    wait(1000);
    squares += 1;
    checkWin();
    same(x);
    }
    else if (squares === 10) {
        same();
    }
    else {
        alert('Nope!');
    }
}

function checkWin() {
    t = [];
    for (i=1; i<10; i++) {
        t.push(document.getElementById(i).textContent);
    }
    switch (true) {
        case (t[0] == choice && t[1] == choice && t[2] == choice && t[0].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[0] == npc && t[1] == npc && t[2] == npc && t[0].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[3] == choice && t[4] == choice && t[5] == choice && t[3].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[3] == npc && t[4] == npc && t[5] == npc && t[3].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[6] == choice && t[7] == choice && t[8] == choice && t[6].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[6] == npc && t[7] == npc && t[8] == npc && t[6].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[0] == choice && t[3] == choice && t[6] == choice && t[0].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[0] == npc && t[3] == npc && t[6] == npc && t[0].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[4] == choice && t[1] == choice && t[7] == choice && t[1].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[4] == npc && t[1] == npc && t[7] == npc && t[1].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[5] == choice && t[8] == choice && t[2] == choice && t[2].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[5] == npc && t[8] == npc && t[2] == npc && t[2].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[0] == choice && t[4] == choice && t[8] == choice && t[0].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[0] == npc && t[4] == npc && t[8] == npc && t[0].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (t[6] == choice && t[4] == choice && t[2] == choice && t[2].length==1):
            alert('You win!');
            win += 1;
            break;
        case (t[6] == npc && t[4] == npc && t[2] == npc && t[2].length==1):
            alert('I win!');
            won += 1;
            clear();
            break;
        case (true):
            break;
    }   

}

function clear () {
    for (i=1; i<10; i++) {
        document.getElementById(i).innerHTML ='';
    }
    npc = '';
    choice = '';
    start();
}


function same(x) {
    if (won === 1) {
        clear();
        won -= 1;
        squares = 1;
        vic += 1;
        document.getElementById('sbg2').innerHTML = (vic);
        alert(vic);
    }
    else if (win === 1) {
        clear();
        win -= 1;
        squares = 1;
        loss += 1;
        document.getElementById('sbg1').innerHTML = (loss);
        alert (loss);
    }
    else if (squares === 10) {
        alert('Noone wins.');
        tie +=1;
        document.getElementById('sbg3').innerHTML = (tie);
        clear();
        squares = 1;
    }
    else if (document.getElementById(comp).textContent.length === 0) {
        document.getElementById(comp).append(npc);
        squares += 1;
    }
    else if (squares < 10){
        comp = Math.floor(Math.random()*9) + 1;
        same(x);
    }
    else {
        alert('Hmm');
    }
}

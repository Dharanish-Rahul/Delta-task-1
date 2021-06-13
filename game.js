function randomc(){
    let color = [ '#FFFFFF', '#FF0000', '#00FF00', '#FFFF00', '#0000FF', '#FFA500'];
    // console.log(color[1])
    let block_clr = color[Math.floor(Math.random()*6)];
    return block_clr;

}

let cube = document.getElementsByClassName('cube');
let pcube = document.getElementsByClassName('pcube');

function shuffle(){
    for(i=0;i<24;i++){
        let j=Math.floor(Math.random()*(24-i));
        [Boxes[i],Boxes[j]]=[Boxes[j],Boxes[i]];

    }
    console.log(Boxes);


}

function assignc(){
    a=24;
    pcube[24].style.backgroundColor= '#000000';
    shuffle();
    for( i=0;i<9;i++){
        cube[i].style.backgroundColor=randomc();
        // pcube[Math.random()*24].style.backgroundColor=cube[i].style.backgroundColor;
        pcube[Boxes[i]].style.backgroundColor = cube[i].style.backgroundColor;
    }
    for(i=9;i<24;i++){
        pcube[Boxes[i]].style.backgroundColor=randomc();
    }
    score.innerHTML="score: 0";
    document.querySelector('.bg-popup').style.display='none';
}
Boxes=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];

let a=24,b;
let sc=0;

function check(b){
    if(b==a+1 || b == a+5 || b==a-1 || b==a-5){
       if(a==4 || a==9 || a==14 || a==19){
           if ( b == a+5 || b==a-1 || b==a-5)
           swapc(b);
          
           
       }
        else if(a==5 || a==10 || a==15 || a==20){
            if ( b == a+5 || b==a+1 || b==a-5)
            swapc(b);
           
            
        }
        else
        swapc(b);
       
        
    }   
}


function disp(){
    document.querySelector('.bg-popup').style.display='flex';
    scoreboard.innerHTML="score: " +sc;
    let win = document.getElementById('win');
    win.play();
}

function check_sol(){
    if (cube[0].style.backgroundColor==pcube[6].style.backgroundColor &&cube[1].style.backgroundColor==pcube[7].style.backgroundColor &&cube[2].style.backgroundColor==pcube[8].style.backgroundColor &&cube[3].style.backgroundColor==pcube[11].style.backgroundColor &&cube[4].style.backgroundColor==pcube[12].style.backgroundColor &&cube[5].style.backgroundColor==pcube[13].style.backgroundColor &&cube[6].style.backgroundColor==pcube[16].style.backgroundColor &&cube[7].style.backgroundColor==pcube[17].style.backgroundColor &&cube[8].style.backgroundColor==pcube[18].style.backgroundColor ){
        // console.log( 'YOu WIn');
        disp();
    }
}
function disp_close(){
    document.querySelector('.bg-popup').style.display='none';
}



function swapc(b){

    [pcube[a].style.backgroundColor,pcube[b].style.backgroundColor]=[pcube[b].style.backgroundColor,pcube[a].style.backgroundColor];
    a=b;
    check_sol();
    sc++;
        score.innerHTML="score: "+sc;
    
        let audio = document.getElementById('audio');
    audio.play(); 

}

// function timer(){
//     const minutes_start: 5;
//     let time = minutes_start*60;
//     const CountdownEl = document.getElementById('countdown');

//     setInterval (updatecountdown,1000)

//     function updatecountdown(){
//         const minutes = Math.floor(time / 60);
//         let seconds = time%60;

//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         CountdownEl.innerHTML = '${minutes}:${seconds}';
//         time--;
//     }
// }


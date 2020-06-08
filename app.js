const hexnumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexbtn = document.querySelector('.hexbtn');
const body = document.querySelector("body");
const hex = document.querySelector('.hex');


hexbtn.addEventListener('click',getHex);

function getHex(){
    let hexcol = "#";
    for(i=0;i<6;i++){
        let random = Math.floor(Math.random()*hexnumber.length);
        hexcol += hexnumber[random];

    }
    body.style.backgroundColor = hexcol;
    hex.innerHTML = hexcol;


}
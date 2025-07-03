let button=document.getElementById('button')
let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let result=document.getElementById('result')
let random=['⚀','⚁','⚂','⚃','⚄','⚅']

function randomVal() {
  return Math.floor(Math.random() * 6)+1;
}
button.onclick=function(){
    let p1=randomVal()
    let p2=randomVal()
    // let p3=randomVal()
    
    one.innerText = random[p1 -1];
two.innerText = random[p2-1];

    // three.innerText=p3;

    if (p1 > p2) {
    result.innerText = "🏆 Player 1 wins!";
  } else if (p2 > p1) {
    result.innerText = "🏆 Player 2 wins!";
  } else {
    result.innerText = "🤝 It's a draw!";
  }
}
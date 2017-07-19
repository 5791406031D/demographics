var p = document.getElementById('test');

function changeColor(){
  p.className = 'trump';
}

p.addEventListener('click', changeColor, false);

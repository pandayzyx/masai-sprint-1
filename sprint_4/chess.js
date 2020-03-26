var img = document.getElementsByTagName('img')
for(i=0;i<img.length; i++){
   img[i].addEventListener('click',move)
}


var divs = document.getElementsByClassName('count')
for(j=0; j<divs.length; j++){
    divs[j].addEventListener('click',crack)
}
//console.log(divs)

function move(){
var y =  event.target
console.log(y)
event.target.parentNode.style.backgroundColor ="blue"
  

}

// fucntio
function crack(){
    var z = move()

  //event.currentTarget
}
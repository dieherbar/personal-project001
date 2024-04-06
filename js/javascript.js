function alerta(){
    alert("hola");
};

function scrolear(){
    window.scroll({
        // top:0, funciona sin este parametro
        top:document.body.scrollHeight,
        behavior:"smooth"
    });
};
    
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
  newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  const array = document.getElementById("entrada01").value;
  const numero = document.getElementById("entrada02").value;
  document.getElementById("resultado").innerHTML= copyMachine(["a","b","c"], 5);
  console.log((array, numero));
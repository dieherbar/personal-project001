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
  document.getElementById("resultado").innerHTML("hola"); //.copyMachine([true, false, true], 2);
  console.log(copyMachine([true, false, true], 2));
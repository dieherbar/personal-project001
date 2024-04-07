function alertTest() {
    alert("hola");
};

function scrollDown() {
    window.scroll({
        // top:0, funciona sin este parametro
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

let mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
document.getElementById("resultado").innerHTML = copyMachine(["a", "b", "c"], 5);
console.log((array, numero));
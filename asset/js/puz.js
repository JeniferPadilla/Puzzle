
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

let botA1 = document.getElementById("btnA1");
let botB2 = document.getElementById("btnB2");
let botC3 = document.getElementById("btnC3");
let botD4 = document.getElementById("btnD4");
let botE5 = document.getElementById("btnE5");
let botF6 = document.getElementById("btnF6");
let botG7 = document.getElementById("btnG7");
let botH8 = document.getElementById("btnH8");
let botI9 = document.getElementById("btnI9");
let botJ0 = document.getElementById("btnJ0");
// FUNCIONES
const funA1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
      numeros.innerHTML = "1";
    }
  }
};
const funB2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1") {
      numeros.innerHTML += "2";
    } else {
      alert("Por favor ingrese las letras y numeros en orden");
    }
  }
};
const funC3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12") {
      numeros.innerHTML += "3";
    } else {
      alert("Por favor ingrese las letras en orden ");
    }
  }
};
const funD4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123") {
      numeros.innerHTML += "4";
    } else {
      alert("Por favor ingrese las letras y numeros en orden ");
    }
  }
};
const funE5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234") {
      numeros.innerHTML += "5";
    } else {
      alert("Por favor ingrese las letras y numeros en orden ");
    }
  }
};
const funF6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345") {
      numeros.innerHTML += "6";
    } else {
      alert("Por favor ingrese las letras y numeros en orden");
    }
  }
};
const funG7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456") {
      numeros.innerHTML += "7";
    } else {
      alert("Por favor ingrese las letras y numeros en orden ");
    }
  }
};
const funH8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234567") {
      numeros.innerHTML += "8";
    } else {
      alert("Por favor ingrese las letras y numeros en orden");
    }
  }
};
const funI9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345678") {
      numeros.innerHTML += "9";
    } else {
      alert("Por favor ingrese las letras y numeros en orden ");
    }
  }
};
const funJ0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456789") {
      numeros.innerHTML += "0";
    } else {
      alert("Por favor ingrese las letras y numeros en orden ");
    }
  }
};
// BOTONES
botA1.onclick = () => {
  funA1();
};
botB2.onclick = () => {
  funB2();
};
botC3.onclick = () => {
  funC3();
};
botD4.onclick = () => {
  funD4();
};
botE5.onclick = () => {
  funE5();
};
botF6.onclick = () => {
  funF6();
};
botG7.onclick = () => {
  funG7();
};
botH8.onclick = () => {
  funH8();
};
botI9.onclick = () => {
  funI9();
};
botJ0.onclick = () => {
  funJ0();
};

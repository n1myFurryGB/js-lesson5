
/* Доска */

function generCH() {
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    var figures_black = ['&#9821', '&#9822', '&#9820', '&#9819', '&#9818', '&#9820', '&#9822', '&#9821'];
    var figures_second_black = ['&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823'];
    var figures_white = ['&#9815', '&#9816', '&#9814', '&#9813', '&#9812', '&#9814', '&#9816', '&#9815;'];
    var figures_second_white = ['&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817'];
    var num1 = 8;
    var num2 = 8;
    var field = document.getElementById("doska");

    for (var i = 0; i < 10; i++ ) {
        if ( i == 0 ) {
            for (var z = 0; z < 10; z++) {
                var eldiv = document.createElement("div");
                eldiv.className = "default_rotate";
                eldiv.innerText = letters[z];
                field.appendChild(eldiv);
            }
        }
        else if (  i == 9 ) {
            for (var z = 0; z < 10; z++) {
                var eldiv = document.createElement("div");
                eldiv.className = "default";
                eldiv.innerText = letters[z];
                field.appendChild(eldiv);
            }
        }
        else if ( i % 2 == 0 ) {
            for (var c = 0; c < 10; c++) {
                if ( c == 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "default";
                    eldiv.innerText = num1--;
                    field.appendChild(eldiv);
                }
                else if ( c == 9 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "default_rotate";
                    eldiv.innerText = num2--;
                    field.appendChild(eldiv);
                }
                else if ( c % 2 == 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "chet";
                    if ( i == 2 ) {
                        eldiv.innerHTML = figures_second_black[c - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 8 ) {
                        eldiv.innerHTML = figures_white[c - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
                else if ( c % 2 != 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "nechet";
                    if ( i == 2 ) {
                        eldiv.innerHTML = figures_second_black[c - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 8 ) {
                        eldiv.innerHTML = figures_white[c - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
            }
        }
        else if ( i % 2 != 0 ) {
            for (var n = 0; n < 10; n++) {
                if ( n == 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "default";
                    eldiv.innerText = num1--;
                    field.appendChild(eldiv);
                }
                else if ( n == 9 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "default_rotate";
                    eldiv.innerText = num2--;
                    field.appendChild(eldiv);
                }
                else if ( n % 2 == 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "nechet";
                    if ( i == 1 ) {
                        eldiv.innerHTML = figures_black[n - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 7 ) {
                        eldiv.innerHTML = figures_second_white[n - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
                else if ( n % 2 != 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "chet";
                    if ( i == 1 ) {
                        eldiv.innerHTML = figures_black[n - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 7 ) {
                        eldiv.innerHTML = figures_second_white[n - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
            }
        }
    }
}


/* Доска */

function generCH() {
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    var figures_first = ['С', 'К', 'Л', 'Ф', 'Кр', 'Л', "К", "С"];
    var figures_second = ['п', 'п', 'п', 'п', 'п', 'п', 'п', 'п'];
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
                        eldiv.innerText = figures_second[c - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 8 ) {
                        eldiv.innerText = figures_first[c - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
                else if ( c % 2 != 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "nechet";
                    if ( i == 2 ) {
                        eldiv.innerText = figures_second[c - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 8 ) {
                        eldiv.innerText = figures_first[c - 1];
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
                        eldiv.innerText = figures_first[n - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 7 ) {
                        eldiv.innerText = figures_second[n - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
                else if ( n % 2 != 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "chet";
                    if ( i == 1 ) {
                        eldiv.innerText = figures_first[n - 1];
                        eldiv.classList += " black";
                    }
                    else if ( i == 7 ) {
                        eldiv.innerText = figures_second[n - 1];
                        eldiv.classList += " white";
                    }
                    field.appendChild(eldiv);
                }
            }
        }
    }
}

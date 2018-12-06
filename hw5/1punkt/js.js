
/* Доска */

function generCH() {
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
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
                    field.appendChild(eldiv);
                }
                else if ( c % 2 != 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "nechet";
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
                    field.appendChild(eldiv);
                }
                else if ( n % 2 != 0 ) {
                    var eldiv = document.createElement("div");
                    eldiv.className = "chet";
                    field.appendChild(eldiv);
                }
            }
        }
    }
}

var checkbox = document.getElementById("checkbox");
var radio = document.getElementById("radio");
var label_chk = checkbox.getElementsByTagName("label");
var label_rad = radio.getElementsByTagName("label");
var chk = checkbox.getElementsByTagName("input");
var rad = radio.getElementsByTagName("input");
//改变checkbox的class
for (var i = 0; i < label_chk.length; i++) {
    (function(i) {
        label_chk[i].onclick = function() {
            if (chk[i].checked) {
                this.className = "label_checkbox";
            } else {
                this.className = "label_checkbox_checked";
            }
        };
    }(i));
}
//改变radio的class
for (var i = 0; i < label_rad.length; i++) {
    (function(i) {
        label_rad[i].onclick = function() {
            if (rad[i].checked === false) {
            	console.log(i);
                this.className = "label_radio_checked";
                for (j = 0; j < label_rad.length; j++) {
                    if (j !== i) {
                    	console.log(j);
                        label_rad[j].className = "label_radio";
                    }
                }
            }
        };
    }(i));
}

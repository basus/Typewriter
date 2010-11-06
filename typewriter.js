
var insert = function(event) {
    var key ;
    var code = event.charCode;
    var paper = document.getElementById('paper');
    
    var alphanumeric = ((code >= 65 && code <= 90) 
                        || (code >= 97 && code <= 122)
        || (code >= 48 && code <= 57)
        || (code == 32));
    
    if (alphanumeric) {
        key = String.fromCharCode(event.charCode);
        
        if (event.shiftKey) {
            key = key.toUpperCase();
        } else {
            key = key.toLowerCase();
        }
        
        if (paper.cursor == paper.innerHTML.length){
            paper.innerHTML += key;
        } else {
            paper.innerHTML = paper.innerHTML.substring(0, paper.cursor)
                + key
                + paper.innerHTML.substring(paper.cursor,paper.textLength);
        }
        paper.cursor += 1;
        
        
    }
    
    for(var i=0;i<keys.length;i++) {
        var each = keys[i];
        if (each.innerHTML[0] == key) {
            each.className += "pressed";
            pressed.push(each);
            setTimeout('unpress()',200);
            break;
            }
    }
    
    if (code == 8 || code == 37) {
        paper.cursor -= 1;
    }
    return false;
};

var keys = {};
var pressed = [];

var unpress = function() {
    for (var i=0; i<pressed.length;i++) {
        pressed[i].className = null;
    }
};

var clear = function() {
    var paper = document.getElementById('paper');
    paper.innerHTML = "";
    paper.cursor = 0;
    keys = document.getElementsByTagName("li");
};
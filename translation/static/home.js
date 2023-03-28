var status = "T";
function languages2(){
    if(status==="T"){
        var ls = document.getElementById("langtotrans");
        document.getElementById("transedt").style.display="none";
        ls.style.display="inline";
        ls.style.height="auto";
        ls.style.transition=".4s";
        status = "F";
    }else{
        var ls = document.getElementById("langtotrans");
        document.getElementById("transedt").style.display="inline";
        ls.style.display="none";
        ls.style.height="auto";
        ls.style.transition=".4s";
        status="T";
    }
}
function a(){document.getElementById("lng").value="fa";};
function b(){document.getElementById("lng").value="it";};
function c(){document.getElementById("lng").value="ar";};
function d(){document.getElementById("lng").value="es";};
function e(){document.getElementById("lng").value="fr";};
function f(){document.getElementById("lng").value="chi";};
function g(){document.getElementById("lng").value="ja";};
function h(){document.getElementById("lng").value="en";};

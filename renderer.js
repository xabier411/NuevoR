$VariableSuma = 0;
$Segundos = 0;
document.getElementById("B1").addEventListener("click", Sumar);
document.getElementById("B1").addEventListener("mouseover", ColorB1);
document.getElementById("B1").addEventListener("mouseout", Color2B1);

document.getElementById("B2").addEventListener("click", Restar);
document.getElementById("B2").addEventListener("mouseover", ColorB2);
document.getElementById("B2").addEventListener("mouseout", Color2B2);

document.getElementById("B3").addEventListener("click", EmpezarTiempo);
/*document.getElementById("B3").addEventListener("focus", ColorB3);
document.getElementById("B3").addEventListener("blur", ColorB3);*/

function Sumar() {
    $VariableSuma++;
    document.getElementById("numero").innerHTML = $VariableSuma;
}
function ColorB1() {
    document.getElementById("B1").style.background = "blue";
    document.getElementById("B1").style.color = "white";
}
function Color2B1() {
    document.getElementById("B1").style.background = "red";
    document.getElementById("B1").style.color = "black";
}

function Restar() {
    $VariableSuma--;
    if ($VariableSuma <= 0)
        $VariableSuma = 0;
    document.getElementById("numero").innerHTML = $VariableSuma;
}
function ColorB2() {
    document.getElementById("B2").style.background = "blue";
    document.getElementById("B2").style.color = "white";
}
function Color2B2() {
    document.getElementById("B2").style.background = "red";
    document.getElementById("B2").style.color = "black";
}

function EmpezarTiempo() {
    for (var i = 1; i > 0; i++)
        $Tiempo += 1;
    document.getElementById("tiempo").innerHTML = $Tiempo;
}


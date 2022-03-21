let groesse
let gewicht
let BMI

function berechnen() {
    groesse=0
    gewicht=0
    BMI=0

   groesse=document.getElementById("Größe").value
   gewicht=document.getElementById("Gewicht").value
    console.log(groesse)
    console.log(gewicht)

    BMI=gewicht/(groesse*groesse)
    console.log(BMI)

    document.getElementById("anzeige").innerHTML="Das ist dein BMI:"
    document.getElementById("ergebnis").innerHTML=BMI

    if (groesse<0){
        document.getElementById("anzeige").innerHTML="Bitte Überprüfe die Eingabe";
        document.getElementById("ergebnis").innerHTML=""
    }

    if (isNaN(BMI)){
        document.getElementById("anzeige").innerHTML="Mindestens einer der Werte ist keine Zahl. Bitte geben sie eine Zahl ein ;)";
        document.getElementById("ergebnis").innerHTML=""
    }

}
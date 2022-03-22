let groesse
let gewicht
let alter
let BMI

function berechnen() {
    groesse=0
    gewicht=0
    BMI=0

    //Werte werden aufgerufen

   alter=document.getElementById("Alter").value
   groesse=document.getElementById("Größe").value
   gewicht=document.getElementById("Gewicht").value
    console.log(alter)
    console.log(groesse)
    console.log(gewicht)

    //Rechnung

    BMI=gewicht/(groesse*groesse)
    console.log(BMI)

    //Anzeigen des BMIs

    document.getElementById("anzeige").innerHTML="Das ist dein BMI:"
    document.getElementById("ergebnis").innerHTML=BMI

    //Auswerung und Färbung des Ergebnisses unter Betrachtung des Alters

    if (alter<24){
        if (BMI < 17) {
            document.getElementById("auswertung").innerHTML = "Sie sind stark untergewichtig";
            document.getElementById("auswertung").style.color = "red"
        } else {
            if (BMI < 19) {
                document.getElementById("auswertung").innerHTML = "Sie sind untergewichtig.";
                document.getElementById("auswertung").style.color = "orange"
            } else {
                if (BMI < 24) {
                    document.getElementById("auswertung").innerHTML = "Sie sind normalgewichtig";
                    document.getElementById("auswertung").style.color = "green"
                } else {
                    if (BMI < 29) {
                        document.getElementById("auswertung").innerHTML = "Sie sind übergewichtig";
                        document.getElementById("auswertung").style.color = "orange"
                    } else {
                        if (BMI < 34) {
                            document.getElementById("auswertung").innerHTML = "Sie sind stark übergewichtig und könnten Adipositas Grad 1 haben.";
                            document.getElementById("auswertung").style.color = "red"
                        } else {
                            if (BMI < 39) {
                                document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 2 haben.";
                                document.getElementById("auswertung").style.color = "red"
                            } else {
                                document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 3 haben.";
                                document.getElementById("auswertung").style.color = "red"
                            }
                        }
                    }
                }
            }
        }
    }else {
        if (alter<34){
            if (BMI < 18) {
                document.getElementById("auswertung").innerHTML = "Sie sind stark untergewichtig";
                document.getElementById("auswertung").style.color = "red"
            } else {
                if (BMI < 20) {
                    document.getElementById("auswertung").innerHTML = "Sie sind untergewichtig.";
                    document.getElementById("auswertung").style.color = "orange"
                } else {
                    if (BMI < 25) {
                        document.getElementById("auswertung").innerHTML = "Sie sind normalgewichtig";
                        document.getElementById("auswertung").style.color = "green"
                    } else {
                        if (BMI < 30) {
                            document.getElementById("auswertung").innerHTML = "Sie sind übergewichtig";
                            document.getElementById("auswertung").style.color = "orange"
                        } else {
                            if (BMI < 35) {
                                document.getElementById("auswertung").innerHTML = "Sie sind stark übergewichtig und könnten Adipositas Grad 1 haben.";
                                document.getElementById("auswertung").style.color = "red"
                            } else {
                                if (BMI < 40) {
                                    document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 2 haben.";
                                    document.getElementById("auswertung").style.color = "red"
                                } else {
                                    document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 3 haben.";
                                    document.getElementById("auswertung").style.color = "red"
                                }
                            }
                        }
                    }
                }
            }
        }else {
            if (alter<44){
                if (BMI < 19) {
                    document.getElementById("auswertung").innerHTML = "Sie sind stark untergewichtig";
                    document.getElementById("auswertung").style.color = "red"
                } else {
                    if (BMI < 20) {
                        document.getElementById("auswertung").innerHTML = "Sie sind untergewichtig.";
                        document.getElementById("auswertung").style.color = "orange"
                    } else {
                        if (BMI < 26) {
                            document.getElementById("auswertung").innerHTML = "Sie sind normalgewichtig";
                            document.getElementById("auswertung").style.color = "green"
                        } else {
                            if (BMI < 31) {
                                document.getElementById("auswertung").innerHTML = "Sie sind übergewichtig";
                                document.getElementById("auswertung").style.color = "orange"
                            } else {
                                if (BMI < 36) {
                                    document.getElementById("auswertung").innerHTML = "Sie sind stark übergewichtig und könnten Adipositas Grad 1 haben.";
                                    document.getElementById("auswertung").style.color = "red"
                                } else {
                                    if (BMI < 41) {
                                        document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 2 haben.";
                                        document.getElementById("auswertung").style.color = "red"
                                    } else {
                                        document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 3 haben.";
                                        document.getElementById("auswertung").style.color = "red"
                                    }
                                }
                            }
                        }
                    }
                }
            }else {
                if (alter<54){
                    if (BMI < 20) {
                        document.getElementById("auswertung").innerHTML = "Sie sind stark untergewichtig";
                        document.getElementById("auswertung").style.color = "red"
                    } else {
                        if (BMI < 21) {
                            document.getElementById("auswertung").innerHTML = "Sie sind untergewichtig.";
                            document.getElementById("auswertung").style.color = "orange"
                        } else {
                            if (BMI < 27) {
                                document.getElementById("auswertung").innerHTML = "Sie sind normalgewichtig";
                                document.getElementById("auswertung").style.color = "green"
                            } else {
                                if (BMI < 32) {
                                    document.getElementById("auswertung").innerHTML = "Sie sind übergewichtig";
                                    document.getElementById("auswertung").style.color = "orange"
                                } else {
                                    if (BMI < 37) {
                                        document.getElementById("auswertung").innerHTML = "Sie sind stark übergewichtig und könnten Adipositas Grad 1 haben.";
                                        document.getElementById("auswertung").style.color = "red"
                                    } else {
                                        if (BMI < 42) {
                                            document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 2 haben.";
                                            document.getElementById("auswertung").style.color = "red"
                                        } else {
                                            document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 3 haben.";
                                            document.getElementById("auswertung").style.color = "red"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else {
                    if (alter<65){
                        if (BMI < 21) {
                            document.getElementById("auswertung").innerHTML = "Sie sind stark untergewichtig";
                            document.getElementById("auswertung").style.color = "red"
                        } else {
                            if (BMI < 22) {
                                document.getElementById("auswertung").innerHTML = "Sie sind untergewichtig.";
                                document.getElementById("auswertung").style.color = "orange"
                            } else {
                                if (BMI < 28) {
                                    document.getElementById("auswertung").innerHTML = "Sie sind normalgewichtig";
                                    document.getElementById("auswertung").style.color = "green"
                                } else {
                                    if (BMI < 33) {
                                        document.getElementById("auswertung").innerHTML = "Sie sind übergewichtig";
                                        document.getElementById("auswertung").style.color = "orange"
                                    } else {
                                        if (BMI < 38) {
                                            document.getElementById("auswertung").innerHTML = "Sie sind stark übergewichtig und könnten Adipositas Grad 1 haben.";
                                            document.getElementById("auswertung").style.color = "red"
                                        } else {
                                            if (BMI < 43) {
                                                document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 2 haben.";
                                                document.getElementById("auswertung").style.color = "red"
                                            } else {
                                                document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 3 haben.";
                                                document.getElementById("auswertung").style.color = "red"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if (BMI < 22) {
                            document.getElementById("auswertung").innerHTML = "Sie sind stark untergewichtig";
                            document.getElementById("auswertung").style.color = "red"
                        } else {
                            if (BMI < 23) {
                                document.getElementById("auswertung").innerHTML = "Sie sind untergewichtig.";
                                document.getElementById("auswertung").style.color = "orange"
                            } else {
                                if (BMI < 29) {
                                    document.getElementById("auswertung").innerHTML = "Sie sind normalgewichtig";
                                    document.getElementById("auswertung").style.color = "green"
                                } else {
                                    if (BMI < 34) {
                                        document.getElementById("auswertung").innerHTML = "Sie sind übergewichtig";
                                        document.getElementById("auswertung").style.color = "orange"
                                    } else {
                                        if (BMI < 39) {
                                            document.getElementById("auswertung").innerHTML = "Sie sind stark übergewichtig und könnten Adipositas Grad 1 haben.";
                                            document.getElementById("auswertung").style.color = "red"
                                        } else {
                                            if (BMI < 44) {
                                                document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 2 haben.";
                                                document.getElementById("auswertung").style.color = "red"
                                            } else {
                                                document.getElementById("auswertung").innerHTML = "Sie könnten Adipositas Grad 3 haben.";
                                                document.getElementById("auswertung").style.color = "red"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //falls eine negative Zahl dabei ist Fehlerangabe

    if (alter<0){
        document.getElementById("anzeige").innerHTML="Bitte Überprüfe die Eingabe. Ein Wert ist negativ";
        document.getElementById("ergebnis").innerHTML=""
        document.getElementById("auswertung").innerHTML=""
    }

    if (groesse<0){
        document.getElementById("anzeige").innerHTML="Bitte Überprüfe die Eingabe. Ein Wert ist negativ";
        document.getElementById("ergebnis").innerHTML=""
        document.getElementById("auswertung").innerHTML=""
    }

    if (gewicht<0){
        document.getElementById("anzeige").innerHTML="Bitte Überprüfe die Eingabe. Ein Wert ist negativ";
        document.getElementById("ergebnis").innerHTML=""
        document.getElementById("auswertung").innerHTML=""
    }
    //falls ein Buchstabe dabei ist Fehlerangabe

    if (isNaN(BMI)){
        document.getElementById("anzeige").innerHTML="Mindestens einer der Werte ist keine Zahl. Bitte überprüfe die Eingabe.";
        document.getElementById("ergebnis").innerHTML=""
        document.getElementById("auswertung").innerHTML=""
    }

    //Prüfung des Alters und Hinweis, falls es auffällig ist --> Werte werden dennoch angezeigt

    if (alter<16){
        document.getElementById("altershinweis").innerHTML="Es ist nicht zu empfehlen sich bei diesem Alter nach dem BMI zu richten. "
    }

    if (alter>119){
        document.getElementById("altershinweis").innerHTML="Entweder Sie sind der älteste Mensch der Welt oder die Angabe stimmt nicht. "
    }

    //Prüfung, ob die Werte realistisch sind --> Werte werden dennoch angezeigt, falls es wirklich stimmt
    if (groesse<0.546||groesse>2.51){
        document.getElementById("realistisch").innerHTML="Bitte überprüfe die Eingabe die Größe ist nicht realistisch."
    }

    if (gewicht<4.5||gewicht>595){
        document.getElementById("realistisch2").innerHTML="BItte überprüfe die Eingabe kein ausgewachsener Mensch hat je so ein Gewicht gehabt."
    }

}
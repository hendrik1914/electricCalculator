function power () {
    var n1 = document.getElementById ("nilai1").value
    var n2 = document.getElementById ("nilai2").value
    var hasil = Math.round(parseFloat(n1) * parseFloat (n2));

    if (!isNaN(hasil)) {
        document.getElementById ("nilai3").value = hasil
    }
}

function volt () {
    var n4 = document.getElementById ("nilai4").value
    var n5 = document.getElementById ("nilai5").value
    var result =  Math.round(parseFloat(n4) * parseFloat (n5));
    if (!isNaN(result)) {
        document.getElementById ("nilai6").value = result
    }
}

function ampere () {
    var n7 = document.getElementById ("nilai7").value
    var n8 = document.getElementById ("nilai8").value
    var result = Math.round(parseFloat(n7) / parseFloat (n8));
    if (!isNaN(result)) {
        document.getElementById ("nilai9").value = result
    }
}

function resistance () {
    var n10 = document.getElementById ("nilai10").value
    var n11 = document.getElementById ("nilai11").value
    var result = Math.round (parseFloat(n10) / parseFloat (n11));
    if (!isNaN(result)) {
        document.getElementById ("nilai12").value = result
    }
}



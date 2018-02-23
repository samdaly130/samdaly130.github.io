function doInputOutput() {

    var t = (90 + 66) / 2; 
    var s = 5;
    var result = windChill(t, s);
    
    document.getElementById('outputDiv').innerHTML = Math.round(result);
}

function windChill(tempF, speed) {
    
    var f = 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));
    
    return f;
}


var t = (90 + 66) / 2;
var s = 5;
document.getElementById('windchill').innerHTML = "Windchill:" + (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));

var outputs = document.getElementById('outputs');

function hideAll() {
    chosen_f.style.display = 'none';
    chosen_c.style.display = 'none';
    chosen_k.style.display = 'none';
    outputs.style.display = 'none';
}

var chosen_f = document.getElementById('f_starting');
var chosen_c = document.getElementById('c_starting');


function chosenF() {
    chosen_f.style.display = 'block';
    chosen_c.style.display = 'none';
    chosen_k.style.display = 'none';
    outputs.style.display = 'block';
    

    footerInfo.innerHTML = "Convert From Farenheit";
}

function chosenC() {
    chosen_c.style.display = 'block';
    chosen_f.style.display = 'none';
    chosen_k.style.display = 'none';
    outputs.style.display = 'block';
    
    footerInfo.innerHTML = "Convert From Celcius";
}


var fOutput = document.getElementById('f_output');
var cOutput = document.getElementById('c_output');



function convertNoF() {
    var f_output = f_starting.value;
    var f_output = ((f_starting.value) * 1);

    fOutput.innerHTML = 'Fahrenheit:' + " " + f_output.toFixed(2);
    var c_output = f_starting.value;
    var c_output = (((f_starting.value) - 32 ) / 1.8);

    cOutput.innerHTML = 'Celsius:' + " " + c_output.toFixed(2);
   
}


function convertNoC() {
    var f_output = c_starting.value;
    var f_output = ((c_starting.value) * 1.8 + 32);

    fOutput.innerHTML = 'Fahrenheit:' + " " + f_output.toFixed(2);

    var c_output = c_starting.value;
    var c_output = ((c_starting.value) * 1);

    cOutput.innerHTML = 'Celsius:' + " " + c_output.toFixed(2);
    
}

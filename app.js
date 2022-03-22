
let num1 = document.getElementById('number-el');

function calculate(e=0) {


        num1 = e;


        let meterConversion = num1 * 3.280;
        let feetConversion = num1 * 0.305;
        document.getElementById("s1-1").innerHTML = Math.floor(num1*100)/100;


        // isNaN(num1) ? num1 * 3.280 : 0.00;
        document.getElementById("s1-2").innerHTML = meterConversion.toFixed(2);


        document.getElementById("s1-3").innerHTML = Math.floor(num1*100)/100;
        document.getElementById("s1-4").innerHTML = feetConversion.toFixed(2);


        let litConversion = num1 * 0.264;
        let galConversion = num1 * 3.785;
        document.getElementById("s2-1").innerHTML = Math.floor(num1*100)/100;
        document.getElementById("s2-2").innerHTML = litConversion.toFixed(2);

        document.getElementById("s2-3").innerHTML = Math.floor(num1*100)/100;
        document.getElementById("s2-4").innerHTML = galConversion.toFixed(2);



        let kiloConversion = num1 * 2.205;
        let poundConversion = num1 * 0.454;
        document.getElementById("s3-1").innerHTML = Math.floor(num1*100)/100;
        document.getElementById("s3-2").innerHTML = kiloConversion.toFixed(2);

        document.getElementById("s3-3").innerHTML = Math.floor(num1*100)/100;
        document.getElementById("s3-4").innerHTML = poundConversion.toFixed(2);

};






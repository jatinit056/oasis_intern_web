const cels = document.getElementById("cels");
const fahr = document.getElementById("fahr");
const kelv = document.getElementById("kelv");

const ipts = document.getElementsByClassName("inp");

for (let i = 0; i < ipts.length; i++) {
    let inputs = ipts[i];

    inputs.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        switch (e.target.name) {
            case "cels":
                fahr.value = ((value * 1.8) + 32).toFixed(3);
                kelv.value = (value + 273.15).toFixed(3);
                break;
            case "fahr":
                cels.value = ((value - 32) / 1.8).toFixed(3);
                kelv.value = (((value - 32) / 1.8) + 273.15).toFixed(3);
                break;
            case "kelv":
                cels.value = (value - 273.15).toFixed(3);
                fahr.value = (((value - 273.15) * 1.8) + 32).toFixed(3);
                break;
        }
    });
}
let billAmount = peopleamt = total = 0;
let serviceQuality = "";
document.getElementById("totalTip").style.display = "none"


document.getElementById("calculate").addEventListener('click', function(event) {
    event.preventDefault();

    billAmount = document.getElementById("billamt").value;
    serviceQuality = document.getElementById("serviceQual").value;
    numberOfPeople = document.getElementById("peopleamt").value;

    if (serviceQuality == "" || billAmount == 0) {
        alert("some fields are blank. Please enter the values");
    }
    if (numberOfPeople < 0) {
        numberOfPeople = 1;
    }
    calculateTip()

    function calculateTip() {
        total = ( billAmount * serviceQuality ) / numberOfPeople;
        total = total.toFixed(2);
        console.log(total);
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
    }
});
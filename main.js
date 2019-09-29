// Write your JavaScript here


function handleClickEvent() {

    var amountDue = document.getElementById('amount-due').value;
    var amountDueInCents = Math.floor(Number(amountDue) * 100);
    console.log("amount due = " + amountDue);
    console.log("amount due (cents) = " + amountDueInCents);

    var amountGiven = document.getElementById('amount-received').value;
    var amountGivenInCents = Math.floor(Number(amountGiven) * 100);
    console.log("amount given = " + amountGiven);
    console.log("amount given (cents) = " + amountGivenInCents);

    var changeDueInCents = amountGivenInCents - amountDueInCents;
    console.log("change due (cents) = " + changeDueInCents);
    document.getElementById('change-due-cents').innerText = changeDueInCents;


    var dollarsDue = Math.floor(changeDueInCents / 100)
    console.log("Dollars due: " + dollarsDue);
    changeDueInCents -= (dollarsDue * 100);

    var quartersDue = Math.floor(changeDueInCents / 25)
    console.log("Quarters due: " + quartersDue);
    changeDueInCents -= (quartersDue * 25);

    var dimesDue = Math.floor(changeDueInCents / 10)
    console.log("Dimes due: " + dimesDue);
    changeDueInCents -= (dimesDue * 10);

    var nicklesDue = Math.floor(changeDueInCents / 5)
    console.log("Nickles due: " + nicklesDue);
    changeDueInCents -= (nicklesDue * 5);

    var penniesDue = changeDueInCents;
    console.log("Pennies due: " + penniesDue);


    document.getElementById('dollars-output').innerText = dollarsDue;
    document.getElementById('quarters-output').innerText = quartersDue;
    document.getElementById('dimes-output').innerText = dimesDue;
    document.getElementById('nickels-output').innerText = nicklesDue;
    document.getElementById('pennies-output').innerText = penniesDue;

}



// main() 
$("#calculate-change").click(function() { handleClickEvent(); });

